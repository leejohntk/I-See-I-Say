import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
`;

export const TitleWrapper = styled.section`
  padding: 0.3em;
  margin: 1em;
  background: #222e50;
  border-radius: 15px;
`;

export const Logo = styled.section`
  text-align: center;
  font-size: 50px;
  padding-top: 0.25em;
`;

export const Button = styled.button`
  color: #222e50;
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #222e50;
  border-radius: 3px;
`;

export const ContentWrapper = styled.section`
  width: 250px;
  padding: 0.5em;
  margin: 0.5em;
  background: #222e50;
  border-radius: 10px;
  font-size: 1em;
  color: white;
  font-weight: bold;
`;

export const SelectOptions = styled.section`
  padding: 0.2em;
  margin: 0.2em;
  font-size: 1em;
  color: black;
  font-weight: bold;
  text-align:left;
`;


export const ReturnedText = styled.h2`
  font-size: 2em;
  text-align: center;
  color: white;
  line-height: 100% flex 1;
`;

export const DetectedObjectsWrapper = styled.section`
  padding: 0.1px;
  margin: 1em;
  background: #007991;
  border-radius: 15px;

  flex: 1;
`;

export const TranslatedTextWrapper = styled.section`
  padding: 0.1px;
  margin: 1em;
  background: #439a86;
  border-radius: 15px;

  flex: 1;
`;

export const HorizontalWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FlexChild = styled.section`
  text-align: center;

  padding: 0.1px;
  margin: 1em;
  flex: 1;
`;

export const VerticalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;