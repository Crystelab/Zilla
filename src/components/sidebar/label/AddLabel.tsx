import { useState } from "react";
import { ILabel } from "../../../types/label";


type Props = {
  closeBtn: () => void;
  submitHandler: (data: ILabel) => void;
};

function AddLabel(props: Props) {
  const { closeBtn, submitHandler } = props;

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [colour, setColour] = useState("");

  const idHandler = (e: any) => {
    setId(e.target.value);
  };

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const colourHandler = (e: any) => {
    setColour(e.target.value);
  };

  const submitBtnHandler = (e: any) => {
    e.preventDefault();
    const data: ILabel = {
      id: id,
      name: name,
      colour: colour,
    };
    submitHandler(data);
  };


  return (
    <div>
      <div className="pop-up">
        <span onClick={closeBtn}>
          &times;
        </span>
       <form onSubmit={submitBtnHandler}>
            <div>
            <label>Id : </label>
            <input
                type="text"
                placeholder="Id"
                value={id}
                onChange={idHandler}
            />
            </div>
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