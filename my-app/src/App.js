import React, {useState, useEffect} from 'react';

const Quotations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`)
      .then(res => res.json())
      // .then(data => console.log(data[0]))
      .then(data => setData(data))
      .catch(err => console.log(err));
  },[])

  const handlerNext = () => {
    setData(prev => prev)
  }
  const handlerPrevious = () => {

  }


  return (
    <>
      <button onClick={handlerPrevious}> Previous </button>
      <button onClick={handlerNext}> Next </button>
    <ul>
      {
        data.map((el,index) => <li className="hidden" key={index}>{el.quote}{el.author}</li>)
      }
    </ul>

    </>
  );
};

export default Quotations;
// const randomText = () => {
//   const min = 0;
//   const max = 102;
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }