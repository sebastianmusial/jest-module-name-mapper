import chalk from 'chalk';
import { TSConfigPaths, FreshPath, JestPath } from './models';
import { baseUrlFactory } from './base-url.factory';
import { getConfig } from './config.factory';

const keyFactory = (key: string): string =>
  `^${key.replace(/\*/, '(.*)')}`;

const valueFactory = (values: string[], baseUrl: string) =>
  `${baseUrl}/${values[0].replace(/\*/, '$1')}`;

const connectPath = (path: FreshPath, baseUrl: string): JestPath  => ({
  [keyFactory(path[0])]: valueFactory(path[1], baseUrl)
});

const convertToJestFormat = (result: JestPath, item: JestPath) => ({
  ...result,
  ...item,
});

const pathFactory = (paths: TSConfigPaths, baseUrl: string) =>
  Object
    .entries(paths)
    .map(item => connectPath(item, baseUrl))
    .reduce(convertToJestFormat, {});

export const moduleNameMapper = (path?: string) => {
  const config = getConfig(path);
  const { compilerOptions: { paths, baseUrl }} = config;

  if (!paths || !baseUrl) {
    console.error(chalk.red('[tsconfig.json] "paths" or "baseUrl" field does not exist'));
    process.exit();
  }

  const transformedBaseUrl = baseUrlFactory(baseUrl);
  return pathFactory(paths, transformedBaseUrl);
};

