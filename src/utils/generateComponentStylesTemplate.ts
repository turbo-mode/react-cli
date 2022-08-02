import componentStylesTemplate from '../templates/components/componentStylesTemplate';

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

  let componentPath: string = `${cmd.path}/${componentName}/${fileName}`;

  if (cmd.type === 'page') {
    componentPath = `${
      cmd.path
    }/${componentName.toLowerCase()}/_components/${componentName}/${fileName}`;
  }

  return {
    componentPath,
    fileName,
    template,
  };
};

export default generateComponentStylesTemplate;
