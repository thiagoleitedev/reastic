import React from 'react';
import { unstable_useFormState as useFormState, unstable_Form as BaseForm } from 'reakit/Form';
import FormContext from './FormContext';

type FormPropTypes = {
  initialValues: any;
  onValidate?: () => void;
  onSubmit?: () => void;
  onBlur?: () => void;
};

const Form: React.FunctionComponent<FormPropTypes> = ({
  initialValues,
  onValidate,
  onSubmit,
  ...props
}) => {
  const form = useFormState({ values: initialValues, onValidate, onSubmit });
  const value = React.useMemo(() => form, Object.values(form));
  return (
    <FormContext.Provider value={value as any}>
      <BaseForm {...form} {...props} />
    </FormContext.Provider>
  );
};

export default Form;
