/**
 * 02
 * Implement a simple shopping cart program using an array. Create functions to add items, remove items,
 * and update quantities using the splice method. Print the cart's contents after each operation
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from 'inquirer';
const sampleProducts = [
    { name: 'T-shirt', price: 15 },
    { name: 'Jeans', price: 30 },
    { name: 'Sneakers', price: 50 },
    { name: 'Backpack', price: 40 }
];
let shoppingCart = [];
function printCart() {
    console.log("Cart Contents:");
    console.table(shoppingCart);
}
function addItem() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt([
            {
                type: 'list',
                name: 'product',
                message: 'Choose a product:',
                choices: sampleProducts.map(product => {
                    return {
                        name: `${product.name} (${product.price})`,
                        value: product
                    };
                })
            },
            {
                type: 'number',
                name: 'quantity',
                message: 'Enter quantity:',
                default: 1,
                validate(input) {
                    const parsedValue = parseFloat(input);
                    return !isNaN(parsedValue) && parsedValue > 0;
                }
            }
        ]);
        const { product, quantity } = answers;
        const existingItemIndex = shoppingCart.findIndex(item => item.product.name === product.name);
        console.log(existingItemIndex);
        if (existingItemIndex !== -1) {
            shoppingCart[existingItemIndex].quantity += quantity;
        }
        else {
            shoppingCart.push({ product, quantity });
        }
        printCart();
    });
}
function removeItem() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt({
            type: 'list',
            name: 'cartItem',
            message: 'Choose a product to remove:',
            choices: shoppingCart.map(cartItem => {
                return {
                    name: cartItem.product.name,
                    value: cartItem
                };
            })
        });
        const { cartItem } = answers;
        const indexToRemove = shoppingCart.findIndex(item => item.product.name === cartItem.product.name);
        console.log(indexToRemove);
        if (indexToRemove !== -1) {
            shoppingCart.splice(indexToRemove, 1);
        }
        else {
            console.log(`Item "${cartItem.product.name}" not found in the cart.`);
        }
        printCart();
    });
}
function updateQuantity() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt([
            {
                type: 'list',
                name: 'cartItem',
                message: 'Choose a product to update quantity:',
                choices: shoppingCart.map(cartItem => {
                    return {
                        name: cartItem.product.name,
                        value: cartItem
                    };
                })
            },
            {
                type: 'number',
                name: 'newQuantity',
                message: 'Enter quantity:',
                default: 1,
                validate(input) {
                    const parsedValue = parseFloat(input);
                    return !isNaN(parsedValue) && parsedValue > 0;
                }
            }
        ]);
        const { cartItem, newQuantity } = answers;
        const itemToUpdate = shoppingCart.findIndex(item => item.product.name === cartItem.product.name);
        if (itemToUpdate >= 0) {
            shoppingCart[itemToUpdate].quantity = newQuantity;
        }
        else {
            console.log(`Item "${cartItem.product.name}" not found in the cart.`);
        }
        printCart();
    });
}
function startShopping() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const { action } = yield inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: ['Add Item', 'Remove Item', 'Update Quantity', 'Print Cart', 'Exit']
            });
            switch (action) {
                case 'Add Item':
                    yield addItem();
                    break;
                case 'Remove Item':
                    yield removeItem();
                    break;
                case 'Update Quantity':
                    yield updateQuantity();
                    break;
                case 'Print Cart':
                    printCart();
                    break;
                case 'Exit':
                    console.log('Thank you for shopping!');
                    return;
                default:
                    break;
            }
        }
    });
}
startShopping();
