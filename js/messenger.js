function successAlert(user) {
    Swal.fire({
        title: 'Success!',
        text: `Message was sent to ${user}`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}


function errorAlert() {
    Swal.fire({
        title: 'Error!',
        text: 'Please fill out USER and MESSAGE field before sending',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}


function errorUserAlert() {
    Swal.fire({
        title: 'Error!',
        text: 'Please fill out USER field before sending.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}


function errorMsgAlert() {
    Swal.fire({
        title: 'Error!',
        text: 'Please fill out MESSAGE field before sending',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}


const msgUserSubmit = document.getElementById('msgUser-submit');


msgUserSubmit.addEventListener('click', () => {
    let msgUserInput = document.getElementById('msgUser-input').value; 
    let msgUserText = document.getElementById('msgUser-text').value; 

    let userValid;  

    //members array from members.js
    if (members.includes(msgUserInput)) {
        userValid = false;
    } else {
        userValid = true;
    }

    if(userValid && msgUserText ===""){
        errorAlert();
    } else if (userValid) {
        errorUserAlert();
    } else if (msgUserText === "" ) {
        errorMsgAlert();
    } else {
        successAlert(msgUserInput);
        msgUserInput = document.getElementById('msgUser-input').value = ''; 
        msgUserText = document.getElementById('msgUser-text').value = ''; 
    }
});
