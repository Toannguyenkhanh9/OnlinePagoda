import bazi from './bazi.en';
import ziwei from './ziwei.en';
import practice, {
  practiceAudio,
  practiceMeditation,
} from './practice.en';
import {
  peaceJournal,
  buddhistCalendar,
  altarCustomization,
} from './spiritualFeatures.en';
import {
  dataSync,
  pdfExport,
  premiumContent,
  smartFeatures,
} from './spiritualFeatures10_13.en';
import chantCounter
  from './chantCounter.en';
const en = {
  common: {
    cancel: 'Cancel',
    delete: 'Delete',
    reset: 'Reset',
    loading: 'Loading...',
  },

  tabs: {
    home: 'Home',
    temple: 'Temple',
    meditation: 'Meditation',
    prayer: 'Prayer',
  },

  home: {
    title: 'iPagoda',

    subtitle: 'A quiet space to meditate, pray, and listen to yourself.',

    activities: 'Activities',

    templeTitle: 'Main hall',
    templeSubtitle: 'Light incense and strike the wooden fish',

    meditationTitle: 'Meditation',
    meditationSubtitle: 'Meditate for 5 to 15 minutes',

    prayerTitle: 'Prayer',
    prayerSubtitle: 'Keep your prayers private',

    audioTitle: 'Sounds',
    audioSubtitle: 'Listen to wooden fish and temple bells',

    settingsTitle: 'Settings',
    settingsSubtitle: 'Language and app information',

    dailyTitle: "Today's reminder",

    dailyText:
      'Take a few minutes to breathe slowly, let go of worry, and think of one thing you are grateful for.',
    lunarCalendarTitle: 'Lunar Calendar',
    lunarCalendarSubtitle: 'View new moon and full moon days',
    spiritualAudioTitle: 'Sutras and Meditation',

    spiritualAudioSubtitle:
      'Listen to sutras, meditation music, and nature sounds',
    welcome: 'Peace Every Day',

    peacefulSpace: 'A Peaceful Space',

    heroTitle: 'Return to Inner Peace',

    enterTemple: 'Enter the Main Hall',

    discover: 'Discover',

    footerQuote: 'When the mind is peaceful, every place becomes a sanctuary.',
    fortuneStickTitle: 'Fortune Sticks',

    fortuneStickSubtitle: 'Draw a reflective message for mindfulness',
    horoscopeTitle: 'Horoscope and Auspicious Dates',

    horoscopeSubtitle: 'View lunar birth date, zodiac, and suggested dates',
     baziTitle: 'BaZi Chart',

  baziSubtitle:
    'Four Pillars, elements, luck cycles, and interpretation',
    baziHistoryTitle:
  'Saved BaZi Charts',

baziHistorySubtitle:
  'Review and manage saved BaZi charts',
  baziStage4Title:
  'Timing and Compatibility',

baziStage4Subtitle:
  'Transits, chart comparison, and date selection',
  organizedActivitiesTitle: 'Spaces for your practice',
practiceSectionEyebrow: 'PRACTICE',
practiceSectionTitle: 'Practice',
practiceSectionSubtitle:
  'Activities that calm the mind and support a steady daily routine',
calendarSectionEyebrow: 'TIME & RITUAL',
calendarSectionTitle: 'Calendar and Rituals',
calendarSectionSubtitle:
  'Follow lunar dates, observances, and important practice days',
reflectionSectionEyebrow: 'REFLECTION',
reflectionSectionTitle: 'Reflection',
reflectionSectionSubtitle:
  'Traditional content for cultural reference and personal reflection',
peaceJournalShortTitle: 'Journal',
peaceJournalShortSubtitle:
  'Record emotions, gratitude, and what you are ready to release',
newMoonFullMoonTitle: 'New Moon and Full Moon',
newMoonFullMoonSubtitle:
  'Follow lunar observance days and prepare your rituals',
buddhistFestivalTitle: 'Buddhist Observances',
buddhistFestivalSubtitle:
  'View Vesak, Ullambana, and other common observance days',
practiceReminderTitle: 'Practice Reminders',
practiceReminderSubtitle:
  'Choose reminders for meditation, chanting, and daily rituals',
chooseDateTitle: 'Auspicious Dates',
chooseDateSubtitle:
  'Reference dates for weddings, openings, and important events',
  },

  temple: {
    title: 'Main hall',

    description: 'Keep a calm mind and perform each activity slowly.',

    motto: 'Peace in every breath',

    noIncense: 'No incense has been lit',

    lightIncense: 'Light incense',

    incenseCount: 'Lit: {{count}} incense sticks',

    woodenFish: 'Wooden fish',

    woodenFishCount: '{{count}}/108',

    bell: 'Temple bell',

    bellCount: '{{count}} times',

    completedTitle: 'You completed 108 strikes',

    completedText: 'Sit quietly for a minute and notice your breath.',

    resetCounter: 'Reset wooden fish counter',

    resetDialogTitle: 'Reset counter',

    resetDialogMessage: 'Reset the wooden fish count to 0?',
    longPressHint: 'Tap to play once • Press and hold to play continuously',

    playingContinuously: 'Playing continuously',

    tapToStop: 'Tap to stop',
    lightIncenseShort: 'Light incense',
    incenseShortCount: '{{count}} sticks',
    incenseStatsTitle: 'Incense sticks',
  },

meditation: {
  title: 'Meditation',
  screenTitle: 'Meditation',

  subtitle:
    'Sit comfortably, relax your shoulders, and gently focus on each breath.',

  breathingTitle: 'Breathing Meditation',

  chooseDuration: 'Choose Duration',

  minutes: '{{count}} minutes',
  minuteUnit: 'minutes',
  heroMinutes: '{{count}} minutes',

  start: 'Start Meditation',
  pause: 'Pause Meditation',
  restart: 'Meditate Again',

  ready: 'Ready',
  paused: 'Paused',
  running: 'Meditating',

  resetTime: 'Reset Time',

  completedTitle: 'Meditation Complete',

  completedMessage:
    'Breathe slowly and take a moment to notice how you feel.',

  breathTitle: 'Breathing Guide',

  inhale: 'Inhale slowly for 4 seconds',

  hold: 'Hold your breath for 2 seconds',

  exhale: 'Exhale slowly for 6 seconds',
},

  prayer: {
    title: 'Prayer journal',

    subtitle:
      'Your entries are stored on this device and are not uploaded automatically.',

    placeholder: 'Write what you are praying for or grateful for...',

    save: 'Save prayer',

    savedItems: 'Saved entries',

    empty: 'You have not saved any prayers.',

    requiredTitle: 'No content',

    requiredMessage: 'Enter your prayer first.',

    savedTitle: 'Saved',

    savedMessage: 'Your prayer is stored privately on this device.',

    saveErrorTitle: 'Unable to save',

    saveErrorMessage: 'An error occurred while saving your prayer.',

    deleteDialogTitle: 'Delete prayer',

    deleteDialogMessage: 'Are you sure you want to delete this entry?',
    writeTitle: 'Write a Prayer',

    writeHint: 'Your content is stored privately on your device.',

    privateLabel: 'Private',

    savedCount: '{{count}} saved entries',

    emptyTitle: 'No Saved Prayers',

    savedPrivately: 'Stored Privately',
  },

  audio: {
    title: 'Temple Sounds',

    subtitle: 'Listen to the sounds used in the main hall.',

    woodenFishTitle: 'Wooden Fish Sound',

    playWoodenFish: 'Play Wooden Fish',

    bellTitle: 'Temple Bell Sound',

    playBell: 'Play Temple Bell',

    tapOrHoldHint: 'Tap to play once • Press and hold to play continuously',

    playingContinuously: 'Playing Continuously',

    tapToStop: 'Tap to stop',
  },
  settings: {
    title: 'Settings',

    notifications: 'Notifications',

    notificationsDescription:
      'Meditation and lunar observance reminders will be added later.',

    language: 'Language',

    languageDescription: 'Choose the language used by the app.',

    chooseLanguage: 'Choose language',

    privacy: 'Privacy',

    privacyDescription:
      'Your prayer journal is currently stored only on this device.',

    information: 'Information',

    version: 'Online Temple version 0.0.1',
  },
  lunarCalendar: {
    title: 'Lunar Calendar',

    subtitle: 'View lunar dates, new moon days, and full moon days.',

    today: 'Today',

    firstDay: 'First Lunar Day',

    fullMoon: 'Full Moon',

    solarDate: 'Solar Date',

    lunarDate: 'Lunar Date',

    lunarMonth: 'Lunar Month {{month}}',

    leapMonth: 'leap month',

    firstDayTitle: 'Today is the first lunar day',

    fullMoonTitle: 'Today is the full moon day',

    observanceMessage:
      'Take a little time to meditate, reflect, or listen to a sutra.',
  },
  lunarNotifications: {
    channelName: 'Lunar Calendar Reminders',

    channelDescription: 'Reminders for the first lunar day and full moon day.',

    settingTitle: 'First-Day and Full-Moon Reminders',

    settingDescription:
      'Receive a notification on the first and fifteenth lunar days.',

    reminderTime: 'Reminder Time',

    settingNote:
      'The app schedules reminders for the next 12 months and refreshes them when the app opens.',

    firstDayTitle: 'Today Is the First Lunar Day',

    fullMoonTitle: 'Today Is the Full Moon Day',

    reminderBody:
      'Take a few quiet minutes to meditate, pray, or listen to a sutra.',

    permissionTitle: 'Notifications Are Disabled',

    permissionMessage:
      'Please allow notifications in your device settings to receive lunar calendar reminders.',

    enabledTitle: 'Lunar Reminders Enabled',

    enabledMessage: '{{count}} reminders were scheduled at {{time}}.',

    errorTitle: 'Unable to Schedule Reminders',

    errorMessage:
      'An error occurred while scheduling lunar calendar reminders.',
  },
  spiritualAudio: {
    title: 'Sutras and Meditation',

    subtitle:
      'Listen to peaceful audio for relaxation, meditation, and mindfulness.',

    searchPlaceholder: 'Search audio...',

    playing: 'Playing',

    paused: 'Paused',

    empty: 'No matching audio was found.',

    categories: {
      sutra: 'Sutras',
      meditation: 'Meditation',
      nature: 'Nature',
    },

    tracks: {
      greatCompassion: {
        title: 'Great Compassion Mantra',

        description: 'A peaceful chant for relaxation and mindfulness.',
      },

      heartSutra: {
        title: 'Heart Sutra',

        description: 'A calm and solemn recitation of the Heart Sutra.',
      },

      buddhaName: {
        title: 'Buddha Name Chanting',

        description: 'Gentle Buddha-name chanting for a peaceful mind.',
      },

      breathing: {
        title: 'Breathing Meditation',

        description: 'Focus on your breath and gradually relax your body.',
      },

      deepRelaxation: {
        title: 'Deep Relaxation',

        description: 'Gentle meditation audio for rest and peaceful sleep.',
      },

      singingBowl: {
        title: 'Singing Bowl Meditation',

        description: 'Singing bowl sounds for focus and inner calm.',
      },

      templeRain: {
        title: 'Rain at the Temple',

        description: 'Gentle rain sounds in a peaceful temple atmosphere.',
      },

      forestBirds: {
        title: 'Forest Birds',

        description: 'Natural forest ambience with birds and rustling leaves.',
      },

      flowingStream: {
        title: 'Flowing Stream',

        description: 'Soft stream sounds for relaxation and sleep.',
      },
    },
  },
  dailyPracticeNotifications: {
    channelName: 'Daily Practice Reminders',

    channelDescription: 'Daily reminders for meditation and sutra practice.',

    settingTitle: 'Meditation or Sutra Reminder',

    settingDescription: 'Receive a daily notification at your selected time.',

    practiceType: 'Reminder Type',

    typeMeditation: 'Meditation',

    typeSutra: 'Sutra',

    typeBoth: 'Both',

    reminderTime: 'Reminder Time',

    previewLabel: 'Notification Preview',

    settingNote: 'The notification will repeat every day at the selected time.',

    meditationTitle: 'It Is Time to Meditate',

    meditationBody: 'Take a few slow breaths and give yourself a quiet moment.',

    sutraTitle: 'It Is Time to Chant or Listen to a Sutra',

    sutraBody:
      'Take a few quiet minutes to chant, listen, and settle your mind.',

    bothTitle: 'It Is Time for Your Daily Practice',

    bothBody:
      'Choose a short meditation or listen to a sutra for a peaceful moment.',

    permissionTitle: 'Notifications Are Disabled',

    permissionMessage: 'Please allow notifications in your device settings.',

    enabledTitle: 'Daily Reminder Enabled',

    enabledMessage: 'The app will remind you every day at {{time}}.',

    errorTitle: 'Unable to Schedule Reminder',

    errorMessage: 'An error occurred while scheduling the daily reminder.',
  },
  fortuneStick: {
    title: 'Fortune Sticks',

    subtitle:
      'Calm your mind, think about what concerns you, and draw a message for reflection.',

    intentionLabel: 'What Are You Praying For?',

    intentionPlaceholder: 'Optional: write what is currently on your mind...',

    drawing: 'Drawing a stick...',

    drawHint: 'Breathe slowly, settle your mind, and tap the button below.',

    drawingButton: 'Drawing',

    drawButton: 'Draw a Fortune Stick',

    stickNumber: 'Stick No.',

    interpretationTitle: 'Interpretation',

    adviceTitle: 'Advice',

    drawAgain: 'Draw Again',

    save: 'Save',

    saving: 'Saving...',

    savedTitle: 'Fortune Saved',

    savedMessage: 'The fortune has been saved on your device.',

    saveErrorTitle: 'Unable to Save',

    saveErrorMessage: 'An error occurred while saving the fortune.',

    historyTitle: 'Saved Fortunes',

    historyCount: '{{count}} saved',

    emptyHistory: 'You have not saved any fortunes yet.',

    deleteTitle: 'Delete Saved Fortune',

    deleteMessage: 'Are you sure you want to delete this fortune?',

    disclaimer:
      'Fortune-stick content is provided only for personal reflection and should not replace professional advice or real-world decisions.',

    levels: {
      great: 'Excellent',
      good: 'Good',
      neutral: 'Neutral',
      caution: 'Caution',
    },
  },
  horoscope: {
    title: 'Horoscope and Auspicious Dates',

    subtitle:
      'Enter a solar birth date to view the lunar date, zodiac sign, and suggested dates for important activities.',

    birthDateTitle: 'Solar Birth Date',

    day: 'Day',

    month: 'Month',

    year: 'Year',

    activityTitle: 'Activity',

    searchPeriod: 'Search Period',

    monthCount: '{{count}} months',

    calculate: 'Convert and Find Suggested Dates',

    calculating: 'Calculating...',

    invalidDateTitle: 'Invalid Birth Date',

    invalidDateMessage: 'Please enter a valid solar calendar date.',

    profileTitle: 'Birth Information',

    lunarBirthDate: 'Lunar Birth Date',

    zodiac: 'Zodiac',

    canChiYear: 'Sexagenary Year',

    leapMonth: 'leap month',

    resultsTitle: 'Suggested Dates',

    resultsSubtitle: 'Dates are ranked by a cultural reference score.',

    lunarDateLine: 'Lunar {{day}}/{{month}}/{{year}}',

    suitableReasons: 'Favorable Points',

    cautionReasons: 'Points to Consider',

    disclaimer:
      'Results are provided for cultural reference and personal reflection only. They should not be the sole basis for marriage, construction, investment, or other important decisions.',

    activities: {
      wedding: 'Wedding',
      construction: 'Construction',
      opening: 'Business Opening',
      moving: 'Moving Home',
      travel: 'Travel',
    },

    ratings: {
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      caution: 'Consider',
    },

    reasons: {
      hoangDao: 'Auspicious almanac day',

      hacDao: 'Inauspicious almanac day',

      traditionalSuitable: 'Traditionally suitable for this activity',

      traditionalAvoid: 'Traditionally advised against this activity',

      zodiacClash: 'Day branch clashes with birth zodiac',

      sixHarmony: 'Six-harmony relationship',

      threeHarmony: 'Three-harmony relationship',

      nguyetKy: 'Traditional Nguyet Ky day',

      tamNuong: 'Traditional Tam Nuong day',

      preferredLunarDay: 'Preferred lunar day in the reference rules',

      weekendConvenient: 'Weekend convenience',
      birthHourClash: 'The day branch clashes with the birth-hour branch',

      birthHourHarmony: 'The day branch forms six harmony with the birth hour',

      birthHourThreeHarmony:
        'The day branch forms three harmony with the birth hour',

      birthLunarDayResonance:
        'The lunar day corresponds with the lunar birth day',

      school_folk: 'Scored with the combined folk method',

      school_bazi: 'Scored with the BaZi reference preset',

      school_ziwei: 'Scored with the Zi Wei reference preset',

      school_almanac: 'Scored with the traditional almanac preset',
    },
  },
  subtitleExtended:
    'Enter your solar birth date, birth time, gender, and interpretation method to view your lunar profile and suggested dates.',

  birthTimeTitle: 'Birth Time',
  hour: 'Hour',
  minute: 'Minute',
  birthTimeHint: 'Local time at place of birth',

  genderTitle: 'Gender',

  genders: {
    male: 'Male',
    female: 'Female',
    unspecified: 'Not Specified',
  },

  schoolTitle: 'Interpretation Method',

  schools: {
    folkTitle: 'Combined Folk Method',

    folkDescription:
      'Balances zodiac relations, auspicious days, lunar dates, and traditional avoidance rules.',

    baziTitle: 'BaZi Reference',

    baziDescription:
      'Places more weight on the relationship between the day branch, birth-year zodiac, and birth-hour branch.',

    ziweiTitle: 'Zi Wei Reference',

    ziweiDescription:
      'Uses lunar birth details, birth time, gender, and cycle direction in a simplified model.',

    almanacTitle: 'Traditional Almanac',

    almanacDescription:
      'Prioritizes suitable activities, avoided activities, auspicious days, and traditional taboo dates.',
  },

  selectedMethod: 'Selected Method',

  calculateExtended: 'Build Profile and Find Suggested Dates',

  invalidInputTitle: 'Invalid Information',

  invalidTimeMessage: 'Birth time must be between 00:00 and 23:59.',

  birthHourBranch: 'Birth Hour Branch',

  profileGender: 'Gender',

  profileSchool: 'Interpretation Method',

  yearPolarity: 'Birth-Year Polarity',

  cycleDirection: 'Reference Cycle Direction',

  polarity: {
    yang: 'Yang',
    yin: 'Yin',
  },

  directions: {
    forward: 'Forward',
    backward: 'Backward',
    neutral: 'Neutral',
  },

  schoolNotes: {
    folk: 'A balanced reference model combining common folk and traditional calendar rules.',

    bazi: 'The score emphasizes the birth-year zodiac and birth-hour branch. This is not a complete BaZi chart.',

    ziwei:
      'The score uses lunar birth details, birth time, gender, and cycle direction in a simplified form.',

    almanac:
      'The score strongly prioritizes traditional suitable activities, avoided activities, and auspicious calendar days.',
  },

  resultsSubtitleExtended:
    'Dates are ranked using the selected method, birth zodiac, and birth hour.',

  disclaimerExtended:
    'This is a simplified cultural reference model based on lunar dates, zodiac relations, birth time, and interpretation presets. It is not a complete Zi Wei Dou Shu or BaZi chart and should not be the sole basis for important decisions.',
  lifeOverviewTitle: 'Love and Career',

  lifeOverviewSubtitle:
    'A reflective reading based on birth details and the selected interpretation method.',

  lifeStrengths: 'Strengths',

  lifeCautions: 'Points to Balance',

  lifeAdvice: 'Growth Suggestions',

  lifeRatings: {
    veryStrong: 'Strong Energy',
    favorable: 'Favorable',
    balanced: 'Balanced',
    developing: 'Developing',
  },

  love: {
    title: 'Love',

    styles: {
      warm: 'Warm and Affectionate',
      steady: 'Steady and Sincere',
      independent: 'Independent in Love',
      sensitive: 'Sensitive and Intuitive',
    },

    summaries: {
      warm: 'You tend to express love through visible care and naturally create emotional warmth.',

      steady:
        'You value trust, stability, and a relationship that grows over time.',

      independent:
        'You need respect, personal space, and honest communication in love.',

      sensitive:
        'You feel emotions deeply and empathize easily, while also needing emotional safety.',
    },
  },

  career: {
    title: 'Career',

    styles: {
      leadership: 'Leadership Oriented',
      creative: 'Creative Direction',
      analytical: 'Analytical Thinking',
      supportive: 'Support and Collaboration',
      entrepreneurial: 'Entrepreneurial Energy',
    },

    summaries: {
      leadership:
        'You may thrive in roles that require responsibility, coordination, and direction.',

      creative:
        'You may perform well when generating ideas, designing, or communicating a message.',

      analytical:
        'You may be strong at working with information, planning, and solving structured problems.',

      supportive:
        'You may grow in collaborative environments that create value for people and teams.',

      entrepreneurial:
        'You tend to be proactive, experimental, and adaptable when new opportunities appear.',
    },
  },

  insights: {
    loveHarmony:
      'The birth-year zodiac and birth-hour branch suggest a harmonious emotional pattern.',

    loveThreeHarmony:
      'A three-harmony pattern may make it easier to build shared understanding.',

    loveInnerConflict:
      'Inner needs may conflict at times, creating a pull between closeness and personal space.',

    loveSelfAwareness:
      'You may have a relatively clear awareness of your emotional needs.',

    loveWarmHeart:
      'You show care naturally and help others feel emotionally safe.',

    loveExpressive:
      'You are capable of expressing affection through words or actions.',

    loveOvergiving:
      'You may give too much and feel disappointed when care is not returned equally.',

    loveSetBoundaries:
      'Maintain healthy boundaries instead of always putting others first.',

    loveReceiveCare:
      'Allow yourself to receive care instead of always being the caregiver.',

    loveLoyal: 'You value loyalty and consistency in a relationship.',

    lovePatient: 'You can patiently build trust and affection over time.',

    loveReserved:
      'Holding feelings in for too long may make your needs difficult to understand.',

    loveSpeakClearly:
      'Express needs and emotions before they build into pressure.',

    loveCreateRituals:
      'Small shared routines can strengthen emotional stability.',

    loveRespectsSpace:
      'You respect individuality and personal space within a relationship.',

    loveHonest: 'You tend to prefer direct and clearly defined relationships.',

    loveNeedsFreedom:
      'You may feel restricted by excessive control or dependence.',

    loveBalanceFreedom:
      'Balance personal freedom with presence and commitment.',

    loveSharePlans: 'Share plans early so your partner does not feel excluded.',

    loveEmpathetic:
      'You notice emotions easily and can understand how others feel.',

    loveIntuitive: 'You may have strong intuition about relationship dynamics.',

    loveOverthinking:
      'Unclear communication or silence may lead to overthinking.',

    loveTrustSlowly:
      'Build trust gradually without forcing yourself to open too quickly.',

    loveAskDirectly:
      'Ask directly instead of guessing what another person is thinking.',

    careerPersistent:
      'You can stay with a goal and make steady progress over time.',

    careerReflective:
      'You learn from experience and adjust before moving forward.',

    careerActionOriented: 'You tend to act proactively and create momentum.',

    careerObservant: 'You notice context and details that others may overlook.',

    careerLeadership:
      'You may be capable of leading, coordinating, and maintaining direction.',

    careerResponsibility:
      'You are willing to take responsibility for decisions and outcomes.',

    careerOvercontrol:
      'You may take on too much or control details when trust is low.',

    careerDelegate:
      'Delegate clearly and trust suitable people with responsibility.',

    careerListenBeforeDeciding:
      'Gather team perspectives before making major decisions.',

    careerCreative:
      'You may generate original ideas and see problems from new angles.',

    careerExpression:
      'You may fit work involving communication, design, or storytelling.',

    careerScattered: 'Many interests at once may make completion difficult.',

    careerBuildPortfolio:
      'Build visible work samples or a practical portfolio.',

    careerFinishOneThing:
      'Finish one important project before starting several new ones.',

    careerAnalytical:
      'You may be strong at analysis, comparison, and identifying causes.',

    careerPlanning: 'You can turn goals into structured and practical steps.',

    careerPerfectionism:
      'You may delay action while waiting for perfect certainty.',

    careerSetMilestones:
      'Use clear milestones to avoid analyzing for too long.',

    careerDecideWithEnoughData:
      'Decide when enough useful information is available instead of waiting for total certainty.',

    careerTeamwork:
      'You can support collaboration and help teams function smoothly.',

    careerService:
      'You may create value by supporting, caring for, or guiding others.',

    careerPeoplePleasing:
      'You may accept too much work to avoid disappointing others.',

    careerProtectEnergy: 'Protect time and energy with clear work boundaries.',

    careerShowYourContribution:
      'Document and communicate your contribution instead of working invisibly.',

    careerInitiative: 'You tend to take initiative and explore new approaches.',

    careerAdaptability:
      'You adapt quickly when plans, work, or markets change.',

    careerRiskTaking:
      'You may move quickly or underestimate financial and operational risks.',

    careerValidateRisk:
      'Run small tests and validate demand before making a large investment.',

    careerKeepCashReserve:
      'Maintain a reserve before expanding a project or business.',
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
  chantCounter
} as const;

export default en;
