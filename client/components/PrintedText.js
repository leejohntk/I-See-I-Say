import React from 'react';
import {
  HorizontalWrapper,
  DetectedObjectsWrapper,
  ReturnedText,
} from './style/StyledComponents';

const printedText = (props) => {
console.log(props.isTranslated)
  return (
    <HorizontalWrapper>
      {props.text.map((word, index) => {
        return (
          <DetectedObjectsWrapper key={index}>
            <ReturnedText>{word}</ReturnedText>
          </DetectedObjectsWrapper>
        );
      })}
    </HorizontalWrapper>
  );
};

export default printedText;
