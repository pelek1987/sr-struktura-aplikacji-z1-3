import { colorsPalette } from "assets/colorsPalette";

function Textarea({ bgColor, color, borderSize, borderColor, borderRadius }) {
  const styles = {
    margin: 10,
    padding: 6,
    borderWidth: borderSize,
    borderColor: colorsPalette[borderColor] || borderColor,
    borderStyle: "inset",
    borderRadius,
    backgroundColor: colorsPalette[bgColor] || bgColor,
    color: colorsPalette[color],
    fontSize: 18,
    fontFamily: "arial"
  };

  return <textarea style={styles} cols="30" rows="5" />;
}

export default Textarea;
