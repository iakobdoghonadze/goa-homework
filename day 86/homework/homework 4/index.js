let age = Number(prompt("Enter your age:"));
let energy = Number(prompt("Enter your energy level (1-10):"));


if (age < 20 && energy > 7) {
    alert("გირჩევ სირბილს")
}
else if (energy < 4 ) {
    alert("გირჩევ დასვენებას!")
}
else {
    alert("გააგრძელე ჩვეულებრივად!")
}