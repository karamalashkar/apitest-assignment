const button=document.querySelector('#but');
const input=document.querySelector('#input');
const text=document.querySelector('#text');
//button.disabled=true;

button.addEventListener('click',()=>{
    if(input.value == ''){
        button.style.backgroundColor='red';
        button.innerHTML='RESTART';
        input.disabled=true;
        text.innerText="please enter your name";
    }
    
    else{
        text.innerText='Welcome '+input.value+' !';
    }
        
})