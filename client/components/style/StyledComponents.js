import styled from 'styled-components';

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
  padding: 1em;
  margin: 1em;
  background: #222e50;
  border-radius: 15px;

  font-size: 1em;
  color: white;
  font-weight: bold;

  text-align: center;
`;

export const Select = styled.select`
  width: 75%;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;

  border-radius: 5px;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ReturnedText = styled.h2`
  font-size: 2em;
  text-align: center;
  color: white;
  line-height: 100%

  flex 1;
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

export const FlexWrapper = styled.section`
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