import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        name="name"
        type="text"
        value={input.name}
        onChange={handleChange}
        placeholder="Name"
        className="AddToList-input"
      />
      <input
        name="age"
        type="number"
        value={input.age}
        onChange={handleChange}
        placeholder="Age"
        className="AddToList-input"
      />
      <input
        name="img"
        type="text"
        value={input.img}
        onChange={handleChange}
        placeholder="Image URL"
        className="AddToList-input"
      />
      <textarea
        name="note"
        value={input.note}
        onChange={handleChange}
        placeholder="Note"
        className="AddToList-input"
      />
      <button type="submit" className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
