import { Button, IconButton, Input, Textarea, Label}  from "components/Form";

function App() {

    return (
        <div>
            <Label htmlFor="firstName" display="block" color="wet-asphalt">First Name:</Label>
            <Input
                type="text"
                name="firstName"
                bgColor="clouds"
                color="wet-asphalt"
                borderRadius={5}
                borderColor="belize-hole"
                borderSize={3}
            />
            <IconButton
                label="Click me"
                icon="user"
                bgColor="alizarin"
                color="clouds"
            />
            <Label htmlFor="firstName" display="block" color="wet-asphalt">Few words about you:</Label>
            <Textarea
                bgColor="clouds"
                color="wet-asphalt"
                borderRadius={5}
                borderColor="belize-hole"
                borderSize={3}
            />
            <br />
            <Button label="Click me" bgColor="turquoise" color="clouds"/>
        </div>
    );
}

export default App;
