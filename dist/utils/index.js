"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentByType = exports.getCliConfigFile = exports.generateComponentTsTemplate = exports.generateComponentStylesTemplate = exports.generateComponentIndexTemplate = exports.generateComponent = void 0;
var generateComponent_1 = require("./generateComponent");
Object.defineProperty(exports, "generateComponent", { enumerable: true, get: function () { return __importDefault(generateComponent_1).default; } });
var generateComponentIndexTemplate_1 = require("./generateComponentIndexTemplate");
Object.defineProperty(exports, "generateComponentIndexTemplate", { enumerable: true, get: function () { return __importDefault(generateComponentIndexTemplate_1).default; } });
var generateComponentStylesTemplate_1 = require("./generateComponentStylesTemplate");
Object.defineProperty(exports, "generateComponentStylesTemplate", { enumerable: true, get: function () { return __importDefault(generateComponentStylesTemplate_1).default; } });
var generateComponentTsTemplate_1 = require("./generateComponentTsTemplate");
Object.defineProperty(exports, "generateComponentTsTemplate", { enumerable: true, get: function () { return __importDefault(generateComponentTsTemplate_1).default; } });
var getCliConfigFile_1 = require("./getCliConfigFile");
Object.defineProperty(exports, "getCliConfigFile", { enumerable: true, get: function () { return __importDefault(getCliConfigFile_1).default; } });
var getComponentByType_1 = require("./getComponentByType");
Object.defineProperty(exports, "getComponentByType", { enumerable: true, get: function () { return __importDefault(getComponentByType_1).default; } });
