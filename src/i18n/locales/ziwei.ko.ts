const ziwei = {
  title: '자미두수',
  subtitle:
    '출생 날짜, 시간, 장소를 입력하여 명궁·신궁·십이궁·오행국과 14주성을 배치합니다.',
  stage1: '명반 기초',
  birthInformation: '출생 정보', displayName: '표시 이름', displayNamePlaceholder: '선택 사항',
  solarBirthDate: '양력 생년월일', birthTime: '현지 출생 시간', gender: '성별',
  birthLocation: '출생지 및 시간대', timeZone: 'IANA 시간대', placeName: '출생지',
  placeNamePlaceholder: '예: 호찌민시', longitude: '경도', latitude: '위도',
  calculate: '자미두수 명반 작성', calculating: '명반 작성 중...', chartResult: '명반 결과',
  lunarDate: '음력 생년월일', leapMonth: '윤달', yearCanChi: '연간지',
  birthHourBranch: '출생 시지', polarityProfile: '음양 남녀 구분',
  lifePalace: '명궁', bodyPalace: '신궁', bodyResidence: '신궁이 머무는 궁',
  fiveElementBureau: '오행국', twelvePalaces: '십이궁 명반', palaceList: '십이궁 목록',
  lifeTag: '명', bodyTag: '신', diagnosticsTitle: '기술 안내',
  notice:
    '2단계에서는 14주성을 모두 배치합니다. 묘왕득함, 보조성, 사화, 순공·절공, 운한 및 해석은 아직 포함하지 않습니다. 문화적 참고용입니다.',
  genders: {male: '남성', female: '여성'},
  classifications: {yangMale: '양남', yinMale: '음남', yangFemale: '양녀', yinFemale: '음녀'},
  directions: {forward: '대운 순행', reverse: '대운 역행'},
  stems: {jia: '갑', yi: '을', bing: '병', ding: '정', wu: '무', ji: '기', geng: '경', xin: '신', ren: '임', gui: '계'},
  branches: {zi: '자', chou: '축', yin: '인', mao: '묘', chen: '진', si: '사', wu: '오', wei: '미', shen: '신', you: '유', xu: '술', hai: '해'},
  palaces: {
    life: '명궁', parents: '부모궁', fortune: '복덕궁', property: '전택궁',
    career: '관록궁', friends: '노복궁', travel: '천이궁', health: '질액궁',
    wealth: '재백궁', children: '자녀궁', spouse: '부처궁', siblings: '형제궁',
  },
  bureaus: {water: '수이국', wood: '목삼국', metal: '금사국', earth: '토오국', fire: '화육국'},
  diagnostics: {
    BIRTH_NEAR_HOUR_BOUNDARY: '출생 시간이 두 시진의 경계에 가깝습니다. 출생 분을 확인하세요.',
    BIRTH_AT_ZI_HOUR: '자시에 출생했습니다. 이후 단계에서 날짜 경계 규칙을 일관되게 적용해야 합니다.',
    TIME_ZONE_METADATA_ONLY: '1단계는 시간대를 기록하지만 입력한 현지 날짜와 시간을 그대로 사용합니다.',
    LEAP_LUNAR_MONTH: '음력 윤달 출생입니다. 이후 별 배치 단계에서 윤달 표시를 유지해야 합니다.',
    MAIN_STAR_BRIGHTNESS_NOT_EVALUATED:
      '2단계는 14주성의 위치만 배치하며 묘·왕·득·평·함 상태는 아직 계산하지 않습니다.',
  },
  stage2Title: '2단계 · 14주성',
  stage2Subtitle: '음력 생일과 오행국을 기준으로 자미·천부 및 두 주성 계통을 배치합니다.',
  stage2Labels: {
    ziWeiAnchor: '자미 위치', tianFuAnchor: '천부 위치',
    mainStarCount: '주성 수', mainStarLegend: '14주성 목록',
    noMainStar: '주성 없음', brightnessDeferred: '별의 묘왕 상태는 후속 단계에서 추가됩니다',
  },
  starGroups: {ziWeiGroup: '자미 계통', tianFuGroup: '천부 계통'},
  mainStars: {
    ziWei: '자미', tianJi: '천기', taiYang: '태양', wuQu: '무곡',
    tianTong: '천동', lianZhen: '염정', tianFu: '천부', taiYin: '태음',
    tanLang: '탐랑', juMen: '거문', tianXiang: '천상', tianLiang: '천량',
    qiSha: '칠살', poJun: '파군',

  },
  errors: {
    title: '잘못된 정보', calculateFailed: '명반을 작성할 수 없습니다. 입력 정보를 확인하세요.',
    codes: {
      INVALID_YEAR: '출생 연도는 1900~2100 사이여야 합니다.', INVALID_MONTH: '출생 월이 올바르지 않습니다.',
      INVALID_DAY: '출생 일이 올바르지 않습니다.', INVALID_BIRTH_DATE: '양력 생년월일이 올바르지 않습니다.',
      INVALID_BIRTH_HOUR: '출생 시간은 00~23 사이여야 합니다.', INVALID_BIRTH_MINUTE: '출생 분은 00~59 사이여야 합니다.',
      INVALID_TIME_ZONE: 'IANA 시간대가 올바르지 않습니다.', INVALID_LONGITUDE: '경도가 올바르지 않습니다.',
      INVALID_LATITUDE: '위도가 올바르지 않습니다.', INVALID_COORDINATE: '경도 또는 위도가 올바르지 않습니다.',
    },
  },
};
export default ziwei;
