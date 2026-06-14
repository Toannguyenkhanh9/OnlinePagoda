export const SUPPORTED_LANGUAGES = [
  {
    code: 'vi',
    name: 'Tiếng Việt',
  },
  {
    code: 'en',
    name: 'English',
  },
] as const;

export type AppLanguage =
  (typeof SUPPORTED_LANGUAGES)[number]['code'];

export const SUPPORTED_LANGUAGE_CODES =
  SUPPORTED_LANGUAGES.map(language => language.code);