import bazi from './bazi.ko';
import ziwei from './ziwei.ko';
import practice, {
  practiceAudio,
  practiceMeditation,
} from './practice.ko';
import {
  peaceJournal,
  buddhistCalendar,
  altarCustomization,
} from './spiritualFeatures.ko';
import {
  dataSync,
  pdfExport,
  premiumContent,
  smartFeatures,
} from './spiritualFeatures10_13.ko';
const ko = {
  common: {
    cancel: '취소',
    delete: '삭제',
    reset: '재설정',
    loading: '불러오는 중...',
  },

  tabs: {
    home: '홈',
    temple: '대웅전',
    meditation: '명상',
    prayer: '기도',
  },

  home: {
    title: 'iPagoda',

    subtitle: '명상하고 기도하며 자신의 마음에 귀 기울이는 고요한 공간입니다.',

    activities: '활동',

    templeTitle: '대웅전',
    templeSubtitle: '향을 피우고 목탁 두드리기',

    meditationTitle: '명상',
    meditationSubtitle: '5~15분 명상하기',

    prayerTitle: '기도',
    prayerSubtitle: '기도 내용을 비공개로 보관하기',

    audioTitle: '소리',
    audioSubtitle: '목탁과 범종 소리 듣기',

    settingsTitle: '설정',
    settingsSubtitle: '언어 및 앱 정보',

    dailyTitle: '오늘의 알림',

    dailyText:
      '몇 분 동안 천천히 호흡하고 걱정을 내려놓은 뒤, 감사한 일 한 가지를 떠올려 보세요.',
    lunarCalendarTitle: '음력 달력',
    lunarCalendarSubtitle: '음력 초하루와 보름 보기',
    spiritualAudioTitle: '경전과 명상',

    spiritualAudioSubtitle:
      '경전, 명상 음악, 자연의 소리 듣기',
    welcome: '매일의 평온',

    peacefulSpace: '평온한 공간',

    heroTitle: '내면의 평온으로 돌아가기',

    enterTemple: '대웅전 들어가기',

    discover: '둘러보기',

    footerQuote: '마음이 평온하면 어디든 안식처가 됩니다.',
    fortuneStickTitle: '운세 제비',

    fortuneStickSubtitle: '마음을 돌아볼 메시지 뽑기',
    horoscopeTitle: '사주와 길일',

    horoscopeSubtitle: '음력 생일, 띠, 추천 날짜 보기',
     baziTitle: '사주팔자',

  baziSubtitle:
    '사주, 오행, 대운, 해석',
    baziHistoryTitle:
  '저장된 사주',

baziHistorySubtitle:
  '저장한 사주를 확인하고 관리하기',
  baziStage4Title:
  '운세 흐름과 궁합',

baziStage4Subtitle:
  '세운, 월운, 명식 비교 및 날짜 선택',
  },

  temple: {
    title: '대웅전',

    description: '마음을 차분히 하고 각 활동을 천천히 진행하세요.',

    motto: '숨결마다 평온을',

    noIncense: '아직 향을 피우지 않았습니다',

    lightIncense: '향 피우기',

    incenseCount: '피운 향: {{count}}개',

    woodenFish: '목탁',

    woodenFishCount: '{{count}}/108',

    bell: '범종',

    bellCount: '{{count}}회',

    completedTitle: '108번 두드리기를 완료했습니다',

    completedText: '1분 동안 조용히 앉아 호흡을 느껴 보세요.',

    resetCounter: '목탁 횟수 재설정',

    resetDialogTitle: '카운터 재설정',

    resetDialogMessage: '목탁 횟수를 0으로 재설정할까요?',
    longPressHint: '탭하면 1회 재생 • 길게 누르면 연속 재생',

    playingContinuously: '연속 재생 중',

    tapToStop: '탭하여 중지',
    lightIncenseShort: '향 피우기',
    incenseShortCount: '{{count}}개',
    incenseStatsTitle: '향 개수',
  },

meditation: {
  title: '명상',
  screenTitle: '명상',

  subtitle:
    '편안하게 앉아 어깨의 힘을 빼고, 매 순간의 호흡에 부드럽게 집중하세요.',

  breathingTitle: '호흡 명상',

  chooseDuration: '시간 선택',

  minutes: '{{count}}분',
  minuteUnit: '분',
  heroMinutes: '{{count}}분',

  start: '명상 시작',
  pause: '명상 일시정지',
  restart: '다시 명상하기',

  ready: '준비됨',
  paused: '일시정지됨',
  running: '명상 중',

  resetTime: '시간 초기화',

  completedTitle: '명상 완료',

  completedMessage:
    '천천히 호흡하며 지금의 몸과 마음 상태를 느껴보세요.',

  breathTitle: '호흡 안내',

  inhale: '4초 동안 천천히 들이쉬기',

  hold: '2초 동안 숨 멈추기',

  exhale: '6초 동안 천천히 내쉬기',
},

  prayer: {
    title: '기도 일기',

    subtitle:
      '작성한 내용은 이 기기에 저장되며 자동으로 업로드되지 않습니다.',

    placeholder: '기도하는 일이나 감사한 일을 적어 보세요...',

    save: '기도 저장',

    savedItems: '저장된 내용',

    empty: '저장한 기도가 없습니다.',

    requiredTitle: '내용 없음',

    requiredMessage: '먼저 기도 내용을 입력하세요.',

    savedTitle: '저장됨',

    savedMessage: '기도 내용이 이 기기에 비공개로 저장되었습니다.',

    saveErrorTitle: '저장할 수 없음',

    saveErrorMessage: '기도를 저장하는 중 오류가 발생했습니다.',

    deleteDialogTitle: '기도 삭제',

    deleteDialogMessage: '이 내용을 삭제하시겠습니까?',
    writeTitle: '기도 작성',

    writeHint: '내용은 기기에 비공개로 저장됩니다.',

    privateLabel: '비공개',

    savedCount: '{{count}}개 저장됨',

    emptyTitle: '저장된 기도 없음',

    savedPrivately: '비공개 저장',
  },

  audio: {
    title: '사찰 소리',

    subtitle: '대웅전에서 사용하는 소리를 들어 보세요.',

    woodenFishTitle: '목탁 소리',

    playWoodenFish: '목탁 재생',

    bellTitle: '범종 소리',

    playBell: '범종 재생',

    tapOrHoldHint: '탭하면 1회 재생 • 길게 누르면 연속 재생',

    playingContinuously: '연속 재생 중',

    tapToStop: '탭하여 중지',
  },
  settings: {
    title: '설정',

    notifications: '알림',

    notificationsDescription:
      '명상 및 음력 재일 알림은 추후 추가됩니다.',

    language: '언어',

    languageDescription: '앱에서 사용할 언어를 선택하세요.',

    chooseLanguage: '언어 선택',

    privacy: '개인정보',

    privacyDescription:
      '기도 일기는 현재 이 기기에만 저장됩니다.',

    information: '정보',

    version: '온라인 사찰 버전 0.0.1',
  },
  lunarCalendar: {
    title: '음력 달력',

    subtitle: '음력 날짜, 초하루, 보름을 확인하세요.',

    today: '오늘',

    firstDay: '음력 초하루',

    fullMoon: '보름',

    solarDate: '양력 날짜',

    lunarDate: '음력 날짜',

    lunarMonth: '음력 {{month}}월',

    leapMonth: '윤달',

    firstDayTitle: '오늘은 음력 초하루입니다',

    fullMoonTitle: '오늘은 보름입니다',

    observanceMessage:
      '잠시 시간을 내어 명상하고 돌아보거나 경전을 들어 보세요.',
  },
  lunarNotifications: {
    channelName: '음력 알림',

    channelDescription: '음력 초하루와 보름 알림.',

    settingTitle: '초하루 및 보름 알림',

    settingDescription:
      '음력 초하루와 보름에 알림을 받습니다.',

    reminderTime: '알림 시간',

    settingNote:
      '앱은 앞으로 12개월의 알림을 예약하고 실행할 때 갱신합니다.',

    firstDayTitle: '오늘은 음력 초하루입니다',

    fullMoonTitle: '오늘은 보름입니다',

    reminderBody:
      '몇 분 동안 조용히 명상하거나 기도하거나 경전을 들어 보세요.',

    permissionTitle: '알림이 꺼져 있습니다',

    permissionMessage:
      '음력 알림을 받으려면 기기 설정에서 알림을 허용하세요.',

    enabledTitle: '음력 알림이 켜졌습니다',

    enabledMessage: '{{time}}에 {{count}}개의 알림이 예약되었습니다.',

    errorTitle: '알림을 예약할 수 없음',

    errorMessage:
      '음력 알림을 예약하는 중 오류가 발생했습니다.',
  },
  spiritualAudio: {
    title: '경전과 명상',

    subtitle:
      '휴식, 명상, 마음챙김을 위한 평온한 소리를 들어 보세요.',

    searchPlaceholder: '오디오 검색...',

    playing: '재생 중',

    paused: '일시정지됨',

    empty: '일치하는 오디오를 찾을 수 없습니다.',

    categories: {
      sutra: '경전',
      meditation: '명상',
      nature: '자연',
    },

    tracks: {
      greatCompassion: {
        title: '대비주',

        description: '휴식과 마음챙김을 위한 평온한 독송입니다.',
      },

      heartSutra: {
        title: '반야심경',

        description: '차분하고 엄숙한 반야심경 독송입니다.',
      },

      buddhaName: {
        title: '염불',

        description: '마음을 평온하게 하는 부드러운 염불입니다.',
      },

      breathing: {
        title: '호흡 명상',

        description: '호흡에 집중하며 몸을 천천히 이완하세요.',
      },

      deepRelaxation: {
        title: '깊은 이완',

        description: '휴식과 편안한 잠을 위한 부드러운 명상 오디오입니다.',
      },

      singingBowl: {
        title: '싱잉볼 명상',

        description: '집중과 내면의 평온을 돕는 싱잉볼 소리입니다.',
      },

      templeRain: {
        title: '사찰의 빗소리',

        description: '고요한 사찰 분위기 속 부드러운 빗소리입니다.',
      },

      forestBirds: {
        title: '숲속 새소리',

        description: '새소리와 나뭇잎 스치는 소리가 어우러진 자연의 숲 분위기입니다.',
      },

      flowingStream: {
        title: '흐르는 시냇물',

        description: '휴식과 수면을 위한 부드러운 시냇물 소리입니다.',
      },
    },
  },
  dailyPracticeNotifications: {
    channelName: '매일 수행 알림',

    channelDescription: '명상과 경전 수행을 위한 매일 알림.',

    settingTitle: '명상 또는 경전 알림',

    settingDescription: '선택한 시간에 매일 알림을 받습니다.',

    practiceType: '알림 유형',

    typeMeditation: '명상',

    typeSutra: '경전',

    typeBoth: '둘 다',

    reminderTime: '알림 시간',

    previewLabel: '알림 미리보기',

    settingNote: '알림은 선택한 시간에 매일 반복됩니다.',

    meditationTitle: '명상할 시간입니다',

    meditationBody: '천천히 몇 번 호흡하며 자신에게 조용한 시간을 주세요.',

    sutraTitle: '경전을 독송하거나 들을 시간입니다',

    sutraBody:
      '몇 분 동안 조용히 독송하거나 들으며 마음을 가라앉히세요.',

    bothTitle: '매일 수행할 시간입니다',

    bothBody:
      '짧은 명상을 하거나 경전을 들으며 평온한 시간을 가져 보세요.',

    permissionTitle: '알림이 꺼져 있습니다',

    permissionMessage: '기기 설정에서 알림을 허용하세요.',

    enabledTitle: '매일 알림이 켜졌습니다',

    enabledMessage: '앱이 매일 {{time}}에 알려드립니다.',

    errorTitle: '알림을 예약할 수 없음',

    errorMessage: '매일 알림을 예약하는 중 오류가 발생했습니다.',
  },
  fortuneStick: {
    title: '운세 제비',

    subtitle:
      '마음을 가라앉히고 걱정되는 일을 떠올린 뒤, 자신을 돌아볼 메시지를 뽑아 보세요.',

    intentionLabel: '무엇을 기도하고 있나요?',

    intentionPlaceholder: '선택 사항: 지금 마음에 있는 일을 적어 보세요...',

    drawing: '운세 제비를 뽑는 중...',

    drawHint: '천천히 호흡하고 마음을 가라앉힌 뒤 아래 버튼을 누르세요.',

    drawingButton: '뽑는 중',

    drawButton: '운세 제비 뽑기',

    stickNumber: '번호',

    interpretationTitle: '해석',

    adviceTitle: '조언',

    drawAgain: '다시 뽑기',

    save: '저장',

    saving: '저장 중...',

    savedTitle: '운세가 저장되었습니다',

    savedMessage: '운세가 기기에 저장되었습니다.',

    saveErrorTitle: '저장할 수 없음',

    saveErrorMessage: '운세를 저장하는 중 오류가 발생했습니다.',

    historyTitle: '저장된 운세',

    historyCount: '{{count}}개 저장됨',

    emptyHistory: '아직 저장한 운세가 없습니다.',

    deleteTitle: '저장한 운세 삭제',

    deleteMessage: '이 운세를 삭제하시겠습니까?',

    disclaimer:
      '운세 제비 내용은 개인적인 성찰을 위한 것이며 전문적인 조언이나 현실의 결정을 대신할 수 없습니다.',

    levels: {
      great: '대길',
      good: '길',
      neutral: '보통',
      caution: '주의',
    },
  },
  horoscope: {
    title: '사주와 길일',

    subtitle:
      '양력 생년월일을 입력하면 음력 날짜, 띠, 중요한 일에 추천되는 날짜를 확인할 수 있습니다.',

    birthDateTitle: '양력 생년월일',

    day: '일',

    month: '월',

    year: '년',

    activityTitle: '활동',

    searchPeriod: '검색 기간',

    monthCount: '{{count}}개월',

    calculate: '변환하고 추천 날짜 찾기',

    calculating: '계산 중...',

    invalidDateTitle: '생년월일이 올바르지 않습니다',

    invalidDateMessage: '올바른 양력 날짜를 입력하세요.',

    profileTitle: '출생 정보',

    lunarBirthDate: '음력 생년월일',

    zodiac: '띠',

    canChiYear: '간지 연도',

    leapMonth: '윤달',

    resultsTitle: '추천 날짜',

    resultsSubtitle: '날짜는 문화적 참고 점수 순으로 정렬됩니다.',

    lunarDateLine: '음력 {{year}}년 {{month}}월 {{day}}일',

    suitableReasons: '유리한 점',

    cautionReasons: '고려할 점',

    disclaimer:
      '결과는 문화적 참고와 개인적인 성찰을 위한 것입니다. 결혼, 건축, 투자 또는 기타 중요한 결정의 유일한 근거로 사용해서는 안 됩니다.',

    activities: {
      wedding: '결혼',
      construction: '건축',
      opening: '개업',
      moving: '이사',
      travel: '여행',
    },

    ratings: {
      excellent: '대길',
      good: '길',
      fair: '무난함',
      caution: '검토 필요',
    },

    reasons: {
      hoangDao: '길일',

      hacDao: '흉일',

      traditionalSuitable: '전통적으로 이 활동에 적합한 날',

      traditionalAvoid: '전통적으로 이 활동을 피하는 날',

      zodiacClash: '일지와 출생 띠가 충합니다',

      sixHarmony: '육합 관계',

      threeHarmony: '삼합 관계',

      nguyetKy: '전통 월기일',

      tamNuong: '전통 삼낭일',

      preferredLunarDay: '참고 규칙에서 선호하는 음력 날짜',

      weekendConvenient: '주말이라 편리함',
      birthHourClash: '일지와 출생 시지가 충합니다',

      birthHourHarmony: '일지와 출생 시지가 육합을 이룹니다',

      birthHourThreeHarmony:
        '일지와 출생 시지가 삼합을 이룹니다',

      birthLunarDayResonance:
        '음력 날짜가 음력 생일과 대응합니다',

      school_folk: '종합 민속 방식으로 점수 계산',

      school_bazi: '사주 참고 프리셋으로 점수 계산',

      school_ziwei: '자미두수 참고 프리셋으로 점수 계산',

      school_almanac: '전통 역법 프리셋으로 점수 계산',
    },
  },
  subtitleExtended:
    '양력 생년월일, 출생 시간, 성별, 해석 방식을 입력해 음력 정보와 추천 날짜를 확인하세요.',

  birthTimeTitle: '출생 시간',
  hour: '시',
  minute: '분',
  birthTimeHint: '출생지 현지 시간',

  genderTitle: '성별',

  genders: {
    male: '남성',
    female: '여성',
    unspecified: '선택 안 함',
  },

  schoolTitle: '해석 방식',

  schools: {
    folkTitle: '종합 민속 방식',

    folkDescription:
      '띠의 관계, 길일, 음력 날짜, 전통 금기 규칙을 균형 있게 반영합니다.',

    baziTitle: '사주 참고',

    baziDescription:
      '일지, 출생 연도의 띠, 출생 시지의 관계를 더 중요하게 봅니다.',

    ziweiTitle: '자미두수 참고',

    ziweiDescription:
      '음력 출생 정보, 출생 시간, 성별, 운행 방향을 단순화한 모델로 사용합니다.',

    almanacTitle: '전통 역법',

    almanacDescription:
      '적합한 활동, 피해야 할 활동, 길일, 전통 금기일을 우선합니다.',
  },

  selectedMethod: '선택한 방식',

  calculateExtended: '프로필 작성 및 추천 날짜 찾기',

  invalidInputTitle: '올바르지 않은 정보',

  invalidTimeMessage: '출생 시간은 00:00부터 23:59 사이여야 합니다.',

  birthHourBranch: '출생 시지',

  profileGender: '성별',

  profileSchool: '해석 방식',

  yearPolarity: '출생 연도의 음양',

  cycleDirection: '참고 운행 방향',

  polarity: {
    yang: '양',
    yin: '음',
  },

  directions: {
    forward: '순행',
    backward: '역행',
    neutral: '보통',
  },

  schoolNotes: {
    folk: '일반 민속과 전통 역법 규칙을 결합한 균형형 참고 모델입니다.',

    bazi: '점수는 출생 연도의 띠와 출생 시지를 강조합니다. 완전한 사주 분석은 아닙니다.',

    ziwei:
      '점수는 음력 출생 정보, 출생 시간, 성별, 운행 방향을 단순화해 사용합니다.',

    almanac:
      '점수는 전통적인 길흉 활동과 길일을 강하게 우선합니다.',
  },

  resultsSubtitleExtended:
    '날짜는 선택한 방식, 출생 띠, 출생 시간에 따라 순위가 매겨집니다.',

  disclaimerExtended:
    '이것은 음력 날짜, 띠의 관계, 출생 시간, 해석 프리셋을 바탕으로 한 단순화된 문화 참고 모델입니다. 완전한 자미두수나 사주 분석이 아니며 중요한 결정의 유일한 근거로 사용해서는 안 됩니다.',
  lifeOverviewTitle: '연애와 직업',

  lifeOverviewSubtitle:
    '출생 정보와 선택한 해석 방식에 기반한 성찰용 분석입니다.',

  lifeStrengths: '강점',

  lifeCautions: '균형이 필요한 점',

  lifeAdvice: '성장 제안',

  lifeRatings: {
    veryStrong: '강한 에너지',
    favorable: '유리함',
    balanced: '균형형',
    developing: '발전 중',
  },

  love: {
    title: '연애',

    styles: {
      warm: '따뜻하고 애정이 깊음',
      steady: '안정적이고 진실함',
      independent: '연애에서도 독립적임',
      sensitive: '섬세하고 직관적임',
    },

    summaries: {
      warm: '눈에 보이는 배려로 사랑을 표현하고 자연스럽게 따뜻한 분위기를 만드는 경향이 있습니다.',

      steady:
        '신뢰와 안정, 시간에 따라 성장하는 관계를 중요하게 생각합니다.',

      independent:
        '연애에서는 존중, 개인 공간, 솔직한 소통이 필요합니다.',

      sensitive:
        '감정을 깊이 느끼고 공감도 잘하지만 정서적 안전감도 필요합니다.',
    },
  },

  career: {
    title: '직업',

    styles: {
      leadership: '리더십 지향',
      creative: '창의적 방향',
      analytical: '분석적 사고',
      supportive: '지원과 협업',
      entrepreneurial: '기업가적 에너지',
    },

    summaries: {
      leadership:
        '책임, 조율, 방향 제시가 필요한 역할에서 강점을 보일 수 있습니다.',

      creative:
        '아이디어를 만들고 디자인하거나 메시지를 전달할 때 좋은 성과를 낼 수 있습니다.',

      analytical:
        '정보 처리, 계획, 구조화된 문제 해결에 강할 수 있습니다.',

      supportive:
        '사람과 팀에 가치를 만드는 협업 환경에서 성장할 수 있습니다.',

      entrepreneurial:
        '새로운 기회가 나타나면 주도적으로 실험하고 빠르게 적응하는 경향이 있습니다.',
    },
  },

  insights: {
    loveHarmony:
      '출생 연도의 띠와 출생 시지는 조화로운 감정 패턴을 시사합니다.',

    loveThreeHarmony:
      '삼합의 패턴은 서로의 이해를 쌓는 데 도움이 될 수 있습니다.',

    loveInnerConflict:
      '내면의 욕구가 충돌해 친밀함과 개인 공간 사이에서 흔들릴 수 있습니다.',

    loveSelfAwareness:
      '자신의 감정적 욕구를 비교적 분명하게 인식할 수 있습니다.',

    loveWarmHeart:
      '자연스럽게 배려를 표현하고 상대가 정서적으로 안전하다고 느끼게 합니다.',

    loveExpressive:
      '말이나 행동으로 애정을 표현할 수 있습니다.',

    loveOvergiving:
      '너무 많이 베풀고 같은 만큼 돌려받지 못하면 실망할 수 있습니다.',

    loveSetBoundaries:
      '항상 다른 사람을 우선하기보다 건강한 경계를 유지하세요.',

    loveReceiveCare:
      '늘 돌보는 역할만 하지 말고, 자신도 배려를 받아들이세요.',

    loveLoyal: '관계에서 충실함과 일관성을 중요하게 생각합니다.',

    lovePatient: '시간을 두고 인내심 있게 신뢰와 애정을 쌓을 수 있습니다.',

    loveReserved:
      '감정을 오래 숨기면 자신의 욕구가 상대에게 잘 전달되지 않을 수 있습니다.',

    loveSpeakClearly:
      '욕구와 감정이 부담으로 쌓이기 전에 표현하세요.',

    loveCreateRituals:
      '작은 공동 습관이 정서적 안정감을 높여 줍니다.',

    loveRespectsSpace:
      '관계 안에서도 개성과 개인 공간을 존중합니다.',

    loveHonest: '직접적이고 경계가 분명한 관계를 선호하는 경향이 있습니다.',

    loveNeedsFreedom:
      '과도한 통제나 의존에 답답함을 느낄 수 있습니다.',

    loveBalanceFreedom:
      '개인의 자유와 함께함, 책임감 사이의 균형을 맞추세요.',

    loveSharePlans: '상대가 소외감을 느끼지 않도록 계획을 일찍 공유하세요.',

    loveEmpathetic:
      '감정 변화를 잘 알아차리고 다른 사람의 마음을 이해할 수 있습니다.',

    loveIntuitive: '관계의 흐름에 대한 직관이 강할 수 있습니다.',

    loveOverthinking:
      '불분명한 소통이나 침묵은 과도한 생각으로 이어질 수 있습니다.',

    loveTrustSlowly:
      '너무 빨리 마음을 열려고 하지 말고 천천히 신뢰를 쌓으세요.',

    loveAskDirectly:
      '상대의 생각을 추측하기보다 직접 물어보세요.',

    careerPersistent:
      '목표를 유지하며 꾸준히 나아갈 수 있습니다.',

    careerReflective:
      '경험에서 배우고 앞으로 나아가기 전에 조정할 수 있습니다.',

    careerActionOriented: '주도적으로 행동하며 추진력을 만드는 경향이 있습니다.',

    careerObservant: '다른 사람이 놓칠 수 있는 맥락과 세부 사항을 잘 알아차립니다.',

    careerLeadership:
      '이끌고 조율하며 방향을 유지하는 능력이 있을 수 있습니다.',

    careerResponsibility:
      '결정과 결과에 책임을 지려는 태도가 있습니다.',

    careerOvercontrol:
      '신뢰가 낮을 때 일을 너무 많이 떠맡거나 세부 사항을 과도하게 통제할 수 있습니다.',

    careerDelegate:
      '역할을 명확히 맡기고 적절한 사람을 신뢰하세요.',

    careerListenBeforeDeciding:
      '중요한 결정을 내리기 전에 팀의 의견을 모으세요.',

    careerCreative:
      '독창적인 아이디어를 내고 문제를 새로운 시각으로 볼 수 있습니다.',

    careerExpression:
      '소통, 디자인, 스토리텔링과 관련된 일이 잘 맞을 수 있습니다.',

    careerScattered: '한꺼번에 관심사가 너무 많으면 마무리가 어려울 수 있습니다.',

    careerBuildPortfolio:
      '눈에 보이는 작업물이나 실용적인 포트폴리오를 만드세요.',

    careerFinishOneThing:
      '여러 새 일을 시작하기 전에 중요한 프로젝트 하나를 먼저 끝내세요.',

    careerAnalytical:
      '분석, 비교, 원인 파악에 강할 수 있습니다.',

    careerPlanning: '목표를 구조적이고 실용적인 단계로 바꿀 수 있습니다.',

    careerPerfectionism:
      '완벽한 확신을 기다리다 행동이 늦어질 수 있습니다.',

    careerSetMilestones:
      '분석이 길어지지 않도록 명확한 중간 목표를 설정하세요.',

    careerDecideWithEnoughData:
      '완전한 확신을 기다리기보다 충분한 유용한 정보가 모였을 때 결정하세요.',

    careerTeamwork:
      '협업을 지원하고 팀이 원활하게 움직이도록 도울 수 있습니다.',

    careerService:
      '다른 사람을 지원하고 돌보거나 안내함으로써 가치를 만들 수 있습니다.',

    careerPeoplePleasing:
      '다른 사람을 실망시키지 않으려다 일을 너무 많이 맡을 수 있습니다.',

    careerProtectEnergy: '명확한 업무 경계로 시간과 에너지를 보호하세요.',

    careerShowYourContribution:
      '보이지 않게 일하기보다 자신의 기여를 기록하고 알리세요.',

    careerInitiative: '주도적으로 움직이며 새로운 방법을 탐색하는 경향이 있습니다.',

    careerAdaptability:
      '계획, 업무, 시장이 변해도 빠르게 적응합니다.',

    careerRiskTaking:
      '너무 빠르게 움직이거나 재무·운영 위험을 과소평가할 수 있습니다.',

    careerValidateRisk:
      '큰 투자를 하기 전에 작은 테스트로 수요를 검증하세요.',

    careerKeepCashReserve:
      '프로젝트나 사업을 확장하기 전에 예비 자금을 확보하세요.',
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

export default ko;
