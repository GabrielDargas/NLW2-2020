//procurar o botão
//quando clicar no botão executar uma ação
document.querySelector("#add-time")
.addEventListener('click', cloneField)




function cloneField() {
//duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
//limpar os campos
    const fields = newFieldContainer.querySelectorAll("input")
    fields.forEach( function(field) {
        field.value = ""
    });
    
//colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}