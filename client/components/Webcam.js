import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useDispatch, useSelector } from 'react-redux';
import { detectObjsInPhoto } from '../store/vision';

const WebcamComponent = (props) => {
  //webcam functionality
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  //language selector
  let [selectLang, setLang] = useState('en');

  //dispatch change for webcam
  useEffect(() => {
    if (imgSrc !== null) {
        let base64String = imgSrc;
        let base64Image = base64String.split(';base64,').pop();
        console.log('selectLang-->', selectLang)
        imgSrc && dispatch(detectObjsInPhoto(base64Image));
      }
  }, [imgSrc])

  //dispatch change for translate
//   useEffect(() => {
//     if (imgSrc !== null) {
//         let base64String = imgSrc;
//         let base64Image = base64String.split(';base64,').pop();
//         console.log('selectLang-->', selectLang)
//         imgSrc && dispatch(detectObjsInPhoto(base64Image));
//       }
//   }, [imgSrc])

const detectedObjects = useSelector((state) => state.vision.detectedObjs)

  return (
    <>
    {detectedObjects.map((word) => {
        return <h1>{word}</h1>
    })}
      <label onClick={(event) => setLang((selectLang = event.target.value))}>
        Select the language to translate to:
        <select>
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
        </select>
      </label>

      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}
    </>
  );
};

export default WebcamComponent;
