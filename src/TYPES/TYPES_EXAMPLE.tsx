 import * as React from 'react';


interface PERSON {
  person : string;
}

// interface Flyable {
//     id : Int32List
//     //fly();
// }
// interface Animal {}
// const canFly = (animal: Animal): animal is Flyable =>
//   typeof (animal as any).fly === "function";

//     // if (canFly(animal)) {
//     //     var t= animal.fly();
//     //     return t;
//     // }


// ///Type Assetion

// //! => its kind of handy cast 

// // person.children[0]!.name;


// ///Literral Types
// type Move = 'ROCK' | 'PAPPER' | 'SCISSOR';


// ///never 

//  const throws = (): never => {
//      throw new Error("this never returns");
//  };


//  const loops = (): never => {
//     while(true){
//         console.log('this never returns either');
//     }
//  }


//  //unkown types that figures the type on run time
//  let y: unknown;



//  ///////index Types
// type Duck ={
// colors: string;
// feathers: number;

// }

// type DuckProps = keyof Duck; // = 'colors' | 'feathers'

// type ColorType = Duck['colors']; // = string

// type DuckValues = Duck[DuckProps] //string | number;


//  //////////////////Conditional Types 

//  type StringOrNumber<AnyT> = AnyT extends boolean ? string : number;

//  type T1 = StringOrNumber<true>;  /// string;

//  type T2 = StringOrNumber<false>;  /// string;

//  type T3 = StringOrNumber<Object>;////number;


//  //////////////////Conditional Types 
//  type TypeName<ANYTYPE> = ANYTYPE extends string
//    ? "string"
//    : ANYTYPE extends number
//    ? "number"
//    : ANYTYPE extends boolean
//    ? "boolean"
//    : ANYTYPE extends undefined
//    ? "undefined"
//    : ANYTYPE extends Function ? "function" : 
//    "object";
 


//    type T0 = TypeName<string>; // "string";




//    ///infer 


//    type ElementType<AnyType> = AnyType extends (infer U)[] ? U : never;
//    type AnyType = ElementType<[]>;
//    type AnyType2 = ElementType<string[]>;




//    ///Descriminate Unions 


// type Eagle = {
//     kind : 'eagle';
//     fly: ()=> 'fly';
// }


// type DUCK = {
//     kind: 'duck';
//     quack : ()=> 'quack'; 
// };


// type Bird = {
//     kind : 'bird';
// }

// type Animal = Eagle | DUCK | Bird;



// const DoSomething = (animal : Animal) => {

//     switch(animal.kind){
//         case 'eagle':
//             return animal.fly();
//             case 'duck':
//             return animal.quack();
//         default : 
//         return assertNever(animal) 

//     }

// }


// const assertNever = (animal: Animal): never => {
//     throw new Error(`Unknown animal ${animal.kind}`)
// }












// /////////////Drive Types From Constant 


// const MOVES = {
//   ROCK: { beats: "SCISSOR" },

//   PAPPER: { beats: "ROCK" },
//   SCISSOR: { beats: "PAPPER" },
// };

// type MOVE = keyof typeof MOVES;
// const move: MOVE = 'ROCK';



// ///UNTRUSTED USER INPUT 


// const ValidateInput = (s : unknown) : number => {
//     let n;
//     switch (typeof s) {
//         case 'number':
            
//        case 'string':
    
//         default:
//             throw new Error('not a number');
//     }
//   }




//   type ReadOnly<AnyType> = {readonly [P in keyof AnyType]: AnyType[P]};

//   type ReadOnlyDuck = ReadOnly<DUCK>;
  
//   /// = { readonly color : string ; readonly feathers : number}



//   type Partial<TYPET> = { [P in keyof TYPET]?: TYPET[P] };

//   type PartialDuck = Partial<DUCK>;

  

//   ///////////////////////////////////functional Programing




// import * as React from 'react'; 



// interface BasePerson {
//     identifier : number;
//     first_name : string;
//     last_name: string;
// }


// interface Person{
//     id: string;
//     fullname : string;

// }

// const transformPerson = (row: BasePerson): Person =>
// {
//     return {
//       id: `${row.identifier}`,
//       fullname: `${row.first_name} ${row.last_name}`,
//     };
// }

// export default transformPerson;


// //////////////////////////////////////////GENERICS
// //array

// import { Children, useState } from "react";


// type numArray = Array<number>

// type stringArray = Array<string>;


// const lastnum = (arr : Array<number>) =>{return arr[arr.length -1];}

// const last = (arr: Array<string>) => {
//   return arr[arr.length - 1];
// };


// const l = lastnum([1, 2, 3]);

// const l2 = last(["1", "1", "3"]);

// const stringNumberArray = <T,G>(arr: T[]) => {
//   return arr[arr.length - 1];
// };

// const g = stringNumberArray<string, number>(["a", "b", "c"]);


// const makenumberArr = (x : number) => {
//     return [x];     
// }
// const GenricT = <AnyType,>(x: AnyType[]) => {
//   return [x];
// };


