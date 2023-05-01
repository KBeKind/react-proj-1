import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button
        children={"Success Click"}
        color={"success"}
        onClick={function () {
          console.log("Success clicked!");
          setAlertVisibility(true);
        }}
      ></Button>
    </div>
  );
}

export default App;
