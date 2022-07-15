import chalk from 'chalk';
import { existsSync, outputFileSync } from 'fs-extra';
import replace from 'replace';
import { generateComponentIndexTemplate, generateComponentStylesTemplate, generateComponentTsTemplate, } from './index';
var componentTemplateGeneratorMap = {
    index: generateComponentIndexTemplate,
    component: generateComponentTsTemplate,
    styles: generateComponentStylesTemplate,
};
var generateComponent = function (componentName, cmd) {
    var componentFileTypes = ['index', 'component', 'styles'];
    componentFileTypes.forEach(function (componentFileType) {
        var generateTemplate = componentTemplateGeneratorMap[componentFileType];
        var _a = generateTemplate({
            cmd: cmd,
            componentName: componentName,
        }), componentPath = _a.componentPath, fileName = _a.fileName, template = _a.template;
        if (existsSync(componentPath)) {
            console.error(chalk.red("".concat(fileName, " already exists in this path \"").concat(componentPath, "\".")));
        }
        else {
            try {
                outputFileSync(componentPath, template);
                replace({
                    regex: 'TemplateName',
                    replacement: componentName,
                    paths: [componentPath],
                    recursive: false,
                    silent: true,
                });
                console.log(chalk.green("".concat(fileName, " was successfully created at ").concat(componentPath)));
            }
            catch (err) {
                console.error(chalk.red("".concat(fileName, " failed and was not created.")));
                console.error(err);
            }
        }
    });
};
export default generateComponent;
