import { components } from '../../templates';

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
  const template = components.componentIndexTemplate;
  const fileName = 'index.ts';

  return {
    componentPath: `${cmd.path}/${componentName}/${fileName}`,
    fileName,
    template,
  };
};

export default generateComponentIndexTemplate;
