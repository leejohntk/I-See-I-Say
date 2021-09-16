import React from 'react';
import {
  HorizontalWrapper,
  DetectedObjectsWrapper,
  ReturnedText,
  TranslatedTextWrapper,
} from './style/StyledComponents';

const printedText = (props) => {
  return (
    <HorizontalWrapper>
      {props.text.map((word, index) => {
        if (props.isTranslatedText) {
          return (
            <DetectedObjectsWrapper key={index}>
              <ReturnedText>{word}</ReturnedText>
            </DetectedObjectsWrapper>
          );
        } else {
          return (
            <TranslatedTextWrapper key={index}>
              <ReturnedText>{word}</ReturnedText>
            </TranslatedTextWrapper>
          );
        }
      })}
    </HorizontalWrapper>
  );
};

export default printedText;
