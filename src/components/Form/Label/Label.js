import { colorsPalette } from "assets/colorsPalette";

function Label({children, htmlFor, display = "inline", color, size = 20}) {
    const styles = {
        display,
        margin: "0px 10px",
        color: colorsPalette[color],
        fontSize: size,
        fontFamily: "arial"
    };

    return (
        <label htmlFor={htmlFor} style={styles}>
            {children}
        </label>
    );
}

export default Label;
