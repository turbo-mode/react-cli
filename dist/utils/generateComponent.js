"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComponent = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_extra_1 = require("fs-extra");
var replace_1 = __importDefault(require("replace"));
var index_1 = require("./index");
var componentTemplateGeneratorMap = {
    index: index_1.generateComponentIndexTemplate,
    component: index_1.generateComponentTsTemplate,
    styles: index_1.generateComponentStylesTemplate,
};
var generateComponent = function (componentName, cmd) {
    var componentFileTypes = ['index', 'component', 'styles'];
    componentFileTypes.forEach(function (componentFileType) {
        console.log(componentFileType);
        var generateTemplate = componentTemplateGeneratorMap[componentFileType];
        var _a = generateTemplate({
            cmd: cmd,
            componentName: componentName,
        }), componentPath = _a.componentPath, fileName = _a.fileName, template = _a.template;
        if ((0, fs_extra_1.existsSync)(componentPath)) {
            console.error(chalk_1.default.red("".concat(fileName, " already exists in this path \"").concat(componentPath, "\".")));
        }
        else {
            try {
                (0, fs_extra_1.outputFileSync)(componentPath, template);
                (0, replace_1.default)({
                    regex: 'TemplateName',
                    replacement: componentName,
                    paths: [componentPath],
                    recursive: false,
                    silent: true,
                });
                console.log(chalk_1.default.green("".concat(fileName, " was successfully created at ").concat(componentPath)));
            }
            catch (err) {
                console.error(chalk_1.default.red("".concat(fileName, " failed and was not created.")));
                console.error(err);
            }
        }
    });
};
exports.generateComponent = generateComponent;
exports.default = exports.generateComponent;
