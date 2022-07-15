import { componentStylesTemplate } from '../templates/components/index';
var generateComponentStylesTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentStylesTemplate;
    var fileName = 'styles.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
export default generateComponentStylesTemplate;
