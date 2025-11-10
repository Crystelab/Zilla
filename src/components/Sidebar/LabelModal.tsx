import { ILabel } from "../../types/label";


type Props = {
  closeBtn: () => void;
  data: ILabel;
};

function LabelModal(props: Props) {
  const { closeBtn, data } = props;

  return (
    <div>
      <div className="pop-up" style={{backgroundColor: data.colour}}>
        <span onClick={closeBtn}>
          &times;
        </span>
        <h3></h3>
        <div>
          <div>
            <label>Id : {data.id}</label>
          </div>
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

  export default LabelModal;