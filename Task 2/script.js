const email = document.querySelector('.email-address');
const fullName = document.querySelector('.full-name');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');

function validateForm() {
    if(email.value.trim() === '' || fullName.value.trim() === '' || subject.value.trim() === '' || message.value.trim() === '')
    {
        alert('Please fill in all fields before submitting the form.');
    }

    if(email.value.trim() != '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/')
    {
        alert('Please enter a valid email address.');
    }
}

