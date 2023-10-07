import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { formatingCommasToNumber } from '../helpers/handleCommaDel';
import {
  FromToFieldGroup,
  Container,
  Wrapper,
  Label,
  Input,
} from './MileageField.styled';

const MileageField = props => {
  const {
    id = 'text-input',
    label = 'label',
    value = { from: '', to: '' },
  } = props;

  const [fieldValue, setFieldValue] = useState(value);

  const onChange = e => {
    if (!/^[0-9,]+$/.test(e.target.value) && e.target.value.trim()) {
      toast.warn('Please write only numbers');
      return;
    }

    setFieldValue(prev => ({
      ...prev,
      [e.target.name]: formatingCommasToNumber(e.target.value),
    }));
  };

  return (
    <FromToFieldGroup>
      <p>{label}</p>
      <Container>
        <Wrapper>
          <Label htmlFor={`${id}_from`}>From</Label>
          <Input
            name={'from'}
            value={fieldValue.from}
            className="input__from"
            id={`${id}_from`}
            type="text"
            onChange={onChange}
            autoComplete="off"
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor={`${id}_to`}>To</Label>
          <Input
            name={'to'}
            value={fieldValue.to}
            className="input__to"
            id={`${id}_to`}
            type="text"
            onChange={onChange}
            autoComplete="off"
          />
        </Wrapper>
      </Container>
    </FromToFieldGroup>
  );
};

export default MileageField;

MileageField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string }),
};
