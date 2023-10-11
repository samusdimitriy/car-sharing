import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { commaToNumber } from 'utils/commaToNumber';

const InputFromToFieldGroup = styled.div`
  display: inline-grid;
  gap: 8px;
  width: 320px;
  font-size: var(--headingsSecondFontSize);
  font-weight: 500;
  line-height: 1.28;
  color: var(--headingsSecondColor);
`;

const InputFromToContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  width: 320px;
  border-radius: 14px;
  overflow: hidden;
`;

const InputFromToWrapper = styled.div`
  position: relative;
  display: flex;
  color: var(--headingsColor);
  font-size: 18px;
  line-height: 1.11;
  width: 160px;
  height: 48px;

  label,
  .input__from,
  .input__to {
    white-space: nowrap;
    display: block;
  }

  label {
    position: absolute;
    top: 14px;
    left: 24px;
    color: inherit;
  }

  input {
    display: block;
    width: 100%;
    padding: 14px 24px;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    --webkit-appearance: none;
    color: inherit;
    background-color: var(--bgSecondColor);
    border: 1px solid var(--bgSecondColor);

    &.input__from {
      padding-left: 70px;
      border-right: 1px solid var(--borderSecondColor);
    }

    &.input__to {
      padding-left: 48px;
    }

    &:focus {
      outline: none;
    }
  }
`;

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
    <InputFromToFieldGroup>
      <p>{label}</p>
      <InputFromToContainer>
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
      </InputFromToContainer>
    </InputFromToFieldGroup>
  );
};

FromToField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string }),
};

export default FromToField;
