"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var componentAggregatorTemplate_1 = __importDefault(require("../templates/components/componentAggregatorTemplate"));
var generateComponentAggregatorTemplate = function (_a) {
    var cmd = _a.cmd, componentName = _a.componentName;
    var template = componentAggregatorTemplate_1.default;
    var fileName = 'index.ts';
    return {
        componentPath: "".concat(cmd.path, "/").concat((0, lodash_1.kebabCase)(componentName), "/_components/").concat(fileName),
        fileName: fileName,
        template: template,
    };
};
exports.default = generateComponentAggregatorTemplate;
