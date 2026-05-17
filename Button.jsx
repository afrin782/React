{/*function Button() {
    return (
        <button type="submit">Click from Button</button>
    )
}

export default Button;*/}

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;

