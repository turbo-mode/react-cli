import { componentIndexTemplate } from '../templates/components/index';
var generateComponentIndexTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentIndexTemplate;
    var fileName = 'index.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
export default generateComponentIndexTemplate;
