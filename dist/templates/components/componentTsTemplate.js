"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentTsTemplate = "import React from 'react';\nimport styles from './styles';\nimport type { FC } from 'react';\n\ntype TemplateNameProps = {\n  [key: string]: unknown;\n}\n\nconst TemplateName: FC<TemplateNameProps> = () => (\n  <>\n    <style jsx>{styles}</style>\n    <div data-testid=\"TemplateName\">\n      TemplateName Component\n    </div>\n  </>\n);\n\nexport default TemplateName;";
exports.default = componentTsTemplate;
