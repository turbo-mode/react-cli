import chalk from 'chalk';
import { existsSync, outputFileSync } from 'fs-extra';
import replace from 'replace';
import {
  generateComponentIndexTemplate,
  generateComponentStylesTemplate,
  generateComponentTsTemplate,
} from './generateTemplate';

const componentTemplateGeneratorMap = {
  index: generateComponentIndexTemplate,
  component: generateComponentTsTemplate,
  styles: generateComponentStylesTemplate,
};

const generateComponent = (componentName: string, cmd: ICommandArgv) => {
  const componentFileTypes = ['index', 'component', 'styles'] as const;

  componentFileTypes.forEach(
    (componentFileType: typeof componentFileTypes[number]) => {
      const generateTemplate = componentTemplateGeneratorMap[componentFileType];

      const { componentPath, fileName, template } = generateTemplate({
        cmd,
        componentName,
      });

      if (existsSync(componentPath)) {
        console.error(
          chalk.red(
            `${fileName} already exists in this path "${componentPath}".`
          )
        );
      } else {
        try {
          outputFileSync(componentPath, template);

          replace({
            regex: 'TemplateName',
            replacement: componentName,
            paths: [componentPath],
            recursive: false,
            silent: true,
          });

          console.log(
            chalk.green(
              `${fileName} was successfully created at ${componentPath}`
            )
          );
        } catch (err) {
          console.error(chalk.red(`${fileName} failed and was not created.`));
          console.error(err);
        }
      }
    }
  );
};

export default generateComponent;
