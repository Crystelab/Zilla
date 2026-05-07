import { useState } from "react";


type Props = {
  closeBtn: () => void;
  newLabel: any;
};

function AddLabel(props: Props) {
  const { closeBtn, newLabel } = props;

  const [name, setName] = useState("");
  const [colour, setColour] = useState("");

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const colourHandler = (e: any) => {
    setColour(e.target.value);
  };

  const submitBtnHandler = (e: any) => {
    e.preventDefault();
    newLabel(name, colour);
  };


  return (
    <div>
      <div className="pop-up">
        <span onClick={closeBtn}>
          &times;
        </span>
       <form onSubmit={submitBtnHandler}>
            <div>
            <label>Name : </label>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={nameHandler}
            />
            </div>
            <div>
            <label>Colour Add : </label>
            <input
                type="text"
                placeholder="Colour"
                value={colour}
                onChange={colourHandler}
            />
            </div>
            <div>
            <input
                type="submit"
                value="Add Label"
            ></input>
            </div>
      </form>
      </div>
    </div>
  );
};

  export default AddLabel;