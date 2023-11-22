import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GuideSection = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: #fff;
  color: #164863;
  border-radius: 5px;
  font-size: 1rem;

  p {
    font-weight: bold;
  }
`;

export const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer>
      <GuideSection>
        <p>
          <code># Heading</code> - Creates a heading
        </p>
        <p>
          <code>**bold**</code> - Bold text
        </p>
        <p>
          <code>*italic*</code> - Italic text
        </p>
        <p>
          <code>[title](url)</code> - Creates a hyperlink
        </p>
      </GuideSection>
      <GuideSection>
        <p>
          <code>![Image](url)</code> - Displays an image
        </p>
        <p>
          <code>`inline code`</code>
        </p>
        <p>
          <code>```block code```</code>
        </p>
        <p>
          <code>- list item</code>
        </p>
      </GuideSection>
    </GuideContainer>
  );
};
