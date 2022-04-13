
const About = () => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  const writeDate = `${month[d.getMonth()]} ${d.getDate() + 1}, ${d.getFullYear()}`;
  return (
    <div className='flex justify-center font-write mt-12 sm:mt-14 xl:mt-8'>
      <div className='flex-col'>
        <div className='text-left mt-0 font-extralight flex flex-col'>
          <p>{writeDate}</p>
          <p>To whomever it may concern.</p>
          <p>Subject: "About"</p>
        </div>
        <div className='max-w-xs md:max-w-sm flex flex-col gap-3 lg:gap-6 text-xs md:text-base'>
          <h1 className='flex text-2xl font-normal mt-4 md:mt-8 mb-2'>Dear Mr, Ms &#123;Surname&#125;,</h1>
          <p>Some time ago. I graduated and worked as a marketeer.</p>
          <p>I woke up, went to work and got home. for days, weeks, months, and months turned to years. Even while this left me unfulfilled.</p>
          <p>I figured I'd do something about it and started searching for more, learning more, developing more.. This sparked my enthousiasm in coding and I've been developing ever since.</p>
          <p>
            Today I mainly create awesome projects such as this, and would love to be considered for your next project.
              <br />
            </p>
            <p>  
          Thank you for taking an interest. I look forward to hearing from you,
            <br />
          </p>
          <p>
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
