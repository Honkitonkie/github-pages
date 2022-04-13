import {useState, useEffect} from 'react'

// const getData = "https://api.fisenko.net/v1/quotes/en?query=%22error%22&limit=5&offset=0";
// const getData = "https://jsonplaceholder.typicode.com/users")
// const getData = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"

const getData = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&limit=1";

const Home = () => {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()
  useEffect(() => {
    fetch(getData)
      .then((res) => res.json())
      .then((json) => {
        let num = getRandomInt(10)
        let temp = json[num].excerpt.rendered;
        let author = json[num].title.rendered;
        temp = temp.substring(3, temp.length - 5);
        setQuote(temp);
        setAuthor(author);
      })
  },[]);

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
        <p className='text-grey-400 text-bold text-2xl mt-12'>"{quote}"</p>
        <p className='text-grey-400 cursive text-xl'>- {author}</p>
    </div>
  );
};

export default Home;
