type RangeInputProps = {
  value: number;
  title: string;
  min: number;
  max: number;
  disabled: boolean;
  wrapperClassName: string;
  onValueChange: () => {};
};

const RangeInput: React.FC<RangeInputProps> = ({
  value,
  title,
  min,
  max,
  disabled,
  onValueChange,
}) => {
  const onInput = (value) => {
    if (disabled) {
      return;
    }

    onValueChange(value);
  };

  return (
    <>
      {title && <div>{title}</div>}
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onInput={(event) => onInput(Number(event.target.value))}
      />
    </>
  );
};

export default RangeInput;
