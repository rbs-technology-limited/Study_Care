type IProps = {
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CDropdown = ({ id, options, value, onChange }: IProps) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="text-sm text-black dark:text-white transition duration-200 border border-gray-300 rounded-lg outline-none focus:border-orange-400 focus:outline-none  bg-transparent cursor-pointer"
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
