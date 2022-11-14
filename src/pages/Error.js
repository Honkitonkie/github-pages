import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getData = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&limit=1";

const Home = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  useEffect(() => {
    fetch(getData)
      .then((res) => res.json())
      .then((json) => {
        const num = getRandomInt(10);
        const temp = json[num].excerpt.rendered;
        const author = json[num].title.rendered;
        let quote = temp.substring(3, temp.length - 5);
        setQuote(quote);
        setAuthor(author);
      });
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className='text-center font-write text-semibold max-w-sm mx-auto mt-12'>
      <h1 className='text-2xl'>404 - Ohw dear..</h1>
      <p>
        There is no page here... Feel free to browse somewhere else and take this random quote with you as consolation.
        <br />
        <br />
      </p>
      <div className='text-bold text-4xl mt-12'>
        "<p className='text-grey-400 text-bold text-2xl -mt-6' dangerouslySetInnerHTML={{ __html: quote }}></p>"
      </div>

      <p className='text-grey-400 cursive text-xl'>- {author}</p>
      <Link
        to={{
          pathname: "/exercises",
          search: "?sort=404",
        }}
      >
        <button className={"w-full text-xl font-medium text-linkedin underline flex justify-center shadow-lg bg-grey-100 hover:bg-grey-900 hover:text-white rounded-lg mt-2 p-3 pt-1 pb-2"}>
          Check exercises
        </button>
      </Link>
    </div>
  );
};

export default Home;
