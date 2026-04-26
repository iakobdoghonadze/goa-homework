//2)შექმენით ფუნქცია სახელად createPerson() რომელმაც უნდა შექმნას ობიექტები რომლებსაც ექნებათ -->
// name , surname , age , eyeColor , adress 
// ფუნქციამ უნდა დააბრუნოსმ ობიექტი ზემოთ მოცემული მნიშვნელობებით
// შექმენი 5 ცვლადი და 5 ივე ცვლადში შეინახე ობიექტები გაჯსხვავებული მნიშვნელობებით
// დააკონსოლლოგე ყველა მათგანი რომ ნახო შედეგი



function createPerson(name, surname, age, eyeColor, address) {
    return {
        name: name,
        surname: surname,
        age: age,
        eyeColor: eyeColor,
        address: address
    }
}


console.log(createPerson("gela", "geloviani", 32, "poopish brown", "rolandi pirvelis saxelobis qucha 1, bichnigauri, saqartvelo"))