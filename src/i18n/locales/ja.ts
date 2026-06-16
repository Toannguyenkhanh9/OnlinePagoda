import bazi from './bazi.ja';
import ziwei from './ziwei.ja';
import practice, {
  practiceAudio,
  practiceMeditation,
} from './practice.ja';
import {
  peaceJournal,
  buddhistCalendar,
  altarCustomization,
} from './spiritualFeatures.ja';
import {
  dataSync,
  pdfExport,
  premiumContent,
  smartFeatures,
} from './spiritualFeatures10_13.ja';
import chantCounter
  from './chantCounter.ja';
const ja = {
  common: {
    cancel: 'キャンセル',
    delete: '削除',
    reset: 'リセット',
    loading: '読み込み中...',
  },

  tabs: {
    home: 'ホーム',
    temple: '本堂',
    meditation: '瞑想',
    prayer: '祈り',
  },

  home: {
    title: 'iPagoda',

    subtitle: '瞑想し、祈り、自分の心に耳を傾けるための静かな空間です。',

    activities: 'アクティビティ',

    templeTitle: '本堂',
    templeSubtitle: 'お香を焚き、木魚を打つ',

    meditationTitle: '瞑想',
    meditationSubtitle: '5〜15分間瞑想する',

    prayerTitle: '祈り',
    prayerSubtitle: '祈りを非公開で保存する',

    audioTitle: '音',
    audioSubtitle: '木魚と梵鐘の音を聴く',

    settingsTitle: '設定',
    settingsSubtitle: '言語とアプリ情報',

    dailyTitle: '今日のリマインダー',

    dailyText:
      '数分間ゆっくり呼吸し、不安を手放して、感謝できることを一つ思い浮かべましょう。',
    lunarCalendarTitle: '旧暦カレンダー',
    lunarCalendarSubtitle: '旧暦1日と15日を確認',
    spiritualAudioTitle: 'お経と瞑想',

    spiritualAudioSubtitle:
      'お経、瞑想音楽、自然音を聴く',
    welcome: '毎日に安らぎを',

    peacefulSpace: '安らぎの空間',

    heroTitle: '心の平穏へ戻る',

    enterTemple: '本堂に入る',

    discover: '見つける',

    footerQuote: '心が穏やかなら、どこでも安らぎの場になります。',
    fortuneStickTitle: 'おみくじ',

    fortuneStickSubtitle: '心を整えるためのメッセージを引く',
    horoscopeTitle: '運勢と吉日',

    horoscopeSubtitle: '旧暦の誕生日、干支、おすすめの日を確認',
     baziTitle: '四柱推命',

  baziSubtitle:
    '四柱、五行、大運、解釈',
    baziHistoryTitle:
  '保存済みの四柱推命',

baziHistorySubtitle:
  '保存した四柱推命を確認・管理',
  baziStage4Title:
  '運勢推移と相性',

baziStage4Subtitle:
  '流年・流月、命式比較、日取り選択',
  organizedActivitiesTitle: 'あなたのための修習空間',
practiceSectionEyebrow: '修習',
practiceSectionTitle: '修習',
practiceSectionSubtitle:
  '心を落ち着け、毎日の習慣を続けるための活動',
calendarSectionEyebrow: '時間と儀式',
calendarSectionTitle: '暦と儀式',
calendarSectionSubtitle:
  '旧暦の日付、仏教行事、重要な修習日を確認します',
reflectionSectionEyebrow: '省察',
reflectionSectionTitle: '省察',
reflectionSectionSubtitle:
  '文化的な参考と自己省察のための伝統コンテンツ',
peaceJournalShortTitle: '日記',
peaceJournalShortSubtitle:
  '感情、感謝、手放したいことを記録します',
newMoonFullMoonTitle: '朔日と満月日',
newMoonFullMoonSubtitle:
  '旧暦の節目を確認し、儀式の準備をします',
buddhistFestivalTitle: '仏教行事',
buddhistFestivalSubtitle:
  'ウェーサーカ祭、盂蘭盆会などの行事を確認します',
practiceReminderTitle: '修習リマインダー',
practiceReminderSubtitle:
  '瞑想、読経、毎日の儀式の通知時間を選びます',
chooseDateTitle: '日取りを見る',
chooseDateSubtitle:
  '結婚、開店、重要な予定に適した日を参考にします',
  },

  temple: {
    title: '本堂',

    description: '心を落ち着け、一つ一つの動作をゆっくり行いましょう。',

    motto: '一呼吸ごとに安らぎを',

    noIncense: 'まだお香は焚かれていません',

    lightIncense: 'お香を焚く',

    incenseCount: '焚いたお香：{{count}}本',

    woodenFish: '木魚',

    woodenFishCount: '{{count}}/108',

    bell: '梵鐘',

    bellCount: '{{count}}回',

    completedTitle: '108回打ち終えました',

    completedText: '1分間静かに座り、呼吸を感じてみましょう。',

    resetCounter: '木魚カウンターをリセット',

    resetDialogTitle: 'カウンターをリセット',

    resetDialogMessage: '木魚の回数を0に戻しますか？',
    longPressHint: 'タップで1回再生 • 長押しで連続再生',

    playingContinuously: '連続再生中',

    tapToStop: 'タップして停止',
    lightIncenseShort: 'お香を焚く',
    incenseShortCount: '{{count}}本',
    incenseStatsTitle: 'お香の本数',
  },

meditation: {
  title: '瞑想',
  screenTitle: '瞑想',

  subtitle:
    '楽な姿勢で座り、肩の力を抜いて、一呼吸ずつ静かに意識を向けましょう。',

  breathingTitle: '呼吸瞑想',

  chooseDuration: '時間を選択',

  minutes: '{{count}}分',
  minuteUnit: '分',
  heroMinutes: '{{count}}分',

  start: '瞑想を始める',
  pause: '瞑想を一時停止',
  restart: 'もう一度瞑想する',

  ready: '準備完了',
  paused: '一時停止中',
  running: '瞑想中',

  resetTime: '時間をリセット',

  completedTitle: '瞑想が完了しました',

  completedMessage:
    'ゆっくり呼吸し、今の心と体の状態を感じてみましょう。',

  breathTitle: '呼吸ガイド',

  inhale: '4秒かけてゆっくり吸う',

  hold: '2秒間息を止める',

  exhale: '6秒かけてゆっくり吐く',
},

  prayer: {
    title: '祈りの日記',

    subtitle:
      '入力内容はこの端末に保存され、自動的にアップロードされません。',

    placeholder: '祈っていることや感謝していることを書いてください...',

    save: '祈りを保存',

    savedItems: '保存済み',

    empty: '保存された祈りはありません。',

    requiredTitle: '内容がありません',

    requiredMessage: '先に祈りの内容を入力してください。',

    savedTitle: '保存しました',

    savedMessage: '祈りはこの端末に非公開で保存されました。',

    saveErrorTitle: '保存できません',

    saveErrorMessage: '祈りの保存中にエラーが発生しました。',

    deleteDialogTitle: '祈りを削除',

    deleteDialogMessage: 'この内容を削除してもよろしいですか？',
    writeTitle: '祈りを書く',

    writeHint: '内容は端末に非公開で保存されます。',

    privateLabel: '非公開',

    savedCount: '{{count}}件保存済み',

    emptyTitle: '保存された祈りはありません',

    savedPrivately: '非公開で保存',
  },

  audio: {
    title: '寺院の音',

    subtitle: '本堂で使われる音を聴きます。',

    woodenFishTitle: '木魚の音',

    playWoodenFish: '木魚を再生',

    bellTitle: '梵鐘の音',

    playBell: '梵鐘を再生',

    tapOrHoldHint: 'タップで1回再生 • 長押しで連続再生',

    playingContinuously: '連続再生中',

    tapToStop: 'タップして停止',
  },
  settings: {
    title: '設定',

    notifications: '通知',

    notificationsDescription:
      '瞑想と旧暦の行事リマインダーは後で追加されます。',

    language: '言語',

    languageDescription: 'アプリで使用する言語を選択します。',

    chooseLanguage: '言語を選択',

    privacy: 'プライバシー',

    privacyDescription:
      '祈りの日記は現在この端末にのみ保存されています。',

    information: '情報',

    version: 'オンライン寺院 バージョン 0.0.1',
  },
  lunarCalendar: {
    title: '旧暦カレンダー',

    subtitle: '旧暦の日付、旧暦1日、15日を確認します。',

    today: '今日',

    firstDay: '旧暦1日',

    fullMoon: '旧暦15日',

    solarDate: '新暦',

    lunarDate: '旧暦',

    lunarMonth: '旧暦{{month}}月',

    leapMonth: '閏月',

    firstDayTitle: '今日は旧暦1日です',

    fullMoonTitle: '今日は旧暦15日です',

    observanceMessage:
      '少し時間を取り、瞑想したり振り返ったり、お経を聴いたりしましょう。',
  },
  lunarNotifications: {
    channelName: '旧暦リマインダー',

    channelDescription: '旧暦1日と15日のリマインダー。',

    settingTitle: '旧暦1日・15日のリマインダー',

    settingDescription:
      '旧暦1日と15日に通知を受け取ります。',

    reminderTime: '通知時刻',

    settingNote:
      'アプリは今後12か月分の通知を設定し、起動時に更新します。',

    firstDayTitle: '今日は旧暦1日です',

    fullMoonTitle: '今日は旧暦15日です',

    reminderBody:
      '数分間静かに瞑想したり、祈ったり、お経を聴いたりしましょう。',

    permissionTitle: '通知が無効です',

    permissionMessage:
      '旧暦リマインダーを受け取るには、端末設定で通知を許可してください。',

    enabledTitle: '旧暦リマインダーを有効にしました',

    enabledMessage: '{{time}}に{{count}}件のリマインダーを設定しました。',

    errorTitle: 'リマインダーを設定できません',

    errorMessage:
      '旧暦リマインダーの設定中にエラーが発生しました。',
  },
  spiritualAudio: {
    title: 'お経と瞑想',

    subtitle:
      'リラックス、瞑想、マインドフルネスのための穏やかな音を聴きます。',

    searchPlaceholder: '音声を検索...',

    playing: '再生中',

    paused: '一時停止中',

    empty: '一致する音声が見つかりませんでした。',

    categories: {
      sutra: 'お経',
      meditation: '瞑想',
      nature: '自然',
    },

    tracks: {
      greatCompassion: {
        title: '大悲心陀羅尼',

        description: 'リラックスとマインドフルネスのための穏やかな読誦です。',
      },

      heartSutra: {
        title: '般若心経',

        description: '落ち着いた厳かな般若心経の読誦です。',
      },

      buddhaName: {
        title: '念仏',

        description: '心を穏やかにする優しい念仏です。',
      },

      breathing: {
        title: '呼吸瞑想',

        description: '呼吸に意識を向け、徐々に体を緩めます。',
      },

      deepRelaxation: {
        title: '深いリラクゼーション',

        description: '休息と穏やかな眠りのための優しい瞑想音声です。',
      },

      singingBowl: {
        title: 'シンギングボウル瞑想',

        description: '集中と心の静けさを促すシンギングボウルの音です。',
      },

      templeRain: {
        title: '寺院の雨音',

        description: '静かな寺院の雰囲気に包まれた優しい雨音です。',
      },

      forestBirds: {
        title: '森の鳥たち',

        description: '鳥の声と木の葉のそよぎが聞こえる自然な森の音です。',
      },

      flowingStream: {
        title: 'せせらぎ',

        description: 'リラックスや睡眠に適した穏やかな小川の音です。',
      },
    },
  },
  dailyPracticeNotifications: {
    channelName: '毎日の修行リマインダー',

    channelDescription: '瞑想や読経のための毎日のリマインダー。',

    settingTitle: '瞑想または読経のリマインダー',

    settingDescription: '選択した時刻に毎日通知を受け取ります。',

    practiceType: 'リマインダーの種類',

    typeMeditation: '瞑想',

    typeSutra: 'お経',

    typeBoth: '両方',

    reminderTime: '通知時刻',

    previewLabel: '通知プレビュー',

    settingNote: '通知は選択した時刻に毎日繰り返されます。',

    meditationTitle: '瞑想の時間です',

    meditationBody: 'ゆっくり呼吸し、自分に静かな時間を与えましょう。',

    sutraTitle: '読経またはお経を聴く時間です',

    sutraBody:
      '数分間静かに唱えたり聴いたりして、心を落ち着けましょう。',

    bothTitle: '毎日の修行の時間です',

    bothBody:
      '短い瞑想をするか、お経を聴いて穏やかな時間を過ごしましょう。',

    permissionTitle: '通知が無効です',

    permissionMessage: '端末設定で通知を許可してください。',

    enabledTitle: '毎日のリマインダーを有効にしました',

    enabledMessage: 'アプリが毎日{{time}}にお知らせします。',

    errorTitle: 'リマインダーを設定できません',

    errorMessage: '毎日のリマインダー設定中にエラーが発生しました。',
  },
  fortuneStick: {
    title: 'おみくじ',

    subtitle:
      '心を落ち着け、気になっていることを思いながら、振り返りのメッセージを引きましょう。',

    intentionLabel: '何を願っていますか？',

    intentionPlaceholder: '任意：今気になっていることを書いてください...',

    drawing: 'おみくじを引いています...',

    drawHint: 'ゆっくり呼吸し、心を落ち着けて、下のボタンをタップしてください。',

    drawingButton: '抽選中',

    drawButton: 'おみくじを引く',

    stickNumber: '番号',

    interpretationTitle: '解釈',

    adviceTitle: 'アドバイス',

    drawAgain: 'もう一度引く',

    save: '保存',

    saving: '保存中...',

    savedTitle: 'おみくじを保存しました',

    savedMessage: 'おみくじを端末に保存しました。',

    saveErrorTitle: '保存できません',

    saveErrorMessage: 'おみくじの保存中にエラーが発生しました。',

    historyTitle: '保存済みのおみくじ',

    historyCount: '{{count}}件保存済み',

    emptyHistory: 'まだおみくじを保存していません。',

    deleteTitle: '保存したおみくじを削除',

    deleteMessage: 'このおみくじを削除してもよろしいですか？',

    disclaimer:
      'おみくじの内容は個人の振り返りのためのものであり、専門的な助言や現実の判断に代わるものではありません。',

    levels: {
      great: '大吉',
      good: '吉',
      neutral: '中立',
      caution: '注意',
    },
  },
  horoscope: {
    title: '運勢と吉日',

    subtitle:
      '新暦の生年月日を入力すると、旧暦の日付、干支、重要な予定におすすめの日を確認できます。',

    birthDateTitle: '新暦の生年月日',

    day: '日',

    month: '月',

    year: '年',

    activityTitle: '予定',

    searchPeriod: '検索期間',

    monthCount: '{{count}}か月',

    calculate: '変換しておすすめの日を検索',

    calculating: '計算中...',

    invalidDateTitle: '生年月日が無効です',

    invalidDateMessage: '有効な新暦の日付を入力してください。',

    profileTitle: '出生情報',

    lunarBirthDate: '旧暦の生年月日',

    zodiac: '干支',

    canChiYear: '干支年',

    leapMonth: '閏月',

    resultsTitle: 'おすすめの日',

    resultsSubtitle: '日付は文化的な参考スコア順に並べられます。',

    lunarDateLine: '旧暦 {{year}}年{{month}}月{{day}}日',

    suitableReasons: '良い点',

    cautionReasons: '注意点',

    disclaimer:
      '結果は文化的な参考と個人の振り返りのためのものです。結婚、建築、投資、その他の重要な判断の唯一の根拠にはしないでください。',

    activities: {
      wedding: '結婚',
      construction: '建築',
      opening: '開業',
      moving: '引っ越し',
      travel: '旅行',
    },

    ratings: {
      excellent: '大吉',
      good: '吉',
      fair: 'まずまず',
      caution: '要検討',
    },

    reasons: {
      hoangDao: '吉日',

      hacDao: '凶日',

      traditionalSuitable: '伝統的にこの予定に適するとされる日',

      traditionalAvoid: '伝統的にこの予定を避けるとされる日',

      zodiacClash: '日の地支が生年の干支と冲する',

      sixHarmony: '六合の関係',

      threeHarmony: '三合の関係',

      nguyetKy: '伝統的な月忌日',

      tamNuong: '伝統的な三娘煞日',

      preferredLunarDay: '参考ルールで優先される旧暦の日',

      weekendConvenient: '週末で都合がよい',
      birthHourClash: '日の地支が出生時の地支と冲する',

      birthHourHarmony: '日の地支が出生時の地支と六合になる',

      birthHourThreeHarmony:
        '日の地支が出生時の地支と三合になる',

      birthLunarDayResonance:
        '旧暦の日が旧暦の誕生日と対応する',

      school_folk: '総合民俗法で採点',

      school_bazi: '四柱推命参考プリセットで採点',

      school_ziwei: '紫微斗数参考プリセットで採点',

      school_almanac: '伝統暦プリセットで採点',
    },
  },
  subtitleExtended:
    '新暦の生年月日、出生時刻、性別、解釈方法を入力して、旧暦プロフィールとおすすめの日を確認します。',

  birthTimeTitle: '出生時刻',
  hour: '時',
  minute: '分',
  birthTimeHint: '出生地の現地時刻',

  genderTitle: '性別',

  genders: {
    male: '男性',
    female: '女性',
    unspecified: '未指定',
  },

  schoolTitle: '解釈方法',

  schools: {
    folkTitle: '総合民俗法',

    folkDescription:
      '干支の関係、吉日、旧暦の日付、伝統的な忌避ルールをバランスよく考慮します。',

    baziTitle: '四柱推命参考',

    baziDescription:
      '日支、生年の干支、出生時の地支の関係を重視します。',

    ziweiTitle: '紫微斗数参考',

    ziweiDescription:
      '旧暦の出生情報、出生時刻、性別、運行方向を簡略化したモデルで使用します。',

    almanacTitle: '伝統暦',

    almanacDescription:
      '適した予定、避ける予定、吉日、伝統的な忌日を優先します。',
  },

  selectedMethod: '選択中の方法',

  calculateExtended: 'プロフィールを作成しておすすめの日を検索',

  invalidInputTitle: '情報が無効です',

  invalidTimeMessage: '出生時刻は00:00〜23:59の間で入力してください。',

  birthHourBranch: '出生時の地支',

  profileGender: '性別',

  profileSchool: '解釈方法',

  yearPolarity: '生年の陰陽',

  cycleDirection: '参考運行方向',

  polarity: {
    yang: '陽',
    yin: '陰',
  },

  directions: {
    forward: '順行',
    backward: '逆行',
    neutral: '中立',
  },

  schoolNotes: {
    folk: '一般的な民俗と伝統暦のルールを組み合わせたバランス型の参考モデルです。',

    bazi: 'スコアは生年の干支と出生時の地支を重視します。完全な四柱推命ではありません。',

    ziwei:
      'スコアは旧暦の出生情報、出生時刻、性別、運行方向を簡略化して使用します。',

    almanac:
      'スコアは伝統的な吉凶、適否、吉日を強く優先します。',
  },

  resultsSubtitleExtended:
    '日付は選択した方法、生年の干支、出生時刻に基づいて順位付けされます。',

  disclaimerExtended:
    'これは旧暦の日付、干支関係、出生時刻、解釈プリセットに基づく簡略化された文化的参考モデルです。完全な紫微斗数や四柱推命ではなく、重要な判断の唯一の根拠にはしないでください。',
  lifeOverviewTitle: '恋愛と仕事',

  lifeOverviewSubtitle:
    '出生情報と選択した解釈方法に基づく振り返りのための分析です。',

  lifeStrengths: '強み',

  lifeCautions: '整える点',

  lifeAdvice: '成長の提案',

  lifeRatings: {
    veryStrong: '強いエネルギー',
    favorable: '良好',
    balanced: 'バランス型',
    developing: '発展中',
  },

  love: {
    title: '恋愛',

    styles: {
      warm: '温かく愛情深い',
      steady: '安定して誠実',
      independent: '恋愛でも自立的',
      sensitive: '繊細で直感的',
    },

    summaries: {
      warm: 'あなたは目に見える気遣いで愛情を示し、自然に温かな雰囲気を作る傾向があります。',

      steady:
        '信頼、安定、時間をかけて育つ関係を大切にします。',

      independent:
        '恋愛では尊重、個人の時間、率直なコミュニケーションが必要です。',

      sensitive:
        '感情を深く受け止め共感しやすい一方、心の安心も必要です。',
    },
  },

  career: {
    title: '仕事',

    styles: {
      leadership: 'リーダーシップ志向',
      creative: '創造性重視',
      analytical: '分析思考',
      supportive: '支援と協働',
      entrepreneurial: '起業家精神',
    },

    summaries: {
      leadership:
        '責任、調整、方向づけが必要な役割で力を発揮しやすいでしょう。',

      creative:
        'アイデア創出、デザイン、メッセージ発信で能力を発揮しやすいでしょう。',

      analytical:
        '情報処理、計画、構造化された問題解決が得意な可能性があります。',

      supportive:
        '人やチームに価値を生む協働環境で成長しやすいでしょう。',

      entrepreneurial:
        '新しい機会が現れると、主体的に試し、柔軟に適応する傾向があります。',
    },
  },

  insights: {
    loveHarmony:
      '生年の干支と出生時の地支は、調和的な感情パターンを示しています。',

    loveThreeHarmony:
      '三合のパターンは相互理解を築きやすくする可能性があります。',

    loveInnerConflict:
      '内面の欲求がぶつかり、親密さと個人の空間の間で揺れることがあります。',

    loveSelfAwareness:
      '自分の感情的なニーズを比較的よく理解している可能性があります。',

    loveWarmHeart:
      '自然に思いやりを示し、相手に安心感を与えます。',

    loveExpressive:
      '言葉や行動で愛情を表現できます。',

    loveOvergiving:
      '与えすぎて、同じだけ返ってこないと落胆することがあります。',

    loveSetBoundaries:
      'いつも相手を優先するのではなく、健全な境界線を保ちましょう。',

    loveReceiveCare:
      'いつも支える側になるだけでなく、思いやりを受け取ることも許しましょう。',

    loveLoyal: '関係の中で誠実さと一貫性を大切にします。',

    lovePatient: '時間をかけて信頼と愛情を育てられます。',

    loveReserved:
      '感情を長くため込むと、あなたのニーズが相手に伝わりにくくなります。',

    loveSpeakClearly:
      'ニーズや感情が負担になる前に言葉にしましょう。',

    loveCreateRituals:
      '小さな共通の習慣が心の安定を強めます。',

    loveRespectsSpace:
      '関係の中でも個性と個人の空間を尊重します。',

    loveHonest: '率直で輪郭のはっきりした関係を好む傾向があります。',

    loveNeedsFreedom:
      '過度な支配や依存に窮屈さを感じることがあります。',

    loveBalanceFreedom:
      '個人の自由と、寄り添う姿勢や約束のバランスを取りましょう。',

    loveSharePlans: '相手が取り残されたと感じないよう、早めに予定を共有しましょう。',

    loveEmpathetic:
      '感情の変化に気づきやすく、相手の気持ちを理解できます。',

    loveIntuitive: '関係性の流れに対して強い直感を持つ可能性があります。',

    loveOverthinking:
      '曖昧な会話や沈黙は考えすぎにつながることがあります。',

    loveTrustSlowly:
      '無理に早く心を開こうとせず、少しずつ信頼を築きましょう。',

    loveAskDirectly:
      '相手の考えを推測するのではなく、直接尋ねましょう。',

    careerPersistent:
      '目標を保ち、時間をかけて着実に前進できます。',

    careerReflective:
      '経験から学び、前に進む前に調整できます。',

    careerActionOriented: '主体的に動き、流れを生み出す傾向があります。',

    careerObservant: '他の人が見落としやすい背景や細部に気づきます。',

    careerLeadership:
      '率いること、調整すること、方向性を保つことができる可能性があります。',

    careerResponsibility:
      '決定と結果に責任を持つ姿勢があります。',

    careerOvercontrol:
      '信頼が低いと、抱え込みすぎたり細部を管理しすぎたりすることがあります。',

    careerDelegate:
      '役割を明確に任せ、適切な人を信頼しましょう。',

    careerListenBeforeDeciding:
      '大きな決定の前に、チームの視点を集めましょう。',

    careerCreative:
      '独創的なアイデアを生み、問題を新しい角度から見られる可能性があります。',

    careerExpression:
      'コミュニケーション、デザイン、物語づくりに関わる仕事が向いている可能性があります。',

    careerScattered: '興味が多すぎると、やり切ることが難しくなる場合があります。',

    careerBuildPortfolio:
      '見える成果物や実用的なポートフォリオを作りましょう。',

    careerFinishOneThing:
      '複数の新しいことを始める前に、重要な一つを完了させましょう。',

    careerAnalytical:
      '分析、比較、原因の特定が得意な可能性があります。',

    careerPlanning: '目標を構造化された実践的な手順に変えられます。',

    careerPerfectionism:
      '完全な確実性を求めて行動が遅れることがあります。',

    careerSetMilestones:
      '分析しすぎないよう、明確な節目を設定しましょう。',

    careerDecideWithEnoughData:
      '完全な確実性を待たず、十分な有用情報がそろった段階で決めましょう。',

    careerTeamwork:
      '協働を支え、チームが円滑に動くよう助けられます。',

    careerService:
      '支援、ケア、指導を通じて価値を生み出す可能性があります。',

    careerPeoplePleasing:
      '相手を失望させたくなくて、仕事を引き受けすぎることがあります。',

    careerProtectEnergy: '明確な仕事の境界線で時間とエネルギーを守りましょう。',

    careerShowYourContribution:
      '見えないところで働くだけでなく、自分の貢献を記録し伝えましょう。',

    careerInitiative: '自ら動き、新しい方法を探る傾向があります。',

    careerAdaptability:
      '計画、仕事、市場が変わっても素早く適応できます。',

    careerRiskTaking:
      '動きが速すぎたり、財務・運営リスクを過小評価したりすることがあります。',

    careerValidateRisk:
      '大きく投資する前に、小さく試して需要を確認しましょう。',

    careerKeepCashReserve:
      'プロジェクトや事業を拡大する前に、予備資金を確保しましょう。',
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

export default ja;
