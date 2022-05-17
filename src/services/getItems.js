import { ItemCounter } from "../components/atoms/Item/Counter";
import { collection, getDocs, getFirestore, query, where, limit, doc, getDoc, orderBy  } from 'firebase/firestore'

const data = [
    {
        id: 1,
        image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        title: "Bulbasaur N.º001",
        description: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
        descriptionLong: "Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Squirtle y Charmander (excepto en Pokémon Amarillo). Destaca por ser el primer Pokémon de la Pokédex Nacional y la en la Pokédex de Kanto.Bulbasaur es un Pokémon cuadrúpedo de color verde y manchas más oscuras de formas geométricas. Su cabeza representa cerca de un tercio de su cuerpo. En su frente se ubican tres manchas que pueden cambiar dependiendo del ejemplar. Tiene orejas pequeñas y puntiagudas. Sus ojos son grandes y de color rojo. Las patas son cortas con tres garras cada una. Este Pokémon tiene plantado un bulbo en el lomo desde que nace. Esta semilla crece y se desarrolla a lo largo del ciclo de vida de Bulbasaur a medida que suceden sus evoluciones. El bulbo absorbe y almacena la energía solar que Bulbasaur necesita para crecer. Dicen que cuanta más luz consuma la semilla, más olor producirá cuando se abra. Por otro lado, gracias a los nutrientes que el bulbo almacena, puede pasar varios días sin comer.El bulbo de Bulbasaur le ayuda a defenderse de los enemigos y desde él puede disparar ataques tales como rayo solar y drenadoras entre otros.No es muy raro encontrarlo en jardines y zonas cercanas a fuentes de agua. También suele encontrarse en zonas boscosas profundas. Se los puede atraer con el aroma de las flores. Bulbasaur es omnívoro, aunque si no encuentra comida, su bulbo absorbe la energía del sol para hacer la fotosíntesis y le permite pasar días sin comer. Dicen que en las mañanas su bulbo se abre y atrapa al primer Pokémon que caiga por su irresistible olor.",
        etimology:"Su nombre proviene de las palabras en inglés bulb (bulbo) y saur, traducción al inglés de la palabra griega saûros (reptil o lagarto).Su nombre japonés, Fushigidane, proviene de 不思議種 fushigidane (semilla extraña) y de un juego de palabras con 不思議だね fushigi da ne (¿es extraño, verdad?).Su nombre francés, Bulbizarre, procede de las palabras francesas bulbe (bulbo) y bizarre (extraño).Su nombre alemán, Bisasam, procede de las palabras alemanas Bi (dos), Saurier (dinosaurio) y Samen (semilla).Su nombre coreano, 이상해씨 (Isanghaessi), procede de 이상해 isanghada (extraño) y 씨 ssi (semilla).",
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
        descriptionLong: "Ivysaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es la evolución de Bulbasaur, uno de los Pokémon iniciales de Kanto.Ivysaur posee un color azulado más vivo que su preevolución Bulbasaur. Además, sus ojos adquieren un leve tono violeta y sus pupilas se vuelven negras. El bulbo que había en la espalda de Bulbasaur se convirte en una flor, la cual aún permanece cerrada. Esta flor es usada por Ivysaur de la misma forma que Bulbasaur empleaba su bulbo para la mayoría de sus ataques. La flor crece con la exposición directa al sol, forzando a Ivysaur a caminar a todas horas para conseguir que la luz sea absorbida plenamente. Inversamente a la función del bulbo de Bulbasaur que lo nutría, ahora parece que la flor toma la energía de Ivysaur. De la flor emana un suave y agradable aroma, que con frecuencia atrae a personas y a otros Pokémon.Tiene como costumbre exponerse por largo tiempo al sol para que la flor en su lomo comience a desarrollarse. Esta flor necesita constantemente absorber energía y nutrientes para fortalecerse y prepararse para su última etapa evolutiva. Para soportar su peso y su tronco, sus patas crecen muy fuertes. Si pasa un tiempo bajo la luz solar, es una señal de que muy pronto su brote será una gran flor.El hábitat natural de este Pokémon es la pradera, aunque también viven en llanuras con fuentes de agua dulce expuestas al sol y algunos en bosques soleados, debido a que necesitan estar expuestos casi constantemente a la luz.",
        etimology:"Su nombre proviene de las palabras en inglés ivy (hiedra) y saur, traducción al inglés de la palabra griega saûros (reptil o lagarto).Su nombre japonés, Fushigisou, procede de 不思議 草 fushigi sou (hierba extraña). Además, es un juego de palabras al igual que Bulbasaur. En este caso significa parece extraño.Su nombre francés, Herbizarre, proviene de las palabras francesas herbe (hierba) y bizarre (raro o extraño).",
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
        descriptionLong: "Venusaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es la evolución de Ivysaur y, a partir de la sexta generación, puede megaevolucionar en Mega-Venusaur.El capullo de su lomo se abre completamente, dejando ver una enorme flor rosada y unas hojas semejantes a las de palmera o las de la Rafflesia arnoldii, que se nutre de la luz solar por fotosíntesis, aunque también absorbe energía del propio Pokémon. A través de ella, Venusaur realiza uno de sus ataques más potentes: rayo solar. Esta planta segrega una savia muy dulce que atrae a muchos Pokémon bicho. Venusaur tiene la habilidad de liberar un    aroma dulce que puede tranquilizar a los demás Pokémon. También tiene la capacidad de atraer a muchos Pokémon del bosque. Los Venusaur son muy longevos y cuando alcanzan una larga edad, el aroma que sale de su flor es tan potente que puede hacer florecer los bosques y hacer retoñar a los árboles secos.Se dice que esta habilidad la usan para darle inicio a la primavera. Además, es capaz de manipular objetos con gran precisión gracias a las cepas que salen de su cuerpo. Como se vio en el EP051 puede desplegar un gran número de cepas de su lomo, a diferencia de sus preevoluciones que solo pueden sacar una de cada lado de su cuerpo. La gran flor que tiene sobre su espalda va tomando colores intensos si está llena de nutrientes y luz solar. El aroma de la flor tranquiliza las emociones de la gente. Venusaur se asemeja a sus preevoluciones, salvo por su mayor tamaño y peso. A pesar de esto es un Pokémon bastante rápido. También resalta la diferenciación por su color azul más oscuro y por su aspecto más feroz. Venusaur posee unas patas robustas para aguantar el peso de su flor.Venusaur es un Pokémon bastante inteligente y dócil, pero si hay algún humano cerca puede tornarse bastante territorial. Venusaur es capaz de posarse sobre dos patas por un corto tiempo. Se cree que es para poder alcanzar los frutos de los árboles más altos. Se pasa el día caminando en busca de comida, insectos y hierba fresca.",
        etimology:"Su nombre es una combinación de las palabras Venus (una flor parecida a la planta que le crece desde su etapa como Bulbasaur) y saur, que viene del griego saurus, que quiere decir reptil o lagarto y es el equivalente a la terminación -saurio en los nombres de muchos dinosaurios. Así, Venusaur podría traducirse como Venusaurio.Su nombre japonés, Fushigibana, proviene de 不思議花 (significa flor extraña). Mantiene como Ivysaur y Bulbasaur la referencia a lo extraños que pueden resultar, ya que son los primeros Pokémon de la Pokédex Nacional.Su nombre francés, Florizarre, proviene de las palabras fleur (flor) y bizarre (extraño), influenciado por el nombre japonés.",
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
        descriptionLong:"Charmander es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Bulbasaur y Squirtle, excepto en Pokémon Amarillo y Pokémon: Let's Go, Pikachu! y Pokémon: Let's Go, Eevee!.Charmander es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola con la punta envuelta en llamas. Charmander, como sus evoluciones Charmeleon y Charizard, tiene una pequeña llama en la punta de su cola. La intensidad con la que esta arde es un indicador del estado físico y emocional de este Pokémon. Cuando la intensidad de la llama está baja, su salud puede estar en riesgo. Cuando arde con normalidad, Charmander está saludable y alegre. Cuando la llama de su cola arde con más intensidad, es porque está enfadado, y si la llama de su cola se vuelve azul es porque encontró un rival fuerte y digno de él. Si la llama desaparece o se apaga, moriría.Charmander no muere necesariamente si cae al agua, pero permanecer en ella por más de unos minutos puede ser fatal. En la lluvia no le pasan grandes cambios ni se debilita, pero las gotas de agua que caen en él provocan vapor y poco a poco van apagando su llama.Los ejemplares de Charmander son escasos en el hábitat salvaje. Los pocos que quedan eligen preferentemente lugares cálidos para vivir, como las cercanías de volcanes. El hábitat de Charmander es la montaña. Vive en lugares rocosos y aledaños a lugares muy calurosos, pero cabe destacar que no vive en zonas de gran altura. También viven en montañas escarpadas, en manadas junto con Charmeleon y Charizard. Su dieta es la dieta omnívora habitual de un Pokémon. Suelen cazar y recolectar en pequeños grupos, y llama a los demás si encuentran cualquier tipo de alimento.",
        etimology:"Su nombre es una contracción de las palabras en inglés charcoal (carbón) y salamander (salamandra).Su nombre japonés, Hitokage, proviene de 火蜥蜴 (salamandra de fuego), siendo 火 hi 'fuego' y 蜥蜴 tokage 'lagarto'.Su nombre francés, Salameche, proviene de las palabras en francés salamandre (salamandra) y mèche (mecha)",
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
        descriptionLong:"Charmeleon es un Pokémon de tipo fuego introducido en la primera generación. Es la evolución de Charmander, uno de los Pokémon iniciales de los entrenadores que comienzan su aventura en la región de Kanto.Charmeleon es un gran lagarto bípedo que posee como característica general una llama en la punta de su cola al igual que Charmander y Charizard. Esta refleja el estado físico y emocional del Pokémon y si la llama se extingue, también lo hace la vida del mismo. El color de su piel es más oscuro que el de Charmander y el de Charizard, y también lo es su llama. Charmeleon, es un Pokémon orgulloso que destroza a sus enemigos usando sus afiladas garras y su cola sin piedad alguna. Si se encuentra con un Pokémon fuerte en su camino se torna agresivo. En ese estado de excitación, la llama de la punta de su cola arde con más fervor. Cuando Charmeleon se encuentra en peligro durante el combate, el fuego de su cola crece, proporcionándole más fuerza. Al evolucionar, se convierte en un Pokémon testarudo y difícil de controlar, pues al sentirse más fuerte creerá que puede hacer todo sin ayuda, es fácil que desobedezca a los entrenadores novatos. El hábitat de este Pokémon es la montaña, vive, al igual que Charmander, en zonas rocosas, pero este prefiere habitar en montañas cercanas a volcanes.",
        etimology:"Su nombre es una contracción de las palabras inglesas char (carbonizar, quemar) y chameleon (camaleón).Su nombre japonés, lizardo, es simplemente la escritura en katakana de la palabra lizard (lagarto en inglés).Su nombre francés, reptincel, proviene de las palabras reptil (reptil) y étincelle (chispa).",
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
        descriptionLong:"Charizard es un Pokémon de tipo fuego/volador, introducido en la primera generación. Es la evolución de Charmeleon y, a partir de la sexta generación, puede megaevolucionar en Mega-Charizard X o en Mega-Charizard Y. En la Octava generación puede realizar Gigamax y transformarse en Charizard Gigamax.La mayoría de los Charizard viven en el Valle Charirrífico. Es conocido que les gusta vivir en lugares altos y calientes, por lo que se encuentran en muchas ocasiones cerca de volcanes.Es muy presuntuoso, violento, agresivo y muy orgulloso. Es tanto así, que no es capaz de pelear contra un Pokémon más débil que él. Es por esta sencilla razón que prefiere luchar contra oponentes que le representen un desafío. Hasta que no derrote a su adversario no parará. Si entra en estado de furia, su llama se multiplicará por diez, de modo que puede ser capaz de derretir cualquier cosa con su potente lanzallamas. El color de la llama de su cola cambia según sea su estado anímico, teniendo un tono rojo al estar tranquilo, y tornándose azul y más caliente al enfurecerse.La figura de Charizard es la de un dragón erguido sobre sus dos patas traseras, que sostienen su peso. Posee unas poderosas alas y un abrasador aliento de fuego. También posee un predominante cuello y una poderosa cola terminada en una llama que arde con más fuerza si ha vivido duras batallas. Su sangre es muy caliente y la mantiene constante a pesar de ser un reptil; debido al fuego de su cola. Se dice que si su temperatura descendiera por lo menos 2 grados centígrados, la función de los eritrocitos de almacenar hemoglobina sería imposible. Es por esa razón que mantiene una llama ardiente en la punta de la cola, si esta disminuye o se apaga el Pokémon puede morir.Charizard es considerado uno de los Pokémon más fuertes (aunque sus estadísticas no sean de las más altas), pudiendo llegar a ganar a Pokémon legendarios, como se ve en el EP413, en el que el Charizard de Ash gana al Articuno de Sabino. También se le ha visto hacer frente a Pokémon enormemente fuertes, como Dragonite, saliendo victorioso.",
        etimology:"Su nombre es una contracción de las palabras en inglés char (carbonizar, quemar, incinerar) y lizard (lagarto).Su nombre en japonés, Lizardon, es una combinación de lizard (lagarto en inglés) y don, un sufijo que se utiliza comúnmente en dinosaurios y significa diente.Su nombre francés, Dracaufeu, proviene de las palabras draco (dragón) y feu (fuego, en francés).",
        category: "Fuego",
        price: "235",
        Promoprice: "190",
        stock: "1",
    },
    {
        id: 7,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        title: "Squirtle N.º007",
        description: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
        descriptionLong:"Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Bulbasaur y Charmander, excepto en Pokémon Amarillo.Squirtle es una de las especies más difíciles de encontrar. Habita tanto aguas dulces como marinas, preferiblemente zonas bastante profundas. Son pequeñas tortugas color celeste con caparazones color café; o rojas en algunos casos, con una cola enrollada que los distingue. Poco después de nacer, sus caparazones se endurecen y se hacen más resistentes a los ataques; muchos objetos rebotarán en ella.La forma redonda de su caparazón y las figuras en su superficie hacen que Squirtle tenga una muy buena forma hidrodinámica, lo que le da mayor velocidad al nadar. Cuando se siente atacado, Squirtle esconde completamente su cuerpo en el interior de su caparazón, lo que hace que resulte imposible atacarle, además cuando esta dentro de su caparazón puede atacar escupiendo agua por todos los agujeros del caparazón. Es capaz de escupir agua por su boca con gran fuerza, ya sea para atacar o intimidar.Squirtle es relativamente fácil de criar gracias a su destacado carácter alegre y simpático, aunque su relativa lentitud en tierra firme y la dificultad para equilibrar sus ataques acuáticos con ataques de otros tipos pueden crear algunos problemas al entrenador. Squirtle normalmente come algas, pero también le gustan otros alimentos como la fruta. En tierra firme, a Squirtle le puede resultar un poco más difícil andar, pero le resulta mas fácil ir a cuatro patas.El hábitat de Squirtle es el agua dulce: este Pokémon habita en lugares como estanques, ríos y lagos. También puede vivir en mares. Se encuentran en islas junto con sus evoluciones.",
        etimology:"Su nombre proviene de las palabras en inglés squirt (disparar un chorro de agua) y turtle (tortuga).Su nombre en japonés es Zenigame, es simplemente la palabra japonesa para tortuga de estanque, 銭亀.Su nombre francés, Carapuce, proviene de las palabras carapace (caparazón) y puce (pulga, en referencia a su tamaño). Puce también puede ser un término cariñoso, por su apariencia tierna y dulce.",
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
        descriptionLong:"Wartortle es una tortuga de color azul índigo, con una pomposa cola, orejas con forma de aleta, y un caparazón de color café oscuro.Es un Pokémon más agresivo que Squirtle. Se oculta en el agua al cazar, y emerge para sorprender a su presa. A veces sale del agua para conseguir frutas dulces.Es un Pokémon fuerte que a veces tiene arañazos en su caparazón, que sirve como recordatorio de batallas pasadas. Para mantener el balance mientras nada a altas velocidades, Wartortle mueve sus orejas y su cola. Ésta, cubierta de un suave pelaje, es tan larga que un pedazo de ella sobresale cuando Wartortle se oculta en su caparazón. Usa su pelaje para almacenar aire y poder bucear por más tiempo.Es una mascota popular, y tiene un tiempo de vida alto. Wartortle, y en particular su cola, es considerado un símbolo de la longevidad. Se dice que la cola de Wartortle es de muy buena suerte para su entrenador, lo que lleva a algunos cazadores a buscarlo por su cola. A medida que envejece, pueden crecer algas en su caparazón, y el color de su cola se oscurece. Se dice que este Pokémon puede vivir por más de 10.000 años.",
        etimology:"Su nombre proviene de las palabras en inglés war (guerra) y turtle (tortuga).Su nombre japonés el nombre proviene de kame (tortuga) y probablemente de evil (cruel en inglés) o de えル (conseguir o mejorar) haciendo relación a que se hace más fuerte.Su nombre francés, Carabaffe, viene de carapace (caparazón) y Baffe (bofetada).",
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
        descriptionLong:"Blastoise es una enorme tortuga bípeda, que puede extender unos poderosos cañones situados en su espalda para disparar potentes chorros de agua, con la fuerza suficiente para quebrar muros de cemento o metales delgados. Pueden disparar balas de agua con suficiente precisión para golpear latas a 50 metros de distancia. Pese a ello, son incapaces de apuntar a objetivos demasiado cercanos. Pueden arrojar la cantidad de agua suficiente como para llenar 3 piscinas olímpicas en un minuto, razón por la que muchos equipos de bomberos poseen varios Blastoise, pues con las enormes cantidades de agua que pueden disparar cualquier incendio puede ser extinguido fácilmente. Para mantener la fuerza de su disparo, Blastoise se afirma del suelo con todo su peso, que cultiva para ese propósito. La ferocidad de su ataque ha sido catalogada como 'brutal', e incluso sus ataques normales, como placaje o golpe cuerpo son devastadores, incluso teniendo en cuenta que el Pokémon es muy rápido y ágil para su enorme tamaño y peso. Cuando se siente amenazado, se esconde en su caparazón para protegerse.Blastoise es un Pokémon muy fuerte, y sin importar cómo, sacrificaría su vida para salvar a su entrenador. Se le conoce como la torreta marina, ya que, si es amenazado, sacará sus cañones y disparará agua sin salir de su caparazón. Los potentes chorros que lanza Blastoise por sus cañones pueden romper el acero y si llegan a dar a algún otro Pokémon podría resultar fatal. Gracias a su potencia un Blastoise entrenado desde que era Squirtle puede llegar a ser un Pokémon muy leal y ganarse un buen puesto en tu equipo.",
        etimology:"Su nombre es una combinación de las palabras en inglés blast (explosión o ráfaga) y tortoise (tortuga terrestre).Su nombre japonés, Kamex, proviene de 亀 kame (tortuga) y posiblemente de マックス makkusu o max (máximo).Su nombre francés, Tortank, proviene de las palabras tortue (tortuga) y tank (tanque).",
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
        descriptionLong:"Caterpie podría estar basado en la oruga de la mariposa Papilio canadensis. Tiene pequeños pies con ventosas en sus extremos que le permiten trepar árboles y paredes sin mayor esfuerzo. Es un Pokémon bastante extendido, sobre todo por la zona de Kanto. Caterpie es un Pokémon relativamente débil, y como tal ha desarrollado adaptaciones para su supervivencia.Su característica más notable son sus brillantes antenas color rojo sobre su cabeza. Estas, junto con sus grandes ojos, ayudan a ahuyentar depredadores. Este Pokémon es capaz de producir una sustancia que desprende un hedor de su antena. Comparte muchas características físicas con Wurmple y Weedle, teniendo además, una línea evolutiva muy similar.Además su cuerpo termina en un signo de exclamación, el cual es completado por los círculos amarillos que tiene a los costados.Las ventosas de sus patas le permiten escalar cualquier tipo de superficie e incluso caminar por los techos. Además es capaz de emitir una terrible peste a través de sus antenas cuando se siente amenazado.Los Caterpie crecen muy rápidamente, por lo que come vorazmente para llenar sus reservas de energía. Una vez hayan finalizado su etapa como larva, él mismo se enredará en su propia saliva solidificada, entrando a una nueva etapa. A pesar de ser un Pokémon idóneo para principiantes, muchos los repelen, por el hecho de ser un Pokémon tipo bicho.Caterpie es un Pokémon pacífico y no demasiado fuerte, habitualmente no se ve implicado en enfrentamientos con otros Pokémon de su hábitat. Puede encontrarse en bosques poblados de numerosos árboles donde hace sus nidos. Siempre se le ve junto a un grupo de Caterpie o acompañado de otro Pokémon insecto, rara vez se encuentra solo.Ya que Caterpie está basado en una oruga, puede lanzar una gran cantidad de fina y resistente seda por su boca. Al evolucionar, este llena su cuerpo de seda la cual rápidamente se endurece hasta el punto de formar una dura coraza, con la cual este Pokémon entra a su estado de pupa. De apetito voraz, se pasa el día comiendo hojas frescas con el fin de reunir la suficiente energía para evolucionar. Una vez que ha comido lo suficiente se envuelve en un capullo de seda que se transforma en una coraza, Metapod.",
        etimology:"Su nombre deriva del inglés caterpillar (oruga, animal con el que comparte algunos rasgos).Su nombre francés, Chenipan, proviene de las palabras chenille (oruga) y pan (trepar, probablemente por su hábito de trepar a los árboles y vivir allí en sus copas).",
        category: "Bicho",
        price: "99",
        Promoprice: "87",
        stock: "4",
    },
];


