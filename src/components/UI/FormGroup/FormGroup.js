import './FormGroup.css';

const FormGroup = ({ label, ...props }) => {
  console.log(label);
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input {...props} className="form-input" />
    </div>
  );
};

export default FormGroup;
