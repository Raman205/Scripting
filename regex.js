// Username: Characters and numbers only, length must be 5 or greater.

const usernameRegex = /^[a-zA-Z0-9]{5,}$/;

// First Name: Only characters, no spaces allowed.

const firstNameRegex = /^[a-zA-Z]+$/;

// Password: Must contain at least one special symbol, one lowercase letter, one uppercase letter, and one number. ;

const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/

// Email: A basic email validation.

const emailRegex = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone Number (Nepal): A 10-digit phone number starting with 98 or 97.

const phoneNumberRegex = /^(98|97)\d{8}$/;


function validateForm() {

    const username = document.getElementById('username').value;
    
    const firstName = document.getElementById('firstName').value;
    
    const password = document.getElementById('password').value;
    
    const email = document.getElementById('email').value;
    
    const phone = document.getElementById('phone').value;
    
    // Validate Username
    
    if (!usernameRegex.test(username)) { console.log('Invalid username');
    
    } else {
    
    console.log('Valid username');
    
    }
    
    // Validate First Name
    
    if (!firstNameRegex.test(firstName)) { 
        console.log('Invalid first name');
    } 
    else {
    
    console.log('Valid first name'); }
    
    // Validate Password
    
    if (!passwordRegex.test(password)) { 
        console.log('Invalid password');
    
    } else {
    
    console.log('Valid password');
    
    }
    
    // Validate Email
    
    if (!emailRegex.test(email)) { 
        console.log('Invalid email');
    
    } else {
    
    console.log('Valid email');
    
    }
    
    // Validate Phone Number
    
    if (!phoneNumberRegex.test(phone)) { 
        console.log('Invalid phone number');
    
    } else {
    
    console.log('Valid phone number');
    }
}

