//connect to all HTML tags needed
const button=document.querySelector('#but');
const input=document.querySelector('#input');
const text=document.querySelector('#text');
const gender=document.querySelector('#gender');
const age=document.querySelector('#age');
const country=document.querySelector('#country');
const img=document.querySelector('#image');

//waiting click event on the button
button.addEventListener('click',()=>{
    if(input.value == ''){ //check if the user has entered a name
        button.style.backgroundColor='red';
        button.innerHTML='RESTART';
        input.disabled=true;
        text.innerText="please enter your name";
    }
    
    else{
        text.innerText='Welcome '+input.value+' !';
        
        //fetch in API to get a predicted gender for the user
        fetch('https://api.genderize.io/?name='+input.value).then((response) => {
        console.log('gender',response);
        return response.json(); //return the json form
        
        }).then(data =>{
        console.log(data);
        gender.innerText='Your predict gender: ' + data.gender; //send data to HTML tag
        }).catch((error)=> {
        console.log('rejected',err);
        })
        
        //fetch in API to get a predicted age for the user
        fetch('https://api.agify.io/?name='+input.value).then((response) => {
        console.log('age',response); 
        return response.json(); //return the json form
        }).then(data =>{
        console.log(data);
        age.innerText='Your predict age: ' + data.age; //send data to HTML tag
        }).catch((error)=> {
        console.log('rejected',err);
        })

        //fetch in API to get a predicted country for the user
        fetch('https://api.nationalize.io/?name='+input.value).then((response) => {
        console.log('nationality',response);
        return response.json(); //return the json form
        }).then(data =>{
        console.log(data);
        country.innerText='Your predict country: ' + data.country[0].country_id + ' - ' + data.country[1].country_id; //send data to HTML tag
        }).catch((error)=> {
        console.log('rejected',err);
        })

        //fetch in API for a dog picture        
        fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
        console.log('dog',response);
        return response.json(); //return the json form
        }).then(data =>{
        console.log(data);
        img.style.display='block'; //send data to HTML tag
        img.src=data.message; //send data to HTML tag
        }).catch((error)=> {
        console.log('rejected',err);
        })
    
    }
        
})