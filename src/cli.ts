import { program } from 'commander';
import { generateComponentCommand } from './commands/index';
import { getCliConfigFile } from './utils/index';

const cli = async (argv: string[]) => {
  const cliConfigFile = await getCliConfigFile();

  generateComponentCommand(argv, cliConfigFile, program);

  program.parse(argv);
};

export default cli;
