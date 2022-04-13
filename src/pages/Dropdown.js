import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import CircleUp from "../images/CircleUp";
import CircleDown from "../images/CircleDown";
import ExerciseLink from "../ExerciseLink";
import ShowExerciseTitle from "../ShowExerciseTitle";
import data from "../animals.json";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => setOpen(!isOpen);
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(data[id]);
    toggleDropdown();
  };
  return (
    <div>
      <ShowExerciseTitle />
      <ExerciseLink />
      <div className='bg-white border-2 border-grey-600 drop-shadow-md w-96 mx-auto rounded-md mt-8'>
        <OutsideClickHandler
          onOutsideClick={() => {
            if (isOpen) toggleDropdown();
          }}
        >
          <div className={`p-4 flex justify-between align-center hover:cursor-pointer text-center ${!selectedItem && "opacity-40"}`} onClick={toggleDropdown} aria-pressed={isOpen}>
            {selectedItem ? items.find((item) => item === selectedItem) : "Choose an animal"}
            {isOpen && <CircleUp className='h-4 w-4' aria-hidden='true' />}
            {!isOpen && <CircleDown className={`${!isOpen && "hidden"} h-4 w-4"`} aria-hidden='true' />}
          </div>
          <ul className={`border-t-4 border-grey-600 ${!isOpen && "hidden"} ${isOpen && "block"} max-h-72 overflow-y-scroll`} aria-hidden={!isOpen}>
            {data.map((item, index) => (
              <li
                key={index}
                className={`p-3 px-4 border border-1 border-grey-600 hover:bg-yellow-100 hover:cursor-pointer ${item === selectedItem && "bg-yellow-400"}`}
                onClick={(e) => handleItemClick(e.target.id)}
                id={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Dropdown;
