import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Switch , Route } from 'react-router-dom';
import {TextField} from "./Components/HOC/TextFiled";
import {Counter} from './Components/HOC/Counter';
import Accordian from './Components/HOC/Accordian'
import Albums from "./Components/Pages/Album";
import Details from "./Components/Pages/Details";


interface GreetingProps {
  name: string;
  ok: boolean;
  num: number;
  fnvoid: () => void;
  fn2: (value: string) => string;
  fnstring: () => string;
  fnnumber: () => number;
  fnnumberWithVal: (value: number) => number;
  obj: {
    f1: string;
  };
}
   
interface IAppProps {
 // person: SometingElese;
}


const GreetingTest = ({name} : {name : string}) => <h1>hello{ name }</h1>;
  
//function App() {
const App: React.SFC<IAppProps> = props => {
return (
  <BrowserRouter>
    <main className="container">
      <GreetingTest name="Behzad"></GreetingTest>

      <Accordian preview={<h1>Accordianheader!!!</h1>}>
        tetetetetette ttesttestetst tetetetetetet
      </Accordian>
      <Counter>
        {({count, setCount}) => (
          <div>
            {count} <button onClick={() => setCount(count + 1)}>+</button>
            {count} <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        )}
      </Counter>
      <TextField
        text="heloo"
        perosn={{ firstName: "", lastName: "" }}
        handleChange={(e) => {
          e.preventDefault();
        }}
      />
      <Switch>
        <Route exact path="/" component={Albums} />
        <Route exact path="/:id/details" component={Details} />
      </Switch>
    </main>
  </BrowserRouter>
  );
}

export default App;
