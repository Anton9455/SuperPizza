import { ICatergories } from './../types';
let serviceCategories = {
    getCategories: ():Array<ICatergories>=>{
        return [
            {id:0, name:"Спецпредложения", icon: {src:"./fire_red.svg", alt:"fire"}},
            {id:1, name:"Пицца",icon: {src:"./pizza_orange.svg",alt:"pizza"}},
            {id:2, name:"Салаты и супы",icon: {src:"./cup.svg", alt:"cup"}},
            {id:3, name:"Закуски",icon: {src:"./food.svg", alt:"food"}},
            {id:4, name:"Десерты",icon: {src:"./ice-cream.svg",alt:"ice-cream"}},
            {id:5, name:"Напитки",icon: {src:"./drinks.svg", alt:"drinks"}},
            {id:6, name:"Корзина",icon: {src:"./cart.svg",alt:"cart"}},
    ];
    }
}

export default serviceCategories;