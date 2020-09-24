import React, { useState } from 'react';
import styled from 'styled-components';

interface KeywordPreviewProp {
  keyword: string;
  onRemove: (keyword: string) => void;
}

const MiniKeyword = styled.div`
  border: 1px solid #20303c;
  border-radius: 3px;
  margin: 5px;
  font-size: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-right: 5px;
    width: 20px;
    height: 15px;
    line-height: 9px;
  }
`;

const KeywordPreview = ({ keyword, onRemove }: KeywordPreviewProp) => {
  const handleClick = () => {
    onRemove(keyword);
  };

  return (
    <MiniKeyword>
      <button onClick={handleClick}>&times;</button>
      <span>{keyword}</span>
    </MiniKeyword>
  );
};

export default KeywordPreview;
