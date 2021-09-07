import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedLanguage } from '../store/select';
import {
  ContentWrapper,
  FlexChild,
  SelectOptions,
} from './style/StyledComponents';
import { languageOptions } from './assets/languages';
import Select from 'react-select';

const selectLanguage = () => {
  const dispatch = useDispatch();

  return (
    <FlexChild>
      <ContentWrapper>
        <label>Translate to:</label>
        <SelectOptions>
          <Select
            isClearable="true"
            isSearchable="true"
            onChange={(selected) => {
              dispatch(selectedLanguage(selected.value));
            }}
            defaultValue={languageOptions[24]} //French as default
            options={languageOptions}
          />
        </SelectOptions>
      </ContentWrapper>
    </FlexChild>
  );
};

export default selectLanguage;
