import { components } from 'src/templates';

interface IGenerateComponentTsTemplateParams {
  cmd: ICommandArgv;
  componentName: string;
}

interface IGenerateComponentTsTemplateReturns {
  componentPath: string;
  fileName: string;
  template: string;
}

type GenerateComponentTsTemplate = (
  params: IGenerateComponentTsTemplateParams
) => IGenerateComponentTsTemplateReturns;

const generateComponentTsTemplate: GenerateComponentTsTemplate = ({
  cmd,
  componentName,
}) => {
  const template = components.componentTsTemplate;
  const fileName = `${componentName}.tsx`;

  return {
    componentPath: `${cmd.path}/${componentName}/${fileName}`,
    fileName,
    template,
  };
};

export default generateComponentTsTemplate;
