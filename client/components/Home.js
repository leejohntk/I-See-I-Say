import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useDispatch, useSelector } from 'react-redux';
import { detectObjsInPhoto, gotDetectedObjectsInImage } from '../store/vision';
import { getTranslation, gotTranslation } from '../store/translate';
import {
  Button,
  ContentWrapper,
  HorizontalWrapper,
  VerticalWrapper,
} from './style/StyledComponents';
import SelectLanguage from './SelectLanguage';
import PrintedText from './PrintedText';

const Home = (props) => {
  const dispatch = useDispatch();

  //webcam functionality
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  //selected language for Translate API
  const selectLanguage = useSelector((state) => state.select.selectedLanguage);
  //detected objs for Translate API
  const detectedObjects = useSelector((state) => state.vision.detectedObjs);

  //translated text for PrintedText component
  const translatedText = useSelector((state) => state.translate.translated);

  //dispatch img to Vision API
  useEffect(() => {
    if (imgSrc) {
      const base64String = imgSrc;
      const base64Image = base64String.split(';base64,').pop();

      // chain dispatching of Vision API to Translate API
      dispatch(detectObjsInPhoto(base64Image)).then((fetchedObjects) => {
        const translationInfo = {
          detectedObjects: fetchedObjects.join(' ; '),
          selectLanguage,
        };
        dispatch(getTranslation(translationInfo)).then(
          (fetchedTranslations) => {
            // set detected objects and translations to state
            dispatch(gotDetectedObjectsInImage(fetchedObjects));
            dispatch(gotTranslation(fetchedTranslations));
          }
        );
      });
    }
  }, [imgSrc]);

  return (
    <>
      <HorizontalWrapper>
        {/* left column */}
        <VerticalWrapper>
          <SelectLanguage />
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <PrintedText text={detectedObjects} isTranslatedText={false} />
        </VerticalWrapper>
        {/* right column */}
        <VerticalWrapper>
          <ContentWrapper>
            <Button onClick={capture}>Do it now!</Button>
          </ContentWrapper>
          <img src={imgSrc ? imgSrc : '/welcome.jpg'} />
          <PrintedText text={translatedText} isTranslatedText={true} />
        </VerticalWrapper>
      </HorizontalWrapper>
    </>
  );
};

export default Home;
