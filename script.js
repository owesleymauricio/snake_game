const canvas = document.querySelector('canvas')
const contexto = canvas.getContext("2d")

//contexto.fillStyle = "red" // coloca cor no desenho
//contexto.fillRect(250, 250, 50, 50) // define a altitude e logngitude, altura e latgura

const size = 20 // tamanho da comida e da cobrinha
const snake = [{x:0, y:0}] // array que fazz a cobra se mover, cada pade da cobra e um objeto


let direction

let loopID // limpa o browser para na duplicar os loops

const drawnSnake = () => {
    contexto.fillStyle = "#ddd"

    snake.forEach((position, index) =>{

        if(index === snake.length - 1){
            contexto.fillStyle = "aliceblue"
        }
        contexto.fillRect(position.x, position.y, size, size)
    })
}

// controla e move a direção da snake 
const moveSnake = () => {
    if(!direction) return // se noa tiver nada pula direto pro final da função 

    const head = snake.at(-1) // a cabeça da cobrinha

    
    
    if(direction == "right"){
        snake.push({x:head.x + size, y: head.y})
    }
    
    if(direction == "left"){
        snake.push({x:head.x - size, y: head.y})
    }
    
    if(direction == "down"){
        snake.push({x:head.x , y: head.y + size})
    }
    
    if(direction == "up"){
        snake.push({x:head.x , y: head.y - size})
    }
    snake.shift() // pega o ultimo objeto do array
}

//vai fazer o jogo rodar
const gameLoop = () => {
    clearInterval(loopID)
    contexto.clearRect(0,0,500,500)//limpa a tela

    drawnSnake() // create snake
    moveSnake() // move a cobrinha

    //chama a função para ficar sempre rodando
    loopID = setTimeout(() => {
        gameLoop()
    }, 300)
}

gameLoop()

//teclas para mover a snake
document.addEventListener("keydown", ({key}) =>{
    if(key === "ArrowRight" && direction != 'left'){
        direction = 'right'
    }
    if(key === "ArrowLeft" && direction != 'right'){
        direction = 'left'
    }
    if(key === "ArrowDown" && direction != 'up'){
        direction = 'down'
    }
    if(key === "ArrowUp" && direction != 'down'){
        direction = 'up'
    }
})


