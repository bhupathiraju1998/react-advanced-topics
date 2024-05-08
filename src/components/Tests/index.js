import React, { useState } from 'react';
import ChildEle from './ChildEle';
import './style.css';

export default function App() {
  //   const a = [{
  //     key:"sample1",
  //     data:"data1"
  //   },
  //   {
  //     key:"sample2",
  //     data:"data2"
  //   },
  //   {
  //     key:"sample1",
  //     data:"data1"
  //   },
  //   {
  //     key:"sample3",
  //     data:"data3"
  //   },
  //   {
  //     key:"sample3",
  //     data:"data3"
  //   }]
  //   let newObject = {}
  //   const newArray = a.map((each)=> {
  //     if(newObject[each.key]){
  //       newObject[each.key] = [...newObject[each.key],each]
  //     }else{
  //       newObject[each.key] = [each]
  //     }
  //   })
  // console.log(newObject)
  ///////////////////////////////////////////////////
  // const add = (n) => n + 10;

  // const memoize = (fn) => {
  //   let cache = {};
  //   return (...args) => {
  //     let n = args[0];
  //     if (n in cache) {
  //       console.log('from chache');
  //       return cache[n];
  //     } else {
  //       console.log('calculating result');
  //       let result = fn(n);
  //       cache[n] = result;
  //       return result;
  //     }
  //   };
  // };

  // const newMemonizedFunction = memoize(add);

  // console.log(newMemonizedFunction(3));
  // console.log(newMemonizedFunction(3));
  ////////////////////////////////////////////////
  // const arr1 = [0, 1, 2, [3, 4]];

  // // console.log(arr1.flat());
  // // // expected output: Array [0, 1, 2, 3, 4]

  // const arr2 = [0, 1, [2, [3, [4, 5]]]];

  // // console.log(arr2.flat());
  // // // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

  // // console.log(arr2.flat(2));
  // // // expected output: Array [0, 1, 2, 3, Array [4, 5]]

  // console.log(arr2.flat(Infinity));
  // // // expected output: Array [0, 1, 2, 3, 4, 5]

  // let newFormedArray = [];

  // const newMapping = (ar) => {
  //   ar.forEach((each) => {
  //     if (Array.isArray(each)) {
  //       newMapping(each);
  //     } else {
  //       newFormedArray.push(each);
  //     }
  //   });
  // };

  // newMapping(arr2);

  // console.log(newFormedArray,Object.getOwnPropertyNames(Array));
  /////////////////////////////////////
  console.log('4' + 12); //+ conversts number to tostring
  console.log('4' - 2); //coversts str to number
  console.log(typeof NaN);
  console.log(parseInt('12'));
  console.log('a', typeof +'1');
  console.log(isNaN('hi'));
  console.log(NaN === NaN);
  console.log(1 < 2 < 3);
  console.log(3 > 2 > 1);

  let arrayNames = ['venu', 'gopal', 'varma'];
  const [name, setName] = useState('click');
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeButtonText = () => {
    const lengthOfArray = arrayNames.length;
    if (currentIndex >= 0 && currentIndex < lengthOfArray) {
      setName(arrayNames[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }
  };
  const [inputValue, setInputvalue] = useState('');
  const handleInput = (e, arg) => {
    if (e.key === 'Enter') {
      setTimeout(() => {
        setInputvalue(e.target.value);
      }, arg);
      console.log('ok');
    }
  };
  console.log('input', inputValue);
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  const objcountry = [{name:"india",cities:["bvrm","hyd"]},{name:"usa",cities:["nyc","toit"]}]
  const [selectedCountry ,setSelectedCountry]= useState("") 
  return (
    <div>
      
      <button onClick={changeButtonText}>{name}</button>
      <input type="text" onKeyDown={(e) => handleInput(e, 3000)} />
      <button onClick={handleModal}>a</button>
      <button onClick={handleModal}>b</button>
      <button onClick={handleModal}>c</button>
      <div style={{position:"absolute"}}>
      {modal && (
        <div className="modal-box" onClick={handleModal}>
          <p>This is the modal box</p>
          <button onClick={handleModal}>&times;</button>
        </div>
      )}
      </div>
        

        <div>

          <select onChange={(e)=>setSelectedCountry(e.target.value)}>
            {objcountry.map((each,key)=><option value={each.name} key={each.name}>{each.name}</option>)}
          </select>
          {selectedCountry && <>
            {objcountry.map((each)=>{
              if(each.name === selectedCountry){
                console.log("entered")
               return (<select>
                  {each?.cities.map((eachCity)=><option>{eachCity}</option>)}
                  </select>)
              }
            })}
            </>}
        </div>

    </div>
  );
}
