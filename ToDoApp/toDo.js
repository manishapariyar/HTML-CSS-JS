 let todolist =[
  {
    item: 'take bath',
    duedate: '06-11-2023',
  },
  {
    item: 'brunch',
    duedate: '05-11-2023',
  }
 ];
 displayItems()
 let list = JSON.stringify(todolist);
 
 console.log(list)
function addTodo(){
    let inputElement = document.querySelector(`#todo-ipnut`);
    let inputDate = document.querySelector(`#todo-date`);
    let todoItem = inputElement.value;
    let todoDate = inputDate.value;
    todolist.push({item:todoItem, duedate:todoDate});
    inputElement.value=``;
    inputDate.value=``;
    localStorage.setItem('list' ,list);
 displayItems();
}
function displayItems(){
    let containerElement = document.querySelector(`.todo-container`);
    let newHtml = '';
// displayItems.innerText ='';
  for(let i = 0; i<todolist.length;i++ ){
    // destructing the arr
    // let {item, dueDate} = todolist[i]
     let item = todolist[i].item;
     let dueDate = todolist[i].duedate;
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="todo-btn-delete" onclick="todolist.splice(${i},1); displayItems()">Delete</button>
    `;
  }
 containerElement.innerHTML = newHtml;
}