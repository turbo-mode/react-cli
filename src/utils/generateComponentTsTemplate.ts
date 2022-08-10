import { kebabCase } from 'lodash';
import componentTsTemplate from '../templates/components/componentTsTemplate';

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
  const template = componentTsTemplate;
  const fileName = `${componentName}.tsx`;

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

export default generateComponentTsTemplate;
