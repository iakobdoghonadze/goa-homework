//შექმენით ობიექტი სადაც შეინახავთ მანქანის ინფორმაციას, შიგნით დაამატეთ მეთოდი, რომელიც ობიექტის შიგნით არსებულ ინფორმაციას გაერთიანებს და კონსოლში გამოიტანს.

let carthing = {
    brand: "Apollo",
    model: "Intensa Emozione",
    year: 2017,
    getcarinfo: function(){
        console.log(this.brand + " " + this.model + " " + this.year)
    }
}