const formData = { email: "", message: "" }
const LS_KEY = "feedback-form-state";


const feedbackForm = document.querySelector(".feedback-form");
populateFormFromStorage();

feedbackForm.addEventListener('input', inputsHandler);
feedbackForm.addEventListener('submit', submitHandler);


function inputsHandler(event) {
    formData.email = event.currentTarget.elements.email.value.trim();
    formData.message = event.currentTarget.elements.message.value.trim();

    try {
        localStorage.setItem(LS_KEY, JSON.stringify(formData));
    } catch (error) {
        console.log(err);
        return;
    }

} 

function submitHandler(event) {
    event.preventDefault();
    const userEmail = event.currentTarget.elements.email.value.trim();
    const userMessage = event.currentTarget.elements.message.value.trim();

    if (!userEmail || !userMessage) {
        return alert("Fill please all fields");
    }

    console.dir(formData);
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
 }

function populateFormFromStorage() {
    let dataFromStorage = {};
     try {
        dataFromStorage = JSON.parse(localStorage.getItem(LS_KEY))
    } catch (error) {
        console.log(err);
        return;
     }
    
    if (!dataFromStorage) { 
        return;
    }

    for (const key in dataFromStorage) { 
        feedbackForm.elements[key].value = dataFromStorage[key];
    }
 }