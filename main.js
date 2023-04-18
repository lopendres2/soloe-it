"use strict"

const form = document.querySelector('.form');
const before = document.querySelector('.before');
const after = document.querySelector('.after');

form.addEventListener('submit', onSubmite, false)

function onSubmite(event){
before.classList.toggle('notshown');
after.classList.toggle('notshown')
event.preventDefault()
}
