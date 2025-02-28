const grid = document.getElementById("grid")
let score = 0
let squares_num = 0
let game_over = false

// recupero il bottone play e gli do la funzione
document.getElementById("play").addEventListener("click", function () {
    // recupero l'elemento grid in cui mettere i quadrati
    let difficulty = document.getElementById("difficulty").value

    grid.innerHTML = ""

    score = 0

    game_over = false

    if (difficulty == "hard") {
        squares_num = 49
    } else if (difficulty == "medium") {
        squares_num = 81
    } else if (difficulty == "easy") {
        squares_num = 100
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
        let square = createSquare(i + 1, difficulty)
        grid.append(square)
        changeColorEvent(square, i + 1, random_nums, score, squares_num)
    }
    console.log("Obiettivo:", squares_num - random_nums.length)

})

function createSquare(text, size) {

    let element = document.createElement("div");
    element.classList.add("square", size);

    let content = document.createElement("span");
    element.append(content);
    content.textContent = text;

    return element
}

function changeColorEvent(square, i, random_nums, squares_num) {
    square.addEventListener("click", function () {

        if (game_over || this.classList.contains("bg-red") || this.classList.contains("bg-azure")) {
            return;
        }

        if (random_nums.includes(i)) {
            this.classList.add("bg-red");
            game_over = true
            alert("Hai perso")
            grid.querySelectorAll(".square").forEach(square => {
                let num = parseInt(square.querySelector("span").textContent);
                if (random_nums.includes(num)) {
                    square.classList.add("bg-red");
                }
            });

        } else {
            this.classList.add("bg-azure");
            score++
            document.getElementById("score").innerHTML = "Punteggio:" + score

            if (score === squares_num - random_nums.length) {
                game_over = true
                alert("Hai vinto")
            }
        }
    })
}

function generateRandomNums(a) {
    let num = Math.floor(Math.random() * a + 1)
    return num
}