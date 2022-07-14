"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = require("../../templates");
var generateComponentStylesTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = templates_1.components.componentStylesTemplate;
    var fileName = 'styles.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
exports.default = generateComponentStylesTemplate;
