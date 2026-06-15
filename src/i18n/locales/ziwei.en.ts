const ziwei = {
  title: 'Zi Wei Dou Shu',
  subtitle:
    'Enter birth date, time, and place to place the Life and Body palaces, build the twelve palaces, determine the Five-Element Bureau, and place the fourteen main stars.',
  stage1: 'Chart Foundation',
  birthInformation: 'Birth Information',
  displayName: 'Display Name',
  displayNamePlaceholder: 'Optional',
  solarBirthDate: 'Solar Birth Date',
  birthTime: 'Local Birth Time',
  gender: 'Gender',
  birthLocation: 'Birthplace and Time Zone',
  timeZone: 'IANA Time Zone',
  placeName: 'Place of Birth',
  placeNamePlaceholder: 'Example: Ho Chi Minh City',
  longitude: 'Longitude',
  latitude: 'Latitude',
  calculate: 'Build Zi Wei Chart',
  calculating: 'Building chart...',
  chartResult: 'Chart Result',
  lunarDate: 'Lunar Birth Date',
  leapMonth: 'leap month',
  yearCanChi: 'Year Stem-Branch',
  birthHourBranch: 'Birth Hour Branch',
  polarityProfile: 'Yin-Yang Gender Type',
  lifePalace: 'Life Palace',
  bodyPalace: 'Body Palace',
  bodyResidence: 'Body Resides In',
  fiveElementBureau: 'Five-Element Bureau',
  twelvePalaces: 'Twelve-Palace Chart',
  palaceList: 'Twelve Palaces',
  lifeTag: 'Life',
  bodyTag: 'Body',
  diagnosticsTitle: 'Technical Notes',
  notice:
    'Stage 2 places all fourteen main stars. Brightness states, auxiliary stars, Four Transformations, void markers, cycles, and interpretations are not included yet. Content is for cultural reference only.',
  genders: {male: 'Male', female: 'Female'},
  classifications: {
    yangMale: 'Yang Male',
    yinMale: 'Yin Male',
    yangFemale: 'Yang Female',
    yinFemale: 'Yin Female',
  },
  directions: {forward: 'Major cycles move forward', reverse: 'Major cycles move in reverse'},
  stems: {
    jia: 'Jia', yi: 'Yi', bing: 'Bing', ding: 'Ding', wu: 'Wu',
    ji: 'Ji', geng: 'Geng', xin: 'Xin', ren: 'Ren', gui: 'Gui',
  },
  branches: {
    zi: 'Zi', chou: 'Chou', yin: 'Yin', mao: 'Mao', chen: 'Chen', si: 'Si',
    wu: 'Wu', wei: 'Wei', shen: 'Shen', you: 'You', xu: 'Xu', hai: 'Hai',
  },
  palaces: {
    life: 'Life', parents: 'Parents', fortune: 'Fortune', property: 'Property',
    career: 'Career', friends: 'Friends', travel: 'Travel', health: 'Health',
    wealth: 'Wealth', children: 'Children', spouse: 'Spouse', siblings: 'Siblings',
  },
  bureaus: {
    water: 'Water {{number}} Bureau',
    wood: 'Wood {{number}} Bureau',
    metal: 'Metal {{number}} Bureau',
    earth: 'Earth {{number}} Bureau',
    fire: 'Fire {{number}} Bureau',
  },
  diagnostics: {
    BIRTH_NEAR_HOUR_BOUNDARY:
      'The birth time is near a double-hour boundary; verify the birth minute.',
    BIRTH_AT_ZI_HOUR:
      'Birth occurred during Zi hour. The day-boundary rule must remain consistent in later stages.',
    TIME_ZONE_METADATA_ONLY:
      'Stage 1 records the time zone but uses the entered local wall-clock date and time directly.',
    LEAP_LUNAR_MONTH:
      'The birth date falls in a leap lunar month; preserve the leap-month flag in later star-placement stages.',
    MAIN_STAR_BRIGHTNESS_NOT_EVALUATED:
      'Stage 2 places the fourteen main stars, but brightness states are not evaluated yet.',
  },
  stage2Title: 'Stage 2 · Fourteen Main Stars',
  stage2Subtitle:
    'Places Zi Wei, Tian Fu, and both main-star groups from the lunar birth day and Five-Element Bureau.',
  stage2Labels: {
    ziWeiAnchor: 'Zi Wei Position',
    tianFuAnchor: 'Tian Fu Position',
    mainStarCount: 'Main-Star Count',
    mainStarLegend: 'Fourteen Main Stars',
    noMainStar: 'No main star',
    brightnessDeferred: 'Star brightness will be added in a later stage',
  },
  starGroups: {
    ziWeiGroup: 'Zi Wei Group',
    tianFuGroup: 'Tian Fu Group',
  },
  mainStars: {
    ziWei: 'Zi Wei', tianJi: 'Tian Ji', taiYang: 'Tai Yang',
    wuQu: 'Wu Qu', tianTong: 'Tian Tong', lianZhen: 'Lian Zhen',
    tianFu: 'Tian Fu', taiYin: 'Tai Yin', tanLang: 'Tan Lang',
    juMen: 'Ju Men', tianXiang: 'Tian Xiang', tianLiang: 'Tian Liang',
    qiSha: 'Qi Sha', poJun: 'Po Jun',

  },
  errors: {
    title: 'Invalid Information',
    calculateFailed: 'Unable to build the chart. Please review the information.',
    codes: {
      INVALID_YEAR: 'Birth year must be between 1900 and 2100.',
      INVALID_MONTH: 'The birth month is invalid.',
      INVALID_DAY: 'The birth day is invalid.',
      INVALID_BIRTH_DATE: 'The solar birth date is invalid.',
      INVALID_BIRTH_HOUR: 'Birth hour must be between 00 and 23.',
      INVALID_BIRTH_MINUTE: 'Birth minute must be between 00 and 59.',
      INVALID_TIME_ZONE: 'The IANA time zone is invalid.',
      INVALID_LONGITUDE: 'Longitude is invalid.',
      INVALID_LATITUDE: 'Latitude is invalid.',
      INVALID_COORDINATE: 'Longitude or latitude is invalid.',
    },
  },
};
export default ziwei;
