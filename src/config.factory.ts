import chalk from 'chalk';
import * as fs from 'fs';
import { TSConfig } from './models';

const getConfigPath = (configPath?: string) =>  !!configPath
  ? `${process.cwd()}/${configPath}`
  : `${process.cwd()}/tsconfig.json`;

export const getConfig = (configPath?: string): TSConfig => {
  const tsconfigPath = getConfigPath(configPath);

  if (!fs.existsSync(tsconfigPath)) {
    console.error(chalk.red(`${tsconfigPath} file does not exist`));
    process.exit();
  }

  return require(tsconfigPath) as TSConfig;
};
