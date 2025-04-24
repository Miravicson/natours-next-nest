import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

function Form({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<'form'>>) {
  return (
    <form {...props} className={`form ${className}`}>
      {children}
    </form>
  );
}

Form.Heading = function Heading({ children, className }: PropsWithChildren<ComponentPropsWithoutRef<'h2'>>) {
  return <h2 className={`heading-secondary u-margin-bottom-medium ${className}`}>{children}</h2>;
};

Form.Group = function Group({ children, className }: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) {
  return <div className={`form__group ${className}`}>{children}</div>;
};

Form.Label = function Label({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<'label'>>) {
  return (
    <label {...props} className={`form__label ${className}`}>
      {children}
    </label>
  );
};

Form.Input = React.forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(function Input(
  { className, ...props },
  ref,
) {
  return <input ref={ref} className={`form__input ${className}`} {...props} />;
});

Form.RadioGroup = function RadioGroup({ children, className }: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) {
  return <div className={`form__radio-group ${className}`}>{children}</div>;
};

Form.Submit = function Submit({ className, children, ...props }: Omit<ComponentPropsWithoutRef<'button'>, 'role'>) {
  return (
    <button {...props} role="submit" type="submit" className={`btn btn--primary`}>
      {children}
    </button>
  );
};

Form.RadioInput = function RadioInput({
  labelProps,
  inputProps,
  labelText,
}: {
  labelText: string;
  labelProps?: Partial<ComponentPropsWithoutRef<'label'>>;
  inputProps?: Omit<ComponentPropsWithoutRef<'input'>, 'type'>;
}) {
  const { className, ...restLabelProps } = labelProps ?? {};
  const { className: inputClassName, ...restInputProps } = inputProps ?? {};
  return (
    <>
      <input type="radio" {...restInputProps} className={`form__radio-input ${inputClassName}`} />
      <label {...restLabelProps} className={`form__radio-label ${className}`}>
        <span className={`form__radio-button`}> </span>
        {labelText}
      </label>
    </>
  );
};

export default Form;
