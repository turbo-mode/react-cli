"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var componentIndexTemplate_1 = __importDefault(require("../templates/components/componentIndexTemplate"));
var generateComponentIndexTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentIndexTemplate_1.default;
    var fileName = 'index.ts';
    var componentPath = "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName);
    if (cmd.type === 'page') {
        componentPath = "".concat(cmd.path, "/").concat((0, lodash_1.kebabCase)(componentName), "/_components/").concat(componentName, "/").concat(fileName);
    }
    return {
        componentPath: componentPath,
        fileName: fileName,
        template: template,
    };
};
exports.default = generateComponentIndexTemplate;
