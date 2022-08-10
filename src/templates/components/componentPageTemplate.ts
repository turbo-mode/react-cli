const componentPageTemplate = `import { TemplateName as TemplateNameComponent } from './_components';
import type { GetServerSideProps, NextPage } from 'next';

type TemplateNameProps = {
  [key: string]: unknown;
}

const TemplateName: NextPage<TemplateNameProps> = () => (
  <>
    <div data-testid="TemplateName">
      <TemplateNameComponent />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async ctx => {
  return {
    props: {}
  }
}

export default TemplateName;`;

export default componentPageTemplate;
