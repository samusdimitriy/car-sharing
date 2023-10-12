import PropTypes from 'prop-types';
import ChevronDownIcon from 'images/icons/ChevronDownIcon';
import { useEffect, useState } from 'react';
import {
  Container,
  Header,
  Item,
  Label,
  List,
  ListContainer,
  SelectInput,
} from './SelectField.styled';

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
    <Container>
      <Label>{label}</Label>
      <div className="dropdown__select">
        <Header className={isOpen ? 'dropdown__open' : ''} onClick={toggling}>
          <SelectInput
            type="text"
            id={id}
            name={name}
            value={selectedOption || placeholder}
            readOnly={true}
          />
          <ChevronDownIcon />
        </Header>
        {isOpen && (
          <ListContainer>
            <List>
              {optionList.map(option => (
                <Item
                  name={name}
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </Item>
              ))}
            </List>
          </ListContainer>
        )}
      </div>
    </Container>
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
