"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var componentTsTemplate_1 = __importDefault(require("../templates/components/componentTsTemplate"));
var generateComponentTsTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentTsTemplate_1.default;
    var fileName = "".concat(componentName, ".tsx");
    var componentPath = "".concat(cmd.path, "/").concat(componentName, "/").concat(fileName);
    if (cmd.type === 'page') {
        componentPath = "".concat(cmd.path, "/").concat(componentName.toLowerCase(), "/_components/").concat(componentName, "/").concat(fileName);
    }
    return {
        componentPath: componentPath,
        fileName: fileName,
        template: template,
    };
};
exports.default = generateComponentTsTemplate;
