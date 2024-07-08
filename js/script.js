const grid = document.getElementById("grid")

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

    for (let i = 0; i < squares_num; i++) {
        let square = createSquare(i + 1, size)
        grid.append(square)
        changeColorEvent(square, i + 1)
    }

    let random_nums = []
    while (random_nums.length != 16) {
        random_nums.push(generateRandomNums(squares_num))
    }
    console.log("numeri genrati:", random_nums)
    console.log("lunghezza:", random_nums.length)
})

function createSquare(text, size) {
    let element = document.createElement("div");
    element.classList.add("square", size);

    let content = document.createElement("span");
    element.append(content);
    content.textContent = text;

    return element
}

function changeColorEvent(square, i) {
    square.addEventListener("click", function () {
        this.classList.add("bg-azure")
        console.log("Hai cliccato la", i, "cella")
    })
}

function generateRandomNums(a) {
    let num = Math.floor(Math.random() * a + 1)
    return num
}