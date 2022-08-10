"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var componentStylesTemplate_1 = __importDefault(require("../templates/components/componentStylesTemplate"));
var generateComponentStylesTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentStylesTemplate_1.default;
    var fileName = 'styles.ts';
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
exports.default = generateComponentStylesTemplate;
