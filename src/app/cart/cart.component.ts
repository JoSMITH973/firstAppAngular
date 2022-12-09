import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    sentenceEmptyCard = "Your card is empty";
    items: any[] = JSON.parse(localStorage.getItem("cart") || '{}');
    emptyCard = this.items.length == 0;
    productToUpdate: any[] = [];

    changeQuantity(product, operator) {
        // On vérifie si le localStorage est vide
        if(this.items != null || this.items !== '{}') {

            this.productToUpdate = this.items.find(obj => obj.id == product.id);
            
            // Selon l'opérateur demandé, on ajoute ou retire un élément du panier
            this.productToUpdate['quantity'] = operator == '+' ?
             this.productToUpdate['quantity']+1 : 
             this.productToUpdate['quantity']-1;
            if(this.productToUpdate['quantity'] > 0) {
                this.items.map(el => el.id == this.productToUpdate['id'] || el)
            } 
            else {
                this.items = this.items.filter(el => el['id'] != this.productToUpdate['id'])
            }
            this.emptyCard = this.items.length == 0;
            localStorage.setItem("cart", JSON.stringify(this.items));
        }
    }

    removeQuantity(product) {
        this.changeQuantity(product, '-');
    }

    addQuantity(product) {
        this.changeQuantity(product, '+');
    }
}
