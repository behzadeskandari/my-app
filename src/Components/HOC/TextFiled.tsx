import * as React from 'react';
import {useState} from 'react';
interface SometingElese {
  firstName: string;
  lastName: string;
}
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
  person: SometingElese;
}
   
interface Props {
  text: string;
  perosn: SometingElese;
//  ok: boolean;
 // textNode: TextNode;
  handleChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {text :string }
 //perosn , ok,text 
export const TextField: React.FC<Props> = ({handleChange }) =>{
  const [count, setCount] = useState<number | null | undefined | string>(6);

  const [textstate, setText] = useState<number | null | string>("hello");

  const [textstate2, setText2] = useState<{ text: string }>({
    text: "hello",
  });

  const [textNodestate, setTextNode] = useState<TextNode>({
    text: "hello",
  });


  const inputRef = React.useRef<HTMLInputElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);

  setText("sometext");
  setCount(10); ///| 10 |null
   setTextNode({text : ''});


  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  );
}