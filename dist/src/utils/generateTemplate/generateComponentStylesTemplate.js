import { components } from '../../templates';
var generateComponentStylesTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = components.componentStylesTemplate;
    var fileName = 'styles.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
export default generateComponentStylesTemplate;
