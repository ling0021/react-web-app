interface Props {
  options: string[];
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
  label: string;
  error?: string;
  touched?: boolean;
}

const Dropdown = ({
  options,
  name,
  id,
  value,
  onChange,
  onBlur,
  label,
  error,
  touched,
}: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        className="form-control"
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        <option value="" label="Select Category" />
        {options.map((option) => (
          <option key={option} value={option} label={option} />
        ))}
      </select>
      {touched && error ? (
        <div className="text-danger fst-italic">{error}</div>
      ) : null}
    </div>
  );
};

export default Dropdown;
