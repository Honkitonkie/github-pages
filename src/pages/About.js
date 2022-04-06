
const About = () => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  const writeDate = `${month[d.getMonth()]} ${d.getDay() + 1}, ${d.getFullYear()}`;
  return (
    <div className='flex justify-center font-write mt-6'>
      <div className='flex-col'>
        <div className='text-left font-extralight flex flex-col'>
          <p>{writeDate}</p>
          <p>To whomever it may concern.</p>
          <p>Subject: "About"</p>
        </div>
        <div className='md:max-w-md mt-10 flex flex-col gap-4 text-xs md:text-xl'>
          <h1 className='flex text-2xl font-normal mt-6'>Dear Mr, Ms Smith,</h1>
          <p>A long long time ago.... I graduated and started working as a marketeer.</p>
          <p>I woke up, went to work and got home. for days, weeks, months. Months then turned to years, even while this left me unfulfilled.</p>
          <p>I figured I'd do something about this and started seacrhing for more, learning more, developing more.. This sparked my enthousiasm in coding and I've been developing ever since..</p>
          <p>
            The project you see here today is an adjusted basic React application hosted through Github Pages. I connected Google fonts for to make it look like I wrote this myself and it was my first
            creating the pages was educational since it was my first experience with Router 6
          </p>
          <p>
            I'd like to thank Github for the awesome making available Github pages to each and everyone with an account for free and <span className='text-underline'>Ibrahim Ragab</span> for his work
            on how to use Github pages in combination with a React application.
            <br />
            <br />
            Kind regards,
            <br />
            <br />
            Duncan Kooyman
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
