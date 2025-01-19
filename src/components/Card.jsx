import coffee1 from "../assets/coffee1.jpg"; // Imagen 1
import Marquee from "../Marquee";
import beansIMG from "../assets/beans.png";

const cardsData = [
  {
    id: 1,
    title: "Cursos",
    description: "This is the description for card 1.",
    image:
      "https://acdn.mitiendanube.com/stores/001/139/353/themes/rio/1-slide-1680452515762-1873361727-98ea54284155378f5a48fab66e5abea21680452533-640-0.webp?1060600668",
  },
  {
    id: 2,
    title: "Cafés en granos",
    description: "This is the description for card 2.",
    image:
      "https://acdn.mitiendanube.com/stores/001/139/353/themes/rio/1-slide-1681403894030-5552030412-f001c7a338ad7f6462f838b7ff66879c1681403897-640-0.webp?1060600668",
  },
  {
    id: 3,
    title: "Cafeteras",
    description: "This is the description for card 3.",
    image:
      "https://acdn.mitiendanube.com/stores/001/139/353/themes/rio/1-slide-1680533667960-3567557014-9d906a1d420f876d14bc0eac734d41751680533669-480-0.webp?1060600668",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description for card 4.",
    image:
      "https://acdn.mitiendanube.com/stores/001/139/353/themes/rio/1-slide-1680452515762-8844034343-4f85a646bb7f82e816ba8425b48477851680452537-480-0.webp?1060600668",
  },
];

const CardsGrid = () => {
  return (
    <div id="CardsGrid">
      <Marquee
        texto={
          "Las compras efectuadas luego del martes 32 serán enviadas cuando se nos cante"
        }
      />
      <div className="p-6 bg-white ">
        {/* <h1 className="mb-6 text-2xl font-bold text-center">
          Nuestros servicios
        </h1> */}
        <div className="flex items-center justify-center">
          <img
            src={beansIMG}
            alt=""
            className="w-20 p-2 border border-gray-400 rounded-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden transition-transform transform bg-white border-b rounded-lg hover:scale-105"
            >
              <img src={card.image} alt={card.title} className="w-full " />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-sm text-gray-600">{card.description}</p>
                <button className="px-4 py-2 mt-4 text-white rounded bg-amber-950 hover:bg-amber-900">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
