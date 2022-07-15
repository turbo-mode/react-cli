import chalk from 'chalk';

export const getComponentByType = (
  argv: string[],
  cliConfigFile: ICliConfigFile
) => {
  const hasComponentTypeOption = argv.find(arg => arg.includes('--type'));

  // Check for component type option.

  if (hasComponentTypeOption) {
    const componentType = hasComponentTypeOption.split('=')[1]; // get the component type value
    const selectedComponentType = cliConfigFile.component[componentType];

    // If the selected component type does not exists in the cliConfigFile under `component` throw an error

    if (!selectedComponentType) {
      console.error(
        chalk.red(`
          ERROR: Please make sure the component type you're trying to use exists in the
          ${chalk.bold(
            'generate-react-cli.json'
          )} config file under the ${chalk.bold('component')} object.
        `)
      );

      process.exit(1);
    }

    // Otherwise return it.

    return selectedComponentType;
  }

  // Otherwise return the default component type.

  return cliConfigFile.component.default;
};

export default getComponentByType;
