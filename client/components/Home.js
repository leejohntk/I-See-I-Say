import React from 'react';
import { connect } from 'react-redux';
import WebcamComponent from './Webcam';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 1.15em;
  margin: 2em;
  background: #222E50;
  border-radius: 15px
`;
/**
 * COMPONENT
 */
export const Home = (props) => {
  // const { username } = props;

  return (
    <React.Fragment>
      <Wrapper>
        <Title>
          Take a pic and I'll tell you what I see with a
          translation!
        </Title>
      </Wrapper>
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
