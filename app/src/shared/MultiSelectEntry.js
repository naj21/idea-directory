import React from 'react';
import styled from 'styled-components';
import themes from 'globals/themes';

export function MultiSelectEntry(props) {
  return (
    <MultiSelectOptionSection>
      <input
        type="checkbox"
        value={''}
        checked={props.isSelected}
        onChange={props.onSelect}
      />
      <MultiSelectOptionInfoSection>
        <LabelSection>
          <MultiSelectOptionLabel>{props.label}</MultiSelectOptionLabel>
          {props.description && (
            <MultiSelectOptionDescription>
              {props.description}
            </MultiSelectOptionDescription>
          )}
        </LabelSection>
      </MultiSelectOptionInfoSection>
    </MultiSelectOptionSection>
  );
}

export const MultiSelectOptionSection = styled.div`
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 40px;
`;

export const MultiSelectOptionSeparator = styled.div`
  height: 1px;
  box-shadow: inset 0 -1px 0 0 ${themes.colors.borderGray};
`;

export const MultiSelectOptionInfoSection = styled.div`
  display: flex;
  width: calc(100% - 20px);
  align-items: center;
  padding: 40px 0;

  > input,
  > div {
    margin-right: 15px;
  }
`;
export const SelectedLabelSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;
export const LabelSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px);
  text-transform: capitalize;
`;
export const MultiSelectOptionLabel = styled.span`
  color: ${themes.colors.darkerGray};
  font-size: calc(${themes.font.sizes.small} + 1px);
  font-weight: ${themes.font.weight.bold};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const MultiSelectOptionDescription = styled.span`
  color: ${themes.colors.gray};
  font-size: ${themes.font.sizes.small};
  font-weight: ${themes.font.weight.normal};
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
