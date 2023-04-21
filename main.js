"use strict";

const data = [
  {
    _id: "6366a608906d4d2419dcd82d",
    name: "130610:iv3_proggers",
    text: "Вебинар 130610/130610:iv3_proggers, начало: 05.11.2022 18.41, длительность:144 минут, участников:7",
    type: "LiveWebinars",
    nerrors: 0,
    count1: 7,
    count2: 144,
    data: {
      minutes: 144,
      roomid: "130610:iv3_proggers",
      group: "130610",
      start: 1667662906210,
      stat: 7,
    },
    webinarId: "130610:iv3_proggers*2022-11-05T18:41:46",
    mode: "",
    created: "2022-11-05T18:06:00.577Z",
  },
  {
    _id: "6",
    name: "130610:iv3_proggers",
    text: "Вебинар 130610/130610:iv3_proggers, начало: 05.11.2022 18.41, длительность:144 минут, участников:7",
    type: "LiveWebinars",
    nerrors: 0,
    count1: 7,
    count2: 144,
    data: {
      minutes: 144,
      roomid: "130610:iv3_proggers",
      group: "130610",
      start: 1667662906210,
      stat: 7,
    },
    webinarId: "130610:iv3_proggers*2022-11-05T18:41:46",
    mode: "",
    created: "2022-11-05T18:06:00.577Z",
  },
  {
    _id: "6366a608906d4d2419dcd82d",
    name: "130610:iv3_proggers",
    text: "Вебинар 130610/130610:iv3_proggers, начало: 05.11.2022 18.41, длительность:144 минут, участников:7",
    type: "LiveWebinars",
    nerrors: 0,
    count1: 7,
    count2: 144,
    data: {
      minutes: 144,
      roomid: "130610:iv3_proggers",
      group: "130610",
      start: 1667662906210,
      stat: 7,
    },
    webinarId: "130610:iv3_proggers*2022-11-05T18:41:46",
    mode: "",
    created: "2022-11-05T18:06:00.577Z",
  },
];

const form = document.querySelector(".form");
const before = document.querySelector(".before");
const after = document.querySelector(".after");
const list = document.querySelector(".table_list");
const popUp = document.querySelector(".pop-up");
const popUpBox = popUp.querySelector(".pop-up_text");
console.log(popUpBox);
const date = new Date();

if (form) {
  form.addEventListener("submit", onSubmite, false);
}

function onSubmite(event) {
  before.classList.toggle("notshown");
  after.classList.toggle("notshown");
  event.preventDefault();
}

const listItems = data.map((item, i) => {
  return `<li class="table_list-item">
    <div class="table_conteiner">
        <span class="table_text table_text_bold">Вебинар ${
          item.webinarId
        }</span>
        <span class="table_text">[Данные с бизон пришли ${date.toLocaleString()}]</span>
    </div>
    <div class="table_conteiner table_conteiner_center">
        <span class="table_text table_text_green">Есть в базе</span>
    </div>
    <div class="table_conteiner table_conteiner_center">
    <a class='table_button' href='#pop-up' datavalue='${i}'>
        <span class='table_text'>Перезагрузить</span>
    </a>
    </div>
    
  </li>`;
});

list.innerHTML = listItems.join("");

list.addEventListener("click", onClick);

function onClick(event) {
  let current = event.target;
  while (current !== list) {
    if (current.classList.contains("table_button")) {
      break;
    }
    current = current.parentElement;
  }
  if (current === list) {
    return;
  }
  current.innerHTML =
    '<span class="table_text table_text_red">Загрузка данных</span>';
  let value = current.getAttribute("datavalue");
  let item = data[value];

  let keys = Object.keys(item);

  let text = keys.map((el) => {
    return `
    [${el}]=> ${item[el]}<br>`;
  });
  popUpBox.innerHTML = `<span class='pop-up_text'>
  Array<br>
  (<br>
  ${text.join("")}
  )
  </span>`;
}
