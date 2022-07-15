import { program } from 'commander';
import pkg from '../package.json';
import { generateComponentCommand } from './commands/index';
import { getCliConfigFile } from './utils/index';

const cli = async (argv: string[]) => {
  const cliConfigFile = await getCliConfigFile();

  generateComponentCommand(argv, cliConfigFile, program);

  program.version(pkg.version);
  program.parse(argv);
};

export default cli;
