const btn = document.querySelector("button");
const div = document.querySelector("div");

const randomNumber = () => {
  const min = 0;
  const max = 100;
  const n = 20;
  const randomNr = Array.from({length: n}, () => Math.floor(Math.random() * (max - min + 1)) + min);
  randomNr.sort(sortNumber)

  const even = randomNr.filter((el) => el % 2 === 0)
  const tab2 = randomNr.filter((el) => el % 2 !== 0)
  div.innerHTML = `<div class="box">
      <h1>Parzyste</h1>
       <p>${even}</p>
    </div>
    <div>
     <h1>nieparzyste</h1>
      <p>${tab2}</p>
    </div>`
}
const sortNumber =((a,b) =>  a - b);

// const tab = [100,58,1,2,5,10,85,65];
// console.log(tab.sort(sortNumber));


btn.addEventListener("click", randomNumber);







