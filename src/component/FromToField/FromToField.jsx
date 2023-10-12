import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { commaToNumber } from 'utils/commaToNumber';
import {
  Container,
  InputFromToFieldList,
  InputFromToWrapper,
} from './FromToField.styled';

const FromToField = props => {
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
      [e.target.name]: commaToNumber(e.target.value),
    }));
  };

  return (
    <InputFromToFieldList>
      <p>{label}</p>
      <Container>
        <InputFromToWrapper>
          <label htmlFor={`${id}_from`}>From</label>
          <input
            name={'from'}
            value={fieldValue.from}
            className="input__from"
            id={`${id}_from`}
            type="text"
            onChange={onChange}
            autoComplete="off"
          />
        </InputFromToWrapper>
        <InputFromToWrapper>
          <label htmlFor={`${id}_to`}>To</label>
          <input
            name={'to'}
            value={fieldValue.to}
            className="input__to"
            id={`${id}_to`}
            type="text"
            onChange={onChange}
            autoComplete="off"
          />
        </InputFromToWrapper>
      </Container>
    </InputFromToFieldList>
  );
};

FromToField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string }),
};

export default FromToField;
