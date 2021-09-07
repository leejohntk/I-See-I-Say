import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useDispatch, useSelector } from 'react-redux';
import { detectObjsInPhoto } from '../store/vision';
import { getTranslation } from '../store/translate';
import { selectedLanguage } from '../store/select';
import {
  Button,
  ContentWrapper,
  DetectedObjectsWrapper,
  FlexChild,
  HorizontalWrapper,
  ReturnedText,
  SelectOptions,
  TranslatedTextWrapper,
  VerticalWrapper,
} from './style/StyledComponents';
import { languageOptions } from './assets/languages';
import Select from 'react-select';

const WebcamComponent = (props) => {
  const dispatch = useDispatch();

  //webcam functionality
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  //selected language on props
  const selectLanguage = useSelector((state) => state.select.selectedLanguage)

  //detected objs on props
  const detectedObjects = useSelector((state) => state.vision.detectedObjs);
  const detectedObjectsChange = detectedObjects.join('');

  //translated text on props
  const translatedText = useSelector((state) => state.translate.translated);

  //dispatch change for webcam
  useEffect(() => {
    if (imgSrc !== null) {
      const base64String = imgSrc;
      const base64Image = base64String.split(';base64,').pop();
      imgSrc && dispatch(detectObjsInPhoto(base64Image));
    }
  }, [imgSrc]);

  //   dispatch change for translate
  useEffect(() => {
    if (detectedObjectsChange) {
      let translationInfo = {
        detectedObjects: detectedObjects.join(' ; '),
        selectLanguage,
      };
      dispatch(getTranslation(translationInfo));
    }
  }, [detectedObjectsChange, selectLanguage]);

  return (
    <>
      <HorizontalWrapper>
        {/* left column with language option select and webcam */}
        <VerticalWrapper>
          <FlexChild>
            <ContentWrapper>
              <label>
                Translate to:
                </label>
                <SelectOptions>
                <Select
                  isClearable="true"
                  isSearchable="true"
                  onChange={(selected) => {
                    dispatch(selectedLanguage(selected.value));
                  }}
                  defaultValue={languageOptions[24]} //French as default
                  options={languageOptions}
                />
              </SelectOptions>
            </ContentWrapper>
          </FlexChild>
          <FlexChild>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          </FlexChild>
        </VerticalWrapper>
        {/* right column with submit button & returned image */}
        <VerticalWrapper>
          <FlexChild>
            <ContentWrapper>
              <Button onClick={capture}>Do it now!</Button>
            </ContentWrapper>
          </FlexChild>
          <FlexChild>
            <img src={imgSrc ? imgSrc : '/welcome.jpg'} />
          </FlexChild>
        </VerticalWrapper>
      </HorizontalWrapper>
      {/* detected & translated text */}
      <HorizontalWrapper>
        {detectedObjects.map((word, index) => {
          return (
            <DetectedObjectsWrapper key={index}>
              <ReturnedText>{word}</ReturnedText>
            </DetectedObjectsWrapper>
          );
        })}
        {translatedText.map((word, index) => {
          return (
            <TranslatedTextWrapper key={index}>
              <ReturnedText>{word}</ReturnedText>
            </TranslatedTextWrapper>
          );
        })}
      </HorizontalWrapper>
    </>
  );
};

export default WebcamComponent;
