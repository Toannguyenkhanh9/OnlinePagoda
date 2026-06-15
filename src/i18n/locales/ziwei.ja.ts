const ziwei = {
  title: '紫微斗数',
  subtitle:
    '生年月日、出生時刻、出生地を入力して、十二宮、十四主星、21の補助星、四化、旬空・截空、十二運を配置します。',
  stage1: '命盤の基礎',
  birthInformation: '出生情報', displayName: '表示名', displayNamePlaceholder: '任意',
  solarBirthDate: '西暦の生年月日', birthTime: '現地の出生時刻', gender: '性別',
  birthLocation: '出生地とタイムゾーン', timeZone: 'IANA タイムゾーン', placeName: '出生地',
  placeNamePlaceholder: '例：ホーチミン市', longitude: '経度', latitude: '緯度',
  calculate: '紫微命盤を作成', calculating: '命盤を作成中...', chartResult: '命盤結果',
  lunarDate: '旧暦の生年月日', leapMonth: '閏月', yearCanChi: '年干支',
  birthHourBranch: '出生時支', polarityProfile: '陰陽・男女区分',
  lifePalace: '命宮', bodyPalace: '身宮', bodyResidence: '身宮の所在', fiveElementBureau: '五行局',
  twelvePalaces: '十二宮命盤', palaceList: '十二宮一覧', lifeTag: '命', bodyTag: '身',
  diagnosticsTitle: '技術上の注意',
  notice:
    'ステージ4では四化、旬空・截空、十二運、バージョン管理された廟旺参考表を追加します。大限・小限・流年・宮別解釈はまだ含みません。文化的参考用です。',
  genders: {male: '男性', female: '女性'},
  classifications: {yangMale: '陽男', yinMale: '陰男', yangFemale: '陽女', yinFemale: '陰女'},
  directions: {forward: '大限は順行', reverse: '大限は逆行'},
  stems: {jia: '甲', yi: '乙', bing: '丙', ding: '丁', wu: '戊', ji: '己', geng: '庚', xin: '辛', ren: '壬', gui: '癸'},
  branches: {zi: '子', chou: '丑', yin: '寅', mao: '卯', chen: '辰', si: '巳', wu: '午', wei: '未', shen: '申', you: '酉', xu: '戌', hai: '亥'},
  palaces: {
    life: '命宮', parents: '父母宮', fortune: '福徳宮', property: '田宅宮',
    career: '官禄宮', friends: '奴僕宮', travel: '遷移宮', health: '疾厄宮',
    wealth: '財帛宮', children: '子女宮', spouse: '夫妻宮', siblings: '兄弟宮',
  },
  bureaus: {water: '水二局', wood: '木三局', metal: '金四局', earth: '土五局', fire: '火六局'},
  diagnostics: {
    BIRTH_NEAR_HOUR_BOUNDARY: '出生時刻が二つの時辰の境界に近いため、出生分を確認してください。',
    BIRTH_AT_ZI_HOUR: '子刻の出生です。後続段階では日付境界ルールを統一する必要があります。',
    TIME_ZONE_METADATA_ONLY: 'ステージ1ではタイムゾーンを記録しますが、入力した現地日時をそのまま使用します。',
    LEAP_LUNAR_MONTH: '旧暦の閏月生まれです。後続の星配置でも閏月フラグを保持してください。',
    MAIN_STAR_BRIGHTNESS_NOT_EVALUATED:
      'ステージ2では十四主星の位置のみを算出し、廟・旺・得・平・陥はまだ評価しません。',
    AUXILIARY_STAR_RULESET_VIETNAMESE_V1: '補助星は明示したベトナム式ルールv1を使用します。',
    FIRE_BELL_RULESET_VARIANT: '火星と鈴星は流派差があるため、命盤比較では同一ルールを使用してください。',
    FOUR_TRANSFORMATIONS_YEAR_STEM_V1: '四化は明示したベトナム式v1の生年天干表を使用します。',
    VOID_MARKERS_REFERENCE_V1: '旬空と截空は明示した干支の参考規則を使用します。',
    TRANG_SINH_REFERENCE_V1: '十二運は五行局と大限の順逆に基づいて配置します。',
    MAIN_STAR_BRIGHTNESS_REFERENCE_V1: '十四主星の廟旺はバージョン管理されたベトナム参考表v1を使用します。',
    BRIGHTNESS_TABLE_REQUIRES_EXPERT_REVIEW: '廟旺表は流派によって異なるため、専門利用前に専門家の確認が必要です。',
    MAJOR_CYCLE_REFERENCE_V1:
      '大限は五行局数を開始年齢とし、命宮から順行または逆行するベトナム参照ルールを使用します。',
    MINOR_CYCLE_REFERENCE_V1:
      '小限は生年の三合局で開始支を定め、男性は順行、女性は逆行します。',
    ANNUAL_TRANSIT_REFERENCE_V1:
      '流太歳・流禄存・流擎羊・流陀羅・流天馬・流年四化はステージ5参照ルールを使用します。',
    ANNUAL_BOUNDARY_REFERENCE_ONLY:
      '流年は現在、西暦年単位で扱い、旧正月または立春境界の選択には未対応です。',
    CYCLE_AGE_USES_NOMINAL_AGE:
      '大限・小限・流年は数え年で索引化されます。',
  },
  stage2Title: 'ステージ2・十四主星',
  stage2Subtitle: '旧暦の出生日と五行局から、紫微・天府および二つの主星系統を配置します。',
  stage2Labels: {
    ziWeiAnchor: '紫微の位置', tianFuAnchor: '天府の位置',
    mainStarCount: '主星数', mainStarLegend: '十四主星一覧',
    noMainStar: '主星なし', brightnessDeferred: '星の廟旺は後続段階で追加されます',
  },
  starGroups: {ziWeiGroup: '紫微星系', tianFuGroup: '天府星系'},
  mainStars: {
    ziWei: '紫微', tianJi: '天機', taiYang: '太陽', wuQu: '武曲',
    tianTong: '天同', lianZhen: '廉貞', tianFu: '天府', taiYin: '太陰',
    tanLang: '貪狼', juMen: '巨門', tianXiang: '天相', tianLiang: '天梁',
    qiSha: '七殺', poJun: '破軍',

  },

  stage3Title: 'ステージ3・補助星・吉星・凶星',
  stage3Subtitle:
    '旧暦月、出生時支、年干、年支から、明示したベトナム式ルールで21の補助星を配置します。',
  stage3Labels: {
    auxiliaryStarCount: '補助星数', supportiveCount: '支援星', challengingCount: '課題星',
    mixedCount: '混合星', byCategory: '補助星の分類', byPalace: '十二宮の補助星',
    noAuxiliaryStar: 'この宮に補助星はありません', rulesetTitle: '適用ルール',
    rulesetNotice:
      '火星と鈴星は流派により配置法が異なります。エンジンはベトナム式v1を使用し、各星にルールコードを保存し、未検証の廟旺表を暗黙に混在させません。',
  },
  auxiliaryCategories: {
    assistant: '補佐', literary: '文星', noble: '貴人', wealth: '財禄',
    malefic: '凶星', mobility: '移動', romance: '恋愛', solitary: '孤独', ceremonial: '名誉',
  },
  auxiliaryTones: {supportive: '支援', challenging: '課題', mixed: '混合'},
  auxiliaryStars: {
    zuoFu: '左輔', youBi: '右弼', wenChang: '文昌', wenQu: '文曲',
    tianKui: '天魁', tianYue: '天鉞', luCun: '禄存', qingYang: '擎羊',
    tuoLuo: '陀羅', huoXing: '火星', lingXing: '鈴星', diKong: '地空',
    diJie: '地劫', tianMa: '天馬', hongLuan: '紅鸞', tianXi: '天喜',
    taoHua: '桃花', guChen: '孤辰', guaXiu: '寡宿', longChi: '龍池', fengGe: '鳳閣',
  },

  stage4Title: 'ステージ4・四化、旬空・截空、十二運',
  stage4Subtitle:
    '生年天干による四化を配置し、旬空と截空を算出し、十二運を配列し、明示した参考表で十四主星の廟旺を評価します。',
  stage4Labels: {
    transformationCount: '四化数',
    voidMarkerCount: '空亡セット数',
    trangSinhCount: '十二運の段階数',
    brightnessCount: '評価済み主星数',
    fourTransformations: '生年天干による四化',
    voidMarkers: '旬空と截空',
    brightnessTitle: '主星の廟旺',
    trangSinhTitle: '十二運',
    byPalace: '十二宮別ステージ4まとめ',
    rulesetTitle: 'ステージ4ルール',
    rulesetNotice:
      '四化、旬空、截空、十二運は明示したベトナム式ルールv1を使用します。廟旺表は別バージョンで管理し、専門サービスに使用する前に専門家の確認が必要です。',
  },
  transformations: {
    lu: '化禄',
    quan: '化権',
    ke: '化科',
    ji: '化忌',
  },
  voidMarkers: {
    tuan: '旬空',
    triet: '截空',
  },
  trangSinh: {
    trangSinh: '長生',
    mocDuc: '沐浴',
    quanDoi: '冠帯',
    lamQuan: '建禄',
    deVuong: '帝旺',
    suy: '衰',
    benh: '病',
    tu: '死',
    mo: '墓',
    tuyet: '絶',
    thai: '胎',
    duong: '養',
  },
  brightness: {
    mien: '廟',
    vuong: '旺',
    dac: '得',
    binh: '平',
    ham: '陥',
    notEvaluated: '未評価',
  },

  stage5: {
    title: 'ステージ5 · 大限・小限・流年',
    subtitle:
      '10年ごとの大限、年齢ごとの小限、流太歳・流禄存・流擎羊・流陀羅・流天馬、および流年四化を算出します。',
    majorCycleCount: '大限数',
    minorCycleCount: '小限年齢',
    annualCycleCount: '流年記録',
    ruleset: '運限ルール',
    rulesetName: 'ベトナム参照ルール v1',
    majorCycles: '大限',
    annualTransit: '流年',
    nominalAge: '数え年',
    solarAge: '満年齢の概算',
    activeMajorCycle: '現在の大限',
    minorCycle: '小限',
    annualTaiSui: '流太歳',
    annualTransformationCount: '流年四化数',
    notStarted: '未開始',
    annualStars: '流年星',
    annualTransformations: '流年四化',
    annualStarNames: {
      taiSui: '流太歳',
      luCun: '流禄存',
      qingYang: '流擎羊',
      tuoLuo: '流陀羅',
      tianMa: '流天馬',
    },
    noticeTitle: 'ステージ5の方式',
    notice:
      '運限は数え年と明示されたベトナム参照ルールを使用します。流年境界は現在、西暦年単位で表現しています。専門利用では旧正月または立春の境界方針と、専門家が検証した命式例が必要です。',
  },

  errors: {
    title: '入力情報が無効です', calculateFailed: '命盤を作成できません。入力情報を確認してください。',
    codes: {
      INVALID_YEAR: '出生年は1900年から2100年の範囲で入力してください。', INVALID_MONTH: '出生月が無効です。',
      INVALID_DAY: '出生日が無効です。', INVALID_BIRTH_DATE: '西暦の生年月日が無効です。',
      INVALID_BIRTH_HOUR: '出生時は00から23の間で入力してください。', INVALID_BIRTH_MINUTE: '出生分は00から59の間で入力してください。',
      INVALID_TIME_ZONE: 'IANAタイムゾーンが無効です。', INVALID_LONGITUDE: '経度が無効です。',
      INVALID_LATITUDE: '緯度が無効です。', INVALID_COORDINATE: '経度または緯度が無効です。',
    },
  },
};
export default ziwei;
