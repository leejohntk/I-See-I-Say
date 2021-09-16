import styled from 'styled-components';
// Navbar.js
export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
`;
// Navbar.js
export const TitleWrapper = styled.section`
  padding: 0.3em;
  margin: 1em;
  background: #222e50;
  border-radius: 15px;
`;
// Navbar.js
export const Logo = styled.section`
  text-align: center;
  font-size: 50px;
  padding-top: 0.25em;
`;
// Home.js
export const Button = styled.button`
  color: #222e50;
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #222e50;
  border-radius: 3px;
`;
// Home.js, 
export const VerticalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
// Home.js, SelectLanguage.js
export const ContentWrapper = styled.section`
  width: 250px;
  padding: 0.75em;
  margin: 0.75em;
  background: #222e50;
  border-radius: 8px;
  font-size: 1em;
  color: white;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;
// SelectLanguage.js,
export const SelectOptions = styled.section`
  padding: 0.2em;
  margin: 0.2em;
  font-size: 1em;
  color: black;
  font-weight: bold;
  text-align:left;
`;

// PrintedText.js
export const ReturnedText = styled.h2`
  font-size: 2em;
  text-align: center;
  color: white;
  line-height: 100%;
`;

// PrintedText.js
export const DetectedObjectsWrapper = styled.section`
  padding: 0.1px;
  margin: 1em;
  background: #007991;
  border-radius: 15px;
  flex: 1;
`;

// PrintedText.js
export const TranslatedTextWrapper = styled.section`
  padding: 0.1px;
  margin: 1em;
  background: #439a86;
  border-radius: 15px;
  flex: 1;
`;
// Home.js, DetectedObjectsComponent.js, TranslatedTextComponent.js
export const HorizontalWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;