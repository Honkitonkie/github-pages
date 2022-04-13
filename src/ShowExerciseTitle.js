function ShowExerciseTitle() {
  const pathname = window.location.pathname;
  let currentTitle;
  if (pathname.startsWith("/exercises/")) {
    let currentPath = pathname.substring(11, pathname.length);
    currentTitle = capitalize(currentPath);
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return <h1 className='text-2xl text-center font-semibold mt-4 md:mt-8 mb-2'>{currentTitle}</h1>;
}

export default ShowExerciseTitle;
