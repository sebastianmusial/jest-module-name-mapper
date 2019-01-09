export type TSConfigPaths = Record<string, string[]>;

export interface TSConfigCompilerOptions {
  baseUrl: string;
  outDir: string;
  paths: TSConfigPaths;
}

export interface TSConfig {
  compilerOptions: TSConfigCompilerOptions;
}

export type FreshPath = [string, string[]];

export type JestPath = Record<string, string>;
