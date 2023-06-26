import React from "react";

interface CheckBoxProps {
  id?: any;
  name?: React.ReactNode;
  type: string;
  rounded?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: any;
  defaultChecked?: boolean;
  pl?: string;
}

const SelectField = ({
  id,
  name,
  type,
  rounded,
  checked,
  disabled,
  onChange,
  defaultChecked,
  pl,
}: CheckBoxProps) => {
  return (
    <>
      <div className={`block min-h-6 ${pl ? pl : "pl-7"} mt-2`}>
        <label>
          <input
            id={id ? id : "checkbox-1"}
            type={type}
            className={`
              mr-2
              text-button-teal
              border-2
              border-button-teal
              ${rounded ? rounded : "rounded"}
              cursor-pointer
              focus:outline-none
              checked:text-button-teal
              disabled:text-gray-400
              disabled:border-gray-400
              disabled:cursor-not-allowed
              disabled:checked:text-gray-400
              disabled:checked:border-gray-400
              disabled:checked:cursor-not-allowed
              focus:ring-1
              focus:ring-button-teal
              focus:ring-opacity-50
              dark:bg-gray-800
              dark:border-custom-orange
              dark:checked:text-custom-orange
              dark:checked:border-custom-orange
              dark:focus:ring-custom-orange
              dark:focus:ring-opacity-50
              dark:disabled:text-gray-400
              dark:disabled:border-gray-400
              dark:disabled:cursor-not-allowed
              dark:disabled:checked:text-gray-400
              dark:disabled:checked:border-gray-400
              dark:disabled:checked:cursor-not-allowed`}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            defaultChecked={defaultChecked}
          />
          <label
            htmlFor={id ? id : "checkbox-1"}
            className="cursor-pointer select-none"
          >
            {name}
          </label>
        </label>
      </div>
    </>
  );
};

export default SelectField;
