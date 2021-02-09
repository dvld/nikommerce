import { group, formInput, formInputLabel } from '../styles/Form.module.css';

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className={group}>
      <input className={formInput} onChange={handleChange} {...props} />
      <label
        className={`${props.value.length ? 'shrink' : ''} ${formInputLabel}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
