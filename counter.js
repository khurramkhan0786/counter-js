let inc_btn = document.querySelector("#inc-btn");
let dec_btn = document.querySelector("#dec-btn");
let msg = document.querySelector('#msg');
let clear_btn = document.querySelector('#clear-btn');
let para = document.querySelector('#para');
let count =0;


const increment = () =>{
    count= count+1;
    para.style.display ='none';
    console.log(count);
    msg.innerText = `${count}`;
}
const decrement = () =>{
    if(count> 0){
    count= count-1;
    para.style.display ='none';
    }
    else{
      para.style.display ='block';
    }
    console.log(count);
    msg.innerText = `${count}`;
}
const clear = () =>{
    count = 0;
    msg.innerText=`${count}`;
}

inc_btn.addEventListener("click",increment);
dec_btn.addEventListener("click",decrement);

clear_btn.addEventListener("click",clear);