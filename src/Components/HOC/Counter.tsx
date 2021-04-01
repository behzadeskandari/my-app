 import React,{useState} from 'react';

 interface Props {
   children: (data:{
     count: number,
     setCount: React.Dispatch<React.SetStateAction<number>>
   }) => JSX.Element | null;
 }

 export const Counter: React.FC<Props> = ({ children }) => {
   const [count, setCount] = useState(0);
   return <div>{children({count, setCount})}</div>;
 };



function CustomDate(){
    //let date : string = new Date().toDateString();
    let [date,setDate] = React.useState("");
    let [time, setTime] = React.useState("");
    
    //let date : string = "";


    let getTime = () => {
            setTime(new Date().toTimeString());
    }
    let getDate = () => {
        //date = new Date().toDateString();
        setDate(new Date().toDateString());
    }
    return (
      <div>
        <span>{time}</span>
        <span> {date}</span>
        <button onClick={getDate}>Get THe Date</button>
      </div>
    );
 }


 export {CustomDate}



 