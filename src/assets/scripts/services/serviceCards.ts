import { Card } from '../classes';


const cards = new Map([
    [0, [
        { id: 0, title: "Молодёжное комбо", subtitle: "Комбо из трех пицц по суперцене, Пепперони Супер-Томато 30см, Ассорти 30см, Пепперони классика 30см"},
        { id: 1, title: "Один дома", subtitle: "Пицца Пепперони 30 см. на тонком тесте, крылышки барбекю, классическая бутылочка Pepsi 0.5л. и барбекю соус" },
        { id: 2, title: "Останься дома", subtitle: "Новый комбо Останься дома, это две пиццы на тонком тесте - Пепперони 30 см и  Маргарита 30 см" },
        { id: 3, title: "Для семьи", subtitle: "Сочный сет для всей семьи: две пиццы - Фирменная «Ташир» 40 см, Барбекю с халапеньо 30 см и классическая бутылочка Pepsi 1л." },
        { id: 4, title: "Для компании", subtitle: "Сет для веселой компании из двух порций ароматных крылышек барбекю (500 гр) и трех пицц: Пепперони 40 см, Альтоно 30 см и Барбекю с халапеньо 30 см" },
        { id: 5, title: "#Хватитнавсех", subtitle: "Большой сет из пяти пицц 40 см, которого точно хватит на всех: Венеция, Капричоза, Пепперони, Ташир и Четыре Сыра." },
        { id: 6, title: "KIDS", subtitle: "Игрушка супергерой Искра, 6 куриных наггетсов, картофель по-деревенски, сырный соус, апельсиновый сок J7 0.2л" },
    ]],
    [1, [
        { id: 7, title: "Пепперони классика", subtitle: "пепперони, сыр Моцарелла, соус Томатный"},
        { id: 8, title: "Острый цыплёнок Терияки", subtitle: "халапеньо, сыр Моцарелла, перец, куриное филе, лук красный, соус «Барбекю»" },
        { id: 9, title: "Примавера", subtitle: "шампиньоны, брокколи, перец, помидоры, сыр Моцарелла, сыр Брынза, маслины, орегано, соус Томатный" },
        { id: 10, title: "Дижонская", subtitle: "лук жареный, Горчичный соус, сервелат, ветчина, маринованные огурцы, сыр Моцарелла, соус Томатный" },
        { id: 11, title: "Пепперони", subtitle: "пепперони, сыр Моцарелла, соус Томатный" },
        { id: 12, title: "Ташир", subtitle: "ветчина, сервелат, шампиньоны, помидоры, сыр Моцарелла, соус Маджорио" },
        { id: 13, title: "Капричоза", subtitle: "ветчина, шампиньоны, маринованные огурцы, маслины, сыр Моцарелла, соус Томатный, соус Маджорио, орегано" },
        { id: 14, title: "Ассорти", subtitle: "сервелат, шампиньоны, помидоры, сыр Моцарелла, соус Томатный, соус Маджорио, укроп" },
        { id: 15, title: "Пепперони супер-томато", subtitle: "помидоры, пепперони, сыр Моцарелла, соус Томатный" },
        { id: 16, title: "Европа", subtitle: "окорок, ветчина, куриное филе, сервелат, болгарский перец, сыр Моцарелла, соус Томатный, соус Маджорио" },
        { id: 17, title: "Римская", subtitle: "пепперони, окорок, шампиньоны, маслины, помидоры, болгарский перец, сыр Моцарелла, соус Маджорио, орегано" },
        { id: 18, title: "Мясной пир", subtitle: "пепперони, сыр Моцарелла, соус Томатный, ветчина, маслины, сервелат, бекон" },
        { id: 19, title: "Венеция", subtitle: "куриное филе, сыр Моцарелла, соус Томатный, соус Маджорио, укроп" },
        { id: 20, title: "Барбекю с халапеньо", subtitle: "ветчина, бекон, свинина, сыр Моцарелла, халапеньо, соус «Барбекю»" },
        { id: 21, title: "Четыре сыра", subtitle: "сыр Дор Блю, сыр Чеддер, сыр Моцарелла, сыр Пармезан" },
    ]],
    [2, [
        { id: 22, title: "Борщ"},
        { id: 23, title: "Булочка Арбатская"},
        { id: 24, title: "Суп куриный"},
        { id: 25, title: "Греческий", subtitle: "болгарский перец, заправка, красный лук, сыр Фетакса, специи, маслины, огурцы, пекинская капуста, помидоры" },
        { id: 26, title: "Цезарь", subtitle: "пекинская капуста, майонез, курица, сыр Пармезан, сухарики, помидоры, соус «Цезарь»" },
        { id: 27, title: "Ролл-салат со свининой", subtitle: "свинина, пекинская капуста, соус «Барбекю», маринованные огурцы, лаваш, майонез" },
        { id: 28, title: "Ролл-салат Цезарь", subtitle: "куриное филе, помидоры, пекинская капуста, соус, лаваш" },
        { id: 29, title: "Лайт-ролл", subtitle: "ветчина, пекинская капуста, помидоры, соус «Цезарь», яйцо куриное вареное, лаваш" },
    ]],
    [3, [
        { id: 30, title: "Картофель по-деревенски", subtitle:"чеснок, соль, картофель дольками"},
        { id: 31, title: "Крылышки барбекю", subtitle:"Куриные крылышки, маринад"},
        { id: 32, title: "Наггетсы 9 штук"},
        { id: 33, title: "Наггетсы 15 штук"},
        { id: 34, title: "Лейз с солью"},
        { id: 35, title: "Лейз Зелёный лук"},
        { id: 36, title: "Лейз Краб"},
        { id: 37, title: "HEINZ Чесночный соус"},
        { id: 38, title: "HEINZ Томатный соус"},
        { id: 39, title: "HEINZ Сырный соус"},
        { id: 40, title: "HEINZ Кисло-сладкий соус"},
        { id: 41, title: "HEINZ Барбекю соус"},
    ]],
    [4, [
        { id: 42, title: "Маффин с черникой"},
        { id: 43, title: "Маффин шоколадный"},
        { id: 44, title: "Кукис шоколадный"},
        { id: 45, title: "Кукис сливочный"},
        { id: 46, title: "Шоколадный мусс"},
        { id: 47, title: "Клубника со сливками"},
        { id: 48, title: "Торт Тирамису"},
        { id: 49, title: "Торт Кокосовый"},
        { id: 50, title: "Торт Три шоколада"},
        { id: 51, title: "Торт Трюфель"},
    ]],
    [5, [
        { id: 52, title: "Пиво Хайнекен Zero б/алк."},
        { id: 53, title: "Сет Утоли жажду", subtitle:"7UP, Lipton, Aqua Minerale"},
        { id: 54, title: "Pepsi"},
        { id: 55, title: "7UP"},
        { id: 56, title: "Mirinda"},
        { id: 57, title: "Lipton Ice tea"},
        { id: 58, title: "Морс ягодный"},
        { id: 59, title: "Mountain Dew"},
        { id: 60, title: "Сок/нектар J7"},
        { id: 61, title: "Aqua Active"},
        { id: 62, title: "Aqua Minerale"},
        { id: 63, title: "Квас"},
    ]],
]);

let serviceCards = {
    getCardsById: (id: number): Card => {
        const arr = cards.get(id);
        return { id: id, cards: arr ? arr : [] };
    },
}

export default serviceCards;