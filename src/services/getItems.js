const data = [
    {
        id: 1,
        image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        title: "Bulbasaur N.º001",
        description: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
        category: "Planta",
        price: "100",
        Promoprice: "95",
        stock: "4",
    },
    {
        id: 2,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        title: "Ivysaur N.º002",
        description: "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
        category: "Planta",
        price: "120",
        Promoprice: "115",
        stock: "10",
    },
    {
        id: 3,
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        title: "Venusaur N.º003",
        description: "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
        category: "Planta",
        price: "130",
        Promoprice: "115",
        stock: "5",
    },
    {
        id: 4,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        title: "Charmander N.º004",
        description: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
        category: "Fuego",
        price: "120",
        Promoprice: "",
        stock: "3",
    },
    {
        id: 5,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        title: "Charmeleon N.º005",
        description: "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
        category: "Fuego",
        price: "123",
        Promoprice: "",
        stock: "15",
    },
    {
        id: 6,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        title: "Charizard N.º006",
        description: "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
        category: "Fuego",
        price: "235",
        Promoprice: "190",
        stock: "1",
    },
    {
        id: 7,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        title: "Squirtle N.º007",
        description: "este es el séptimo producto",
        category: "Agua",
        price: "120",
        Promoprice: "100",
        stock: "3",
    },
    {
        id: 8,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        title: "Wartortle N.º008",
        description: "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón",
        category: "Agua",
        price: "120",
        Promoprice: "90",
        stock: "4",
    },
    {
        id: 9,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        title: "Blastoise N.º009",
        description: "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón",
        category: "Agua",
        price: "68",
        Promoprice: "65",
        stock: "4",
    },
    {
        id: 10,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        title: "Caterpie N.º010",
        description: "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.",
        category: "Bicho",
        price: "99",
        Promoprice: "87",
        stock: "4",
    },
];

const getItems = new Promise((resolve) => {
    setTimeout(() => {
        // console.log('getItems')
        resolve(data);
    },2000);
});


const getItemDetail = (itemId) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // console.log('getItemDetail')
            // console.log('resolve' , resolve)
            // console.log('reject' , reject)
            // console.log('data' , data)
            // console.log('itemId : ' , itemId)
            console.log('getItemDetail item :::: ' , data.find( (item) => item.id ===  parseInt(itemId)))
            resolve(data.find( (item) => item.id === parseInt(itemId))    );

        }, 2000);
    })
};

export { getItems, getItemDetail };

