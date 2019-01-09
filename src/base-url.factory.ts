export const tsconfigRootPrefix = './';
export const jestRootPrefix = '<rootDir>/';

export const baseUrlFactory = (baseUrl: string): string =>
  baseUrl.startsWith(tsconfigRootPrefix)
    ? baseUrl.replace(tsconfigRootPrefix, jestRootPrefix)
    : `${jestRootPrefix}${baseUrl}`;
