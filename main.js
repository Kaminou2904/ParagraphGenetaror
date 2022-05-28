console.log('Hello World!');

const inpu = document.querySelector('#numOfWords');
const container = document.querySelector('.containerrr');


const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (let i=0; i<n; ++i) {
    const random = (Math.random() * 25).toFixed(0);
    text += letters[random];
    
  }
  return text ;
};


const generatePara = ()=>{
  const numOfWords = Number(inpu.value);
  
  const para = document.createElement('p');
  let data = "";
  
  for (let i = 0; i<numOfWords; ++i) {
    const randomNum = (Math.random () *15).toFixed(0);
    data += generateWord(randomNum).toLowerCase();
    data += " ";
  }
  
  para.innerText = data;
  
  para.setAttribute("class", "para");
  
  container.append(para);

  /*const copyBtn = document.createElement('button');
  copyBtn.innerText = 'Copy'
  copyBtn.setAttribute("class", "btn2");
  para.append(copyBtn);*/
  
  
  
};






