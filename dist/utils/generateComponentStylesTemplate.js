"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../templates/components/index");
var generateComponentStylesTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = index_1.componentStylesTemplate;
    var fileName = 'styles.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
exports.default = generateComponentStylesTemplate;
