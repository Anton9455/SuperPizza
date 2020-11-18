import { Service } from './../types';
import serviceCards from './serviceCards';
import serviceCategories from './serviceCategories';



let service: Service = {
    getCardsById: (id: number)=>{
        return serviceCards.getCardsById(id);
    },
    getCategories: ()=>{
        return serviceCategories.getCategories();
    }
}

export default service;