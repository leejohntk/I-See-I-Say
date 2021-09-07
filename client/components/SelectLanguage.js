import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedLanguage } from '../store/select';
import {
  ContentWrapper,
  SelectOptions,
} from './style/StyledComponents';
import { languageOptions } from './assets/languages';
import Select from 'react-select';

const selectLanguage = () => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default selectLanguage;
