import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { Logo, Title, TitleWrapper } from './style/StyledComponents';

// { <nav>
// {isLoggedIn ? (
//   <div>
//     {/* The navbar will show these links after you log in */}
//     <Link to="/home">Home</Link>
//     <a href="#" onClick={handleClick}>
//       Logout
//     </a>
//   </div>
// ) : (
//   <div>
//     {/* The navbar will show these links before you log in */}
//     <Link to="/login">Login</Link>
//     <Link to="/signup">Sign Up</Link>
//   </div>
// )}
// </nav> }

const Navbar = ({ handleClick, isLoggedIn }) => (
  <React.Fragment>
    <Logo>
      {/* <p className="title">👁🙈   👁🙊</p> */}
      👁🙈   👁🙊
    </Logo>
    <TitleWrapper>
      <Title>Take a pic and I'll tell you what I see with a translation!</Title>
    </TitleWrapper>
  </React.Fragment>
);

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.auth.id,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick() {
//       dispatch(logout());
//     },
//   };
// };

export default Navbar;

// export default connect(mapState, mapDispatch)(Navbar);
