import type { Command } from 'commander';
import { generateComponent as generate, getComponentByType } from 'src/utils';

const generateComponent = (
  argv: string[],
  cliConfigFile: ICliConfigFile,
  program: Command
) => {
  const selectedComponentType = getComponentByType(argv, cliConfigFile);

  const componentCommand = program
    .command('component [names...]')
    .alias('c')

    // Static component command option defaults.

    .option(
      '-p, --path <path>',
      'The path where the component will get generated in.',
      selectedComponentType.path
    )
    .option(
      '--type <type>',
      'You can pass a component type that you have configured in your GRC config file.',
      'default'
    );

  componentCommand.action((componentNames: string[], cmd: ICommandArgv) => {
    return componentNames.forEach(componentName =>
      generate(componentName, cmd)
    );
  });
};

export default generateComponent;
