"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComponentIndexTemplate = void 0;
var index_1 = require("../templates/components/index");
var generateComponentIndexTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = index_1.componentIndexTemplate;
    var fileName = 'index.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
exports.generateComponentIndexTemplate = generateComponentIndexTemplate;
exports.default = exports.generateComponentIndexTemplate;
