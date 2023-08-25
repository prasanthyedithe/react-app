import ListGroup from './components/ListGroup'

let items = ["New York", "San Francisco", "Tokyo", "London", "PAris"];

const handleSelectItem = (item : string) =>{ 
    console.log(item);
};

function App(){
  return <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>;
}

export default App;