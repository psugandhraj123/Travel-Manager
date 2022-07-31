import { Field } from "formik";
import * as React from "react";

const blockEvent = (e) => e.stopPropagation();
const InputField = (props) => {
  const { label, name, inline, fieldProps, ...rest } = props;
  return (
    <Field name={name} {...rest}>
      {({ field }) => (
        <div className="mb-3">
          <label className="form-lable">{props.label}</label>
          <input
            {...field}
            {...fieldProps}
            onKeyUp={blockEvent}
            onKeyDown={blockEvent}
            onWheel={blockEvent}
          />
        </div>
      )}
    </Field>
  );
};

export default InputField;
