const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value ,
        concluida: false
    })

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
            <i class="bi bi-check-circle-fill" onclick="concluirTarefa(${posicao})"></i>
            <p>${item.tarefa}</p>
            <i class="bi bi-trash3-fill" onclick="deletarItem(${posicao})"></i>               
        </li>
        
        `
    } )

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    
    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    console.log(posicao)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)