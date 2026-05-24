import { ILabel } from "../../../types/label";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import EditLabel from "./EditLabel";
import { useState } from "react";


type Props = {
  closeBtn: () => void;
  updateLabel: (data: ILabel) => void;
  deleteBtn: (data: ILabel) => void;
  data: ILabel;
};

function ViewLabel(props: Props) {
  const { closeBtn, updateLabel, deleteBtn, data } = props;
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div>
      <div className="pop-up" style={{backgroundColor: data.colour}}>
        <button onClick={() => setShowEdit(true)}>
           <FaPencil size={30}/>
        </button >
        <button onClick={() => deleteBtn(data)}>
           <FaRegTrashCan size={30}/>
        </button >
        <span onClick={closeBtn}>
          &times;
        </span>
        <div>
          <div>
            <label>Name : {data.name}</label>
          </div>
          <div>
            <label>Colour : {data.colour}</label>
          </div>
        </div>
      </div>
      {showEdit && <EditLabel closeBtn={() => setShowEdit(false)} modifyLabel={updateLabel} labelData={data} />}
    </div>
  );
};

  export default ViewLabel;