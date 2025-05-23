import { useId, useState } from "react";


interface InputProps {
  title: string;
  placeholder: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
}

export function Input({ title, placeholder, onChange, min, max }: InputProps) {
  const [value, setValue] = useState("");
  
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue); 
  };

  return (
    <div className="flex flex-col min-h-24 justify-around">
      <label htmlFor={id} className="font-semibold">{ title }</label>
      <input
        id={id}
        className="w-72 h-8 text-sm border border-zinc-300 rounded-sm p-4 outline-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
        type={"number"}
        min={min}
        max={max}
        required
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
