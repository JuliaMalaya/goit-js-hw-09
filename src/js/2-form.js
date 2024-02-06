'use strict';

const feedbackForm = document.querySelector('form');
const emailInput = feedbackForm.elements.email;
const textarea = feedbackForm.elements.message; 

const LS_KEY = "feedback-form-state";

const savedState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

emailInput.value = savedState.email || '';
textarea.value = savedState.message || '';

function handleFormInput(event) {
     if (event.target === emailInput || event.target === textarea) {
         savedState.email = emailInput.value;
         savedState.message = textarea.value;
         
         localStorage.setItem(LS_KEY, JSON.stringify(savedState));
    }
}

feedbackForm.addEventListener('input', handleFormInput);

feedbackForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    if (savedState.email === '' || savedState.message === '') {
       return alert('Please fill in all the fields of the form.')
    }

    console.log({email:emailInput.value, message: textarea.value});
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
};