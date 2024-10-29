// // fv - form validation 

// const phoneNumberRegex =/^(98|97)\d{8}$/;

// // var result = phoneNumberRegex.test(9800962010);
// var result = phoneNumberRegex.test(980096201);

// console.log(result);

// function validateNumber(number){
//     if(phoneNumberRegex.test(number)){  // returns true if number is valid 
//         // Number is valid
//         console.log("Number is valid");
//         // checking the mobile network is of ncell or not
//         if(phoneNumberRegex.test(number)){  // returns true if number is valid 
//             // Number is valid
//             console.log("Number is ncell");
//          }else{   // Number is nor valid
//             console.log("Number is not ncell");
//          }

//      }else{   // Number is nor valid
//         console.log("Number is not valid");
//      }
// }

// //  calling the validatenumber function 
// validateNumber(980098201)


function validateform(e){
    e.preventDefault();
    var firstname = document.getElementById("firstname").value;
    const firstnamepattern = /^[A-Za-z]+$/;

    var firstnameResult = firstnamepattern.test(firstname);
    if(firstnameResult){
        console.log("Firstname is valid");
    }else{
        console.log("firstname is invalid");
        document.getElementById('ame').innerText=("please provide valid info");
    }
    // e.preventDefault();
    var password = document.getElementById("password").value;
    const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    var passwordResult = passwordpattern.test(password);
    if(passwordResult){
        console.log("password is valid");
    }else{
        console.log("password is invalid");
    }
    var email = document.getElementById("email").value;
    const emailpattern = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    var emailResult = emailpattern.test(email);
    if(emailResult){
        console.log("email is valid");
    }else{
        console.log("email is invalid");
    }

    var phoneNumber = document.getElementById("phoneNumber").value;
    const phoneNumberpattern = /^(98|97)\d{8}$/;


    var phoneNumberResult = phoneNumberpattern.test(phoneNumber);
    if(phoneNumberResult){
        console.log("phoneNumber is valid");
    }else{
        console.log("phoneNumber is invalid");
    }

}