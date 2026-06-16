import bazi from './bazi.zh';
import ziwei from './ziwei.zh';
import practice, {
  practiceAudio,
  practiceMeditation,
} from './practice.zh';
import {
  peaceJournal,
  buddhistCalendar,
  altarCustomization,
} from './spiritualFeatures.zh';
import {
  dataSync,
  pdfExport,
  premiumContent,
  smartFeatures,
} from './spiritualFeatures10_13.zh';
const zh = {
  common: {
    cancel: '取消',
    delete: '删除',
    reset: '重置',
    loading: '加载中...',
  },

  tabs: {
    home: '首页',
    temple: '佛殿',
    meditation: '冥想',
    prayer: '祈愿',
  },

  home: {
    title: 'iPagoda',

    subtitle: '一个可以冥想、祈愿并倾听内心的宁静空间。',

    activities: '活动',

    templeTitle: '大雄宝殿',
    templeSubtitle: '上香并敲木鱼',

    meditationTitle: '冥想',
    meditationSubtitle: '冥想 5 到 15 分钟',

    prayerTitle: '祈愿',
    prayerSubtitle: '私密保存你的祈愿',

    audioTitle: '声音',
    audioSubtitle: '聆听木鱼与寺院钟声',

    settingsTitle: '设置',
    settingsSubtitle: '语言与应用信息',

    dailyTitle: '今日提醒',

    dailyText:
      '花几分钟缓慢呼吸，放下忧虑，并想一件让你感恩的事。',
    lunarCalendarTitle: '农历',
    lunarCalendarSubtitle: '查看农历初一和十五',
    spiritualAudioTitle: '佛经与冥想',

    spiritualAudioSubtitle:
      '聆听佛经、冥想音乐与自然声音',
    welcome: '日日安宁',

    peacefulSpace: '宁静空间',

    heroTitle: '回归内心安宁',

    enterTemple: '进入大雄宝殿',

    discover: '探索',

    footerQuote: '心若安定，处处皆是净土。',
    fortuneStickTitle: '求签',

    fortuneStickSubtitle: '抽取一支签，静心观照',
    horoscopeTitle: '命理与择吉',

    horoscopeSubtitle: '查看农历生日、生肖与推荐吉日',
     baziTitle: '八字命盘',

  baziSubtitle:
    '四柱、五行、大运与命理解读',
    baziHistoryTitle:
  '已保存的八字命盘',

baziHistorySubtitle:
  '查看并管理已保存的八字命盘',
  baziStage4Title:
  '运势与合盘',

baziStage4Subtitle:
  '流年、流月、命盘比较与择日',
  },

  temple: {
    title: '大雄宝殿',

    description: '保持心境平和，慢慢完成每项活动。',

    motto: '一呼一吸皆安然',

    noIncense: '尚未点香',

    lightIncense: '上香',

    incenseCount: '已点：{{count}} 支香',

    woodenFish: '木鱼',

    woodenFishCount: '{{count}}/108',

    bell: '寺院钟',

    bellCount: '{{count}} 次',

    completedTitle: '你已完成 108 次敲击',

    completedText: '静坐一分钟，觉察自己的呼吸。',

    resetCounter: '重置木鱼计数',

    resetDialogTitle: '重置计数',

    resetDialogMessage: '要将木鱼计数重置为 0 吗？',
    longPressHint: '轻点播放一次 • 长按连续播放',

    playingContinuously: '正在连续播放',

    tapToStop: '轻点停止',
    lightIncenseShort: '上香',
    incenseShortCount: '{{count}} 支',
    incenseStatsTitle: '香支数',
  },

meditation: {
  title: '冥想',
  screenTitle: '冥想',

  subtitle:
    '舒适地坐下，放松肩膀，轻轻专注于每一次呼吸。',

  breathingTitle: '呼吸冥想',

  chooseDuration: '选择时长',

  minutes: '{{count}} 分钟',
  minuteUnit: '分钟',
  heroMinutes: '{{count}} 分钟',

  start: '开始冥想',
  pause: '暂停冥想',
  restart: '重新冥想',

  ready: '准备就绪',
  paused: '已暂停',
  running: '正在冥想',

  resetTime: '重置时间',

  completedTitle: '冥想完成',

  completedMessage:
    '请缓慢呼吸，并感受此刻自己的身心状态。',

  breathTitle: '呼吸指导',

  inhale: '缓慢吸气 4 秒',

  hold: '屏息 2 秒',

  exhale: '缓慢呼气 6 秒',
},

  prayer: {
    title: '祈愿日记',

    subtitle:
      '你的内容仅保存在本设备上，不会自动上传。',

    placeholder: '写下你的祈愿或感恩之事...',

    save: '保存祈愿',

    savedItems: '已保存内容',

    empty: '你尚未保存任何祈愿。',

    requiredTitle: '没有内容',

    requiredMessage: '请先输入你的祈愿。',

    savedTitle: '已保存',

    savedMessage: '你的祈愿已私密保存在本设备上。',

    saveErrorTitle: '无法保存',

    saveErrorMessage: '保存祈愿时发生错误。',

    deleteDialogTitle: '删除祈愿',

    deleteDialogMessage: '确定要删除这条内容吗？',
    writeTitle: '写下祈愿',

    writeHint: '你的内容将私密保存在设备上。',

    privateLabel: '私密',

    savedCount: '已保存 {{count}} 条',

    emptyTitle: '暂无已保存的祈愿',

    savedPrivately: '已私密保存',
  },

  audio: {
    title: '寺院声音',

    subtitle: '聆听大雄宝殿中使用的声音。',

    woodenFishTitle: '木鱼声',

    playWoodenFish: '播放木鱼声',

    bellTitle: '寺院钟声',

    playBell: '播放寺院钟声',

    tapOrHoldHint: '轻点播放一次 • 长按连续播放',

    playingContinuously: '正在连续播放',

    tapToStop: '轻点停止',
  },
  settings: {
    title: '设置',

    notifications: '通知',

    notificationsDescription:
      '冥想与农历斋日提醒将在后续加入。',

    language: '语言',

    languageDescription: '选择应用使用的语言。',

    chooseLanguage: '选择语言',

    privacy: '隐私',

    privacyDescription:
      '你的祈愿日记目前仅保存在本设备上。',

    information: '信息',

    version: '在线寺院版本 0.0.1',
  },
  lunarCalendar: {
    title: '农历',

    subtitle: '查看农历日期、初一与十五。',

    today: '今天',

    firstDay: '农历初一',

    fullMoon: '农历十五',

    solarDate: '公历日期',

    lunarDate: '农历日期',

    lunarMonth: '农历 {{month}} 月',

    leapMonth: '闰月',

    firstDayTitle: '今天是农历初一',

    fullMoonTitle: '今天是农历十五',

    observanceMessage:
      '留一点时间冥想、反思或聆听佛经。',
  },
  lunarNotifications: {
    channelName: '农历提醒',

    channelDescription: '农历初一和十五提醒。',

    settingTitle: '初一与十五提醒',

    settingDescription:
      '在农历初一和十五接收通知。',

    reminderTime: '提醒时间',

    settingNote:
      '应用会安排未来 12 个月的提醒，并在打开时自动更新。',

    firstDayTitle: '今天是农历初一',

    fullMoonTitle: '今天是农历十五',

    reminderBody:
      '花几分钟安静地冥想、祈愿或聆听佛经。',

    permissionTitle: '通知已关闭',

    permissionMessage:
      '请在设备设置中允许通知，以接收农历提醒。',

    enabledTitle: '农历提醒已开启',

    enabledMessage: '已在 {{time}} 安排 {{count}} 条提醒。',

    errorTitle: '无法安排提醒',

    errorMessage:
      '安排农历提醒时发生错误。',
  },
  spiritualAudio: {
    title: '佛经与冥想',

    subtitle:
      '聆听宁静音频，用于放松、冥想与正念练习。',

    searchPlaceholder: '搜索音频...',

    playing: '播放中',

    paused: '已暂停',

    empty: '未找到匹配的音频。',

    categories: {
      sutra: '佛经',
      meditation: '冥想',
      nature: '自然',
    },

    tracks: {
      greatCompassion: {
        title: '大悲咒',

        description: '有助于放松与正念的宁静持诵。',
      },

      heartSutra: {
        title: '心经',

        description: '平静庄严的《心经》诵读。',
      },

      buddhaName: {
        title: '念佛',

        description: '温和的念佛声，让内心安宁。',
      },

      breathing: {
        title: '呼吸冥想',

        description: '专注呼吸，逐渐放松身体。',
      },

      deepRelaxation: {
        title: '深度放松',

        description: '适合休息与安稳睡眠的柔和冥想音频。',
      },

      singingBowl: {
        title: '颂钵冥想',

        description: '颂钵声有助于专注与内心平静。',
      },

      templeRain: {
        title: '寺院雨声',

        description: '宁静寺院氛围中的轻柔雨声。',
      },

      forestBirds: {
        title: '森林鸟鸣',

        description: '鸟鸣与树叶沙沙声交织的自然森林氛围。',
      },

      flowingStream: {
        title: '潺潺溪流',

        description: '柔和溪流声，适合放松与睡眠。',
      },
    },
  },
  dailyPracticeNotifications: {
    channelName: '每日修习提醒',

    channelDescription: '每日提醒冥想与诵经。',

    settingTitle: '冥想或诵经提醒',

    settingDescription: '每天在你选择的时间接收通知。',

    practiceType: '提醒类型',

    typeMeditation: '冥想',

    typeSutra: '佛经',

    typeBoth: '两者',

    reminderTime: '提醒时间',

    previewLabel: '通知预览',

    settingNote: '通知会在所选时间每天重复。',

    meditationTitle: '该冥想了',

    meditationBody: '缓慢呼吸几次，给自己片刻宁静。',

    sutraTitle: '该诵经或听经了',

    sutraBody:
      '花几分钟安静诵读、聆听，让心沉静下来。',

    bothTitle: '该进行每日修习了',

    bothBody:
      '选择一段简短冥想或聆听佛经，享受片刻安宁。',

    permissionTitle: '通知已关闭',

    permissionMessage: '请在设备设置中允许通知。',

    enabledTitle: '每日提醒已开启',

    enabledMessage: '应用会在每天 {{time}} 提醒你。',

    errorTitle: '无法安排提醒',

    errorMessage: '安排每日提醒时发生错误。',
  },
  fortuneStick: {
    title: '求签',

    subtitle:
      '静下心来，想着你所关心的事，抽取一支签作为观照。',

    intentionLabel: '你在祈愿什么？',

    intentionPlaceholder: '可选：写下你此刻所想...',

    drawing: '正在求签...',

    drawHint: '缓慢呼吸，安定心神，然后点击下方按钮。',

    drawingButton: '求签中',

    drawButton: '求一支签',

    stickNumber: '签号',

    interpretationTitle: '解读',

    adviceTitle: '建议',

    drawAgain: '再求一签',

    save: '保存',

    saving: '保存中...',

    savedTitle: '签文已保存',

    savedMessage: '签文已保存到设备。',

    saveErrorTitle: '无法保存',

    saveErrorMessage: '保存签文时发生错误。',

    historyTitle: '已保存的签文',

    historyCount: '已保存 {{count}} 条',

    emptyHistory: '你尚未保存任何签文。',

    deleteTitle: '删除已保存的签文',

    deleteMessage: '确定要删除这条签文吗？',

    disclaimer:
      '求签内容仅供个人观照，不应替代专业建议或现实决策。',

    levels: {
      great: '上吉',
      good: '吉',
      neutral: '平',
      caution: '谨慎',
    },
  },
  horoscope: {
    title: '命理与择吉',

    subtitle:
      '输入公历生日，查看农历日期、生肖以及重要事项的推荐日期。',

    birthDateTitle: '公历生日',

    day: '日',

    month: '月',

    year: '年',

    activityTitle: '事项',

    searchPeriod: '查找范围',

    monthCount: '{{count}} 个月',

    calculate: '转换并查找推荐日期',

    calculating: '计算中...',

    invalidDateTitle: '出生日期无效',

    invalidDateMessage: '请输入有效的公历日期。',

    profileTitle: '出生信息',

    lunarBirthDate: '农历生日',

    zodiac: '生肖',

    canChiYear: '干支年',

    leapMonth: '闰月',

    resultsTitle: '推荐日期',

    resultsSubtitle: '日期按文化参考评分排序。',

    lunarDateLine: '农历 {{year}} 年 {{month}} 月 {{day}} 日',

    suitableReasons: '有利因素',

    cautionReasons: '注意事项',

    disclaimer:
      '结果仅供文化参考与个人观照，不应作为婚姻、建造、投资或其他重要决定的唯一依据。',

    activities: {
      wedding: '婚嫁',
      construction: '建造',
      opening: '开业',
      moving: '搬家',
      travel: '出行',
    },

    ratings: {
      excellent: '上吉',
      good: '吉',
      fair: '尚可',
      caution: '需斟酌',
    },

    reasons: {
      hoangDao: '黄道吉日',

      hacDao: '黑道日',

      traditionalSuitable: '传统历法认为适合此事',

      traditionalAvoid: '传统历法认为不宜此事',

      zodiacClash: '日支与出生生肖相冲',

      sixHarmony: '六合关系',

      threeHarmony: '三合关系',

      nguyetKy: '传统月忌日',

      tamNuong: '传统三娘煞日',

      preferredLunarDay: '参考规则中的优选农历日',

      weekendConvenient: '周末较方便',
      birthHourClash: '日支与出生时支相冲',

      birthHourHarmony: '日支与出生时支构成六合',

      birthHourThreeHarmony:
        '日支与出生时支构成三合',

      birthLunarDayResonance:
        '该农历日与农历生日相应',

      school_folk: '按综合民俗方法评分',

      school_bazi: '按八字参考预设评分',

      school_ziwei: '按紫微斗数参考预设评分',

      school_almanac: '按传统历法预设评分',
    },
  },
  subtitleExtended:
    '输入公历生日、出生时间、性别与解读方法，查看农历信息与推荐日期。',

  birthTimeTitle: '出生时间',
  hour: '时',
  minute: '分',
  birthTimeHint: '出生地当地时间',

  genderTitle: '性别',

  genders: {
    male: '男',
    female: '女',
    unspecified: '未指定',
  },

  schoolTitle: '解读方法',

  schools: {
    folkTitle: '综合民俗法',

    folkDescription:
      '综合考虑生肖关系、吉日、农历日期与传统避忌规则。',

    baziTitle: '八字参考',

    baziDescription:
      '更重视日支、出生年生肖与出生时支之间的关系。',

    ziweiTitle: '紫微斗数参考',

    ziweiDescription:
      '以简化模型使用农历出生信息、出生时间、性别与行运方向。',

    almanacTitle: '传统历法',

    almanacDescription:
      '优先考虑宜忌事项、吉日与传统禁忌日。',
  },

  selectedMethod: '已选方法',

  calculateExtended: '建立资料并查找推荐日期',

  invalidInputTitle: '信息无效',

  invalidTimeMessage: '出生时间必须在 00:00 到 23:59 之间。',

  birthHourBranch: '出生时支',

  profileGender: '性别',

  profileSchool: '解读方法',

  yearPolarity: '出生年阴阳',

  cycleDirection: '参考行运方向',

  polarity: {
    yang: '阳',
    yin: '阴',
  },

  directions: {
    forward: '顺行',
    backward: '逆行',
    neutral: '平',
  },

  schoolNotes: {
    folk: '结合常见民俗与传统历法规则的平衡参考模型。',

    bazi: '评分侧重出生年生肖与出生时支；这并非完整八字命盘。',

    ziwei:
      '评分以简化方式使用农历出生信息、出生时间、性别与行运方向。',

    almanac:
      '评分高度优先传统宜忌事项与历法吉日。',
  },

  resultsSubtitleExtended:
    '日期根据所选方法、出生生肖与出生时辰排序。',

  disclaimerExtended:
    '这是基于农历日期、生肖关系、出生时间与解读预设的简化文化参考模型，并非完整的紫微斗数或八字命盘，不应作为重要决定的唯一依据。',
  lifeOverviewTitle: '感情与事业',

  lifeOverviewSubtitle:
    '根据出生信息与所选解读方法提供的观照性分析。',

  lifeStrengths: '优势',

  lifeCautions: '需要平衡的方面',

  lifeAdvice: '成长建议',

  lifeRatings: {
    veryStrong: '能量强',
    favorable: '较有利',
    balanced: '较平衡',
    developing: '发展中',
  },

  love: {
    title: '感情',

    styles: {
      warm: '温暖且重感情',
      steady: '稳定而真诚',
      independent: '感情中较独立',
      sensitive: '敏感而直觉强',
    },

    summaries: {
      warm: '你倾向通过明显的关心表达爱意，并自然营造温暖的情感氛围。',

      steady:
        '你重视信任、稳定以及随时间成长的关系。',

      independent:
        '你在感情中需要尊重、个人空间与坦诚沟通。',

      sensitive:
        '你感受深刻、容易共情，同时也需要情绪上的安全感。',
    },
  },

  career: {
    title: '事业',

    styles: {
      leadership: '领导导向',
      creative: '创意导向',
      analytical: '分析思维',
      supportive: '支持与协作',
      entrepreneurial: '创业能量',
    },

    summaries: {
      leadership:
        '你可能适合需要责任、协调与方向感的岗位。',

      creative:
        '在提出创意、设计或传达信息时，你可能表现出色。',

      analytical:
        '你可能擅长处理信息、规划并解决结构化问题。',

      supportive:
        '你可能在为个人与团队创造价值的协作环境中成长。',

      entrepreneurial:
        '当新机会出现时，你往往主动、愿意尝试且适应迅速。',
    },
  },

  insights: {
    loveHarmony:
      '出生年生肖与出生时支显示出较和谐的情感模式。',

    loveThreeHarmony:
      '三合格局可能有助于建立共同理解。',

    loveInnerConflict:
      '内在需求有时会冲突，使你在亲密与个人空间之间拉扯。',

    loveSelfAwareness:
      '你可能较清楚自己的情感需求。',

    loveWarmHeart:
      '你自然地表达关怀，也能让他人感到情绪安全。',

    loveExpressive:
      '你能够通过言语或行动表达感情。',

    loveOvergiving:
      '你可能付出过多，并在得不到同等回应时感到失望。',

    loveSetBoundaries:
      '保持健康边界，不要总把他人放在自己之前。',

    loveReceiveCare:
      '允许自己接受关爱，而不总是扮演照顾者。',

    loveLoyal: '你重视关系中的忠诚与一致性。',

    lovePatient: '你能耐心地随时间建立信任与感情。',

    loveReserved:
      '长期压抑感受，可能让他人难以理解你的需求。',

    loveSpeakClearly:
      '在需求与情绪累积成压力前及时表达。',

    loveCreateRituals:
      '共同的小习惯有助于增强情感稳定。',

    loveRespectsSpace:
      '你尊重关系中的个体性与个人空间。',

    loveHonest: '你倾向于直接且界限清晰的关系。',

    loveNeedsFreedom:
      '过度控制或依赖可能让你感到受限。',

    loveBalanceFreedom:
      '在个人自由、陪伴与承诺之间取得平衡。',

    loveSharePlans: '尽早分享计划，避免伴侣感到被排除在外。',

    loveEmpathetic:
      '你容易察觉情绪，也能理解他人的感受。',

    loveIntuitive: '你可能对关系动态有较强直觉。',

    loveOverthinking:
      '沟通不清或沉默可能导致过度思考。',

    loveTrustSlowly:
      '逐步建立信任，不必逼自己过快敞开心扉。',

    loveAskDirectly:
      '直接询问，而不是猜测他人的想法。',

    careerPersistent:
      '你能坚持目标，并随时间稳定推进。',

    careerReflective:
      '你会从经验中学习，并在继续前进前作出调整。',

    careerActionOriented: '你倾向主动行动并形成推进力。',

    careerObservant: '你能注意到他人可能忽略的背景与细节。',

    careerLeadership:
      '你可能具备领导、协调并保持方向的能力。',

    careerResponsibility:
      '你愿意为决定与结果承担责任。',

    careerOvercontrol:
      '在信任不足时，你可能承担过多或过度控制细节。',

    careerDelegate:
      '清楚地授权，并信任合适的人承担责任。',

    careerListenBeforeDeciding:
      '在作出重大决定前，先收集团队意见。',

    careerCreative:
      '你可能能提出原创想法，并从新角度看问题。',

    careerExpression:
      '你可能适合沟通、设计或叙事相关工作。',

    careerScattered: '同时关注太多兴趣，可能让完成任务变得困难。',

    careerBuildPortfolio:
      '建立可展示的作品或实用作品集。',

    careerFinishOneThing:
      '在开启多个新项目之前，先完成一个重要项目。',

    careerAnalytical:
      '你可能擅长分析、比较并识别原因。',

    careerPlanning: '你能把目标转化为结构化且实际的步骤。',

    careerPerfectionism:
      '你可能因等待完全确定而延迟行动。',

    careerSetMilestones:
      '设定清晰里程碑，避免分析过久。',

    careerDecideWithEnoughData:
      '在已有足够有用信息时作出决定，不必等待绝对确定。',

    careerTeamwork:
      '你能支持协作并帮助团队顺畅运作。',

    careerService:
      '你可能通过支持、照顾或指导他人来创造价值。',

    careerPeoplePleasing:
      '为了不让他人失望，你可能接下过多工作。',

    careerProtectEnergy: '通过清晰的工作边界保护时间与精力。',

    careerShowYourContribution:
      '记录并表达你的贡献，而不是默默无闻地工作。',

    careerInitiative: '你倾向主动并探索新的做法。',

    careerAdaptability:
      '当计划、工作或市场变化时，你适应很快。',

    careerRiskTaking:
      '你可能行动过快，或低估财务与运营风险。',

    careerValidateRisk:
      '在进行大额投入前，先做小规模测试并验证需求。',

    careerKeepCashReserve:
      '在扩展项目或业务前保留备用资金。',
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

export default zh;
