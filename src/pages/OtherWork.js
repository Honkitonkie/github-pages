import { Link } from "react-router-dom";
import drop from "../images/drop.jpg";

const links = [
  {
    name: "Automatin",
    href: "https://automatin.nl/",
    description: "A SAAS website/app that I created from scratch.",
    image: "https://source.unsplash.com/50x50/?networking",
    current: false,
    external: true,
  },
  {
    name: "Patientje",
    href: "https://www.patientje.nl/",
    description: "A simple landing page using Bootstrap with a P5.js animation",
    image: "https://source.unsplash.com/50x50/?patient",
    current: false,
    external: true,
  },
  {
    name: "Flag party",
    href: "https://www.patientje.nl/projecten/sketches/vlaggenfeest/",
    description: "A simple sketch using p5.js and SVG's ",
    image: "https://source.unsplash.com/50x50/?flags",
    current: false,
    external: true,
  },
  {
    name: "Wordseeker",
    href: "https://www.patientje.nl/projecten/sketches/woordzoeker/",
    description: "Like puzzles? Look no further and check out this wordseeker.",
    image: "https://source.unsplash.com/50x50/?flags",
    current: false,
    external: true,
  },
  {
    name: "Some random rectangles",
    href: "https://www.patientje.nl/projecten/sketches/randomRectangles/",
    description: "Be there or be square.",
    image: "https://source.unsplash.com/50x50/?rectangles",
    current: false,
    external: true,
  },
  {
    name: "The Christmas card project",
    href: "https://www.patientje.nl/projecten/sketches/letItSnow/",
    description: "Some christmas cheer with p5.js.",
    image: "https://source.unsplash.com/50x50/?christmas",
    current: false,
    external: true,
  },
  {
    name: "Double down",
    href: "https://www.patientje.nl/projecten/sketches/roulette/",
    description: "A visual representation about how effective doubling up can be after each loss in Roulette",
    image: "https://source.unsplash.com/50x50/?roullette",
    current: false,
    external: true,
  },
  {
    name: "Drops",
    href: "https://www.patientje.nl/projecten/sketches/nano-drizzle/",
    description: "Creates a drop effect for every realtime Nano transaction.",
    image: drop,
    current: false,
    external: true,
  },
  {
    name: "Evennaar",
    href: "https://www.patientje.nl/evennaar/",
    description: "A landing page with a CSS animation.",
    image: "https://source.unsplash.com/50x50/?travel",
    current: false,
    external: true,
  },
  {
    name: "Eettopia",
    href: "https://www.patientje.nl/eettopia/",
    description: "A bootstrap landingpage. Based on a food concept",
    image: "https://source.unsplash.com/50x50/?food",
    current: false,
    external: true,
  },
  {
    name: "Rain game",
    href: "https://www.patientje.nl/raingame/public/",
    description: "A simple game made with P5.js where you must avoid the rain.",
    image: drop,
    current: false,
    external: true,
  },
  {
    name: "Three words a day",
    href: "https://www.patientje.nl/wvdd/",
    description: "Where will you work on today? Three random words and some matching quotes.",
    image: "https://source.unsplash.com/50x50/?inpiration",
    current: false,
    external: true,
  },
  {
    name: "Simple landing page explaining my ambitions (in Dutch)",
    href: "https://www.patientje.nl/meerinfo.html",
    description: "The way to get started is to quit talking and start doing. - Walt Disney",
    image: "https://source.unsplash.com/50x50/?disney",
    current: false,
    external: true,
  },
];

const OtherWork = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-grey-100 lg:text-grey-900 py-4 leading-3 text-2xl font-semibold'>Some other things I'v worked on.</h1>
      <ul className='flex flex-col md:flex-row md:flex-wrap gap-4 md:flex-row justify-center mt-5'>
        {links.map((item, index) => (
          <li key={item.name} className='flex-none max-w-xs'>
            <div className='py-4 px-8 bg-grey-100 shadow-lg rounded-lg'>
              <div className='flex justify-center'>
                <img className='w-10 h-10 object-cover rounded-full border-2 border-grey-400' src={item.image} alt={item.name}></img>
              </div>
              <div>
                <h2 className='text-gray-600 text-2xl font-semibold'>{item.name}</h2>
                <p className='mt-2 text-gray-600'>{item.description}</p>
                {!item.external && (
                  <Link to={item.href} className={"text-xl font-medium text-linkedin underline flex justify-center shadow-lg bg-grey-100 hover:bg-grey-900 hover:text-white rounded-lg mt-2 pt-1 pb-2"}>
                    Check
                  </Link>
                )}
                {item.external && (
                  <a href={item.href} className={"text-xl font-medium text-linkedin underline flex justify-center shadow-lg bg-grey-100 hover:bg-grey-900 hover:text-white rounded-lg mt-2 pt-1 pb-2"}>
                    Check
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherWork;
