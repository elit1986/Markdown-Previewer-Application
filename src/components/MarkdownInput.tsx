import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  color: #333;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #ddf2fd;
  color: #333;
`;

const StyledTextArea = styled.textarea`
  font-family: monospace;
  width: 90%;
  height: 80%;
  padding: 2rem;
  border-radius: 5px;
  color: #164863;
  resize: vertical;
  background-color: #ddf2fd;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const MarkdownInput: React.FC<MarkdownInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};
