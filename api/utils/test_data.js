import Client from "../models/client.js";
import Product from "../models/product.js";

const flowers = [
    {
        "name": "Подарочная корзина \"Цитрусовый аромат\"",
        "descr": "ветка натурального нобилиса - 1 шт., корзинка средняя - 1 шт., новогодний шар - 5 шт., мандарин - 11 шт., пленка прозрачная - 1 шт. ",
        "price": 2590,
        "img": "https://www.buket-piter.ru//thumb/I6FTowgk4WOn4Zxk-uA6GQ/285r285/203678/%D0%9A%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B0_%D1%81_%D0%B8%D0%B3%D1%80%D1%83%D1%88%D0%BA%D0%B0%D0%BC%D0%B8_%D0%B8_%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%2B.jpg"
    },
    {
        "name": "Композиция из цветов \"СНЕГОВИК\"",
        "descr": "композиция \"снеговик\"",
        "price": 14900,
        "img": "https://www.buket-piter.ru//thumb/kQ5H22egynasp5-W_z_r9w/285r285/203678/%D0%A1%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D0%BA_%D0%B8%D0%B7_%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2-1.jpg"
    },
    {
        "name": "Букет с Хлопком и Шишками \"В Серебре\"",
        "descr": "шишка новогодняя - 7 шт., хлопок - 7 шт., шишка новогодняя серебро - 7 шт., ветка ели - 3 шт., упаковка - 1 шт., атласная лента (бесплатно) ",
        "price": 3490,
        "img": "https://www.buket-piter.ru//thumb/bflWM-lAX8T9JQ0BlGQ5pg/285r285/203678/%D0%91%D1%83%D0%BA%D0%B5%D1%82_%D1%81_%D1%88%D0%B8%D1%88%D0%BA%D0%B0%D0%BC%D0%B8_%D0%B8_%D1%85%D0%BB%D0%BE%D0%BF%D0%BA%D0%BE%D0%BC_%D0%B2_%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%B5%2B.jpg"
    },
    {
        "name": "Торт из киндер шоколада",
        "descr": "торт из киндер шоколада - 1 шт., (kinder chocolate 20 пластинок, raffaello 5шт., ritter sport 1шт.)",
        "price": 2650,
        "img": "https://www.buket-piter.ru//thumb/VnU3F8zjv296dcPe76Yfnw/285r285/203678/%D1%82%D0%BE%D1%80%D1%82_%D0%B8%D0%B7_%D0%BA%D0%B8%D0%BD%D0%B4%D0%B5%D1%80_%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%D0%B0.jpg"
    },
    {
        "name": "Ветка натурального нобилиса",
        "descr": "ветка нобилиса (натур.) - 1 шт.",
        "price": 570,
        "img": "https://www.buket-piter.ru//thumb/UXMvbGgFBY17nnN7YyE_xw/285r285/203678/%D0%B2%D0%B5%D1%82%D0%BA%D0%B0_%D0%BD%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8%D1%81%D0%B0.jpg"
    },
    {
        "name": "Ель",
        "descr": "диаметр 9 см",
        "price": 650,
        "img": "https://www.buket-piter.ru//thumb/IVtlvJ_qK75Pfoce3pUTRQ/285r285/203678/%D0%B5%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_30%D1%81%D0%BC%2B.jpg"
    },
    {
        "name": "Кипарисовик Элвуди D9 H25",
        "descr": "кипарисовик элвуди d9 h25",
        "price": 650,
        "img": "https://www.buket-piter.ru//thumb/dChKldZf2d4NSMKNI6QKZw/285r285/203678/%D0%9A%D0%B8%D0%BF%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B8%D0%BA_%D0%AD%D0%BB%D0%B2%D1%83%D0%B4%D0%B8%2B.jpg"
    },
    {
        "name": "Пуансеттия \"Рождественская звезда\"",
        "descr": "пуансеттия d12 - рождественская звезда, символ нового года и рождества",
        "price": 650,
        "img": "https://www.buket-piter.ru//thumb/KlPYD1Ge6oPbf0l9-Boqjg/285r285/203678/%D0%9F%D1%83%D0%B0%D0%BD%D1%81%D0%B5%D1%82%D1%82%D0%B8%D1%8F%2B.jpg"
    },
    {
        "name": "Кипарисовик Элвуди с Декором D9 H28",
        "descr": "кипарисовик элвуди с декором d9 h28",
        "price": 690,
        "img": "https://www.buket-piter.ru//thumb/Nx0DQ5C6z1oi63K9ov9H2Q/285r285/203678/%D0%9A%D0%B8%D0%BF%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B8%D0%BA_%D1%81_%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8.jpg"
    },
    {
        "name": "Венок из Нобилиса D30",
        "descr": "венок из нобилиса d30 - 1 шт.",
        "price": 1750,
        "img": "https://www.buket-piter.ru//thumb/lZAFYLZk3IBNllJE5Pfe7g/285r285/203678/%D0%92%D0%B5%D0%BD%D0%BE%D0%BA_%D0%B8%D0%B7_%D0%BD%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8%D1%81%D0%B0_D30%2B.jpg"
    },
    {
        "name": "Зимний букет из Нобилиса и Мандаринов",
        "descr": "ветка натурального нобилиса - 1 шт.шишка новогодняя - 5 шт.мандарин - 11 шт.орех грецкий в скорлупе декор - 5 шт.крафт бумага - 1 шт.бечевка - 1 шт.",
        "price": 2280,
        "img": "https://www.buket-piter.ru//thumb/zRmGDOUYW9c7v7N5Oac5Hg/285r285/203678/9dc51fab-86c7-4e93-a84b-682ca9505953%2B.jpg"
    },
    {
        "name": "Корзинка Поздравительная",
        "descr": "шар елочный - 3 шт., нобелис - 1 шт., корзинка - 1 шт., мандарин - 9 шт., шоколадный дед мороз - 1 шт.",
        "price": 2490,
        "img": "https://www.buket-piter.ru//thumb/5RLD8mm7t9_FUcd9C8c4rg/285r285/203678/%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B0_%D1%81_%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%2B.jpg"
    },
    {
        "name": "Букет с Мандаринами в Крафте",
        "descr": "шишки - 5 шт., мандарины - 11 шт., ель нобиллис 0,5 - 2 шт, орех - 5 шт., упаковка - 1 шт., лента - 1 шт.",
        "price": 2490,
        "img": "https://www.buket-piter.ru//thumb/WqY03O9POzAjiyfVMRJXsA/285r285/203678/%D0%B1%D1%83%D0%BA%D0%B5%D1%82_%D1%81_%D0%BD%D0%BE%D0%B1%D0%B5%D0%BB%D0%B8%D1%81%D0%BE%D0%BC%2B.jpg"
    },
    {
        "name": "Яркий букет из Нобилиса, Мандаринов и...",
        "descr": "ветка натурального нобилиса - 1 шт.мандарин - 7 шт.тишью (лист) - 2 шт.новогодний шар - 7 шт.декор - 1 шт.шишка новогодняя - 5 шт.матовая упаковка lux - 1 шт.атласная лента (бесплатно) - 1 шт.",
        "price": 2750,
        "img": "https://www.buket-piter.ru//thumb/K--qhNLCW_iGilu2ljweuA/285r285/203678/dd261ee1-a211-4fc4-bf33-0bb1ef306f52%2B.jpg"
    },
    {
        "name": "Новогодняя Композиция из Нобилиса и Елочных...",
        "descr": "ветка натурального нобилиса - 1 шт.шишка новогодняя - 5 шт.новогодний шар - 11 шт.крафт бумага - 1 шт.оазис кирпич - 1 шт.корилус - 1 шт.",
        "price": 2780,
        "img": "https://www.buket-piter.ru//thumb/bIHH4FAilwubeA6DNadyVw/285r285/203678/b6131125-19cd-4cc0-bc62-68213f6b0c5b%2B%2B.jpg"
    },
    {
        "name": "Подарочная корзина \"САЛЮТ\"",
        "descr": "корзина - 1 шт., ель нобилис - 1 шт., мандарин - 3 шт., яблоко красное - 3 шт., шар елочный (цвет \"красный\") - 1 шт., конфеты ",
        "price": 2890,
        "img": "https://www.buket-piter.ru//thumb/krvL7R2QCpB6P5gp23jFBw/285r285/203678/3_%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD%D0%B0_%D1%84%D0%B5%D1%80%D1%80%D0%B5%D1%80%D0%BE_%D1%88%D0%B0%D1%80_%D0%B4%D0%B0%D0%B2%2B%2B2.jpg"
    },
    {
        "name": "Новогодний букет из Нобилиса с Корицей",
        "descr": "корица палочки - 21 шт.шар елочный маленький - 7 шт.ветка натурального нобилиса - 2 шт.долька апельсина декоративная - 5 шт.матовая упаковка lux - 1 шт.атласная лента (бесплатно) - 1 шт.",
        "price": 2890,
        "img": "https://www.buket-piter.ru//thumb/sOkzlRrszSqRJ85ZemkYUA/285r285/203678/4b8913c0-5976-4a62-bf3d-ab57bf89b2d9%2B%2B.jpg"
    },
    {
        "name": "Новогодний букет из Нобилиса, Конфет и...",
        "descr": "ветка натурального нобилиса - 1 шт.шишка новогодняя - 10 шт.новогодний шар - 4 шт.тишью (лист) - 2 шт.матовая упаковка lux - 1 шт.конфеты поштучно \"ferrero rocher\" ферреро small 200гр. - 1 шт.",
        "price": 2990,
        "img": "https://www.buket-piter.ru//thumb/cwdZ1Zy_tcA4-gFEzSLXaA/285r285/203678/6a083c55-b694-4aa1-a3fe-eb2ee3d006ed%2B%2B.jpg"
    },
    {
        "name": "Яркий зимний букет из Нобилиса и Илекса",
        "descr": "ветка натурального нобилиса - 1 шт.шишка новогодняя - 3 шт.новогодний шар - 4 шт.илекс - 1 шт.декор - 3 шт.крафт бумага - 1 шт.атласная лента (бесплатно) - 1 шт.",
        "price": 3050,
        "img": "https://www.buket-piter.ru//thumb/apAyONghV_x-bmHhtzmjNQ/285r285/203678/0fd56b8c-d2d8-4914-b369-0629136ad87b%2B.jpg"
    },
    {
        "name": "Деревянный ящик с Раффаэлло и Новогодними...",
        "descr": "деревянный ящик - 1 шт.конфеты raffaello 150гр - 1 шт.шар елочный lux - 3 шт.корица палочки - 2 шт.долька апельсина декоративная - 2 шт.ветка натурального нобилиса - 1 шт.",
        "price": 3110,
        "img": "https://www.buket-piter.ru//thumb/fy6eJvzv8K3_QXmaN1S7tQ/285r285/203678/%D0%AF%D1%89%D0%B8%D0%BA_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81_%D0%A0%D0%B0%D1%84%D1%84%D0%B0%D1%8D%D0%BB%D0%BB%D0%BE_%D0%B8_%D0%B5%D0%BB%D0%BA%D0%BE%D0%B9%2B.jpg"
    },
    {
        "name": "Композиция с Конфетами Ferrero и Нобилисом",
        "descr": "ветка натурального нобилиса - 1 шт.новогодний шар - 5 шт.шишка новогодняя - 5 шт.конфеты поштучно \"ferrero rocher\" ферреро small 200гр. - 1 шт.декор - 2 шт.оазис кирпич - 1 шт.крафт бумага - 1 шт.бечевка - 1 шт.",
        "price": 3470,
        "img": "https://www.buket-piter.ru//thumb/1iL3hJ89yf_JKwxj2hq5Dg/285r285/203678/06f8000e-0a2b-498c-b1c5-41feaa08b10c%2B.jpg"
    },
    {
        "name": "Новогодняя Композиция со Свечой в Деревянном...",
        "descr": "илекс - 1 шт.корица палочки - 12 шт.свеча большая в ассорт. декор - 1 шт.тишью (лист) - 1 шт.деревянный ящик - 1 шт.ветка натурального нобилиса - 1 шт.шишка новогодняя - 5 шт.шар елочный маленький - 4 шт.новогодний шар - 3 шт.",
        "price": 3550,
        "img": "https://www.buket-piter.ru//thumb/L9LgrQ6XhirP2TLWZhT3yw/285r285/203678/9d191a3c-bfe4-4abb-880d-70b7923f9e3a%2B.jpg"
    },
    {
        "name": "Подарочная корзина \"С НОВЫМ ГОДОМ!\"",
        "descr": "корзина - 1 шт., ель нобилис - 1 шт., мандарин - 3 шт., шар елочный (цвет \"золото\") - 1 шт., ferrero rocher 200гр. - 1 шт. ",
        "price": 3750,
        "img": "https://www.buket-piter.ru//thumb/WsdAZBPYzXm335IjCg5eKQ/285r285/203678/3_%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD%D0%B0_%D1%84%D0%B5%D1%80%D1%80%D0%B5%D1%80%D0%BE_%D1%88%D0%B0%D1%80_%D0%B4%D0%B0%D0%B2%2B%2B.jpg"
    },
    {
        "name": "Елочка из Нобилиса с Украшениями",
        "descr": "шар елочный маленький - 9 шт.ветка натурального нобилиса - 2 шт.атласная лента (бесплатно) - 1 шт.новогодний шар - 14 шт.шляпная коробка - 1 шт.оазис кирпич - 2 шт.",
        "price": 3790,
        "img": "https://www.buket-piter.ru//thumb/C9QBOd6b18lpzoQ24wWzfg/285r285/203678/WhatsApp_Image_2023-12-13_at_03.18.34%2B%2B2.jpg"
    },
    {
        "name": "Яркие Желтые Розы с Шишками",
        "descr": "роза желтая - 7 шт.новогодний шар - 5 шт.декор - 1 шт.шишка новогодняя - 5 шт.еловая ветка - 2 шт.упаковка сетка - 1 шт.атласная лента (бесплатно) - 1 шт.",
        "price": 3975,
        "img": "https://www.buket-piter.ru//thumb/7TfLJAjHl_XuzuhvJMY3iA/285r285/203678/%D0%91%D1%83%D0%BA%D0%B5%D1%82_%D1%81_%D1%88%D0%B8%D1%88%D0%BA%D0%B0%D0%BC%D0%B8_%D0%B8_%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%BC%D0%B8_%D0%A0%D0%BE%D0%B7%D0%B0%D0%BC%D0%B8%2B.jpg"
    },
    {
        "name": "Корзиночка \"Вкусная\"",
        "descr": "мандарины - 2 кг., виноград - 1 кг., декор - 1 шт., хлопок - 2 шт., ель нобелис 0,5 - 1 шт., корзина - 1 шт.",
        "price": 3990,
        "img": "https://www.buket-piter.ru//thumb/0MlBLkijz6XvAZ99Sejlng/285r285/203678/%D0%9A%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BE%D1%87%D0%BA%D0%B0_%D0%B2%D0%BA%D1%83%D1%81%D0%BD%D0%B0%D1%8F%2B.jpg"
    },
    {
        "name": "Корзиночка с Новогодними Сладостями",
        "descr": "m&m's 130 гр. - 2 шт., fruit tella 41 гр. - 1 шт., мандарины - 1 кг., драже skittles 38 гр. - 2 шт., драже mentos 37 гр. - 1 шт. ",
        "price": 3990,
        "img": "https://www.buket-piter.ru//thumb/iKJV0QlKXG9nfV25wCzWQQ/285r285/203678/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BE%D0%B4%D0%BD%D1%8F%D1%8F_%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%D1%8F_%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B0%2B.jpg"
    },
    {
        "name": "Новогодний венок с Синими Украшениями",
        "descr": "нобилис, новогодний декор, каркас",
        "price": 3990,
        "img": "https://www.buket-piter.ru//thumb/9zSPmMVuXZRrkDJ3j2vKYQ/285r285/203678/%D1%81%D0%B8%D0%BD%D0%B8%D0%B9_%D0%B2%D0%B5%D0%BD%D0%BE%D0%BA.jpg"
    },
    {
        "name": "Новогодний венок с Красными Украшениями",
        "descr": "ветка натурального нобилиса - 3 шт., новогодний шар - 7 шт., шишка новогодняя - 13 шт., декор - 2 шт., каркас - 1 шт., атласная лента ",
        "price": 3990,
        "img": "https://www.buket-piter.ru//thumb/wYkybqhxaX5VAWj2XLeRow/285r285/203678/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%B2%D0%B5%D0%BD%D0%BE%D0%BA.jpg"
    },
    {
        "name": "Зимний букет из Нобилиса, Диантусов и...",
        "descr": "ваксфлауэр (хамелациум) - 2 шт.гвоздика белая - 3 шт.фисташка - 2 шт.ветка натурального нобилиса - 1 шт.новогодний шар - 7 шт.декор - 2 шт.шишка новогодняя - 5 шт.матовая упаковка lux - 1 шт.крафт бумага - 1 шт.атласная лента (бесплатно) - 1 шт.",
        "price": 4090,
        "img": "https://www.buket-piter.ru//thumb/TPs-k5F2XDoLILBog7DucQ/285r285/203678/351393ca-0ef4-449f-84a6-599b079fb81b%2B.jpg"
    },
    {
        "name": "Новогодняя Елочка с Украшениями \"Заснеженная\"",
        "descr": "кашпо пластиковое - 1 шт., гипсофила - 15 шт., оазис (пиафлор), шар елочный мал. - 20 шт., новогодний декор - 1 шт.",
        "price": 4490,
        "img": "https://www.buket-piter.ru//thumb/faFgyy2_imFrc0jR3MA8JQ/285r285/203678/%D0%B5%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_%D0%B2_%D1%81%D0%BD%D0%B5%D0%B3%D1%83.jpg"
    },
    {
        "name": "Елочка с Украшениями",
        "descr": "кашпо декоративное -1 шт., оазис 0,5 - 2 шт., ель нобилис 0,5 - 4 шт., шары елочные - 8 шт.",
        "price": 4750,
        "img": "https://www.buket-piter.ru//thumb/57gKYSQf4Fpj56XPNG91pA/285r285/203678/%D0%95%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%8F_%D1%81_%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%2B.jpg"
    }
];

async function create_flowers() {
    flowers.forEach(async (f) => {
        const flower = await Product.findOne({where: {name: f.name}});
        if (!flower) {
            await Product.create({
                name: f.name,
                description: f.descr,
                price: f.price,
                img_url: f.img
            })
        }
    })
}

async function createTestUser() {
    const user = await Client.findOne({where: {login: 'gasg@mail.com'}});
    if (user) return;
    await Client.create({
        login: 'gasg@mail.com',
        password: '1234',
        cash: 1000
    });
}

async function createTestUser2() {
    const user = await Client.findOne({where: {login: 'test1@mail.com'}});
    if (user) return;
    await Client.create({
        login: 'test1@mail.com',
        password: '1234',
        cash: 100
    });
}

export default {
    create_flowers,
    createTestUser,
    createTestUser2
};