import React from 'react'
import {connect} from 'react-redux'
import WebcamComponent from "./Webcam";

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <React.Fragment>
    <div>
      <h3>{username}, take a pic and I'll tell you what I see and a translation!</h3>
    </div>
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
