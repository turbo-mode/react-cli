import { componentStylesTemplate } from '../templates/components/index';

interface IGenerateComponentStylesTemplateParams {
  cmd: ICommandArgv;
  componentName: string;
}

interface IGenerateComponentStylesTemplateReturns {
  componentPath: string;
  fileName: string;
  template: string;
}

type GenerateComponentStylesTemplate = (
  params: IGenerateComponentStylesTemplateParams
) => IGenerateComponentStylesTemplateReturns;

const generateComponentStylesTemplate: GenerateComponentStylesTemplate = ({
  cmd,
  componentName,
}) => {
  const template = componentStylesTemplate;
  const fileName = 'styles.ts';

  return {
    componentPath: `${cmd.path}/${componentName}/${fileName}`,
    fileName,
    template,
  };
};

export default generateComponentStylesTemplate;