// const getItems = (category) => {
//     return new Promise((resolve,reject) => {
//             let items = data;
//             if(category){
//                 items = data.filter(item => item.category.toLowerCase().indexOf(category.toLowerCase()) > -1)
//             }
//             resolve(items);
//     })
// }

// const getItemStock = async (itemId) => {
//     // return new Promise((resolve,reject) => {
//     //     resolve(data.find( (item) => item.id === parseInt(itemId)).stock  );
//     // })
//     // let stock = await getItemDetail(itemId).then((response)=> response.stock);
//     // console.log('getItemStock' , stock);
//     //return  await 100;//getItemDetail(itemId).then((response)=> response.stock);

//     let item = data.find( (item) => item.id === parseInt(itemId)) ;
//     console.log(item.stock);
//     return item.stock;
// }




// const getItemDetail = (itemId) => {
//     return new Promise((resolve,reject) => {
//         resolve(data.find( (item) => item.id === parseInt(itemId))    );
//     })
// }






function getItems(category){

    // const db = firebase.firestore();
    // let query = db.collection('items')
    //     .orderBy('orden', 'asc');


    console.log('category' , category)

    const dataFireBase = getFirestore();
    let itemsCollection = collection(dataFireBase,'items')
    itemsCollection = query(itemsCollection,
        orderBy("orden", "asc")
    )
    const q =category && query(
        // collection(dataFireBase,'items'),
        itemsCollection,
        where('category', '==', category)
    )
    
    
    return getDocs(q || itemsCollection)

}

const getItemStock = async (itemId) => {
    // return new Promise((resolve,reject) => {
    //     resolve(data.find( (item) => item.id === parseInt(itemId)).stock  );
    // })
    // let stock = await getItemDetail(itemId).then((response)=> response.stock);
    // console.log('getItemStock' , stock);
    //return  await 100;//getItemDetail(itemId).then((response)=> response.stock);

    let item = data.find( (item) => item.id === parseInt(itemId)) ;
    console.log(item.stock);
    return item.stock;
}

const getItemDetail = (itemId) => {
    const dataFireBase = getFirestore();
    const itemRef = doc(dataFireBase,'items',itemId);
    // console.log('getDoc',(itemRef))
    return getDoc(itemRef);

}

// const getItemDetail = (itemId) => {
//     return new Promise((resolve,reject) => {
//         resolve(data.find( (item) => item.id === parseInt(itemId))    );
//     })
// }
export { getItems, getItemDetail, getItemStock };
