import { kebabCase } from 'lodash';
import componentIndexTemplate from '../templates/components/componentIndexTemplate';

interface IGenerateComponentIndexTemplateParams {
  cmd: ICommandArgv;
  componentName: string;
}

interface IGenerateComponentIndexTemplateReturns {
  componentPath: string;
  fileName: string;
  template: string;
}

type GenerateComponentIndexTemplate = (
  params: IGenerateComponentIndexTemplateParams
) => IGenerateComponentIndexTemplateReturns;

const generateComponentIndexTemplate: GenerateComponentIndexTemplate = ({
  cmd,
  componentName,
}) => {
  const template = componentIndexTemplate;
  const fileName = 'index.ts';

  let componentPath: string = `${cmd.path}/${componentName}/${fileName}`;

  if (cmd.type === 'page') {
    componentPath = `${cmd.path}/${kebabCase(
      componentName
    )}/_components/${componentName}/${fileName}`;
  }

  return {
    componentPath,
    fileName,
    template,
  };
};

export default generateComponentIndexTemplate;
