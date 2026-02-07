//შექმენით ობიექტი სადაც შეინახავთ თქვენი საყვარელი ფილმის / წიგნის მონაცემებს. და კონსოლში გამოიტანეთ სათითაოდ ჯერ key და შემდეგ value.

let favoriteMovie = {
  title: "transformers",
  director: "Michael Bay",
  year: 2007,
  genre: "Action",
  rating: 10
}


for (let key in favoriteMovie){
  console.log(key)
  console.log(favoriteMovie[key])
}

