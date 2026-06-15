const ziwei = {
  title: 'Tử vi Đẩu số',
  subtitle:
    'Nhập ngày giờ và nơi sinh để an Mệnh, an Thân, lập 12 cung, xác định Ngũ hành Cục và an 14 chính tinh.',
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
    'Giai đoạn 2 đã an đủ 14 chính tinh. Chưa bao gồm độ sáng miếu-vượng-đắc-hãm, phụ tinh, Tứ Hóa, Tuần-Triệt, vận hạn hoặc luận giải. Nội dung chỉ mang tính tham khảo văn hóa.',
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
