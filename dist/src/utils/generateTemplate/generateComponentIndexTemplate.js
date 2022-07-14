import { components } from '../../templates';
var generateComponentIndexTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = components.componentIndexTemplate;
    var fileName = 'index.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
export default generateComponentIndexTemplate;
