import React from 'react';
import { useSelector } from 'react-redux';
import {
  HorizontalWrapper,
  ReturnedText,
  TranslatedTextWrapper,
} from './style/StyledComponents';

const TranslatedTextComponent = () => {
  //translated text on props
  const translatedText = useSelector((state) => state.translate.translated);

  return (
    <HorizontalWrapper>
      {translatedText.map((word, index) => {
        return (
          <TranslatedTextWrapper key={index}>
            <ReturnedText>{word}</ReturnedText>
          </TranslatedTextWrapper>
        );
      })}
    </HorizontalWrapper>
  );
};

export default TranslatedTextComponent;
