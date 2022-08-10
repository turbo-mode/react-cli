"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentPageTemplate = "import { TemplateName as TemplateNameComponent } from './_components';\nimport type { GetServerSideProps, NextPage } from 'next';\n\ntype TemplateNameProps = {\n  [key: string]: unknown;\n}\n\nconst TemplateName: NextPage<TemplateNameProps> = () => (\n  <>\n    <div data-testid=\"TemplateName\">\n      <TemplateNameComponent />\n    </div>\n  </>\n);\n\nexport const getServerSideProps: GetServerSideProps = async ctx => {\n  return {\n    props: {}\n  }\n}\n\nexport default TemplateName;";
exports.default = componentPageTemplate;
