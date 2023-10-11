import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChevronDownIcon from 'images/icons/ChevronDownIcon';
import { useEffect, useState } from 'react';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-grid;
  gap: 8px;
  height: 74px;
`;

const DropdownLabel = styled.p`
  color: var(--headingsSecondColor);
  font-size: var(--headingsSecondFontSize);
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;

const DropdownHeader = styled.div`
  position: relative;
  z-index: 0;
  color: var(--headingsColor);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  padding: 14px 18px;
  background-color: var(--bgSecondColor);
  border-radius: 14px;

  & > svg {
    position: absolute;
    top: 14px;
    right: 18px;
    stroke: var(--headingsColor);
  }
`;

const DropdownSelectInput = styled.input`
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const DropdownListContainer = styled.div`
  position: relative;
  z-index: 5;
  margin-top: 4px;
  padding: 14px 8px 14px 18px;
  height: 272px;
  overflow-y: scroll;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: var(--bgColor);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

const DropdownList = styled.ul`
  display: grid;
  gap: 8px;
  background: var(--bgColor);
`;

const DropdownItem = styled.li`
  color: rgba(18, 20, 23, 0.2);
  font-size: var(--standardSize);
  font-weight: 500;
  line-height: 1.25;
  background-color: var(--bgColor);
  cursor: pointer;

  &:hover,
  &:focus {
    color: inherit;
  }
`;

const SelectField = ({
  name,
  id,
  label,
  placeholder = 'Enter the text',
  optionList,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen]);

  return (
    <DropdownContainer>
      <DropdownLabel>{label}</DropdownLabel>
      <div className="dropdown__select">
        <DropdownHeader
          className={isOpen ? 'dropdown__open' : ''}
          onClick={toggling}
        >
          <DropdownSelectInput
            type="text"
            id={id}
            name={name}
            value={selectedOption || placeholder}
            readOnly={true}
          />
          <ChevronDownIcon />
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList>
              {optionList.map(option => (
                <DropdownItem
                  name={name}
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          </DropdownListContainer>
        )}
      </div>
    </DropdownContainer>
  );
};

SelectField.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  optionList: PropTypes.array,
  value: PropTypes.string,
};

export default SelectField;
