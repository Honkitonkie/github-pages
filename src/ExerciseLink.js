
import { Link } from "react-router-dom";

function ExerciseLink() {
  return (
    <div className='flex justify-center pt-2 pb-10 content-center align-center align-center'>
      <Link
        to='/exercises'
        className={"px-5 text-xl font-medium text-linkedin underline flex justify-center bg-grey-600 shadow-lg border-grey-600 hover:ring-grey-100 hover:bg-grey-900 hover:text-white rounded-lg mt-2 pt-1 pb-2"}
      >
        &lt;&lt; Back to exercises
      </Link>
    </div>
  );
}

export default ExerciseLink;
