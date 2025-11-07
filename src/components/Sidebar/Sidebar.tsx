import DarkModeButton from "./DarkModeButton";
import labels from "../../data/label.json"
import projects from "../../data/project.json"

function Sidebar() {
  return (
    <div className="Sidebar">
      <DarkModeButton />
      <h3>Labels</h3>
      <ul>
          {labels.map((val, key) => (
          <li 
          key={key} 
          className="row"
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