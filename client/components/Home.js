import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useDispatch, useSelector } from 'react-redux';
import { detectObjsInPhoto } from '../store/vision';
import { getTranslation } from '../store/translate';
import {
  Button,
  ContentWrapper,
  HorizontalWrapper,
  VerticalWrapper,
} from './style/StyledComponents';
import SelectLanguage from './SelectLanguage';
import DetectedObjectsComponent from './DetectedObjectsComponent';
import TranslatedTextComponent from './TranslatedTextComponent';

const Home = (props) => {
  const dispatch = useDispatch();

  //webcam functionality
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  //selected language on props
  const selectLanguage = useSelector((state) => state.select.selectedLanguage);

  //detected objs on props
  const detectedObjects = useSelector((state) => state.vision.detectedObjs);
  const detectedObjectsChange = detectedObjects.join('');

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
        {/* left column */}
        <VerticalWrapper>
          <SelectLanguage />
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <DetectedObjectsComponent />
        </VerticalWrapper>
        {/* right column */}
        <VerticalWrapper>
          <ContentWrapper>
            <Button onClick={capture}>Do it now!</Button>
          </ContentWrapper>
          <img src={imgSrc ? imgSrc : '/welcome.jpg'} />
          <TranslatedTextComponent />
        </VerticalWrapper>
      </HorizontalWrapper>
    </>
  );
};

export default Home;
