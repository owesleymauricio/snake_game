const canvas = document.querySelector('canvas')
const contexto = canvas.getContext("2d")

//contexto.fillStyle = "red" // coloca cor no desenho
//contexto.fillRect(250, 250, 50, 50) // define a altitude e logngitude, altura e latgura

const size = 20 // tamanho da comida e da cobrinha
const snake = [
    {x:200, y:200},
    {x:220, y:200}
] // array que fazz a cobra se mover, cada pade da cobra e um objeto


let direction = "right"

const drawnSnake = () => {
    contexto.fillStyle = "#ddd"

    snake.forEach((position, index) =>{

        if(index === snake.length - 1){
            contexto.fillStyle = "blue"
        }
        contexto.fillRect(position.x, position.y, size, size)
    })
}

const moveSnake = () => {
    if(!direction) return // se noa tiver nada pula direto pro final da função 

    const head = snake.at(-1) // a cabeça da cobrinha

    

    if(direction == "right"){
        snake.push({x:head.x + size, y: head.y})
    }
    snake.shift() // pega o ultimo objeto do array
}

setInterval(() => {
    contexto.clearRect(0,0,500,500)

    drawnSnake()
    moveSnake()
}, 300)
   

