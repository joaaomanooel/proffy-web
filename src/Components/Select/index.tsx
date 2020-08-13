import './styles.css';
import React, { SelectHTMLAttributes } from 'react';

interface Options {
  value: string | number,
  label: string,
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string,
  options: Array<Options>,
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...props }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...props}>
        <option value="" key="0001" disabled hidden>Selecione uma opção</option>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

export default Select;
