import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #164863;
  color: #fff;
  letter-spacing: 0.3rem;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #427d9d;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #61a3ba;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Guide</Button>
    </HeaderContainer>
  );
};
