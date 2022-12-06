import { Type, Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent {

    countriesList: any[] = [
        {id: 1, name: "France",       code:'FRA',   deliveryTime: 1,    cod: "la "},
        {id: 2, name: "États-Unis",   code:'USA',   deliveryTime: 7,    cod: "l'"},
        {id: 3, name: "Espagne",      code:'ESP',   deliveryTime: 2,    cod: "l'"},
        {id: 4, name: "Allemagne",    code:'GER',   deliveryTime: 2,    cod: "l'"},
        {id: 5, name: "Angleterre",   code:'UK',    deliveryTime: 3,    cod: "l'"},
    ];
    
    selected: any[] = [];
    showMsg = false;

    update(e){
        this.showMsg = e.target.value !== 'default' ? true : false;
        if(this.showMsg) {
            this.selected = this.countriesList.find(el => el.id == e.target.value);
        }
      }
}