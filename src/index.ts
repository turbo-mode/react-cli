#!/usr/bin/env node

import { program } from 'commander';
import { generateComponentCommand } from 'src/commands';
import pkg from '../package.json';
import { getCliConfigFile } from './utils';

const exec = async (argv: string[]) => {
  const cliConfigFile = await getCliConfigFile();

  generateComponentCommand(argv, cliConfigFile, program);

  program.version(pkg.version);
  program.parse(argv);
};

export default exec;
