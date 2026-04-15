//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. თუ ელემენტი number ტიპის მონაცემია მაშინ აიყვანეთ კვადრატში. თუ სტრინგია მაშინ შეაბრუნეთ და ისე დააბრუნეთ. სხვა შემთხვევაში როგორც არის ისე დააბრუნეთ.
let mixedArray = [5, "hello", 10, "world", 15, true, false, "javascript"]

mixedArray.forEach(element => {
    if (typeof element === "number") {
        console.log(element ** 2)
    }
    else if (typeof element === "string") {
        console.log(element.split("").reverse().join(""))
    }
    else {
        console.log(element)
    }
})

