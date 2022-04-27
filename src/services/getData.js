const data = [
{
    id: 1,
    image:
    "https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL.__AC_SY300_SX300_QL70_ML2_.jpg",
    title: "Ryzen 5900x",
    description: "este es el primer producto",
    category: "Procesadores",
    price: "73000",
    Promoprice: "70000",
    stock: "4",
},
{
    id: 2,
    image: "https://i.blogs.es/588c7d/amd6/original.jpeg",
    title: "Ryzen 5800x",
    description: "este es el segundo producto",
    category: "Procesadores",
    price: "58000",
    Promoprice: "55000",
    stock: "10",
},
{
    id: 3,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_884972-MLA40182457265_122019-O.jpg",
    title: "Ryzen 2200G",
    description: "este es el tercero producto",
    category: "Procesadores",
    price: "22000",
    Promoprice: "20000",
    stock: "5",
},
{
    id: 4,
    image:
    "https://app.contabilium.com/files/explorer/20302/Productos-Servicios/concepto-4886285.jpg",
    title: "Radeon 6800XT",
    description: "este es el cuarto producto",
    category: "Placas-de-video",
    price: "280000",
    Promoprice: "",
    stock: "3",
},
{
    id: 5,
    image: "https://m.media-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg",
    title: "Radeon 6900XT",
    description: "este es el quinto producto",
    category: "Placas-de-video",
    price: "305000",
    Promoprice: "",
    stock: "15",
},
{
    id: 6,
    image:
    "https://s3-sa-east-1.amazonaws.com/saasargentina/0q6tMtEfaFFScGS5Wuhn/imagen",
    title: "RTX 3080",
    description: "este es el sexto producto",
    category: "Placas-de-video",
    price: "320000",
    Promoprice: "310000",
    stock: "1",
},
{
    id: 7,
    image:
    "https://http2.mlstatic.com/D_NQ_NP_963530-MLA46418767025_062021-O.jpg",
    title: "RTX 3070",
    description: "este es el séptimo producto",
    category: "Placas-de-video",
    price: "200000",
    Promoprice: "190000",
    stock: "3",
},
{
    id: 8,
    image:
    "https://s3-sa-east-1.amazonaws.com/peluffo/39b42091-a487-4a90-9628-15868cb7a18d.jpg",
    title: "Teclado Generico",
    description: "este es el octavo producto",
    category: "perifericos",
    price: "2000",
    Promoprice: "1900",
    stock: "4",
},
{
    id: 9,
    image:
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/296609-teclado-mecanico-historia-tipos-que-deberias-usarlo.jpg",
    title: "Teclado Mecanico",
    description: "este es el noveno producto",
    category: "perifericos",
    price: "6800",
    Promoprice: "6650",
    stock: "4",
},
{
    id: 10,
    image:
    "https://snpi.dell.com/snp/images/products/mlrg/es-pe~570-AALK/570-AALKr1.jpg",
    description: "este es el décimo producto",
    category: "perifericos",
    price: "3800",
    Promoprice: "3600",
    stock: "4",
},
];

const getData = new Promise((resolve) => {
setTimeout(() => {
    resolve(data);
}, 2000);
});
export {getData};