// const makenumberArrT = <X,Y>(x: X , y : Y) => {
//   return [x , y];
// };
// const makenumberDefaultParam = <X,Y=string>(x: X, y: Y): [X ,Y] => {
//   return [x, y];
// };

// //implictliy
// const v2 = makenumberArrT("a", 5);

// //explictly
// const v3 = makenumberArrT<string | null ,number>("a",5);


// const makefullname = (obj) => {
//     return {
//         ...obj,
//         fullName : obj.firstname + ' ' + obj.lastName
//     }
// }


// const makefullnamedestruc = (obj: { firstname: string; lastName : string }) => {
//   return {
//     ...obj,
//     fullName: obj.firstname + " " + obj.lastName,
//   };
// };


// const makefullnamedestrucT = <AnyType extends { firstname: string,lastName: string }>(obj: AnyType) => {
//   return {
//     ...obj,
//     fullName: obj.firstname + " " + obj.lastName,
//   };
// };


// const v5 = makefullnamedestrucT({ firstname: "bob", lastName: "junior" ,age : 2, somethingelse :"test"});


// const v4 = makefullnamedestruc({ firstname: "bob", lastName: "junior"});

// type NumberTabNoneGeneric = {
//   id: string;
//   position: number;
//   data: number;
// };

// interface Tab<AnyType>{
//     id :string,
//     position : number;
//     data : AnyType;

// }
// type NumberTab = Tab<number>; 
// type NumberTabstring = Tab<string>; 


// //react 

// interface Props {
//     name : string
// }
// const HelloWorld: React.FC<Props> = ({name}) => {
//     const [state] = useState<{ fullname: string | null }>({ fullname: "" });  

//     state.fullname;

//     return <div>hello {name}</div>
// }


// interface FormProps<AnyType>{
//     values : AnyType
//     children : (values : AnyType) => JSX.Element; 
// }

// const Frm = <AnyType extends {}>({ values, children }: FormProps<AnyType>) => {
//   return children(values);
// }; 

// const Test : React.FC = ()=> {
// return (
//   <div className="App">
//     <Frm<{ firstname: string | null }> values={{ firstname: "" }}>
//       {(value) => <div>{value.firstname}helloWoldGenerics</div>}
//     </Frm>
//   </div>
// );
// }



// interface Person {
//     id : number,
//     name : string
//     hungry : boolean,
// }
// const me : Person = {

//     id: 1,
//     name :"harrt",
//     hungry : false,
// }
// class Harry implements Person {
//     id : 1;
//     name: "harry";
//     hungry : true;
// }
// interface Greeting{
//     (name: string) : string;
// }
// const myGreeting : Greeting = (name) => "hello";


// type Greetings = (name: string) => string;   
// const mtd: Greetings = (name) => 'hello';



// interface User extends Person{
//     YouTuber : boolean;
// }

// const me2 : User = {
//     id: 1,
//     name: "bejzad",
//     hungry :  false,
//     YouTuber : true
// }

// type PersonCustom = {
//     name : string ; hungry : false,
// } & { youtuber : boolean}
// type Yputuber = { youtuber: boolean };
// type Test23  = Person | Yputuber;

// const test2: PersonCustom = {
//  name : "behzad",
//  hungry : false,
//  youtuber : false,
// } 

// ////////////////////////////////////////Mapped Types


// type Properties = 'propA'| 'propB';

// type MyMappedType<Properties extends string | number | symbol> = {
//     [P in Properties] : P ;

// }
// type MyMappedTypeGeneric<ANYTYPE> = {
//     [P in keyof ANYTYPE] : ANYTYPE[P] ;

// }


// type MyMappedTypeGenericReadOnly<ANYTYPE> = {
//     readonly [P in keyof ANYTYPE] : ANYTYPE[P] ;

// }
// type MyMappedTypeGenericOptionalProps <ANYTYPE> = {
//      [P in keyof ANYTYPE]?: ANYTYPE[P] ;

// }

// type MyMappedTypeGenericOptionalNullable<ANYTYPE> = {
//      [P in keyof ANYTYPE]: ANYTYPE[P] | null ;
// }

// type Pick1<AnyType , Properties extends keyof AnyType> = {
//     [P in Properties]:AnyType[P]; 
// }
// type Record1<K extends keyof any,ANYTYPE>= {
//     [P in K]: ANYTYPE;
// } & { someProperties : string};

// const someRecord: Record1<'A' , 'B' , number> = {A : 1 ,B : 2};
 
// someRecord.apples = 10;
// someRecord.oranges = 10;

// interface Record2{
//     ///cant use union type 
//     [Key : string]: number;
// }


// type MyNewType = MyMappedType<'propA'| 'PropB'>;



// type MyNewType2 = MyMappedTypeGeneric<{a:'propA'; b: 'PropB'}>;


// //////////////////union Types


// interface Quackable{};

// interface Swimmable{};

// type Duck = Quackable & Swimmable;

// type Duck2 = Quackable | Swimmable;









