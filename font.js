function sub() {
    let nam = document.querySelector('.namey').value;
    if(nam.value == "" ){
        alert('input your name')
    }
}

function sub() {
    let password = document.querySelector('.pass').value;
   
    let con_password = document.querySelector
    ('.conpass').value
    let nam = document.querySelector('.namey').value;
 

    if (password == con_password ) {
       alert('password confirmed') 
       
    }
    else{
        alert('password does not match')
        
    }
}

function myfun() {
    let show = document.querySelector('.pass');
    let comshow = document.querySelector('.conpass')

   if (show.type == 'text' && comshow.type == 'text' ) {
       show.type = ' password'
       comshow.type = 'password'
   }
   else{
       show.type = 'text'
       comshow.type = 'text'
   }
    
}

// function myfun() {
//     let comshow = document.querySelector('.conpass')
//     if (comshow.type == 'text') {
//         comshow.type = 'password'
//     }
//     else{
//         comshow.type = 'text'
//     }
// }
