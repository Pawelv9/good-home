const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <label>{label}</label>
      <input {...otherProps} />
    </>
  )
}

export default FormInput;