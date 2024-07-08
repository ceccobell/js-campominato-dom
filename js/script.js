const grid = document.getElementById("grid")
let score = 0

// recupero il bottone play e gli do la funzione
document.getElementById("play").addEventListener("click", function () {
    // recupero l'elemento grid in cui mettere i quadrati
    let difficulty = document.getElementById("difficulty").value
    grid.innerHTML = ""


    let squares_num = 0
    if (difficulty == "hard") {
        squares_num = 49
        size = "hard"
    } else if (difficulty == "medium") {
        squares_num = 81
        size = "medium"
    } else if (difficulty == "easy") {
        squares_num = 100
        size = "easy"
    }

    let random_nums = []
    while (random_nums.length != 16) {
        let generate_num = generateRandomNums(squares_num)
        if (!random_nums.includes(generate_num)) {
            random_nums.push(generate_num)
        }
    }
    console.log(random_nums)

    for (let i = 0; i < squares_num; i++) {
        let square = createSquare(i + 1, size)
        grid.append(square)
        changeColorEvent(square, i + 1, random_nums, score)
    }


})

function createSquare(text, size) {
    let element = document.createElement("div");
    element.classList.add("square", size);

    let content = document.createElement("span");
    element.append(content);
    content.textContent = text;

    return element
}

function changeColorEvent(square, i, random_nums) {
    square.addEventListener("click", function () {
        if (random_nums.includes(i)) {
            this.classList.add("bg-red");
        } else {
            this.classList.add("bg-azure");
            score++
        }
        console.log("Hai cliccato la", i, "cella")
        console.log("Punteggio:", punteggio)
    })
}

function generateRandomNums(a) {
    let num = Math.floor(Math.random() * a + 1)
    return num
}