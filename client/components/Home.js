import React from 'react'
import {connect} from 'react-redux'
import Translate from './Translate'
import WebcamComponent from "./Webcam";

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <React.Fragment>
    <div>
      <h3>Welcome, {username}</h3>
    </div>
    <Translate />
    <WebcamComponent />
    </React.Fragment>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
