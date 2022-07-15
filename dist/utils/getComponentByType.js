"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentByType = void 0;
var chalk_1 = __importDefault(require("chalk"));
var getComponentByType = function (argv, cliConfigFile) {
    var hasComponentTypeOption = argv.find(function (arg) { return arg.includes('--type'); });
    // Check for component type option.
    if (hasComponentTypeOption) {
        var componentType = hasComponentTypeOption.split('=')[1]; // get the component type value
        var selectedComponentType = cliConfigFile.component[componentType];
        // If the selected component type does not exists in the cliConfigFile under `component` throw an error
        if (!selectedComponentType) {
            console.error(chalk_1.default.red("\n          ERROR: Please make sure the component type you're trying to use exists in the\n          ".concat(chalk_1.default.bold('generate-react-cli.json'), " config file under the ").concat(chalk_1.default.bold('component'), " object.\n        ")));
            process.exit(1);
        }
        // Otherwise return it.
        return selectedComponentType;
    }
    // Otherwise return the default component type.
    return cliConfigFile.component.default;
};
exports.getComponentByType = getComponentByType;
exports.default = exports.getComponentByType;
