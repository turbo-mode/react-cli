"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generateComponent_1 = __importDefault(require("../utils/generateComponent"));
var getComponentByType_1 = __importDefault(require("../utils/getComponentByType"));
var generateComponentCommand = function (argv, cliConfigFile, program) {
    var selectedComponentType = (0, getComponentByType_1.default)(argv, cliConfigFile);
    var componentCommand = program
        .command('component [names...]')
        .alias('c')
        // Static component command option defaults.
        .option('-p, --path <path>', 'The path where the component will get generated in.', selectedComponentType.path)
        .option('--type <type>', 'You can pass a component type that you have configured in your GRC config file.', 'default');
    componentCommand.action(function (componentNames, cmd) {
        return componentNames.forEach(function (componentName) {
            return (0, generateComponent_1.default)(componentName, cmd);
        });
    });
};
exports.default = generateComponentCommand;
