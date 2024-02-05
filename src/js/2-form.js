'use strict';

const feedbackForm = document.querySelector('form');
const emailInput = feedbackForm.elements.email;
const textarea = feedbackForm.elements.message; 

const LS_KEY = "feedback-form-state";

const savedState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

emailInput.value = savedState.email || '';
textarea.value = savedState.message || '';

const { email, message } = feedbackForm.elements;

emailInput.addEventListener('input', handleFormInput);

function handleFormInput() {
    savedState.email = email.value.trim(),
    savedState.message = message.value.trim(),
    
    localStorage.setItem(LS_KEY, JSON.stringify(savedState));
};

feedbackForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    if (savedState.email === '' || savedState.message === '') {
       return alert('Please fill in all the fields of the form.')
    }

    console.log({email: email.value, message: message.value});
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
};