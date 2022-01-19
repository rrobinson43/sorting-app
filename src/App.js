
import './App.css';

import { useEffect, useState } from 'react';

function App() {

const [percentage, setPercentage] = useState(0);
const [items, setItems] = useState([]);       

function handleClick(e) {
  setPercentage(e);
  setItems(null);
  const newItems = [];

  for (let i = 0; i < percentage; i++) {
    const heightFig = Math.floor(Math.random() * 100);
    newItems.push({id: i, height: heightFig, color: "blue"});
  }

  setItems(newItems);
  console.log(newItems);
}

function updateArray(){
  setItems(null);
  const newItems = []; 
  
  for (let i = 0; i < percentage; i++) {
    const heightFig = Math.floor(Math.random() * 100);
    newItems.push({id: i, height: heightFig, color: "blue"});
  }
  setItems(newItems);
}

const bubbleSort = array => {
  const size = items.length;
  
  for (let i = 0; i < size-1; i++) {
    for (let j = 0; j < size-1; j++) {
      if (items[j].height > items[j + 1].height) {

        var temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
        const newItems = [...items];

        setItems(null);
        setItems(newItems);
        setTimeout(()=>{
          setItems(newItems);
        }, 100 * i-1 * j)
      }
    }

  }
};



  const selectionSort = array => {
    const size = items.length;

    for (let p=0; p<size-1; p++) {
      var minimum = items[p];
      var m = p;
      for (let j=p+1; j<size; j++) {
        if(items[j].height < minimum.height) {
          minimum = items[j];
          m=j;
        
      
      var swap = items[m];
      items[m] = items[p];
      items[p] = swap;
    
    const newItems = [...items];
    setItems(null);
    setItems(newItems);
    setTimeout(()=>{
      setItems(newItems);
    }, 100 * p-1 * j)
        }
      }
    }
  };

  const insertionSort = array => {
    const size = items.length;

    for (let i=1; i<size; i++) {
      var item = items[i];
      var j = i-1;

      while (j>=0 && items[j].height>item.height) {
        items[j+1] = items[j];
        j--;
      
      items[j+1] = item;
    
    const newItems = [...items];
    setItems(null);
    setItems(newItems);
    setTimeout(()=>{
      setItems(newItems);
    }, 100 * i-1 * j)
      }
    }
  };


  return (
    <div>
      <div className="top-row">

        <div className="w-80">
          <button className="button" onClick={() => updateArray()}>
              Generate new array
          </button>

          <div className="size">
            <p>Change size:</p>
            <input type="range" min="1" max="100" onChange={(e)=> handleClick(e.target.value)}  onClick={(e)=> handleClick(e.target.value)}/>
          </div>

          <div className="sort">
            <p>Select sort type:</p>
            <p className="sort-type" onClick={() => bubbleSort()}>Bubble sort</p>
            <p className="sort-type" onClick={() => selectionSort()}>Selection sort</p>
            <p className="sort-type" onClick={() => insertionSort()}>Insertion sort</p>
          </div>
        </div>
      </div>

      <div className="body-container">
        {
          items.map((item, index)=>{
            return(
            <div key={index} style={{height: item.height, width:'10px', margin:'1px', backgroundColor: item.color,}}>
        
            </div>
            )
          })
        }
      </div>
      {percentage}
    </div>
  );
}

export default App;