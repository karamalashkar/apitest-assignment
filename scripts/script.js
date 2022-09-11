//connect to all HTML tags needed
const button=document.querySelector('#but');
const button_bored=document.querySelector('#bored-button');
const out=document.querySelector('#logout');
const input=document.querySelector('#input');
const text=document.querySelector('#text');
const gender=document.querySelector('#gender');
const age=document.querySelector('#age');
const country=document.querySelector('#country');
const img=document.querySelector('#image');
const ip=document.querySelector('#ip');
const bored=document.querySelector('#bored');
const buttonin=document.querySelector('#button-in');
const buttonup=document.querySelector('#button-up');
const userinfo=document.querySelector('#userinfo');
const prediction=document.querySelector('#prediction');
var nameup=document.querySelector('#user-up');
var emailup=document.querySelector('#email-up');
var passup=document.querySelector('#pass-up');
var message=document.querySelector('#wrong-message');

out.addEventListener('click',()=> {
    userinfo.style.display="flex";
    prediction.style.display="none";
})

//add user info to local storage
buttonup.addEventListener('click',()=>{
    var name=nameup.value;
    var email=emailup.value;
    var pass=passup.value;

    nameup.innerHTML=' ';
    emailup.innerHTML=' ';
    passup.innerHTML=' ';

    var user={
        username: name,
        email: email,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    console.log('useradded');
})    

buttonin.addEventListener('click',()=>{
    var username=document.querySelector('#user-in').value;
    var password=document.querySelector('#pass-in').value;

    console.log(username);
    console.log(password);
    var usero = localStorage.getItem(username);
    var data = JSON.parse(usero);

    if(username == data.username && password == data.password){
        console.log('Hello' + data.username);
        userinfo.style.display="none";
        prediction.style.display="flex";
    }

    else{
        message.innerText='Invalid login ! Try again';
        message.style.color='red';
    }
})

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

        axios.get('https://api.ipify.org/?format=json').then((response) => {
        console.log('api',response.data.ip);
        ip.innerText='Your predict ip: ' + response.data.ip;
        }).catch((error)=> {
            console.log('rejected',err);
        })

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

button_bored.addEventListener('click',()=>{
    axios.get('https://www.boredapi.com/api/activity').then((response) => {
        console.log('api',response.data.ip);
        bored.innerText='You are not bored anymore: \n' + response.data.activity;
        }).catch((error)=> {
            console.log('rejected',err);
        })
})
