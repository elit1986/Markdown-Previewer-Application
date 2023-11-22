import React, { useState } from 'react';
import { Header } from './Header';
import { MarkdownGuide } from './MarkdownGuide';
import { MarkdownInput } from './MarkdownInput';
import { MarkdownOutput } from './MarkdownOutput';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
`;

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState('# Hello World');
  const [showGuide, setShowGuide] = useState(false);

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <AppContainer>
      <Header onToggleGuide={handleToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <ContentContainer>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
