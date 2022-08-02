"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var componentPageTemplate_1 = __importDefault(require("../templates/components/componentPageTemplate"));
var generateComponentPageTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentPageTemplate_1.default;
    var fileName = "index.page.tsx";
    return {
        componentPath: "".concat(cmd.path, "/").concat(componentName.toLowerCase(), "/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
exports.default = generateComponentPageTemplate;
