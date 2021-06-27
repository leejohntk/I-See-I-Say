import React from 'react';
import { connect } from 'react-redux';
import WebcamComponent from './Webcam';

/**
 * COMPONENT
 */
export const Home = (props) => {
  // const { username } = props;

  return (
    <React.Fragment>
      {/* <TitleWrapper>
        <Title>
          Take a pic and I'll tell you what I see with a
          translation!
        </Title>
      </TitleWrapper> */}
      <WebcamComponent />
    </React.Fragment>
  );
};

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     username: state.auth.username,
//   };
// };

// export default connect(mapState)(Home);

export default Home;
