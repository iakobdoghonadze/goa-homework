// შექმენი ობიექტი სადაც არის _items → მასივი ობიექტების:
// { name: "apple", price: 5, qty: 2 } ... სხვა ობიექტების სხვადასვხ მნშვნელობებით

// მეთოდები:

// addItem(product)
// removeItem(index)
// clear()

// getter:

// დააბრუნოს ყველა პროდუქტის ფასი --> totalPrice

let shoppingCart = {
    _items: [],
    addItem(product){
        this._items.push(product)
        console.log(`Added ${product.name} to cart. Current items:`, this._items)
    },
    removeItem(index){
        if (index >= 0 && index < this._items.length){
            let removedItem = this._items.splice(index, 1)[0]
            console.log(`Removed ${removedItem.name} from cart. Current items:`, this._items)
        }
        else {
            console.log("Invalid index. No item removed.")
        }
    },
    clear(){
        this._items = []
        console.log("Cart cleared. Current items:", this._items)
    },
    get totalPrice(){
        return this._items.reduce((total, item) => total + item.price * item.qty, 0)
    }
}

