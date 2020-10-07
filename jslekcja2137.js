function  addForm(inputName, pole){
    const name = document.forms["myForm"][inputName].value;
    document.getElementById(pole).innerHTML = name;
}
