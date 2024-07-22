const inputText = document.getElementById('inputText');
const btn = document.getElementById('btn');
const listItems = document.getElementById('listItems');

btn.addEventListener('click', addList);

function addList(params) {
    let Task = inputText.value.trim()   // trim()  space reomve
    if (Task !== '') {
        let li = document.createElement('li');
        li.textContent = Task; // input joo enter kr rahy hain
        let delete_btn = document.createElement('button');
        delete_btn.textContent = 'Delete';
     
        li.appendChild(delete_btn);
        listItems.appendChild(li);
        delete_btn.addEventListener('click', deleteNode)
        inputText.value = '';
    }
}

function deleteNode(event) {
   let parent =  event.target.parentElement;
   listItems.removeChild(parent);
}




