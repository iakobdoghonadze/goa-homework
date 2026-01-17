let word = prompt("Enter a word:");
let word2 = prompt("Enter another word:");

if (word === word2) {
    alert("სიტყვები ემთხვევა");
}
else if (word[0] === word2[0]) {
    alert("პირველი ასოები ემთხვევა");
} else {
    alert("არ ემთხვევა");
}