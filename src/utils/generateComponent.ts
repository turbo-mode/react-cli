import chalk from 'chalk';
import { existsSync, outputFileSync } from 'fs-extra';
import replace from 'replace';
import generateComponentAggregatorTemplate from './generateComponentAggregator';
import generateComponentIndexTemplate from './generateComponentIndexTemplate';
import generateComponentPageTemplate from './generateComponentPageTemplate';
import generateComponentStylesTemplate from './generateComponentStylesTemplate';
import generateComponentTsTemplate from './generateComponentTsTemplate';

const componentTemplateGeneratorMap = {
  index: generateComponentIndexTemplate,
  component: generateComponentTsTemplate,
  styles: generateComponentStylesTemplate,
  page: generateComponentPageTemplate,
  aggregator: generateComponentAggregatorTemplate,
};

const generateDefaultComponent = (componentName: string, cmd: ICommandArgv) => {
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

const generatePageComponent = (componentName: string, cmd: ICommandArgv) => {
  const componentFileTypes = [
    'page',
    'index',
    'component',
    'styles',
    'aggregator',
  ] as const;

  componentFileTypes.forEach(
    (componentFileType: typeof componentFileTypes[number]) => {
      const generateTemplate = componentTemplateGeneratorMap[componentFileType];

      const { componentPath, fileName, template } = generateTemplate({
        cmd,
        componentName,
      });

      if (existsSync(`${componentPath}`)) {
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

const generateComponent = (componentName: string, cmd: ICommandArgv) => {
  switch (cmd.type) {
    case 'page':
      return generatePageComponent(componentName, cmd);
    default:
      return generateDefaultComponent(componentName, cmd);
  }
};

export default generateComponent;
