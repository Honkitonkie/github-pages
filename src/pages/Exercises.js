import { Link } from "react-router-dom";
import applicationLetter from "../images/application-letter.jpg";
import drop from "../images/drop.jpg";

const exercises = [
  { name: "Dropdown", href: "dropdown", description: "A dropdown design, srollable and clickable", image: `${drop}`, current: false, external: false },
  { name: "About", href: "/about", description: "A simple application letter fetching the current date", image: `${applicationLetter}`, current: false, external: false },
  {
    name: "404",
    href: "/whatever",
    description: "An error page fetching data from an API concerning errors",
    image: "https://source.unsplash.com/random?auto=format&fit=crop&w=334&q=80",
    current: false,
    external: false,
  },
  {
    name: "Quotes passing by",
    href: "https://629357e7307cc533c4203701--deluxe-rabanadas-209759.netlify.app/",
    description: "Quotes passing you by, like live. made with ant design, an fetch api and some custom css transitions",
    image: "https://source.unsplash.com/50x50/?quotes",
    current: false,
    external: true,
  },
];

const Exercises = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-grey-100 lg:text-grey-900 py-4 leading-3 text-2xl font-semibold'>Some React exercises I've done</h1>
      <ul className='flex flex-col md:flex-row md:flex-wrap gap-4 md:flex-row justify-center mt-5'>
        {exercises.map((item, index) => (
          <li key={item.name} className='flex-none max-w-xs'>
            <div className='py-4 px-8 bg-grey-100 shadow-lg rounded-lg'>
              <div className='flex justify-center'>
                <img className='w-20 h-20 object-cover rounded-full border-2 border-grey-400' src={item.image} alt={item.name}></img>
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

export default Exercises;
