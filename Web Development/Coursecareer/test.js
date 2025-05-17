const number_Element = Number(prompt("Enter a number between 1 and 10: "));
if (number_Element >= 1 && number_Element <=10) {
    const list = document.getElementById("list"); 

    for (let i = 0; i < number_Element; i++){
        const li = document.createElement("li"); 
        li.appendChild(document.createTextNode(i.toString()));
        list.appendChild(li);
    }
}else {
    alert("that is not valid input.")
}