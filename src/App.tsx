import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";


let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisible, setalertVisible] = useState(false);
  return (
    <>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    {alertVisible && <Alert onClose={() => setalertVisible(false)}>Hello World</Alert>}
    <Button color='primary' onClick={() => setalertVisible(true)
    }>
      
      
      My Button</Button>
    </>
    );
}

export default App;
