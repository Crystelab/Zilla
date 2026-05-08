import { ILabel } from "../../../types/label";
import { FaRegTrashCan } from "react-icons/fa6";


type Props = {
  closeBtn: () => void;
  deleteBtn: (data: ILabel) => void;
  data: ILabel;
};

function ViewLabel(props: Props) {
  const { closeBtn, deleteBtn, data } = props;

  return (
    <div>
      <div className="pop-up" style={{backgroundColor: data.colour}}>
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
    </div>
  );
};

  export default ViewLabel;