export interface IThemeSize {
  typography_10: number;
  typography_14: number;
  typography_16: number;
  typography_18: number;
  typography_24: number;
  typography_30: number;
  typography_36: number;
  typography_48: number;
  typography_60: number;
  typography_72: number;
  typography_84: number;
}
export interface ILineHeight {
  lineHeight_10: number;
  lineHeight_14: number;
  lineHeight_16: number;
  lineHeight_18: number;
  lineHeight_24: number;
  lineHeight_30: number;
  lineHeight_36: number;
  lineHeight_48: number;
  lineHeight_60: number;
  lineHeight_72: number;
  lineHeight_84: number;
}
export const size: IThemeSize = {
  typography_10: 10,
  typography_14: 14,
  typography_16: 16,
  typography_18: 18,
  typography_24: 24,
  typography_30: 30,
  typography_36: 36,
  typography_48: 48,
  typography_60: 60,
  typography_72: 72,
  typography_84: 84,
};
export const lineHeight: ILineHeight = {
  lineHeight_10: 1.4 * size.typography_10,
  lineHeight_14: 1.4 * size.typography_14,
  lineHeight_16: 1.4 * size.typography_16,
  lineHeight_18: 1.4 * size.typography_18,
  lineHeight_24: 1.4 * size.typography_24,
  lineHeight_30: 1.4 * size.typography_30,
  lineHeight_36: 1.4 * size.typography_36,
  lineHeight_48: 1.4 * size.typography_48,
  lineHeight_60: 1.4 * size.typography_60,
  lineHeight_72: 1.4 * size.typography_72,
  lineHeight_84: 1.4 * size.typography_84,
};
