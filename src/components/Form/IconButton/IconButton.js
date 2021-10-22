import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { colorsPalette } from "assets/colorsPalette";

library.add(fas);

function IconButton({ label, icon, handleClick, bgColor = "darkcyan", color = "orange" }) {
  const styles = {
    margin: 10,
    border: "none",
    borderRadius: 5,
    padding: "7px 15px",
    backgroundColor: colorsPalette[bgColor] || bgColor,
    fontSize: 25,
    color: colorsPalette[color] || color
  };

  return (
    <button style={styles} onClick={handleClick}>
      <FontAwesomeIcon style={{ marginRight: 8 }} icon={icon} />
      {label}
    </button>
  );
}

export default IconButton;
