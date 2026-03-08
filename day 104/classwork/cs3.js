//შექმენით ობიექტი სადაც იქნება აუცილებლად მოსწავლის სახელი, ასაკი, და ქულები რომლებიც სიაში ეწერება. ასევე შექმენით მეთოდი რომელიც გამოითვლის ქულების საშუალოს. და მეორე მეთოდი რომელიც მინიმალურ ქულას დააბრუნებს.

let student = {
    name: "iakobi",
    age: 14,
    scores: [85, 90, 78, 29, 92],
    avgscore: function(){
        let total = 0
        for (let i = 0; i < this.scores.length; i++){
            total += this.scores[i]
        }
        return total / this.scores.length
    },

    minscore: function(){
        let min = this.scores[0]
        for (let i = 1; i < this.scores.length; i++){
            if (this.scores[i] < min){
                min = this.scores[i]
            }
        }
    return min
    }
}

