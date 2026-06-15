const ziwei = {
  title: '자미두수',
  subtitle:
    '출생 날짜, 시간, 장소를 입력하여 십이궁, 14주성, 21개 보조성, 사화, 순공·절공 및 장생십이신을 배치합니다.',
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
    '4단계에서는 사화, 순공·절공, 장생십이신 및 버전이 지정된 묘왕 참고표를 추가합니다. 대운·소운·세운 및 궁별 해석은 아직 포함하지 않습니다. 문화적 참고용입니다.',
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
    AUXILIARY_STAR_RULESET_VIETNAMESE_V1: '보조성은 선언된 베트남 규칙 v1을 사용합니다.',
    FIRE_BELL_RULESET_VARIANT: '화성과 영성은 유파별 이설이 있으므로 명식을 비교할 때 동일한 규칙을 사용하세요.',
    FOUR_TRANSFORMATIONS_YEAR_STEM_V1: '사화는 선언된 베트남 규칙 v1의 출생 연간 표를 사용합니다.',
    VOID_MARKERS_REFERENCE_V1: '순공과 절공은 선언된 간지 참고 규칙을 사용합니다.',
    TRANG_SINH_REFERENCE_V1: '장생십이신은 오행국과 대운 방향에 따라 배치됩니다.',
    MAIN_STAR_BRIGHTNESS_REFERENCE_V1: '14주성의 묘왕은 버전이 지정된 베트남 참고표 v1을 사용합니다.',
    BRIGHTNESS_TABLE_REQUIRES_EXPERT_REVIEW: '유파마다 묘왕표가 다르므로 전문 사용 전에 전문가 검토가 필요합니다.',
    MAJOR_CYCLE_REFERENCE_V1:
      '대운은 오행국 수를 시작 나이로 하고 명궁에서 순행 또는 역행하는 베트남 참고 규칙을 사용합니다.',
    MINOR_CYCLE_REFERENCE_V1:
      '소운은 생년 삼합군의 시작 지지를 사용하며 남성은 순행, 여성은 역행합니다.',
    ANNUAL_TRANSIT_REFERENCE_V1:
      '유태세, 유록존, 유경양, 유타라, 유천마 및 세운 사화는 5단계 참고 규칙을 사용합니다.',
    ANNUAL_BOUNDARY_REFERENCE_ONLY:
      '세운은 현재 양력 연도 단위이며 음력 설 또는 입춘 경계 선택은 아직 제공하지 않습니다.',
    CYCLE_AGE_USES_NOMINAL_AGE:
      '대운, 소운 및 세운은 세는나이 기준으로 표시됩니다.',
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

  stage3Title: '3단계 · 보조성·길성·살성',
  stage3Subtitle:
    '음력 월, 출생 시지, 연간과 연지를 기준으로 선언된 베트남 규칙에 따라 21개 보조성을 배치합니다.',
  stage3Labels: {
    auxiliaryStarCount: '보조성 수', supportiveCount: '도움 별', challengingCount: '도전 별',
    mixedCount: '혼합 성향 별', byCategory: '보조성 분류', byPalace: '십이궁별 보조성',
    noAuxiliaryStar: '이 궁에는 보조성이 없습니다', rulesetTitle: '적용 규칙',
    rulesetNotice:
      '화성과 영성은 유파에 따라 배치법이 다릅니다. 엔진은 베트남 규칙 v1을 사용하고 각 별의 규칙 코드를 저장하며, 검증되지 않은 묘왕표를 임의로 혼합하지 않습니다.',
  },
  auxiliaryCategories: {
    assistant: '좌우 보좌', literary: '문성', noble: '귀인', wealth: '재록',
    malefic: '살성', mobility: '이동', romance: '연애', solitary: '고독', ceremonial: '명예',
  },
  auxiliaryTones: {supportive: '도움', challenging: '도전', mixed: '혼합'},
  auxiliaryStars: {
    zuoFu: '좌보', youBi: '우필', wenChang: '문창', wenQu: '문곡',
    tianKui: '천괴', tianYue: '천월', luCun: '녹존', qingYang: '경양',
    tuoLuo: '타라', huoXing: '화성', lingXing: '영성', diKong: '지공',
    diJie: '지겁', tianMa: '천마', hongLuan: '홍란', tianXi: '천희',
    taoHua: '도화', guChen: '고진', guaXiu: '과숙', longChi: '용지', fengGe: '봉각',
  },

  stage4Title: '4단계 · 사화, 순공·절공, 장생십이신',
  stage4Subtitle:
    '출생 연간에 따른 사화를 배치하고 순공과 절공을 계산하며 장생십이신을 배열하고 선언된 참고표로 14주성의 묘왕 상태를 평가합니다.',
  stage4Labels: {
    transformationCount: '사화 수',
    voidMarkerCount: '공망 표식 수',
    trangSinhCount: '장생 단계 수',
    brightnessCount: '평가된 주성 수',
    fourTransformations: '출생 연간에 따른 사화',
    voidMarkers: '순공과 절공',
    brightnessTitle: '주성 묘왕 상태',
    trangSinhTitle: '장생십이신',
    byPalace: '십이궁별 4단계 요약',
    rulesetTitle: '4단계 규칙',
    rulesetNotice:
      '사화, 순공, 절공, 장생십이신은 선언된 베트남 규칙 v1을 사용합니다. 묘왕표는 별도 버전으로 관리되며 전문 서비스에 사용하기 전에 전문가 검토가 필요합니다.',
  },
  transformations: {
    lu: '화록',
    quan: '화권',
    ke: '화과',
    ji: '화기',
  },
  voidMarkers: {
    tuan: '순공',
    triet: '절공',
  },
  trangSinh: {
    trangSinh: '장생',
    mocDuc: '목욕',
    quanDoi: '관대',
    lamQuan: '임관',
    deVuong: '제왕',
    suy: '쇠',
    benh: '병',
    tu: '사',
    mo: '묘',
    tuyet: '절',
    thai: '태',
    duong: '양',
  },
  brightness: {
    mien: '묘',
    vuong: '왕',
    dac: '득',
    binh: '평',
    ham: '함',
    notEvaluated: '미평가',
  },

  stage5: {
    title: '5단계 · 대운, 소운 및 세운',
    subtitle:
      '10년 대운, 나이별 소운, 유태세·유록존·유경양·유타라·유천마와 세운 사화를 계산합니다.',
    majorCycleCount: '대운 수',
    minorCycleCount: '소운 나이',
    annualCycleCount: '세운 기록',
    ruleset: '운세 규칙',
    rulesetName: '베트남 참고 규칙 v1',
    majorCycles: '대운',
    annualTransit: '세운',
    nominalAge: '세는나이',
    solarAge: '만 나이 근사값',
    activeMajorCycle: '활성 대운',
    minorCycle: '소운',
    annualTaiSui: '유태세',
    annualTransformationCount: '세운 사화 수',
    notStarted: '아직 시작되지 않음',
    annualStars: '세운 별',
    annualTransformations: '세운 사화',
    annualStarNames: {
      taiSui: '유태세',
      luCun: '유록존',
      qingYang: '유경양',
      tuoLuo: '유타라',
      tianMa: '유천마',
    },
    noticeTitle: '5단계 계산 방법',
    notice:
      '운세는 세는나이와 명시된 베트남 참고 규칙을 사용합니다. 세운 경계는 현재 양력 연도 단위로 표시되며, 전문 버전에서는 음력 설 또는 입춘 경계 정책과 전문가 검증 사례가 필요합니다.',
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
