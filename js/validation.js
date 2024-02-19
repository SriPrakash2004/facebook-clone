$(document).ready(function (){
    $('#display').validate({
        rules: {
            firstname: {
                required: true,
            },
            surname: {
                required: true,
            },
            mobile: {
                required: true,
                minlength: 10,
            },
            password: {
                required: true,
                minlength: 8,
            },
            date: {
                required: true,
            },
            month:{
                required: true,
            },
            year: {
                required: true,
            },
            gender: {
                required: true,
            }
        },
        messages: {
            firstname: {
                required: "Plase enter the first name",
                minlength: "Please enter minimum 5 letter for first name"
            }
        }
    })
});