const ziwei = {
  title: 'Tử vi Đẩu số',
  subtitle:
    'Nhập ngày giờ và nơi sinh để lập 12 cung, an 14 chính tinh, 21 phụ tinh, Tứ Hóa, Tuần-Triệt và vòng Tràng Sinh.',
  stage1: 'Nền tảng lá số',
  birthInformation: 'Thông tin sinh',
  displayName: 'Tên hiển thị',
  displayNamePlaceholder: 'Có thể để trống',
  solarBirthDate: 'Ngày sinh dương lịch',
  birthTime: 'Giờ sinh địa phương',
  gender: 'Giới tính',
  birthLocation: 'Nơi sinh và múi giờ',
  timeZone: 'Múi giờ IANA',
  placeName: 'Tên nơi sinh',
  placeNamePlaceholder: 'Ví dụ: TP. Hồ Chí Minh',
  longitude: 'Kinh độ',
  latitude: 'Vĩ độ',
  calculate: 'Lập lá số Tử vi',
  calculating: 'Đang lập lá số...',
  chartResult: 'Kết quả lá số',
  lunarDate: 'Ngày sinh âm lịch',
  leapMonth: 'tháng nhuận',
  yearCanChi: 'Năm Can Chi',
  birthHourBranch: 'Giờ sinh',
  polarityProfile: 'Âm dương nam nữ',
  lifePalace: 'Cung Mệnh',
  bodyPalace: 'Cung Thân',
  bodyResidence: 'Thân cư',
  fiveElementBureau: 'Ngũ hành Cục',
  twelvePalaces: 'Lá số 12 cung',
  palaceList: 'Danh sách 12 cung',
  lifeTag: 'Mệnh',
  bodyTag: 'Thân',
  diagnosticsTitle: 'Lưu ý kỹ thuật',
  notice:
    'Giai đoạn 4 đã bổ sung Tứ Hóa, Tuần-Triệt, vòng Tràng Sinh và bảng độ sáng tham chiếu. Chưa bao gồm đại hạn, tiểu hạn, lưu niên hoặc luận giải từng cung. Nội dung chỉ mang tính tham khảo văn hóa.',
  genders: {male: 'Nam', female: 'Nữ'},
  classifications: {
    yangMale: 'Dương Nam',
    yinMale: 'Âm Nam',
    yangFemale: 'Dương Nữ',
    yinFemale: 'Âm Nữ',
  },
  directions: {forward: 'Đại hạn đi thuận', reverse: 'Đại hạn đi nghịch'},
  stems: {
    jia: 'Giáp', yi: 'Ất', bing: 'Bính', ding: 'Đinh', wu: 'Mậu',
    ji: 'Kỷ', geng: 'Canh', xin: 'Tân', ren: 'Nhâm', gui: 'Quý',
  },
  branches: {
    zi: 'Tý', chou: 'Sửu', yin: 'Dần', mao: 'Mão', chen: 'Thìn', si: 'Tỵ',
    wu: 'Ngọ', wei: 'Mùi', shen: 'Thân', you: 'Dậu', xu: 'Tuất', hai: 'Hợi',
  },
  palaces: {
    life: 'Mệnh', parents: 'Phụ Mẫu', fortune: 'Phúc Đức', property: 'Điền Trạch',
    career: 'Quan Lộc', friends: 'Nô Bộc', travel: 'Thiên Di', health: 'Tật Ách',
    wealth: 'Tài Bạch', children: 'Tử Tức', spouse: 'Phu Thê', siblings: 'Huynh Đệ',
  },
  bureaus: {
    water: 'Thủy {{number}} Cục',
    wood: 'Mộc {{number}} Cục',
    metal: 'Kim {{number}} Cục',
    earth: 'Thổ {{number}} Cục',
    fire: 'Hỏa {{number}} Cục',
  },
  diagnostics: {
    BIRTH_NEAR_HOUR_BOUNDARY:
      'Giờ sinh gần ranh giới giữa hai thời thần; nên kiểm tra lại phút sinh.',
    BIRTH_AT_ZI_HOUR:
      'Sinh vào giờ Tý. Quy tắc đổi ngày cần được giữ nhất quán ở các giai đoạn sau.',
    TIME_ZONE_METADATA_ONLY:
      'Giai đoạn 1 ghi nhận múi giờ nhưng dùng trực tiếp ngày giờ địa phương đã nhập.',
    LEAP_LUNAR_MONTH:
      'Ngày sinh thuộc tháng nhuận âm lịch; cần giữ cờ tháng nhuận khi an sao ở giai đoạn sau.',
    MAIN_STAR_BRIGHTNESS_NOT_EVALUATED:
      'Giai đoạn 2 mới an vị trí 14 chính tinh; trạng thái miếu, vượng, đắc, bình và hãm chưa được tính.',
    AUXILIARY_STAR_RULESET_VIETNAMESE_V1:
      'Phụ tinh được an theo bộ quy tắc Việt Nam v1 đã khai báo.',
    FIRE_BELL_RULESET_VARIANT:
      'Hỏa Tinh và Linh Tinh có dị bản giữa các trường phái; hãy giữ cùng một bộ quy tắc khi đối chiếu lá số.',
    FOUR_TRANSFORMATIONS_YEAR_STEM_V1:
      'Tứ Hóa được an theo thiên can năm sinh bằng bảng quy tắc Việt Nam v1.',
    VOID_MARKERS_REFERENCE_V1:
      'Tuần và Triệt được tính bằng quy tắc Can Chi và thiên can năm sinh đã khai báo.',
    TRANG_SINH_REFERENCE_V1:
      'Vòng Tràng Sinh được an theo Ngũ hành Cục và chiều đại hạn.',
    MAIN_STAR_BRIGHTNESS_REFERENCE_V1:
      'Độ sáng 14 chính tinh được lấy từ bảng tham chiếu Việt Nam v1 có phiên bản.',
    BRIGHTNESS_TABLE_REQUIRES_EXPERT_REVIEW:
      'Bảng miếu-vượng khác nhau giữa các trường phái; cần chuyên gia đối chiếu trước khi sử dụng chuyên nghiệp.',
    MAJOR_CYCLE_REFERENCE_V1:
      'Đại hạn dùng quy tắc tham chiếu Việt Nam: khởi từ tuổi bằng số Cục và đi từ cung Mệnh.',
    MINOR_CYCLE_REFERENCE_V1:
      'Tiểu hạn dùng vị trí khởi theo tam hợp tuổi, nam đi thuận và nữ đi nghịch.',
    ANNUAL_TRANSIT_REFERENCE_V1:
      'Lưu Thái Tuế, Lộc Tồn, Kình Dương, Đà La, Thiên Mã và Lưu Tứ Hóa dùng bộ quy tắc Giai đoạn 5.',
    ANNUAL_BOUNDARY_REFERENCE_ONLY:
      'Lưu niên hiện dùng cấp năm dương lịch, chưa cho chọn ranh giới Tết âm lịch hoặc Lập Xuân.',
    CYCLE_AGE_USES_NOMINAL_AGE:
      'Đại hạn, Tiểu hạn và Lưu niên được đánh chỉ số theo tuổi mụ.',
  },
  stage2Title: 'Giai đoạn 2 · 14 chính tinh',
  stage2Subtitle:
    'An sao Tử Vi, Thiên Phủ và toàn bộ hai vòng chính tinh theo ngày sinh âm lịch và Ngũ hành Cục.',
  stage2Labels: {
    ziWeiAnchor: 'Vị trí sao Tử Vi',
    tianFuAnchor: 'Vị trí sao Thiên Phủ',
    mainStarCount: 'Số chính tinh',
    mainStarLegend: 'Danh sách 14 chính tinh',
    noMainStar: 'Không có chính tinh',
    brightnessDeferred: 'Độ sáng sao sẽ được bổ sung ở giai đoạn sau',
  },
  starGroups: {
    ziWeiGroup: 'Vòng Tử Vi',
    tianFuGroup: 'Vòng Thiên Phủ',
  },
  mainStars: {
    ziWei: 'Tử Vi', tianJi: 'Thiên Cơ', taiYang: 'Thái Dương',
    wuQu: 'Vũ Khúc', tianTong: 'Thiên Đồng', lianZhen: 'Liêm Trinh',
    tianFu: 'Thiên Phủ', taiYin: 'Thái Âm', tanLang: 'Tham Lang',
    juMen: 'Cự Môn', tianXiang: 'Thiên Tướng', tianLiang: 'Thiên Lương',
    qiSha: 'Thất Sát', poJun: 'Phá Quân',

  },

  stage3Title: 'Giai đoạn 3 · Phụ tinh, cát tinh và sát tinh',
  stage3Subtitle:
    'An 21 phụ tinh theo tháng âm, giờ sinh, thiên can và địa chi năm sinh bằng bộ quy tắc Việt Nam đã khai báo.',
  stage3Labels: {
    auxiliaryStarCount: 'Số phụ tinh',
    supportiveCount: 'Sao hỗ trợ',
    challengingCount: 'Sao thử thách',
    mixedCount: 'Sao hỗn hợp',
    byCategory: 'Phân nhóm phụ tinh',
    byPalace: 'Phụ tinh theo 12 cung',
    noAuxiliaryStar: 'Không có phụ tinh trong nhóm hiện tại',
    rulesetTitle: 'Bộ quy tắc đang dùng',
    rulesetNotice:
      'Hỏa Tinh và Linh Tinh có nhiều cách an giữa các trường phái. Engine dùng quy tắc Việt Nam v1, lưu mã quy tắc cho từng sao và chưa tự trộn bảng miếu-vượng từ nguồn khác.',
  },
  auxiliaryCategories: {
    assistant: 'Phò tá', literary: 'Văn tinh', noble: 'Quý nhân', wealth: 'Tài lộc',
    malefic: 'Sát tinh', mobility: 'Dịch chuyển', romance: 'Tình duyên',
    solitary: 'Cô độc', ceremonial: 'Danh quý',
  },
  auxiliaryTones: {
    supportive: 'Hỗ trợ', challenging: 'Thử thách', mixed: 'Hỗn hợp',
  },
  auxiliaryStars: {
    zuoFu: 'Tả Phụ', youBi: 'Hữu Bật', wenChang: 'Văn Xương', wenQu: 'Văn Khúc',
    tianKui: 'Thiên Khôi', tianYue: 'Thiên Việt', luCun: 'Lộc Tồn',
    qingYang: 'Kình Dương', tuoLuo: 'Đà La', huoXing: 'Hỏa Tinh', lingXing: 'Linh Tinh',
    diKong: 'Địa Không', diJie: 'Địa Kiếp', tianMa: 'Thiên Mã',
    hongLuan: 'Hồng Loan', tianXi: 'Thiên Hỷ', taoHua: 'Đào Hoa',
    guChen: 'Cô Thần', guaXiu: 'Quả Tú', longChi: 'Long Trì', fengGe: 'Phượng Các',
  },

  stage4Title: 'Giai đoạn 4 · Tứ Hóa, Tuần-Triệt và Tràng Sinh',
  stage4Subtitle:
    'An Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ; xác định Tuần, Triệt; lập vòng Tràng Sinh và đánh giá độ sáng 14 chính tinh theo bảng tham chiếu đã khai báo.',
  stage4Labels: {
    transformationCount: 'Số Tứ Hóa',
    voidMarkerCount: 'Số bộ Không vong',
    trangSinhCount: 'Số trạng thái Tràng Sinh',
    brightnessCount: 'Số chính tinh đã đánh giá',
    fourTransformations: 'Tứ Hóa theo thiên can năm sinh',
    voidMarkers: 'Tuần và Triệt',
    brightnessTitle: 'Miếu, Vượng, Đắc, Bình, Hãm',
    trangSinhTitle: 'Vòng Tràng Sinh',
    byPalace: 'Tổng hợp Giai đoạn 4 theo 12 cung',
    rulesetTitle: 'Bộ quy tắc Giai đoạn 4',
    rulesetNotice:
      'Tứ Hóa, Tuần, Triệt và Tràng Sinh dùng bộ quy tắc Việt Nam v1 đã khai báo. Bảng miếu-vượng là bảng tham chiếu có phiên bản riêng và cần được chuyên gia đối chiếu trước khi dùng cho sản phẩm chuyên nghiệp.',
  },
  transformations: {
    lu: 'Hóa Lộc',
    quan: 'Hóa Quyền',
    ke: 'Hóa Khoa',
    ji: 'Hóa Kỵ',
  },
  voidMarkers: {
    tuan: 'Tuần',
    triet: 'Triệt',
  },
  trangSinh: {
    trangSinh: 'Tràng Sinh',
    mocDuc: 'Mộc Dục',
    quanDoi: 'Quan Đới',
    lamQuan: 'Lâm Quan',
    deVuong: 'Đế Vượng',
    suy: 'Suy',
    benh: 'Bệnh',
    tu: 'Tử',
    mo: 'Mộ',
    tuyet: 'Tuyệt',
    thai: 'Thai',
    duong: 'Dưỡng',
  },
  brightness: {
    mien: 'Miếu',
    vuong: 'Vượng',
    dac: 'Đắc',
    binh: 'Bình',
    ham: 'Hãm',
    notEvaluated: 'Chưa đánh giá',
  },

  stage5: {
    title: 'Giai đoạn 5 · Đại hạn, Tiểu hạn và Lưu niên',
    subtitle:
      'An Đại hạn theo từng thập niên, Tiểu hạn theo từng tuổi và lớp Lưu niên gồm Thái Tuế, Lộc Tồn, Kình Dương, Đà La, Thiên Mã cùng Lưu Tứ Hóa.',
    majorCycleCount: 'Số Đại hạn',
    minorCycleCount: 'Tuổi Tiểu hạn',
    annualCycleCount: 'Năm Lưu niên',
    ruleset: 'Bộ quy tắc hạn',
    rulesetName: 'Tham chiếu Việt Nam v1',
    majorCycles: 'Đại hạn',
    annualTransit: 'Lưu niên',
    nominalAge: 'Tuổi mụ',
    solarAge: 'Tuổi dương xấp xỉ',
    activeMajorCycle: 'Đại hạn đang hoạt động',
    minorCycle: 'Tiểu hạn',
    annualTaiSui: 'Lưu Thái Tuế',
    annualTransformationCount: 'Số Lưu Tứ Hóa',
    notStarted: 'Chưa bắt đầu',
    annualStars: 'Các sao lưu niên',
    annualTransformations: 'Lưu Tứ Hóa',
    annualStarNames: {
      taiSui: 'Lưu Thái Tuế',
      luCun: 'Lưu Lộc Tồn',
      qingYang: 'Lưu Kình Dương',
      tuoLuo: 'Lưu Đà La',
      tianMa: 'Lưu Thiên Mã',
    },
    noticeTitle: 'Phương pháp Giai đoạn 5',
    notice:
      'Các hạn dùng tuổi mụ và bộ quy tắc tham chiếu Việt Nam đã khai báo. Ranh giới lưu niên hiện được biểu diễn theo cấp năm dương lịch; bản chuyên nghiệp nên cho phép chọn Tết âm lịch hoặc Lập Xuân và đối chiếu bằng lá số chuẩn.',
  },

  errors: {
    title: 'Thông tin chưa hợp lệ',
    calculateFailed: 'Không thể lập lá số. Hãy kiểm tra lại thông tin.',
    codes: {
      INVALID_YEAR: 'Năm sinh phải nằm trong khoảng 1900–2100.',
      INVALID_MONTH: 'Tháng sinh không hợp lệ.',
      INVALID_DAY: 'Ngày sinh không hợp lệ.',
      INVALID_BIRTH_DATE: 'Ngày sinh dương lịch không hợp lệ.',
      INVALID_BIRTH_HOUR: 'Giờ sinh phải từ 00 đến 23.',
      INVALID_BIRTH_MINUTE: 'Phút sinh phải từ 00 đến 59.',
      INVALID_TIME_ZONE: 'Múi giờ IANA không hợp lệ.',
      INVALID_LONGITUDE: 'Kinh độ không hợp lệ.',
      INVALID_LATITUDE: 'Vĩ độ không hợp lệ.',
      INVALID_COORDINATE: 'Kinh độ hoặc vĩ độ không hợp lệ.',
    },
  },
};
export default ziwei;
