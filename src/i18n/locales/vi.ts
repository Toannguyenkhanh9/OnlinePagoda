import bazi from './bazi.vi';
import ziwei from './ziwei.vi';
import practice, {
  practiceAudio,
  practiceMeditation,
} from './practice.vi';
import {
  peaceJournal,
  buddhistCalendar,
  altarCustomization,
} from './spiritualFeatures.vi';
import {
  dataSync,
  pdfExport,
  premiumContent,
  smartFeatures,
} from './spiritualFeatures10_13.vi';
const vi = {
  common: {
    cancel: 'Hủy',
    delete: 'Xóa',
    reset: 'Đặt lại',
    loading: 'Đang tải...',
  },

  tabs: {
    home: 'Trang chủ',
    temple: 'Chính điện',
    meditation: 'Thiền',
    prayer: 'Cầu nguyện',
  },

  home: {
    title: 'iPagoda',

    subtitle:
      'Một không gian yên tĩnh để thiền, cầu nguyện và lắng nghe bản thân.',

    activities: 'Hoạt động',

    templeTitle: 'Chính điện',
    templeSubtitle: 'Thắp nhang và gõ mõ',

    meditationTitle: 'Thiền',
    meditationSubtitle: 'Thiền từ 5 đến 15 phút',

    prayerTitle: 'Cầu nguyện',
    prayerSubtitle: 'Lưu lời nguyện riêng tư',

    audioTitle: 'Âm thanh',
    audioSubtitle: 'Nghe tiếng mõ và chuông chùa',

    settingsTitle: 'Cài đặt',
    settingsSubtitle: 'Ngôn ngữ và thông tin ứng dụng',

    dailyTitle: 'Lời nhắc hôm nay',

    dailyText:
      'Hãy dành một vài phút để hít thở chậm, buông bỏ lo âu và nghĩ về một điều khiến bạn biết ơn.',
    lunarCalendarTitle: 'Lịch âm',
    lunarCalendarSubtitle: 'Xem mùng một và ngày rằm',
    spiritualAudioTitle: 'Kinh và nhạc thiền',

    spiritualAudioSubtitle: 'Nghe bài kinh, nhạc thiền và âm thanh thiên nhiên',
    welcome: 'Bình an mỗi ngày',

    peacefulSpace: 'Không gian tĩnh tâm',

    heroTitle: 'Trở về với sự an yên',

    enterTemple: 'Vào chính điện',

    discover: 'Khám phá',

    footerQuote: 'Tâm tĩnh thì mọi nơi đều là chốn bình an.',
    fortuneStickTitle: 'Xin xăm',

    fortuneStickSubtitle: 'Xin một quẻ để chiêm nghiệm và tĩnh tâm',
    horoscopeTitle: 'Tử vi và ngày tốt',

    horoscopeSubtitle: 'Xem ngày âm, con giáp và ngày phù hợp',
     baziTitle: 'Lá số Bát tự',

  baziSubtitle:
    'Tứ trụ, ngũ hành, đại vận và luận giải',
    baziHistoryTitle:
  'Lá số đã lưu',

baziHistorySubtitle:
  'Xem lại và quản lý các lá số Bát tự',
  baziStage4Title:
  'Dòng vận và tương hợp',

baziStage4Subtitle:
  'Lưu niên, lưu nguyệt, so lá số và chọn ngày',
  },

  temple: {
    title: 'Chính điện',

    description:
      'Giữ tâm thanh tịnh và thực hiện từng hoạt động một cách chậm rãi.',

    motto: 'An nhiên trong từng hơi thở',

    noIncense: 'Chưa có nhang được thắp',

    lightIncense: 'Thắp nhang',

    incenseCount: 'Đã thắp: {{count}} nén nhang',

    woodenFish: 'Gõ mõ',

    woodenFishCount: '{{count}}/108',

    bell: 'Đánh chuông',

    bellCount: '{{count}} lần',

    completedTitle: 'Bạn đã hoàn thành 108 lần',

    completedText: 'Hãy dành một phút để ngồi yên và cảm nhận hơi thở.',

    resetCounter: 'Đặt lại bộ đếm gõ mõ',

    resetDialogTitle: 'Đặt lại bộ đếm',

    resetDialogMessage: 'Bạn muốn đưa số lần gõ mõ về 0?',
    longPressHint: 'Chạm để phát một lần • Nhấn giữ để phát liên tục',

    playingContinuously: 'Đang phát liên tục',

    tapToStop: 'Chạm để tắt',
    lightIncenseShort: 'Thắp nhang',

    incenseShortCount: '{{count}} nén',
    incenseStatsTitle: 'Số nén nhang',
  },

meditation: {
  // Tiêu đề màn hình
  title: 'Thiền',
  screenTitle: 'Thiền',

  // Mô tả màn hình
  subtitle:
    'Ngồi thoải mái, thả lỏng vai và chú ý vào từng hơi thở.',

  breathingTitle: 'Thiền thở',

  chooseDuration: 'Chọn thời gian',

  // Dùng tại các nút chọn 5, 10, 20, 30 phút
  minutes: '{{count}} phút',
  minuteUnit: 'phút',
  heroMinutes: '{{count}} phút',

  start: 'Bắt đầu thiền',
  pause: 'Tạm dừng thiền',
  restart: 'Thiền lại',

  ready: 'Sẵn sàng',
  paused: 'Đã tạm dừng',
  running: 'Đang thiền',

  resetTime: 'Đặt lại thời gian',

  completedTitle: 'Hoàn thành buổi thiền',

  completedMessage:
    'Hãy hít thở chậm và cảm nhận trạng thái của bạn.',

  breathTitle: 'Hướng dẫn thở',

  inhale: 'Hít vào chậm trong 4 giây',

  hold: 'Giữ hơi trong 2 giây',

  exhale: 'Thở ra chậm trong 6 giây',
},
  prayer: {
    title: 'Nhật ký cầu nguyện',

    subtitle:
      'Nội dung được lưu trên thiết bị và không tự động gửi lên máy chủ.',

    placeholder: 'Viết điều bạn đang cầu nguyện hoặc biết ơn...',

    save: 'Lưu lời cầu nguyện',

    savedItems: 'Nội dung đã lưu',

    empty: 'Bạn chưa lưu lời cầu nguyện nào.',

    requiredTitle: 'Chưa có nội dung',

    requiredMessage: 'Hãy nhập lời cầu nguyện của bạn.',

    savedTitle: 'Đã lưu',

    savedMessage: 'Lời cầu nguyện được lưu riêng trên thiết bị.',

    saveErrorTitle: 'Không thể lưu',

    saveErrorMessage: 'Đã xảy ra lỗi khi lưu lời cầu nguyện.',

    deleteDialogTitle: 'Xóa lời cầu nguyện',

    deleteDialogMessage: 'Bạn có chắc muốn xóa nội dung này?',
    writeTitle: 'Viết lời cầu nguyện',

    writeHint: 'Nội dung được lưu riêng tư trên thiết bị của bạn.',

    privateLabel: 'Riêng tư',

    savedCount: '{{count}} nội dung đã lưu',

    emptyTitle: 'Chưa có lời cầu nguyện',

    savedPrivately: 'Được lưu riêng tư',
  },

  audio: {
    title: 'Âm thanh chùa',

    subtitle: 'Nghe thử các âm thanh dùng trong chính điện.',

    woodenFishTitle: 'Tiếng gõ mõ',

    playWoodenFish: 'Phát tiếng gõ mõ',

    bellTitle: 'Tiếng chuông chùa',

    playBell: 'Phát tiếng chuông',

    tapOrHoldHint: 'Chạm để phát một lần • Nhấn giữ để phát liên tục',

    playingContinuously: 'Đang phát liên tục',

    tapToStop: 'Chạm để tắt',
  },
  settings: {
    title: 'Cài đặt',

    notifications: 'Thông báo',

    notificationsDescription:
      'Chức năng nhắc thiền và nhắc ngày rằm sẽ được bổ sung sau.',

    language: 'Ngôn ngữ',

    languageDescription: 'Chọn ngôn ngữ sử dụng trong ứng dụng.',

    chooseLanguage: 'Chọn ngôn ngữ',

    privacy: 'Quyền riêng tư',

    privacyDescription: 'Nhật ký cầu nguyện hiện chỉ được lưu trên thiết bị.',

    information: 'Thông tin',

    version: 'Chùa Online phiên bản 0.0.1',
  },
  lunarCalendar: {
    title: 'Lịch âm',

    subtitle: 'Xem ngày âm, mùng một và ngày rằm.',

    today: 'Hôm nay',

    firstDay: 'Mùng một',

    fullMoon: 'Ngày rằm',

    solarDate: 'Dương lịch',

    lunarDate: 'Âm lịch',

    lunarMonth: 'Tháng {{month}}',

    leapMonth: 'nhuận',

    firstDayTitle: 'Hôm nay là mùng một',

    fullMoonTitle: 'Hôm nay là ngày rằm',

    observanceMessage:
      'Hãy dành một chút thời gian để tĩnh tâm, thiền hoặc tụng kinh.',
  },
  lunarNotifications: {
    channelName: 'Nhắc lịch âm',

    channelDescription: 'Thông báo nhắc ngày mùng một và ngày rằm.',

    settingTitle: 'Nhắc mùng một và ngày rằm',

    settingDescription: 'Nhận thông báo vào ngày mùng một và ngày 15 âm lịch.',

    reminderTime: 'Giờ nhắc',

    settingNote:
      'Ứng dụng sẽ tạo lịch nhắc cho khoảng 12 tháng tiếp theo và tự làm mới khi mở ứng dụng.',

    firstDayTitle: 'Hôm nay là mùng một',

    fullMoonTitle: 'Hôm nay là ngày rằm',

    reminderBody:
      'Hãy dành vài phút để tĩnh tâm, thiền, cầu nguyện hoặc nghe một bài kinh.',

    permissionTitle: 'Thông báo đang bị tắt',

    permissionMessage:
      'Hãy cho phép ứng dụng gửi thông báo trong phần cài đặt của thiết bị.',

    enabledTitle: 'Đã bật nhắc lịch âm',

    enabledMessage: 'Đã tạo {{count}} thông báo, thời gian nhắc lúc {{time}}.',

    errorTitle: 'Không thể tạo thông báo',

    errorMessage: 'Đã xảy ra lỗi khi tạo lịch nhắc mùng một và ngày rằm.',
  },
  spiritualAudio: {
    title: 'Kinh và nhạc thiền',

    subtitle: 'Lắng nghe những âm thanh nhẹ nhàng để thư giãn và tĩnh tâm.',

    searchPlaceholder: 'Tìm bài nghe...',

    playing: 'Đang phát',

    paused: 'Đã tạm dừng',

    empty: 'Không tìm thấy bài nghe phù hợp.',

    categories: {
      sutra: 'Bài kinh',
      meditation: 'Nhạc thiền',
      nature: 'Thiên nhiên',
    },

    tracks: {
      greatCompassion: {
        title: 'Chú Đại Bi',

        description: 'Bản tụng Chú Đại Bi giúp tĩnh tâm và thư giãn.',
      },

      heartSutra: {
        title: 'Bát Nhã Tâm Kinh',

        description: 'Bản tụng Bát Nhã Tâm Kinh nhẹ nhàng và trang nghiêm.',
      },

      buddhaName: {
        title: 'Niệm Phật',

        description: 'Âm thanh niệm Phật giúp giữ tâm thanh tịnh.',
      },

      breathing: {
        title: 'Thiền theo hơi thở',

        description: 'Hướng dẫn chú ý vào hơi thở và thư giãn cơ thể.',
      },

      deepRelaxation: {
        title: 'Thiền thư giãn sâu',

        description: 'Âm thanh nhẹ nhàng dành cho nghỉ ngơi và ngủ ngon.',
      },

      singingBowl: {
        title: 'Chuông xoay thiền định',

        description: 'Âm thanh chuông xoay giúp tập trung và làm dịu tâm trí.',
      },

      templeRain: {
        title: 'Mưa trong sân chùa',

        description: 'Tiếng mưa nhẹ trong không gian chùa yên tĩnh.',
      },

      forestBirds: {
        title: 'Chim hót trong rừng',

        description: 'Âm thanh thiên nhiên với tiếng chim và lá cây.',
      },

      flowingStream: {
        title: 'Dòng suối nhẹ',

        description: 'Tiếng nước chảy nhẹ nhàng giúp thư giãn và dễ ngủ.',
      },
    },
  },
  dailyPracticeNotifications: {
    channelName: 'Nhắc thực hành hằng ngày',

    channelDescription: 'Thông báo nhắc thiền và tụng kinh mỗi ngày.',

    settingTitle: 'Nhắc thiền hoặc tụng kinh',

    settingDescription: 'Nhận thông báo vào thời gian bạn chọn mỗi ngày.',

    practiceType: 'Nội dung nhắc',

    typeMeditation: 'Thiền',

    typeSutra: 'Tụng kinh',

    typeBoth: 'Cả hai',

    reminderTime: 'Giờ nhắc',

    previewLabel: 'Xem trước thông báo',

    settingNote: 'Thông báo sẽ tự lặp lại mỗi ngày theo giờ đã chọn.',

    meditationTitle: 'Đã đến giờ thiền',

    meditationBody: 'Hãy dành vài phút để hít thở chậm và tĩnh tâm.',

    sutraTitle: 'Đã đến giờ tụng kinh',

    sutraBody: 'Hãy dành vài phút để tụng hoặc lắng nghe một bài kinh.',

    bothTitle: 'Đã đến giờ thực hành',

    bothBody: 'Bạn có thể thiền hoặc nghe một bài kinh để tìm lại sự bình an.',

    permissionTitle: 'Thông báo đang bị tắt',

    permissionMessage:
      'Hãy cho phép ứng dụng gửi thông báo trong phần cài đặt thiết bị.',

    enabledTitle: 'Đã bật nhắc hằng ngày',

    enabledMessage: 'Ứng dụng sẽ nhắc bạn mỗi ngày lúc {{time}}.',

    errorTitle: 'Không thể tạo thông báo',

    errorMessage: 'Đã xảy ra lỗi khi tạo thông báo nhắc hằng ngày.',
  },
  fortuneStick: {
    title: 'Xin xăm',

    subtitle:
      'Giữ tâm bình an, nghĩ về điều bạn đang quan tâm và xin một quẻ để chiêm nghiệm.',

    intentionLabel: 'Điều bạn đang cầu nguyện',

    intentionPlaceholder: 'Có thể để trống hoặc viết điều bạn đang quan tâm...',

    drawing: 'Đang xin quẻ...',

    drawHint: 'Thành tâm, hít thở chậm và nhấn nút bên dưới.',

    drawingButton: 'Đang gieo quẻ',

    drawButton: 'Xin một quẻ xăm',

    stickNumber: 'Quẻ số',

    interpretationTitle: 'Luận giải',

    adviceTitle: 'Lời khuyên',

    drawAgain: 'Xin quẻ khác',

    save: 'Lưu quẻ',

    saving: 'Đang lưu...',

    savedTitle: 'Đã lưu quẻ xăm',

    savedMessage: 'Quẻ xăm đã được lưu trên thiết bị.',

    saveErrorTitle: 'Không thể lưu',

    saveErrorMessage: 'Đã xảy ra lỗi khi lưu quẻ xăm.',

    historyTitle: 'Quẻ đã lưu',

    historyCount: '{{count}} quẻ',

    emptyHistory: 'Bạn chưa lưu quẻ xăm nào.',

    deleteTitle: 'Xóa quẻ đã lưu',

    deleteMessage: 'Bạn có chắc muốn xóa quẻ này?',

    disclaimer:
      'Nội dung xin xăm chỉ mang tính tham khảo và chiêm nghiệm cá nhân, không thay thế tư vấn chuyên môn hoặc quyết định thực tế.',

    levels: {
      great: 'Đại cát',
      good: 'Cát',
      neutral: 'Bình',
      caution: 'Cẩn trọng',
    },
  },
  horoscope: {
    title: 'Tử vi và ngày phù hợp',

    subtitle:
      'Nhập ngày sinh dương lịch để xem ngày âm, tuổi con giáp và gợi ý ngày phù hợp cho các việc quan trọng.',

    birthDateTitle: 'Ngày sinh dương lịch',

    day: 'Ngày',

    month: 'Tháng',

    year: 'Năm',

    activityTitle: 'Việc cần xem ngày',

    searchPeriod: 'Khoảng thời gian tìm',

    monthCount: '{{count}} tháng',

    calculate: 'Xem ngày âm và ngày phù hợp',

    calculating: 'Đang tính...',

    invalidDateTitle: 'Ngày sinh không hợp lệ',

    invalidDateMessage: 'Hãy nhập đúng ngày, tháng và năm sinh dương lịch.',

    profileTitle: 'Thông tin ngày sinh',

    lunarBirthDate: 'Ngày sinh âm lịch',

    zodiac: 'Con giáp',

    canChiYear: 'Năm Can Chi',

    leapMonth: 'nhuận',

    resultsTitle: 'Ngày phù hợp được gợi ý',

    resultsSubtitle: 'Các ngày được xếp theo điểm tham khảo từ cao xuống thấp.',

    lunarDateLine: 'Âm lịch {{day}}/{{month}}/{{year}}',

    suitableReasons: 'Điểm thuận',

    cautionReasons: 'Điểm cần lưu ý',

    disclaimer:
      'Kết quả chỉ mang tính tham khảo văn hóa và chiêm nghiệm. Không nên dùng làm cơ sở duy nhất cho quyết định cưới hỏi, xây dựng, đầu tư hoặc các quyết định quan trọng khác.',

    activities: {
      wedding: 'Cưới hỏi',
      construction: 'Xây nhà',
      opening: 'Khai trương',
      moving: 'Chuyển nhà',
      travel: 'Xuất hành',
    },

    ratings: {
      excellent: 'Rất tốt',
      good: 'Tốt',
      fair: 'Khá',
      caution: 'Cân nhắc',
    },

    reasons: {
      hoangDao: 'Ngày Hoàng đạo',

      hacDao: 'Ngày Hắc đạo',

      traditionalSuitable: 'Lịch truyền thống ghi là ngày nên làm',

      traditionalAvoid: 'Lịch truyền thống ghi là ngày nên tránh',

      zodiacClash: 'Địa chi ngày xung với tuổi',

      sixHarmony: 'Ngày lục hợp với tuổi',

      threeHarmony: 'Ngày tam hợp với tuổi',

      nguyetKy: 'Phạm ngày Nguyệt Kỵ',

      tamNuong: 'Phạm ngày Tam Nương',

      preferredLunarDay: 'Ngày âm phù hợp theo bộ quy tắc tham khảo',

      weekendConvenient: 'Cuối tuần thuận tiện tổ chức',
      subtitleExtended:
        'Nhập ngày giờ sinh dương lịch, giới tính và trường phái để xem ngày âm, giờ sinh và gợi ý ngày phù hợp.',

      birthTimeTitle: 'Giờ sinh',
      hour: 'Giờ',
      minute: 'Phút',
      birthTimeHint: 'Giờ địa phương nơi sinh',

      genderTitle: 'Giới tính',

      genders: {
        male: 'Nam',
        female: 'Nữ',
        unspecified: 'Không chọn',
      },

      schoolTitle: 'Trường phái luận giải',

      schools: {
        folkTitle: 'Dân gian tổng hợp',

        folkDescription:
          'Cân bằng tuổi, ngày Hoàng đạo, ngày âm và các ngày kiêng truyền thống.',

        baziTitle: 'Bát tự tham khảo',

        baziDescription:
          'Ưu tiên quan hệ giữa địa chi ngày, tuổi năm sinh và giờ sinh.',

        ziweiTitle: 'Tử vi tham khảo',

        ziweiDescription:
          'Xét ngày âm, giờ sinh, giới tính và chiều an vòng ở mức rút gọn.',

        almanacTitle: 'Lịch pháp',

        almanacDescription:
          'Ưu tiên mục nên làm, kiêng làm, Hoàng đạo và các ngày kỵ.',
      },

      selectedMethod: 'Đang dùng',

      calculateExtended: 'Lập hồ sơ và tìm ngày phù hợp',

      invalidInputTitle: 'Thông tin chưa hợp lệ',

      invalidTimeMessage: 'Giờ sinh phải từ 00:00 đến 23:59.',

      birthHourBranch: 'Giờ sinh Can Chi',

      profileGender: 'Giới tính',

      profileSchool: 'Trường phái',

      yearPolarity: 'Âm dương năm sinh',

      cycleDirection: 'Chiều an vòng tham khảo',

      polarity: {
        yang: 'Dương',
        yin: 'Âm',
      },

      directions: {
        forward: 'Thuận',
        backward: 'Nghịch',
        neutral: 'Trung tính',
      },

      schoolNotes: {
        folk: 'Phương pháp tổng hợp, cân bằng các quy tắc dân gian và lịch truyền thống.',

        bazi: 'Bộ điểm nhấn mạnh tuổi năm sinh và địa chi giờ sinh. Đây chưa phải Bát tự đầy đủ.',

        ziwei:
          'Bộ điểm sử dụng ngày âm, giờ sinh, giới tính và chiều an vòng ở mức tham khảo.',

        almanac:
          'Bộ điểm ưu tiên mạnh nội dung nên làm, kiêng làm và Hoàng đạo trong lịch pháp.',
      },

      resultsSubtitleExtended:
        'Các ngày được xếp theo trường phái, tuổi và giờ sinh đã chọn.',

      disclaimerExtended:
        'Đây là mô hình luận giải rút gọn dựa trên lịch âm, tuổi, giờ sinh và bộ trọng số theo trường phái. Không phải lá số Tử vi Đẩu số hay Bát tự hoàn chỉnh và không nên là cơ sở duy nhất cho quyết định quan trọng.',
    },
    subtitleExtended:
      'Nhập ngày giờ sinh dương lịch, giới tính và trường phái để xem ngày âm, giờ sinh và gợi ý ngày phù hợp.',

    birthTimeTitle: 'Giờ sinh',
    hour: 'Giờ',
    minute: 'Phút',
    birthTimeHint: 'Giờ địa phương nơi sinh',

    genderTitle: 'Giới tính',

    genders: {
      male: 'Nam',
      female: 'Nữ',
      unspecified: 'Không chọn',
    },

    schoolTitle: 'Trường phái luận giải',

    schools: {
      folkTitle: 'Dân gian tổng hợp',

      folkDescription:
        'Cân bằng tuổi, ngày Hoàng đạo, ngày âm và các ngày kiêng truyền thống.',

      baziTitle: 'Bát tự tham khảo',

      baziDescription:
        'Ưu tiên quan hệ giữa địa chi ngày, tuổi năm sinh và giờ sinh.',

      ziweiTitle: 'Tử vi tham khảo',

      ziweiDescription:
        'Xét ngày âm, giờ sinh, giới tính và chiều an vòng ở mức rút gọn.',

      almanacTitle: 'Lịch pháp',

      almanacDescription:
        'Ưu tiên mục nên làm, kiêng làm, Hoàng đạo và các ngày kỵ.',
    },

    selectedMethod: 'Đang dùng',

    calculateExtended: 'Lập hồ sơ và tìm ngày phù hợp',

    invalidInputTitle: 'Thông tin chưa hợp lệ',

    invalidTimeMessage: 'Giờ sinh phải từ 00:00 đến 23:59.',

    birthHourBranch: 'Giờ sinh Can Chi',

    profileGender: 'Giới tính',

    profileSchool: 'Trường phái',

    yearPolarity: 'Âm dương năm sinh',

    cycleDirection: 'Chiều an vòng tham khảo',

    polarity: {
      yang: 'Dương',
      yin: 'Âm',
    },

    directions: {
      forward: 'Thuận',
      backward: 'Nghịch',
      neutral: 'Trung tính',
    },

    schoolNotes: {
      folk: 'Phương pháp tổng hợp, cân bằng các quy tắc dân gian và lịch truyền thống.',

      bazi: 'Bộ điểm nhấn mạnh tuổi năm sinh và địa chi giờ sinh. Đây chưa phải Bát tự đầy đủ.',

      ziwei:
        'Bộ điểm sử dụng ngày âm, giờ sinh, giới tính và chiều an vòng ở mức tham khảo.',

      almanac:
        'Bộ điểm ưu tiên mạnh nội dung nên làm, kiêng làm và Hoàng đạo trong lịch pháp.',
    },

    resultsSubtitleExtended:
      'Các ngày được xếp theo trường phái, tuổi và giờ sinh đã chọn.',

    disclaimerExtended:
      'Đây là mô hình luận giải rút gọn dựa trên lịch âm, tuổi, giờ sinh và bộ trọng số theo trường phái. Không phải lá số Tử vi Đẩu số hay Bát tự hoàn chỉnh và không nên là cơ sở duy nhất cho quyết định quan trọng.',
    lifeOverviewTitle: 'Tình duyên và sự nghiệp',

    lifeOverviewSubtitle:
      'Luận giải tham khảo từ ngày giờ sinh và trường phái đã chọn.',

    lifeStrengths: 'Điểm mạnh',

    lifeCautions: 'Điểm cần cân bằng',

    lifeAdvice: 'Gợi ý phát triển',

    lifeRatings: {
      veryStrong: 'Năng lượng nổi bật',
      favorable: 'Khá thuận lợi',
      balanced: 'Tương đối cân bằng',
      developing: 'Đang hoàn thiện',
    },

    love: {
      title: 'Tình duyên',

      styles: {
        warm: 'Ấm áp và giàu tình cảm',
        steady: 'Bền vững và chân thành',
        independent: 'Độc lập trong tình cảm',
        sensitive: 'Tinh tế và nhạy cảm',
      },

      summaries: {
        warm: 'Bạn có xu hướng yêu bằng sự quan tâm rõ ràng, dễ tạo cảm giác gần gũi và ấm áp.',

        steady:
          'Bạn coi trọng sự ổn định, lòng tin và một mối quan hệ phát triển lâu dài.',

        independent:
          'Bạn cần tình yêu có sự tôn trọng, khoảng riêng và giao tiếp thẳng thắn.',

        sensitive:
          'Bạn cảm nhận cảm xúc sâu sắc, dễ đồng cảm nhưng cũng cần sự an toàn tinh thần.',
      },
    },

    career: {
      title: 'Sự nghiệp',

      styles: {
        leadership: 'Định hướng lãnh đạo',
        creative: 'Thiên hướng sáng tạo',
        analytical: 'Tư duy phân tích',
        supportive: 'Phối hợp và hỗ trợ',
        entrepreneurial: 'Tinh thần kinh doanh',
      },

      summaries: {
        leadership:
          'Bạn phù hợp với vai trò chịu trách nhiệm, điều phối và đưa ra định hướng.',

        creative:
          'Bạn phát huy tốt khi được tạo ra ý tưởng mới, thiết kế hoặc truyền đạt thông điệp.',

        analytical:
          'Bạn mạnh về quan sát dữ liệu, lập kế hoạch và giải quyết vấn đề có hệ thống.',

        supportive:
          'Bạn phát triển tốt trong môi trường hợp tác, phục vụ và tạo giá trị cho tập thể.',

        entrepreneurial:
          'Bạn có xu hướng chủ động, thích thử nghiệm và thích nghi nhanh với cơ hội mới.',
      },
    },

    insights: {
      loveHarmony:
        'Tuổi năm sinh và giờ sinh tạo xu hướng hòa hợp trong cách biểu đạt tình cảm.',

      loveThreeHarmony:
        'Năng lượng tam hợp giúp bạn dễ tìm được điểm chung với người đồng hành.',

      loveInnerConflict:
        'Nhu cầu bên trong đôi khi mâu thuẫn, khiến bạn vừa muốn gần gũi vừa muốn giữ khoảng cách.',

      loveSelfAwareness:
        'Bạn có khả năng nhận biết cảm xúc và nhu cầu tình cảm khá rõ.',

      loveWarmHeart:
        'Biết quan tâm và dễ tạo cảm giác ấm áp cho người bên cạnh.',

      loveExpressive:
        'Có khả năng thể hiện tình cảm bằng lời nói hoặc hành động.',

      loveOvergiving:
        'Dễ cho đi quá nhiều rồi cảm thấy hụt hẫng khi không được đáp lại tương xứng.',

      loveSetBoundaries:
        'Hãy duy trì ranh giới lành mạnh thay vì luôn ưu tiên người khác.',

      loveReceiveCare:
        'Cho phép bản thân nhận sự quan tâm thay vì chỉ đóng vai người chăm sóc.',

      loveLoyal: 'Đề cao sự chung thủy và tính ổn định trong mối quan hệ.',

      lovePatient: 'Có khả năng kiên nhẫn xây dựng tình cảm theo thời gian.',

      loveReserved:
        'Đôi lúc giữ cảm xúc quá lâu khiến đối phương khó hiểu điều bạn cần.',

      loveSpeakClearly:
        'Nói rõ mong muốn và cảm xúc trước khi chúng tích tụ thành áp lực.',

      loveCreateRituals:
        'Những thói quen nhỏ như trò chuyện hoặc dành thời gian cố định sẽ giúp tình cảm bền hơn.',

      loveRespectsSpace:
        'Tôn trọng khoảng riêng và sự khác biệt của người đồng hành.',

      loveHonest:
        'Có xu hướng thẳng thắn và không thích mối quan hệ thiếu rõ ràng.',

      loveNeedsFreedom:
        'Có thể thấy ngột ngạt khi mối quan hệ kiểm soát hoặc phụ thuộc quá mức.',

      loveBalanceFreedom:
        'Cân bằng tự do cá nhân với sự hiện diện và cam kết trong mối quan hệ.',

      loveSharePlans:
        'Chia sẻ kế hoạch sớm để người đồng hành không cảm thấy bị đứng ngoài.',

      loveEmpathetic: 'Nhạy bén với cảm xúc và dễ thấu hiểu người khác.',

      loveIntuitive:
        'Có trực giác tốt về bầu không khí và những thay đổi trong mối quan hệ.',

      loveOverthinking:
        'Dễ suy diễn khi thông tin chưa rõ hoặc khi đối phương im lặng.',

      loveTrustSlowly:
        'Xây dựng lòng tin theo từng bước, không cần ép bản thân mở lòng quá nhanh.',

      loveAskDirectly: 'Hỏi trực tiếp thay vì tự đoán suy nghĩ của người khác.',

      careerPersistent:
        'Có khả năng duy trì mục tiêu và tiến đều trong thời gian dài.',

      careerReflective:
        'Biết nhìn lại, điều chỉnh và học từ trải nghiệm trước khi tiến tiếp.',

      careerActionOriented:
        'Có xu hướng chủ động bắt tay vào việc và tạo động lực cho tiến độ.',

      careerObservant:
        'Quan sát kỹ, cảm nhận bối cảnh tốt và thường nhận ra điều người khác bỏ sót.',

      careerLeadership: 'Có khả năng dẫn dắt, phân công và giữ mục tiêu chung.',

      careerResponsibility:
        'Sẵn sàng chịu trách nhiệm với quyết định và kết quả công việc.',

      careerOvercontrol:
        'Dễ ôm việc hoặc kiểm soát quá sâu khi lo người khác làm chưa đúng.',

      careerDelegate: 'Học cách giao việc rõ ràng và tin tưởng người phù hợp.',

      careerListenBeforeDeciding:
        'Thu thập góc nhìn của đội nhóm trước khi đưa ra quyết định lớn.',

      careerCreative:
        'Có khả năng tạo ý tưởng, nhìn vấn đề theo hướng mới và khác biệt.',

      careerExpression:
        'Phù hợp với công việc cần truyền đạt, thiết kế hoặc kể chuyện.',

      careerScattered:
        'Dễ hứng thú nhiều hướng cùng lúc và thiếu thời gian hoàn thành.',

      careerBuildPortfolio:
        'Tập trung xây sản phẩm hoặc hồ sơ năng lực có thể nhìn thấy được.',

      careerFinishOneThing:
        'Ưu tiên hoàn thành một dự án quan trọng trước khi mở thêm dự án mới.',

      careerAnalytical:
        'Mạnh về phân tích, so sánh và tìm nguyên nhân của vấn đề.',

      careerPlanning:
        'Có khả năng lập kế hoạch và chia mục tiêu thành bước cụ thể.',

      careerPerfectionism:
        'Có thể trì hoãn vì muốn mọi thứ hoàn hảo trước khi bắt đầu.',

      careerSetMilestones:
        'Đặt mốc hoàn thành rõ ràng để tránh phân tích quá lâu.',

      careerDecideWithEnoughData:
        'Quyết định khi đã có đủ dữ liệu cần thiết, không cần chờ mọi thứ tuyệt đối chắc chắn.',

      careerTeamwork: 'Biết phối hợp và giúp tập thể vận hành ổn định.',

      careerService:
        'Có khả năng tạo giá trị thông qua hỗ trợ, chăm sóc hoặc hướng dẫn người khác.',

      careerPeoplePleasing:
        'Dễ nhận quá nhiều việc vì ngại từ chối hoặc sợ làm người khác thất vọng.',

      careerProtectEnergy:
        'Bảo vệ thời gian và năng lượng bằng giới hạn công việc rõ ràng.',

      careerShowYourContribution:
        'Ghi nhận và trình bày rõ đóng góp của bạn thay vì chỉ âm thầm làm việc.',

      careerInitiative: 'Có tinh thần chủ động và sẵn sàng thử cách làm mới.',

      careerAdaptability:
        'Thích nghi nhanh khi thị trường, công việc hoặc kế hoạch thay đổi.',

      careerRiskTaking:
        'Đôi lúc quyết định nhanh hoặc đánh giá thấp rủi ro tài chính và vận hành.',

      careerValidateRisk:
        'Thử nghiệm quy mô nhỏ và kiểm chứng nhu cầu trước khi đầu tư lớn.',

      careerKeepCashReserve:
        'Giữ nguồn dự phòng trước khi mở rộng dự án hoặc kinh doanh.',
    },
  },
  bazi,
  ziwei,
    practice,
  practiceAudio,
  practiceMeditation,
    peaceJournal,
  buddhistCalendar,
  altarCustomization,
    dataSync,
  pdfExport,
  premiumContent,
  smartFeatures,
} as const;

export default vi;
