const ziwei = {
  title: '紫微斗数',
  subtitle:
    '生年月日、出生時刻、出生地を入力して、命宮・身宮・十二宮・五行局・十四主星を配置します。',
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
    'ステージ2では十四主星をすべて配置します。廟旺得陥、補助星、四化、旬空・截空、運限、解釈はまだ含まれません。文化的参考用です。',
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
