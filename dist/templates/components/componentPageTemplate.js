"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentPageTemplate = "\n  import { TemplateName as TemplateNameComponent } from './_components';\n  import type { GetServerSideProps, NextPage } from 'next';\n\n  type TemplateNameProps = {\n    [key: string]: unknown;\n  }\n\n  const TemplateName: NextPage<TemplateNameProps> = () => (\n    <>\n      <div data-testid=\"TemplateName\">\n        <TemplateNameComponent />\n      </div>\n    </>\n  );\n\n  export const getServerSideProps: GetServerSideProps = async ctx => {\n    return {\n      props: {}\n    }\n  }\n\n  export default Page;\n";
exports.default = componentPageTemplate;
