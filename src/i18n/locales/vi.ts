const vi = {
  common: {
    cancel: 'Hủy',
    delete: 'Xóa',
    reset: 'Đặt lại',
    loading: 'Đang tải...',
  },

  tabs: {
    home: 'Trang chủ',
    temple: 'Chính điện',
    meditation: 'Thiền',
    prayer: 'Cầu nguyện',
  },

  home: {
    title: 'Chùa Online',

    subtitle:
      'Một không gian yên tĩnh để thiền, cầu nguyện và lắng nghe bản thân.',

    activities: 'Hoạt động',

    templeTitle: 'Chính điện',
    templeSubtitle: 'Thắp nhang và gõ mõ',

    meditationTitle: 'Thiền',
    meditationSubtitle: 'Thiền từ 5 đến 15 phút',

    prayerTitle: 'Cầu nguyện',
    prayerSubtitle: 'Lưu lời nguyện riêng tư',

    audioTitle: 'Âm thanh',
    audioSubtitle: 'Nghe tiếng mõ và chuông chùa',

    settingsTitle: 'Cài đặt',
    settingsSubtitle: 'Ngôn ngữ và thông tin ứng dụng',

    dailyTitle: 'Lời nhắc hôm nay',

    dailyText:
      'Hãy dành một vài phút để hít thở chậm, buông bỏ lo âu và nghĩ về một điều khiến bạn biết ơn.',
    lunarCalendarTitle: 'Lịch âm',
    lunarCalendarSubtitle: 'Xem mùng một và ngày rằm',
    spiritualAudioTitle: 'Kinh và nhạc thiền',

    spiritualAudioSubtitle: 'Nghe bài kinh, nhạc thiền và âm thanh thiên nhiên',
    welcome: 'Bình an mỗi ngày',

    peacefulSpace: 'Không gian tĩnh tâm',

    heroTitle: 'Trở về với sự an yên',

    enterTemple: 'Vào chính điện',

    discover: 'Khám phá',

    footerQuote: 'Tâm tĩnh thì mọi nơi đều là chốn bình an.',
    fortuneStickTitle: 'Xin xăm',

    fortuneStickSubtitle: 'Xin một quẻ để chiêm nghiệm và tĩnh tâm',
  },

  temple: {
    title: 'Chính điện',

    description:
      'Giữ tâm thanh tịnh và thực hiện từng hoạt động một cách chậm rãi.',

    motto: 'An nhiên trong từng hơi thở',

    noIncense: 'Chưa có nhang được thắp',

    lightIncense: 'Thắp nhang',

    incenseCount: 'Đã thắp: {{count}} nén nhang',

    woodenFish: 'Gõ mõ',

    woodenFishCount: '{{count}}/108',

    bell: 'Đánh chuông',

    bellCount: '{{count}} lần',

    completedTitle: 'Bạn đã hoàn thành 108 lần',

    completedText: 'Hãy dành một phút để ngồi yên và cảm nhận hơi thở.',

    resetCounter: 'Đặt lại bộ đếm gõ mõ',

    resetDialogTitle: 'Đặt lại bộ đếm',

    resetDialogMessage: 'Bạn muốn đưa số lần gõ mõ về 0?',
    longPressHint: 'Chạm để phát một lần • Nhấn giữ để phát liên tục',

    playingContinuously: 'Đang phát liên tục',

    tapToStop: 'Chạm để tắt',
    lightIncenseShort: 'Thắp nhang',

    incenseShortCount: '{{count}} nén',
    incenseStatsTitle: 'Số nén nhang',
  },

  meditation: {
    screenTitle: 'Thiền',

    breathingTitle: 'Thiền thở',

    chooseDuration: 'Chọn thời gian',

    minuteUnit: 'phút',

    heroMinutes: '{{count}} phút',

    start: 'Bắt đầu thiền',

    pause: 'Tạm dừng thiền',

    restart: 'Thiền lại',

    paused: 'Đã tạm dừng',

    running: 'Đang thiền',

    resetTime: 'Đặt lại thời gian',

    completedTitle: 'Hoàn thành buổi thiền',

    completedMessage: 'Hãy hít thở chậm và cảm nhận trạng thái của bạn.',

    breathTitle: 'Hướng dẫn thở',

    inhale: 'Hít vào chậm trong 4 giây',

    hold: 'Giữ hơi trong 2 giây',

    exhale: 'Thở ra chậm trong 6 giây',
  },
  prayer: {
    title: 'Nhật ký cầu nguyện',

    subtitle:
      'Nội dung được lưu trên thiết bị và không tự động gửi lên máy chủ.',

    placeholder: 'Viết điều bạn đang cầu nguyện hoặc biết ơn...',

    save: 'Lưu lời cầu nguyện',

    savedItems: 'Nội dung đã lưu',

    empty: 'Bạn chưa lưu lời cầu nguyện nào.',

    requiredTitle: 'Chưa có nội dung',

    requiredMessage: 'Hãy nhập lời cầu nguyện của bạn.',

    savedTitle: 'Đã lưu',

    savedMessage: 'Lời cầu nguyện được lưu riêng trên thiết bị.',

    saveErrorTitle: 'Không thể lưu',

    saveErrorMessage: 'Đã xảy ra lỗi khi lưu lời cầu nguyện.',

    deleteDialogTitle: 'Xóa lời cầu nguyện',

    deleteDialogMessage: 'Bạn có chắc muốn xóa nội dung này?',
    writeTitle: 'Viết lời cầu nguyện',

    writeHint: 'Nội dung được lưu riêng tư trên thiết bị của bạn.',

    privateLabel: 'Riêng tư',

    savedCount: '{{count}} nội dung đã lưu',

    emptyTitle: 'Chưa có lời cầu nguyện',

    savedPrivately: 'Được lưu riêng tư',
  },

  audio: {
    title: 'Âm thanh chùa',

    subtitle: 'Nghe thử các âm thanh dùng trong chính điện.',

    woodenFishTitle: 'Tiếng gõ mõ',

    playWoodenFish: 'Phát tiếng gõ mõ',

    bellTitle: 'Tiếng chuông chùa',

    playBell: 'Phát tiếng chuông',

    tapOrHoldHint: 'Chạm để phát một lần • Nhấn giữ để phát liên tục',

    playingContinuously: 'Đang phát liên tục',

    tapToStop: 'Chạm để tắt',
  },
  settings: {
    title: 'Cài đặt',

    notifications: 'Thông báo',

    notificationsDescription:
      'Chức năng nhắc thiền và nhắc ngày rằm sẽ được bổ sung sau.',

    language: 'Ngôn ngữ',

    languageDescription: 'Chọn ngôn ngữ sử dụng trong ứng dụng.',

    chooseLanguage: 'Chọn ngôn ngữ',

    privacy: 'Quyền riêng tư',

    privacyDescription: 'Nhật ký cầu nguyện hiện chỉ được lưu trên thiết bị.',

    information: 'Thông tin',

    version: 'Chùa Online phiên bản 0.0.1',
  },
  lunarCalendar: {
    title: 'Lịch âm',

    subtitle: 'Xem ngày âm, mùng một và ngày rằm.',

    today: 'Hôm nay',

    firstDay: 'Mùng một',

    fullMoon: 'Ngày rằm',

    solarDate: 'Dương lịch',

    lunarDate: 'Âm lịch',

    lunarMonth: 'Tháng {{month}}',

    leapMonth: 'nhuận',

    firstDayTitle: 'Hôm nay là mùng một',

    fullMoonTitle: 'Hôm nay là ngày rằm',

    observanceMessage:
      'Hãy dành một chút thời gian để tĩnh tâm, thiền hoặc tụng kinh.',
  },
  lunarNotifications: {
    channelName: 'Nhắc lịch âm',

    channelDescription: 'Thông báo nhắc ngày mùng một và ngày rằm.',

    settingTitle: 'Nhắc mùng một và ngày rằm',

    settingDescription: 'Nhận thông báo vào ngày mùng một và ngày 15 âm lịch.',

    reminderTime: 'Giờ nhắc',

    settingNote:
      'Ứng dụng sẽ tạo lịch nhắc cho khoảng 12 tháng tiếp theo và tự làm mới khi mở ứng dụng.',

    firstDayTitle: 'Hôm nay là mùng một',

    fullMoonTitle: 'Hôm nay là ngày rằm',

    reminderBody:
      'Hãy dành vài phút để tĩnh tâm, thiền, cầu nguyện hoặc nghe một bài kinh.',

    permissionTitle: 'Thông báo đang bị tắt',

    permissionMessage:
      'Hãy cho phép ứng dụng gửi thông báo trong phần cài đặt của thiết bị.',

    enabledTitle: 'Đã bật nhắc lịch âm',

    enabledMessage: 'Đã tạo {{count}} thông báo, thời gian nhắc lúc {{time}}.',

    errorTitle: 'Không thể tạo thông báo',

    errorMessage: 'Đã xảy ra lỗi khi tạo lịch nhắc mùng một và ngày rằm.',
  },
  spiritualAudio: {
    title: 'Kinh và nhạc thiền',

    subtitle: 'Lắng nghe những âm thanh nhẹ nhàng để thư giãn và tĩnh tâm.',

    searchPlaceholder: 'Tìm bài nghe...',

    playing: 'Đang phát',

    paused: 'Đã tạm dừng',

    empty: 'Không tìm thấy bài nghe phù hợp.',

    categories: {
      sutra: 'Bài kinh',
      meditation: 'Nhạc thiền',
      nature: 'Thiên nhiên',
    },

    tracks: {
      greatCompassion: {
        title: 'Chú Đại Bi',

        description: 'Bản tụng Chú Đại Bi giúp tĩnh tâm và thư giãn.',
      },

      heartSutra: {
        title: 'Bát Nhã Tâm Kinh',

        description: 'Bản tụng Bát Nhã Tâm Kinh nhẹ nhàng và trang nghiêm.',
      },

      buddhaName: {
        title: 'Niệm Phật',

        description: 'Âm thanh niệm Phật giúp giữ tâm thanh tịnh.',
      },

      breathing: {
        title: 'Thiền theo hơi thở',

        description: 'Hướng dẫn chú ý vào hơi thở và thư giãn cơ thể.',
      },

      deepRelaxation: {
        title: 'Thiền thư giãn sâu',

        description: 'Âm thanh nhẹ nhàng dành cho nghỉ ngơi và ngủ ngon.',
      },

      singingBowl: {
        title: 'Chuông xoay thiền định',

        description: 'Âm thanh chuông xoay giúp tập trung và làm dịu tâm trí.',
      },

      templeRain: {
        title: 'Mưa trong sân chùa',

        description: 'Tiếng mưa nhẹ trong không gian chùa yên tĩnh.',
      },

      forestBirds: {
        title: 'Chim hót trong rừng',

        description: 'Âm thanh thiên nhiên với tiếng chim và lá cây.',
      },

      flowingStream: {
        title: 'Dòng suối nhẹ',

        description: 'Tiếng nước chảy nhẹ nhàng giúp thư giãn và dễ ngủ.',
      },
    },
  },
  dailyPracticeNotifications: {
    channelName: 'Nhắc thực hành hằng ngày',

    channelDescription: 'Thông báo nhắc thiền và tụng kinh mỗi ngày.',

    settingTitle: 'Nhắc thiền hoặc tụng kinh',

    settingDescription: 'Nhận thông báo vào thời gian bạn chọn mỗi ngày.',

    practiceType: 'Nội dung nhắc',

    typeMeditation: 'Thiền',

    typeSutra: 'Tụng kinh',

    typeBoth: 'Cả hai',

    reminderTime: 'Giờ nhắc',

    previewLabel: 'Xem trước thông báo',

    settingNote: 'Thông báo sẽ tự lặp lại mỗi ngày theo giờ đã chọn.',

    meditationTitle: 'Đã đến giờ thiền',

    meditationBody: 'Hãy dành vài phút để hít thở chậm và tĩnh tâm.',

    sutraTitle: 'Đã đến giờ tụng kinh',

    sutraBody: 'Hãy dành vài phút để tụng hoặc lắng nghe một bài kinh.',

    bothTitle: 'Đã đến giờ thực hành',

    bothBody: 'Bạn có thể thiền hoặc nghe một bài kinh để tìm lại sự bình an.',

    permissionTitle: 'Thông báo đang bị tắt',

    permissionMessage:
      'Hãy cho phép ứng dụng gửi thông báo trong phần cài đặt thiết bị.',

    enabledTitle: 'Đã bật nhắc hằng ngày',

    enabledMessage: 'Ứng dụng sẽ nhắc bạn mỗi ngày lúc {{time}}.',

    errorTitle: 'Không thể tạo thông báo',

    errorMessage: 'Đã xảy ra lỗi khi tạo thông báo nhắc hằng ngày.',
  },
  fortuneStick: {
    title: 'Xin xăm',

    subtitle:
      'Giữ tâm bình an, nghĩ về điều bạn đang quan tâm và xin một quẻ để chiêm nghiệm.',

    intentionLabel: 'Điều bạn đang cầu nguyện',

    intentionPlaceholder: 'Có thể để trống hoặc viết điều bạn đang quan tâm...',

    drawing: 'Đang xin quẻ...',

    drawHint: 'Thành tâm, hít thở chậm và nhấn nút bên dưới.',

    drawingButton: 'Đang gieo quẻ',

    drawButton: 'Xin một quẻ xăm',

    stickNumber: 'Quẻ số',

    interpretationTitle: 'Luận giải',

    adviceTitle: 'Lời khuyên',

    drawAgain: 'Xin quẻ khác',

    save: 'Lưu quẻ',

    saving: 'Đang lưu...',

    savedTitle: 'Đã lưu quẻ xăm',

    savedMessage: 'Quẻ xăm đã được lưu trên thiết bị.',

    saveErrorTitle: 'Không thể lưu',

    saveErrorMessage: 'Đã xảy ra lỗi khi lưu quẻ xăm.',

    historyTitle: 'Quẻ đã lưu',

    historyCount: '{{count}} quẻ',

    emptyHistory: 'Bạn chưa lưu quẻ xăm nào.',

    deleteTitle: 'Xóa quẻ đã lưu',

    deleteMessage: 'Bạn có chắc muốn xóa quẻ này?',

    disclaimer:
      'Nội dung xin xăm chỉ mang tính tham khảo và chiêm nghiệm cá nhân, không thay thế tư vấn chuyên môn hoặc quyết định thực tế.',

    levels: {
      great: 'Đại cát',
      good: 'Cát',
      neutral: 'Bình',
      caution: 'Cẩn trọng',
    },
  },
} as const;

export default vi;
