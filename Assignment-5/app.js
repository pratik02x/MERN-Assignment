const input=document.getElementById("inputelement");
const tbody=document.getElementById("tbody");

const addBtn=document.getElementById("addBtn");

const todos=[];

function addtodo(){

      todos.push(input.value);
      input.value=" ";

      displyTodo();
}

function displyTodo(){
      tbody.innerHTML=" ";

      todos.forEach((todo,index)=>{
            tbody.innerHTML+=`
            <tr>
              <td>
                 ${todo}
              </td>
              <td>
                  <button onclick="removetodo(${index})" id="rbtn" )>Remove</button>
              </td>
            </tr>
            `
      });
}

function removetodo(index){
      todos.splice(index,1);
     
      displyTodo();
}

addBtn.addEventListener("click",addtodo);




