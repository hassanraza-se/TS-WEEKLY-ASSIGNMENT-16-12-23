/**
 * 02
 * Implement a simple shopping cart program using an array. Create functions to add items, remove items,
 * and update quantities using the splice method. Print the cart's contents after each operation
 */

import inquirer from 'inquirer';

type Product = {
    name: string;
    price: number;
};

const sampleProducts: Product[] = [
    { name: 'T-shirt', price: 15 },
    { name: 'Jeans', price: 30 },
    { name: 'Sneakers', price: 50 },
    { name: 'Backpack', price: 40 }
];

type CartItem = {
    product: Product;
    quantity: number;
};

let shoppingCart: CartItem[] = [];

function printCart(): void {
    console.log("Cart Contents:");
    console.table(shoppingCart);
}

async function addItem(): Promise<void> {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'product',
            message: 'Choose a product:',
            choices: sampleProducts.map(product => {
                return {
                    name: `${product.name} (${product.price})`,
                    value: product
                }
            })
        },
        {
            type: 'number',
            name: 'quantity',
            message: 'Enter quantity:',
            default: 1,
            validate(input: any): boolean | string | Promise<boolean | string> {
                const parsedValue: number = parseFloat(input);
                return !isNaN(parsedValue) && parsedValue > 0;
            }
        }
    ]);

    const { product, quantity } = answers;

    const existingItemIndex = shoppingCart.findIndex(item => item.product.name === product.name);
    console.log(existingItemIndex);

    if (existingItemIndex !== -1) {
        shoppingCart[existingItemIndex].quantity += quantity;
    } else {
        shoppingCart.push({ product, quantity });
    }

    printCart();
}

async function removeItem(): Promise<void> {
    const answers = await inquirer.prompt({
        type: 'list',
        name: 'cartItem',
        message: 'Choose a product to remove:',
        choices: shoppingCart.map(cartItem => {
            return {
                name: cartItem.product.name,
                value: cartItem
            }
        })
    });

    const { cartItem } = answers;

    const indexToRemove = shoppingCart.findIndex(item => item.product.name === cartItem.product.name);
    console.log(indexToRemove);

    if (indexToRemove !== -1) {
        shoppingCart.splice(indexToRemove, 1);
    } else {
        console.log(`Item "${cartItem.product.name}" not found in the cart.`);
    }

    printCart();
}

async function updateQuantity(): Promise<void> {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'cartItem',
            message: 'Choose a product to update quantity:',
            choices: shoppingCart.map(cartItem => {
                return {
                    name: cartItem.product.name,
                    value: cartItem
                }
            })
        },
        {
            type: 'number',
            name: 'newQuantity',
            message: 'Enter quantity:',
            default: 1,
            validate(input: any): boolean | string | Promise<boolean | string> {
                const parsedValue: number = parseFloat(input);
                return !isNaN(parsedValue) && parsedValue > 0;
            }
        }
    ]);

    const { cartItem, newQuantity } = answers;

    const itemToUpdate = shoppingCart.findIndex(item => item.product.name === cartItem.product.name);

    if (itemToUpdate >= 0) {
        shoppingCart[itemToUpdate].quantity = newQuantity;
    } else {
        console.log(`Item "${cartItem.product.name}" not found in the cart.`);
    }

    printCart();
}

async function startShopping(): Promise<void> {
    while (true) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: ['Add Item', 'Remove Item', 'Update Quantity', 'Print Cart', 'Exit']
        });

        switch (action) {
            case 'Add Item':
                await addItem();
                break;
            case 'Remove Item':
                await removeItem();
                break;
            case 'Update Quantity':
                await updateQuantity();
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
}

startShopping();
