let score = Number(prompt("Enter your score (0-100):"));


if (score >= 90) {
    alert("შესანიშნავია")
} 
else if (score > 70 && score < 90) {
    alert("კარგია")
}
else if (score >= 50 && score <= 70) {
    alert("საშუალო შედეგი")
}
else if (score < 50) {
    alert("მეტი უნდა იმეცადინო!")
}