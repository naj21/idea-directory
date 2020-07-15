import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import themes from 'globals/themes';
import { KeyboardArrowUp as ArrowUp } from '@styled-icons/material/KeyboardArrowUp';
import { MultiSelectEntry } from './MultiSelectEntry';

const MultiSelectSection = styled.div`
  position: absolute;
`;
const OptionsSection = styled.div`
  background-color: ${themes.border.color.light};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid ${themes.border.color.light};
  position: absolute;
  top: calc(100% + 9px);
  z-index: 100;
  border-radius: ${themes.border.radius.small};
  width: 400px;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 0;

  input {
    background-color: ${themes.border.color.light};
  }
`;

const CustomArrowUp = styled(ArrowUp)`
  top: 100%;
  position: absolute;
  left: 20px;
  z-index: 5;
`;

const CustomArrowBorder = styled(ArrowUp)`
  position: absolute;
  left: 10px;
  top: calc(100% - 1.5px);
`;

const MultipleSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  white-space: nowrap;
  padding: 0 10px !important;
  border: none;
  > div {
    display: flex;
    max-width: calc(100% - 25px);
    overflow: hidden;
    text-overflow: ellipsis;
    > * {
      margin-right: 15px;
    }
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export class MultiSelect extends Component {
  wrapperRef;
  optionsWrapperRef;
  portalSection;
  static multiSelectSection = null;

  static setMultiSelectSectionById(id) {
    MultiSelect.multiSelectSection = document.getElementById(id);
  }
  static setMultiSelectsection(section) {
    MultiSelect.multiSelectSection = section;
  }

  constructor(props) {
    super(props);
    this.portalSection = document.createElement('div');
    this.state = {
      optionsVisible: false,
    };
    this.wrapperRef = React.createRef();
    this.optionsWrapperRef = React.createRef();
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    if (MultiSelect.multiSelectSection) {
      MultiSelect.multiSelectSection.appendChild(this.portalSection);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    if (MultiSelect.multiSelectSection) {
      MultiSelect.multiSelectSection.removeChild(this.portalSection);
    }
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target) &&
      this.optionsWrapperRef.current &&
      !this.optionsWrapperRef.current.contains(event.target) &&
      this.state.optionsVisible
    ) {
      this.setState({
        optionsVisible: false,
      });
    }
  };

  toggleOptions(evt, value) {
    let position = undefined;
    if (this.props.disabled) {
      return;
    }
    if (this.wrapperRef.current) {
      const rect = this.wrapperRef.current.getBoundingClientRect();
      position = { top: `${rect.top + rect.height}px`, left: `${rect.left}px` };
    }

    this.setState({
      optionsVisible: value !== undefined ? value : !this.state.optionsVisible,
      optionsPosition: position,
    });
  }

  onSelectOption = (opt) => {
    if (this.props.closeOnSelect) {
      this.setState({
        optionsVisible: false,
      });
    }
    this.props.onSelectOption(opt);
  };

  renderOptions() {
    const { options, selected } = this.props;
    return options.map((opt) => (
      <MultiSelectEntry
        label={opt}
        isSelected={selected.indexOf(opt) > -1}
        onSelect={() => this.onSelectOption(opt)}
      />
    ));
  }

  renderOptionsPortal() {
    const {
      optionsSectionStyles,
      options,
      renderEmpty,
      renderLoading,
      isLoading,
    } = this.props;
    if (this.state.optionsVisible) {
      // return ReactDOM.createPortal(
      return (
        <MultiSelectSection style={this.state.optionsPosition}>
          <OptionsSection style={optionsSectionStyles} ref={this.optionsWrapperRef}>
            {this.props.renderHeader && this.props.renderHeader()}
            {this.renderOptions()}
            {this.props.renderFooter && this.props.renderFooter()}
            {options.length === 0 && !isLoading && renderEmpty && renderEmpty()}
            {isLoading && renderLoading && renderLoading()}
          </OptionsSection>
        </MultiSelectSection>
      );
      //   this.portalSection,
      // );
    } else {
      return null;
    }
  }

  render() {
    const { buttonStyles, selected, className } = this.props;
    return (
      <div ref={this.wrapperRef} className={className}>
        <MultipleSelectButton
          type={'button'}
          disabled={this.props.disabled}
          onClick={this.toggleOptions}
          style={buttonStyles}
        >
          <div>
            {selected.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <img alt="" src={ArrowUp} />
        </MultipleSelectButton>
        {this.renderOptionsPortal()}
      </div>
    );
  }
}

export default MultiSelect;
