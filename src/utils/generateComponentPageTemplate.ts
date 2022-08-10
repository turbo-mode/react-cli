import { kebabCase } from 'lodash';
import componentPageTemplate from '../templates/components/componentPageTemplate';

interface IGenerateComponentPageTemplateParams {
  cmd: ICommandArgv;
  componentName: string;
}

interface IGenerateComponentPageTemplateReturns {
  componentPath: string;
  fileName: string;
  template: string;
}

type GenerateComponentPageTemplate = (
  params: IGenerateComponentPageTemplateParams
) => IGenerateComponentPageTemplateReturns;

const generateComponentPageTemplate: GenerateComponentPageTemplate = ({
  cmd,
  componentName,
}) => {
  const template = componentPageTemplate;
  const fileName = `index.page.tsx`;

  return {
    componentPath: `${cmd.path}/${kebabCase(componentName)}/${fileName}`,
    fileName,
    template,
  };
};

export default generateComponentPageTemplate;
