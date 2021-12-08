import React, {useState, useEffect} from 'react';

const Quotations = () => {
  const [data, setData] = useState([]);
  const [randomNr,setRandomNr] = useState(0)
  const randomText = Math.floor(Math.random())
  useEffect(() => {
    fetch(`https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setData(data))
      .catch(err => console.log(err));
  },[])

  const handlerClick = () => {
    setRandomNr(prev =>{
      prev(data)
    })
  }

  return (
    <>
    <ul>
      {
        data.map((el,index) => <li key={index}>{el.author}{el.quote}</li>)
      }
    </ul>
      <button onClick={handlerClick}>wybierz text</button>
    </>
  );
};

export default Quotations;
