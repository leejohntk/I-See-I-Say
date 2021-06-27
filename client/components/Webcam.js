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
  Select,
  TranslatedTextWrapper,
} from './style/StyledComponents';

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
  let [selectLang, setLang] = useState('en');

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
          <label
            onClick={(event) => setLang((selectLang = event.target.value))}
          >
            Translate to:
            <Select>
              <option value="zh-CN">Chinese (Simplified)</option>
              <option value="zh-TW">Chinese (Traditional)</option>
              <option value="fr">French</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="km">Khmer</option>
              <option value="ko">Korean</option>
              <option value="lo">Lao</option>
              <option value="pa">Punjabi</option>
              <option value="es">Spanish</option>
              <option value="ta">Tamil</option>
              <option value="vi">Vietnamese</option>
            </Select>
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
