import { colorsPalette } from "assets/colorsPalette";

function Input(props) {
  const {
    name,
    type,
    color,
    bgColor,
    borderSize,
    borderColor,
    borderRadius
  } = props;

  const styles = {
    margin: 10,
    padding: 6,
    borderWidth: borderSize,
    borderColor: colorsPalette[borderColor] || borderColor,
    borderStyle: "inset",
    borderRadius,
    backgroundColor: colorsPalette[bgColor] || bgColor,
    color: colorsPalette[color] || color,
    fontSize: 18,
    fontFamily: "arial"
  };

  return <input style={styles} id={name} name={name} type={type} />;
}

export default Input;
