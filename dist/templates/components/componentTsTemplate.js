"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentTsTemplate = "\n  import React from 'react';\n  import styles from './styles';\n  import type { FC } from 'react';\n\n  type TemplateNameProps = {\n    [key: string]: unknown;\n  }\n\n  const TemplateName: FC<TemplateNameProps> = () => (\n    <>\n      <style jsx>{styles}</style>\n      <div data-testid=\"TemplateName\">\n        TemplateName Component\n      </div>\n    </>\n  );\n\n  export default TemplateName;\n";
exports.default = componentTsTemplate;
