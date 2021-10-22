import Button, { IconButton } from "./components/Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Modyfikowalny Button</h1>
      <Button label="Click me" bgColor="turquoise" color="clouds" />
      <IconButton
        label="Click me"
        icon="user"
        bgColor="turquoise"
        color="clouds"
      />
    </div>
  );
}
