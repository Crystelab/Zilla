import { useState } from "react";
import { ILabel } from "../../../types/label";


type Props = {
  closeBtn: () => void;
  modifyLabel: (data: ILabel) => void;
  labelData?: ILabel;
};

function EditLabel(props: Props) {
  const { closeBtn, modifyLabel, labelData } = props;

  const [id, setId] = useState(labelData?.id || ""); 
  const [name, setName] = useState(labelData?.name || "");
  const [colour, setColour] = useState(labelData?.colour || "");

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
    modifyLabel({ id, name, colour });
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
                value="Update Label"
            ></input>
            </div>
      </form>
      </div>
    </div>
  );
};

  export default EditLabel;