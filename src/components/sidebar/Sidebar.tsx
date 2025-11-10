import DarkModeButton from "./DarkModeButton";
import labels from "../../data/label.json"
import projects from "../../data/project.json"
import { ILabel } from "../../types/label";
import { FaPlus } from "react-icons/fa";

function Sidebar({
  onLabelClick,
  onAddLabelClick,
}: {
  onLabelClick: (data: ILabel) => void;
  onAddLabelClick: () => void;
}) {

  return (
    <div className="Sidebar">
      <DarkModeButton />
      <h3>Labels</h3>
      <button onClick={() => onAddLabelClick()}>
        <FaPlus size={30}/>
      </button>
      <ul>
          {labels.map((val, key) => (
          <li 
          key={key} 
          className="row"
          onClick={() => onLabelClick(val)}
          >
            <div>{val.name}</div>
          </li>
        ))}
        </ul>
      <h3>Projects</h3>
      <ul>
        {projects.map((val, key) => (
        <li 
        key={key} 
        className="row"
        >
          <div>{val.name}</div>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Sidebar;