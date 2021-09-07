import React from 'react';
import { useSelector } from 'react-redux';
import {
  HorizontalWrapper,
  DetectedObjectsWrapper,
  ReturnedText,
} from './style/StyledComponents';

const detectedObjectsComponent = () => {
  const detectedObjects = useSelector((state) => state.vision.detectedObjs);

  return (
    <HorizontalWrapper>
      {detectedObjects.map((word, index) => {
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
