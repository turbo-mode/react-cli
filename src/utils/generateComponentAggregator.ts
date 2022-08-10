import componentAggregatorTemplate from '../templates/components/componentAggregatorTemplate';

interface IGenerateComponentAggregatorTemplateParams {
  cmd: ICommandArgv;
  componentName: string;
}

interface IGenerateComponentAggregatorTemplateReturns {
  componentPath: string;
  fileName: string;
  template: string;
}

type GenerateComponentAggregatorTemplate = (
  params: IGenerateComponentAggregatorTemplateParams
) => IGenerateComponentAggregatorTemplateReturns;

const generateComponentAggregatorTemplate: GenerateComponentAggregatorTemplate =
  ({ cmd, componentName }) => {
    const template = componentAggregatorTemplate;
    const fileName = 'index.ts';

    return {
      componentPath: `${
        cmd.path
      }/${componentName.toLowerCase()}/_components/${fileName}`,
      fileName,
      template,
    };
  };

export default generateComponentAggregatorTemplate;
