import './styles.css';
import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string,
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...props }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...props} />
    </div>
  );
}

export default Textarea;
