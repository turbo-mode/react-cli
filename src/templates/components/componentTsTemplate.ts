export const componentTsTemplate = `
  import React, { FC } from 'react';
  import styles from './styles';

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
