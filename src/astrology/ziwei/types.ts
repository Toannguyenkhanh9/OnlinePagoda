export type ZiweiGender = 'male' | 'female';
export type YinYang = 'yin' | 'yang';
export type CycleDirection = 'forward' | 'reverse';

export type HeavenlyStemId =
  | 'jia'
  | 'yi'
  | 'bing'
  | 'ding'
  | 'wu'
  | 'ji'
  | 'geng'
  | 'xin'
  | 'ren'
  | 'gui';

export type EarthlyBranchId =
  | 'zi'
  | 'chou'
  | 'yin'
  | 'mao'
  | 'chen'
  | 'si'
  | 'wu'
  | 'wei'
  | 'shen'
  | 'you'
  | 'xu'
  | 'hai';

export type FiveElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water';
export type BureauNumber = 2 | 3 | 4 | 5 | 6;

export type ZiweiPalaceId =
  | 'life'
  | 'parents'
  | 'fortune'
  | 'property'
  | 'career'
  | 'friends'
  | 'travel'
  | 'health'
  | 'wealth'
  | 'children'
  | 'spouse'
  | 'siblings';

export type ZiweiMainStarId =
  | 'ziWei'
  | 'tianJi'
  | 'taiYang'
  | 'wuQu'
  | 'tianTong'
  | 'lianZhen'
  | 'tianFu'
  | 'taiYin'
  | 'tanLang'
  | 'juMen'
  | 'tianXiang'
  | 'tianLiang'
  | 'qiSha'
  | 'poJun';

export type ZiweiMainStarGroup = 'ziWeiGroup' | 'tianFuGroup';
export type ZiweiStarBrightness = 'notEvaluated';

export type LocalDateTimeInput = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second?: number;
};

export type ZiweiBirthLocation = {
  timeZone: string;
  placeName?: string;
  longitude?: number;
  latitude?: number;
};

export type ZiweiBirthInput = {
  displayName?: string;
  localDateTime: LocalDateTimeInput;
  gender: ZiweiGender;
  location: ZiweiBirthLocation;
};

export type LunarBirthProfile = {
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  isLeapMonth: boolean;
  yearStemId: HeavenlyStemId;
  yearBranchId: EarthlyBranchId;
  yearStemHan: string;
  yearBranchHan: string;
  birthHourBranchId: EarthlyBranchId;
  birthHourBranchIndex: number;
};

export type ZiweiPolarityProfile = {
  yearPolarity: YinYang;
  gender: ZiweiGender;
  classification:
    | 'yangMale'
    | 'yinMale'
    | 'yangFemale'
    | 'yinFemale';
  majorCycleDirection: CycleDirection;
};

export type ZiweiPalace = {
  id: ZiweiPalaceId;
  branchId: EarthlyBranchId;
  branchIndex: number;
  isLifePalace: boolean;
  isBodyPalace: boolean;
};

export type FiveElementBureau = {
  element: FiveElement;
  number: BureauNumber;
  lifePalaceStemId: HeavenlyStemId;
  lifePalaceStemIndex: number;
  lifePalaceBranchId: EarthlyBranchId;
  jiaZiIndex: number;
};

export type ZiweiMainStarPlacement = {
  id: ZiweiMainStarId;
  group: ZiweiMainStarGroup;
  anchorStarId: 'ziWei' | 'tianFu';
  offsetFromAnchor: number;
  branchId: EarthlyBranchId;
  branchIndex: number;
  palaceId: ZiweiPalaceId;
  brightness: ZiweiStarBrightness;
};

export type ZiweiMainStarAnchors = {
  ziWeiBranchId: EarthlyBranchId;
  ziWeiBranchIndex: number;
  tianFuBranchId: EarthlyBranchId;
  tianFuBranchIndex: number;
  lunarDay: number;
  bureauNumber: BureauNumber;
  quotient: number;
  adjustment: number;
};

export type ZiweiMainStarsByPalace = Record<
  ZiweiPalaceId,
  ZiweiMainStarPlacement[]
>;

export type ZiweiDiagnosticCode =
  | 'BIRTH_NEAR_HOUR_BOUNDARY'
  | 'BIRTH_AT_ZI_HOUR'
  | 'TIME_ZONE_METADATA_ONLY'
  | 'LEAP_LUNAR_MONTH'
  | 'MAIN_STAR_BRIGHTNESS_NOT_EVALUATED';

export type ZiweiChartStage1 = {
  version: '1.0.0';
  ruleset: 'vietnamese-traditional-v1';
  input: ZiweiBirthInput;
  lunar: LunarBirthProfile;
  polarity: ZiweiPolarityProfile;
  lifePalaceBranchId: EarthlyBranchId;
  lifePalaceBranchIndex: number;
  bodyPalaceBranchId: EarthlyBranchId;
  bodyPalaceBranchIndex: number;
  bodyResidencePalaceId: ZiweiPalaceId;
  palaces: ZiweiPalace[];
  bureau: FiveElementBureau;
  diagnostics: ZiweiDiagnosticCode[];
};

export type ZiweiChartStage2 = Omit<ZiweiChartStage1, 'version'> & {
  version: '2.0.0';
  mainStarAnchors: ZiweiMainStarAnchors;
  mainStars: ZiweiMainStarPlacement[];
  mainStarsByPalace: ZiweiMainStarsByPalace;
};

export type ZiweiChart = ZiweiChartStage2;

export interface ZiweiCalendarProvider {
  readonly name: string;
  getLunarBirthProfile(input: LocalDateTimeInput): LunarBirthProfile;
}
