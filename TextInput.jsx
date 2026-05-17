function TextInput(props) {
  return (
    <>
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
    </>
  );
}

export default TextInput;