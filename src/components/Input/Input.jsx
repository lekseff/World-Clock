function Input ({title, ...props}) {
  return (
    <label>
      {title}
      <input {...props}/>
    </label>
  )
}

export default Input;

Input.defaultProps = {
  title: '',
  type: 'text',
}