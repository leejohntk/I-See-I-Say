import React from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { detectObjsInPhoto } from '../store/vision';

const WebcamComponent = (props) => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  if (imgSrc !== null) {
    let base64String = imgSrc;
    let base64Image = base64String.split(';base64,').pop();
    // console.log('base64img -->', base64Image)

    // fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
    //     console.log('File created');
    // });
    imgSrc && props.sendImage(base64Image);
  }

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}
    </>
  );
};

const mapDispatch = (dispatch) => {
  return {
    sendImage: (imgSrc) => dispatch(detectObjsInPhoto(imgSrc)),
  };
};

export default connect(null, mapDispatch)(WebcamComponent);
