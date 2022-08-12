 let inputField = document.querySelector('.input-feild');
 const add = document.querySelector('#add-todo');
 const addList = document.querySelector('#todo-container');

 add.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    addList.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = "";
    paragraph.addEventListener('click', function(){
      paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function(){
      paragraph.remove();
    });

 });