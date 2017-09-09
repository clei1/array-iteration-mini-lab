var farmer_tasks = ["Milk the cow", "Churn the butter", "Drive the tractor", "Peel potatoes", "Plant the corn"]

for (var x = 0; x < farmer_tasks.length; x++) {
    console.log(`I'm so busy! I need to ${farmer_tasks[x]}`)
}

var some_numbers = [2, 52, 19, 46, 1000]

for (var x = 0; x < some_numbers.length; x++){
    console.log((some_numbers[x] + 10) / 2)
}

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams"]

for (var x = 0; x < presidents.length; x++){
    var temp = ""
    for(var y = 0; y < presidents[x].length; y++){
        temp = presidents[x][y] + temp
    }
    console.log(temp)
}

var number = []

for(var x = 10; x >= 0; x--){
    number.push(x)
}

for (var x = 0; x < number.length; x++){
    console.log(`${number[x]} bottles of milk on the wall`)
}
