import { program } from 'commander';
import generateComponentCommand from './commands/generateComponentCommand';
import getCliConfigFile from './utils/getCliConfigFile';

const cli = async (argv: string[]) => {
  const cliConfigFile = await getCliConfigFile();

  generateComponentCommand(argv, cliConfigFile, program);

  program.parse(argv);
};

export default cli;
