const button=document.querySelector('#but');
const input=document.querySelector('#input');
const text=document.querySelector('#text');
const gender=document.querySelector('#gender');
const age=document.querySelector('#age');
const country=document.querySelector('#country');
const img=document.querySelector('#image');

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
        gender.innerText='Your predict gender: ' + data.gender;
        }).catch((error)=> {
        console.log('rejected',err);
        })
        
        fetch('https://api.agify.io/?name='+input.value).then((response) => {
        console.log('age',response);
        return response.json();
        }).then(data =>{
        console.log(data);
        age.innerText='Your predict age: ' + data.age;
        }).catch((error)=> {
        console.log('rejected',err);
        })

        fetch('https://api.nationalize.io/?name='+input.value).then((response) => {
        console.log('nationality',response);
        return response.json();
        }).then(data =>{
        console.log(data);
        country.innerText='Your predict country: ' + data.country[0].country_id + ' - ' + data.country[1].country_id;
        }).catch((error)=> {
        console.log('rejected',err);
        })
        
        fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
        console.log('dog',response);
        return response.json();
        }).then(data =>{
        console.log(data);
        img.style.display='block';
        img.src=data.message;
        }).catch((error)=> {
        console.log('rejected',err);
        })
    
    }
        
})
