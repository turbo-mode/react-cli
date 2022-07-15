"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../templates/components/index");
var generateComponentTsTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = index_1.componentTsTemplate;
    var fileName = "".concat(componentName, ".tsx");
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
exports.default = generateComponentTsTemplate;