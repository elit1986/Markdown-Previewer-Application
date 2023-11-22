import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const OutputContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  background-color: #164863;
  color: #ddf2fd;
`;

interface MarkdownOutputProps {
  markdown: string;
}

export const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};
