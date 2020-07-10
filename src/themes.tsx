export const defaultTheme = {
  backgroundColor: '#fff',
  bordercolor: '',
  primaryColor: '#3f51b5',
  primaryTextColor: '#000',
  secondaryColor: '',
  secondaryTextColor: 'rgba(0, 0, 0, 0.65)',
}

const screenSizes = {
  s: 375,
  m: 768,
  l: 1000,
  xl: 1440,
  xxl: 1920,
}

export const mediaQueries = {
  s: `@media screen and (min-width: ${screenSizes.s + 1}px)`,
  m: `@media screen and (min-width: ${screenSizes.m + 1}px)`,
  l: `@media screen and (min-width: ${screenSizes.l + 1}px)`,
  xl: `@media screen and (min-width: ${screenSizes.xl + 1}px)`,
  xxl: `@media screen and (min-width: ${screenSizes.xxl + 1}px)`,
}

export const maxDesktopWidth = '1180px'
