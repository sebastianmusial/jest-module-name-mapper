import { moduleNameMapper } from './path.factory';

const bootstrap = (path?: string) => moduleNameMapper(path);

module.exports = bootstrap;
