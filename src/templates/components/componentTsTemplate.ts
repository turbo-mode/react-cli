const componentTsTemplate = `
  import React from 'react';
  import styles from './styles';
  import type { FC } from 'react';

  type TemplateNameProps = {
    [key: string]: unknown;
  }

  const TemplateName: FC<TemplateNameProps> = () => (
    <>
      <style jsx>{styles}</style>
      <div data-testid="TemplateName">
        TemplateName Component
      </div>
    </>
  );

  export default TemplateName;
`;

export default componentTsTemplate;
