import React from 'react';
import {
  HorizontalWrapper,
  DetectedObjectsWrapper,
  ReturnedText,
} from './style/StyledComponents';

const detectedObjectsComponent = (props) => {

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

export default detectedObjectsComponent;
