import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useDispatch, useSelector } from 'react-redux';
import { detectObjsInPhoto } from '../store/vision';
import { getTranslation } from '../store/translate';
import {
  Button,
  ContentWrapper,
  DetectedObjectsWrapper,
  FlexChild,
  FlexWrapper,
  ReturnedText,
  // SelectWrapper,
  TranslatedTextWrapper,
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

  //language selector
  let [selectLang, setLang] = useState('fr');

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
        selectLang,
      };
      dispatch(getTranslation(translationInfo));
    }
  }, [detectedObjectsChange, selectLang]);

  return (
    <>
      <FlexWrapper>
        <ContentWrapper>
          <label>
            Translate to:
            <Select
              isClearable="true"
              isSearchable="true"
              onChange={(selected) => {setLang((selectLang = selected.value))}}
              defaultValue={languageOptions[24]} //French as default
              options={languageOptions}
            />
          </label>
        </ContentWrapper>
        <ContentWrapper>
          <Button onClick={capture}>Do it now!</Button>
        </ContentWrapper>
      </FlexWrapper>

      <FlexWrapper>
        <FlexChild>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </FlexChild>

        <FlexChild>
          <img src={imgSrc ? imgSrc : '/welcome.jpg'} />
        </FlexChild>
      </FlexWrapper>

      <FlexWrapper>
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
      </FlexWrapper>
    </>
  );
};

export default WebcamComponent;
