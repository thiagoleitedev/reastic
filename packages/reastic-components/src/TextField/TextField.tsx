import React from 'react';
import styled from 'styled-components';
import Box from '../Box';
import {
  unstable_FormLabel as ReakitFormLabel,
  unstable_FormInput as ReakitFormInput,
  unstable_FormMessage as FormMessage,
} from 'reakit/Form';
import pallete from '../pallete';
import FormContext from '../Form/FormContext';

export const FormLabel = styled(ReakitFormLabel)`
  transform: translate(5px, 10px) scale(0.75);
  color: rgb(64, 229, 131);
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 0;
  left: 0;
  ${pallete.font(16)};
`;

type FormInputContainerProps = {
  focused: boolean;
};

export const FormInputContainer = styled.div<FormInputContainerProps>`
  position: relative;
  background: #f5f8f9;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  ${pallete.font(16)};

  border-bottom: ${({ focused }) =>
    focused ? '1px solid rgb(52, 73, 94)' : '1px solid rgb(186, 191, 194)'}};
`;

export const FormInput = styled(ReakitFormInput)`
  font: inherit;
  background: none;
  box-sizing: content-box;
  padding: 27px 12px 10px;
  margin: 0;
  border: 0;
  color: #34495e;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #c1c1c1;
  }
`;

const TextField: React.FunctionComponent<any> = ({
  name,
  error,
  disabled,
  label,
  onBlur,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const form = React.useContext(FormContext);
  const handleBlur = () => {
    setFocused(false);
  };
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <Box
      m="8px"
      display="inline-flex"
      z-index="0"
      position="relative"
      vartical-align="top"
      flex-direction="column"
    >
      <FormLabel {...props} name={name} label={label} />
      <FormInputContainer focused={focused}>
        <FormInput {...form} {...props} name={name} onBlur={handleBlur} onFocus={handleFocus} />
      </FormInputContainer>
      <FormMessage {...form} name={name} />
    </Box>
  );
};

export default TextField;
