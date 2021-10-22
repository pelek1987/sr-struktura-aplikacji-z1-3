import { colorsPalette } from "../../assets/colorsPalette";

function Button({ children, label, bgColor = "darkcyan", color = "orange" }) {
  const styles = {
    margin: 10,
    border: "none",
    borderRadius: 5,
    padding: "7px 15px",
    backgroundColor: colorsPalette[bgColor] || bgColor,
    fontSize: 25,
    color: colorsPalette[color] || color
  };

  return <button style={styles}>{label ? label : children}</button>;
}

export default Button;
