import notifee, {
  AndroidImportance,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

const CHANNEL_ID = 'lantern-release-reminders';
const NOTIFICATION_PREFIX = 'lantern-release-reminder-';

type LanternReminderText = {
  channelName: string;
  channelDescription: string;
  firstDayTitle: string;
  firstDayBody: string;
  fullMoonTitle: string;
  fullMoonBody: string;
};

type LunarDate = {
  day: number;
  month: number;
  year: number;
};

function jdFromDate(dd: number, mm: number, yy: number) {
  const a = Math.floor((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;

  let jd =
    dd +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;

  if (jd < 2299161) {
    jd =
      dd +
      Math.floor((153 * m + 2) / 5) +
      365 * y +
      Math.floor(y / 4) -
      32083;
  }

  return jd;
}

function getNewMoonDay(k: number, timeZone: number) {
  const t = k / 1236.85;
  const t2 = t * t;
  const t3 = t2 * t;
  const dr = Math.PI / 180;

  let jd1 =
    2415020.75933 +
    29.53058868 * k +
    0.0001178 * t2 -
    0.000000155 * t3;

  jd1 +=
    0.00033 *
    Math.sin((166.56 + 132.87 * t - 0.009173 * t2) * dr);

  const m =
    359.2242 +
    29.10535608 * k -
    0.0000333 * t2 -
    0.00000347 * t3;

  const mpr =
    306.0253 +
    385.81691806 * k +
    0.0107306 * t2 +
    0.00001236 * t3;

  const f =
    21.2964 +
    390.67050646 * k -
    0.0016528 * t2 -
    0.00000239 * t3;

  const c1 =
    (0.1734 - 0.000393 * t) * Math.sin(m * dr) +
    0.0021 * Math.sin(2 * dr * m) -
    0.4068 * Math.sin(mpr * dr) +
    0.0161 * Math.sin(2 * dr * mpr) -
    0.0004 * Math.sin(3 * dr * mpr) +
    0.0104 * Math.sin(2 * dr * f) -
    0.0051 * Math.sin((m + mpr) * dr) -
    0.0074 * Math.sin((m - mpr) * dr) +
    0.0004 * Math.sin((2 * f + m) * dr) -
    0.0004 * Math.sin((2 * f - m) * dr) -
    0.0006 * Math.sin((2 * f + mpr) * dr) +
    0.001 * Math.sin((2 * f - mpr) * dr) +
    0.0005 * Math.sin((2 * mpr + m) * dr);

  let deltaT: number;

  if (t < -11) {
    deltaT =
      0.001 +
      0.000839 * t +
      0.0002261 * t2 -
      0.00000845 * t3 -
      0.000000081 * t * t3;
  } else {
    deltaT =
      -0.000278 +
      0.000265 * t +
      0.000262 * t2;
  }

  const jdNew = jd1 + c1 - deltaT;

  return Math.floor(jdNew + 0.5 + timeZone / 24);
}

function getSunLongitude(jdn: number, timeZone: number) {
  const t = (jdn - 2451545.5 - timeZone / 24) / 36525;
  const t2 = t * t;
  const dr = Math.PI / 180;

  const m =
    357.5291 +
    35999.0503 * t -
    0.0001559 * t2 -
    0.00000048 * t * t2;

  const l0 =
    280.46645 +
    36000.76983 * t +
    0.0003032 * t2;

  const dl =
    (1.9146 - 0.004817 * t - 0.000014 * t2) *
      Math.sin(dr * m) +
    (0.019993 - 0.000101 * t) *
      Math.sin(2 * dr * m) +
    0.00029 * Math.sin(3 * dr * m);

  let l = l0 + dl;
  l = l * dr;
  l = l - Math.PI * 2 * Math.floor(l / (Math.PI * 2));

  return Math.floor((l / Math.PI) * 6);
}

function getLunarMonth11(yy: number, timeZone: number) {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = Math.floor(off / 29.530588853);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitude(nm, timeZone);

  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone);
  }

  return nm;
}

function getLeapMonthOffset(a11: number, timeZone: number) {
  const k = Math.floor(
    (a11 - 2415021.076998695) / 29.530588853 + 0.5,
  );

  let last = 0;
  let i = 1;
  let arc = getSunLongitude(
    getNewMoonDay(k + i, timeZone),
    timeZone,
  );

  do {
    last = arc;
    i += 1;
    arc = getSunLongitude(
      getNewMoonDay(k + i, timeZone),
      timeZone,
    );
  } while (arc !== last && i < 14);

  return i - 1;
}

export function getVietnameseLunarDate(date = new Date()): LunarDate {
  const timeZone = 7;
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();

  const dayNumber = jdFromDate(dd, mm, yy);
  const k = Math.floor(
    (dayNumber - 2415021.076998695) / 29.530588853,
  );

  let monthStart = getNewMoonDay(k + 1, timeZone);

  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone);
  }

  let a11 = getLunarMonth11(yy, timeZone);
  let b11 = a11;
  let lunarYear: number;

  if (a11 >= monthStart) {
    lunarYear = yy;
    a11 = getLunarMonth11(yy - 1, timeZone);
  } else {
    lunarYear = yy + 1;
    b11 = getLunarMonth11(yy + 1, timeZone);
  }

  const lunarDay = dayNumber - monthStart + 1;
  const diff = Math.floor((monthStart - a11) / 29);
  let lunarMonth = diff + 11;

  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone);

    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
    }
  }

  if (lunarMonth > 12) {
    lunarMonth -= 12;
  }

  if (lunarMonth >= 11 && diff < 4) {
    lunarYear -= 1;
  }

  return {
    day: lunarDay,
    month: lunarMonth,
    year: lunarYear,
  };
}

