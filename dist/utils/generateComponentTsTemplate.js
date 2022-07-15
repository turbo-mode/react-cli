import { componentTsTemplate } from '../templates/components/index';
var generateComponentTsTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentTsTemplate;
    var fileName = "".concat(componentName, ".tsx");
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
export default generateComponentTsTemplate;
