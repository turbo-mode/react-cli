import chalk from 'chalk';
import { accessSync, constants, readFileSync } from 'fs-extra';

export const getCliConfigFile = async () => {
  try {
    accessSync('./package.json', constants.R_OK);
    try {
      accessSync('./react-cli.json', constants.R_OK);
      const currentConfigFile = JSON.parse(
        readFileSync('./react-cli.json', { encoding: 'utf-8' })
      );
      return currentConfigFile;
    } catch (err) {
      console.error(
        chalk.red.bold(
          'ERROR: Please provide react-cli.json in your root project'
        )
      );
    }
  } catch (err) {
    console.error(
      chalk.red.bold(
        "ERROR: Please make sure that you're running the generate-react-cli commands from the root level of your React project"
      )
    );
    return process.exit(1);
  }
};

export default getCliConfigFile;
