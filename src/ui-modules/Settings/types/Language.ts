export interface ILanguage {
  label: string;
  code: string;
  icon?: string;
}

export const LANGAUGE_LIST: ILanguage[] = [
  {label: 'English', code: 'en', icon: 'en'},
  {
    label: 'Россия',
    code: 'ru',
    icon: 'ru',
  },
  {label: 'Հայերեն', code: 'arm', icon: 'arm'},
];
