"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentTsTemplate = void 0;
exports.componentTsTemplate = "\n  import React, { FC } from 'react';\n  import styles from './styles';\n\n  type TemplateNameProps = {\n    [key: string]: unknown;\n  }\n\n  const TemplateName: FC<TemplateNameProps> = () => (\n    <>\n      <style jsx>{styles}</style>\n      <div data-testid=\"TemplateName\">\n        TemplateName Component\n      </div>\n    </>\n  );\n\n  export default TemplateName;\n";
exports.default = exports.componentTsTemplate;
