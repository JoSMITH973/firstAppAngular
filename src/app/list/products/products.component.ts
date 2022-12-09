import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    products = [
        {
            id: 1,
            name: 'iPhone 12',
            specifications: {
                color: 'black',
                weight: '250g',
                storage: '256GB',
                price: '1000$',
            },
            picture: 'https://m.media-amazon.com/images/I/715MbIIvMpL._AC_SX425_.jpg',
        },
        {
            id: 2,
            name: 'Airpods',
            specifications: {
                color: 'white',
                weight: '50g',
                storage: 'N/A',
                price: '200$',
            },
            picture: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1551489688005',
        },
        {
            id: 3,
            name: 'Samsung S22',
            specifications: {
                color: 'black',
                weight: '250g',
                storage: '512GB',
                price: '900$',
            },
            picture: 'https://m.media-amazon.com/images/I/817IKYomOSL._AC_SX425_.jpg',
        },
        {
            id: 4,
            name: 'Samsung Note10',
            specifications: {
                color: 'black',
                weight: '250g',
                storage: '256GB',
                price: '950$',
            },
            picture: 'https://m.media-amazon.com/images/I/51f4T4yRkbL._AC_SY450_.jpg',
        },
        {
            id: 5,
            name: 'iPhone 14',
            specifications: {
                color: 'white',
                weight: '250g',
                storage: '256GB',
                price: '1300$',
            },
            picture: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
        },
    ];

    cart: any[] = [];
    productToUpdate: any[] = [];
    cartString = "";
    checkIfExistInLocalStorage = false;
    welcomeTitle = "Welcome in YourShop"
    priceStringToInt = 0;
    originalWelcomeTitle = "Welcome in YourShop"

    addToCart(product) {

        // On vérifie si le localStorage est vide
        if(localStorage.getItem("cart") != null) {

            this.cart = JSON.parse(localStorage.getItem("cart")  || '{}');
            this.checkIfExistInLocalStorage = this.cart.find(obj => obj.id == product.id) ? true : false;
            
            // On vérifie si l'article à ajouter au panier est présent dans le panier
            if(this.checkIfExistInLocalStorage) {
                
                this.productToUpdate = this.cart.find(obj => obj.id == product.id);
                this.productToUpdate['quantity'] += 1;
                this.priceStringToInt = this.productToUpdate['specifications']['price'].substring(0, this.productToUpdate['specifications']['price'].length-1);
                this.productToUpdate['totalCosts'] = this.productToUpdate['quantity'] * this.priceStringToInt + "$";
                
                this.cart.map(el => el.id == this.productToUpdate['id'] || el)
            }
            // Sinon on le rajoute au panier
            else {
                product['quantity'] = 1;
                product['totalCosts'] = product['specifications']['price'];
                this.cart.push(product);
            }
        }
        // Sinon on le rajoute au panier
        else {
            product['quantity'] = 1;
            product['totalCosts'] = product['specifications']['price'];
            this.cart.push(product);
        }
        
        // On convertit le tableau en chaine de caractère afin de l'insérer dans le localStorage
        this.cartString = JSON.stringify(this.cart);
        localStorage.setItem("cart", this.cartString);
    }

    modifyTitleOver(product) {
        this.welcomeTitle = "Product selected : "+product['name'];
    }

    modifyTitleOut() {
        this.welcomeTitle = this.originalWelcomeTitle;
    }
}
