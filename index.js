const inputEl = document.getElementById('input-el');
const saveEl = document.getElementById('save-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

let leads = JSON.parse(localStorage.getItem('myLeads')) || [];
renderLeads()

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener('click', function () {
    console.log('save btn logged');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log('chrome.tabs.query result:', tabs);
        console.log(tabs, 'tabs index.js');
        if (tabs.length > 0) {
            leads.push(tabs[0].url);
            localStorage.setItem('myLeads', JSON.stringify(leads));
            renderLeads()
        } else {
            console.error("No active tab found.");
        }
    })
})


saveEl.addEventListener('click', function () {
    const inputValue = inputEl.value.trim();
    if (inputValue && isValidURL(inputValue) ) {
        leads.push(inputValue)
        localStorage.setItem('myLeads', JSON.stringify(leads))
        renderLeads();
        inputEl.value = ''
    } else {
        alert('Please enter a valid URL')
    }
})

function renderLeads() {
    ulEl.innerHTML = ''
    let listItem = '';

    for (const value of leads) {
        listItem += `
            <li>
                <a href='${value}' target='_blank'>
                ${value}
                </a>
            </li>`
    }

    ulEl.innerHTML += listItem
}


function isValidURL(string) {
    try {
        new URL(string);
        return true
    } catch(error) {
        return false
    }
}


deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear();
    leads = []
    renderLeads()
})