function getNextLanternReminderDates(monthsAhead = 12) {
  const results: {
    date: Date;
    lunarDay: number;
  }[] = [];

  const now = new Date();
  const end = new Date();
  end.setMonth(end.getMonth() + monthsAhead);

  const cursor = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    8,
    0,
    0,
    0,
  );

  while (cursor <= end) {
    const lunar = getVietnameseLunarDate(cursor);

    if (lunar.day === 1 || lunar.day === 15) {
      const notifyDate = new Date(cursor);
      notifyDate.setHours(8, 0, 0, 0);

      if (notifyDate.getTime() > now.getTime()) {
        results.push({
          date: notifyDate,
          lunarDay: lunar.day,
        });
      }
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return results.slice(0, 26);
}

export async function scheduleLanternReleaseReminders(
  text: LanternReminderText,
) {
  const settings = await notifee.requestPermission();

  if (
    settings.authorizationStatus === 0
  ) {
    return;
  }

  const channelId = await notifee.createChannel({
    id: CHANNEL_ID,
    name: text.channelName,
    description: text.channelDescription,
    importance: AndroidImportance.DEFAULT,
  });

  const existing = await notifee.getTriggerNotifications();

  await Promise.all(
    existing
      .filter(item => item.notification.id?.startsWith(NOTIFICATION_PREFIX))
      .map(item =>
        notifee.cancelNotification(item.notification.id || ''),
      ),
  );

  const dates = getNextLanternReminderDates(12);

  await Promise.all(
    dates.map(item => {
      const isFirstDay = item.lunarDay === 1;

      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: item.date.getTime(),
      };

      return notifee.createTriggerNotification(
        {
          id: `${NOTIFICATION_PREFIX}${item.date
            .toISOString()
            .slice(0, 10)}`,
          title: isFirstDay
            ? text.firstDayTitle
            : text.fullMoonTitle,
          body: isFirstDay
            ? text.firstDayBody
            : text.fullMoonBody,
          android: {
            channelId,
            smallIcon: 'ic_launcher',
            pressAction: {
              id: 'default',
            },
          },
          ios: {
            sound: 'default',
          },
        },
        trigger,
      );
    }),
  );
}