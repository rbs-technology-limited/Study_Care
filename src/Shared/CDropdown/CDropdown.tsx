type IProps = {
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  mb?: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CDropdown = ({ id, options, value, mb, onChange, ...rest }: IProps) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full px-5 py-3 ${
        mb ? mb : "mb-2"
      } text-sm text-black dark:text-white transition duration-200 border border-gray-300 rounded-lg outline-none focus:border-orange-400 focus:outline-none dark:placeholder-white bg-transparent ring-1 ring-orange-400 dark:ring-cyan-700`}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CDropdown;
