// import logo from './logo.svg';
// import './App.css';
// import { Button } from 'react-bootstrap';
// import BasicOfBootstrap from './Components/BasicOfBootstrap';
import { Table } from 'react-bootstrap';
import ArrayList from './Components/ArrayList';
import NestedArrayList from './Components/NestedArrayList';
import ReuseComponent from './Components/ReuseComponent';


function App() {
  const details = [
    {name:"jeet" , Age:20, city:"Vadoddara"},
    {name:"khushi" , Age:16, city:"Vadoddara"},
    {name:"hitu" , Age:25, city:"Vadoddara"},
    {name:"jay" , Age:20, city:"Vadoddara"},
  ]

  return (
    <div className="App">
      <h1>Reusing Component And Passing Data.</h1>
      {/* <BasicOfBootstrap />
      <ArrayList />
      <NestedArrayList /> */}
{/* //reuseing component */}
      {
        details.map((item,i)=>{return(
          <Table>
            <tbody>
          <ReuseComponent data={item}/>
          </tbody>
          </Table>
        )})
      }


    </div>
  );
}

export default App;
