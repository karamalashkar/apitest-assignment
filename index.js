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
    
        fetch('https://api.genderize.io/?name='+input.value).then((response) => {
        console.log('gender',response);
        return response.json();
        
        }).then(data =>{
        console.log(data);
        document.write(data.gender);
        }).catch((error)=> {
        console.log('rejected',err);
        })
        
        fetch('https://api.agify.io/?name='+input.value).then((response) => {
        console.log('age',response);
        return response.json();
        }).then(data =>{
        console.log(data);
        document.write(data.age);
        }).catch((error)=> {
        console.log('rejected',err);
        })

        fetch('https://api.nationalize.io/?name='+input.value).then((response) => {
        console.log('nationality',response);
        return response.json();
        }).then(data =>{
        console.log(data);
        }).catch((error)=> {
        console.log('rejected',err);
        })
        
        fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
        console.log('dog',response);
        return response.json();
        }).then(data =>{
        console.log(data);
        }).catch((error)=> {
        console.log('rejected',err);
        })
    
    }
        
})
