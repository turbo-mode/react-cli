interface IGenerateComponentTemplateParams {
  cmd: string;
  componentName: string;
  cliConfigFile: any;
}

interface IGenerateComponentTemplateReturns {
  componentPath: string;
  fileName: string;
  template: string;
}

type GenerateComponentTemplate = (
  params: IGenerateComponentTemplateParams
) => IGenerateComponentTemplateReturns;

const generateComponentTemplate: GenerateComponentTemplate = ({
  cmd,
  componentName,
  cliConfigFile,
}) => {
  return {
    componentPath: '',
    fileName: '',
    template: '',
  };
};

export default generateComponentTemplate;
