function comparar() {
    let numberOne = document.getElementById("primeiro-num").value;
    console.log(numberOne)
    let numberTwo = document.getElementById("segundo-num").value;
    const operator = document.getElementById("operadores").value;

    let result;

    switch (operator) {
        case "menor":
            result = Number(numberOne) < Number(numberTwo)
            break;

        case "maior":
            result = Number(numberOne) > Number(numberTwo)
            break;

        case "menorIgual":
            result = Number(numberOne) <= Number(numberTwo)
            break;

        case "maiorIgual":
            result = Number(numberOne) >= Number(numberTwo)
            break;

        case "igual":
            result = Number(numberOne) == Number(numberTwo)
            break;

        case "diferente":
            result = Number(numberOne) != Number(numberTwo)
            break;

        default:
            break;
    }

    document.getElementById("resultado").innerHTML = result;
}

