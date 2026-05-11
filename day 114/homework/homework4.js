//მოცემულია ობიექტი:
const motorcycle = {
  brand: "Kawasaki",
  model: "Ninja H2R",
  specs: {
    engine: "998cc",
    horsepower: 310,
    topSpeed: "400 km/h"
  },
  colors: ["Lime Green", "Mirror Coated Spark Black"],
  isStreetLegal: false
}
// მოახდინეთ ამ ობიექტის დესტრუქცია მაქსიმალურად.

let { brand, model, specs: { engine, horsepower, topSpeed }, colors: [color1, color2], isStreetLegal } = motorcycle
