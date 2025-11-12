import DarkModeButton from "./DarkModeButton";
import { ILabel } from "../../types/label";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

function Sidebar({
  onLabelClick,
  onAddLabelClick,
}: {
  onLabelClick: (d: ILabel) => void;
  onAddLabelClick: () => void;
}) {
  const [labels, setLabels] = useState<ILabel[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/labels")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ILabel[]) => {
        setLabels(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="Sidebar">
      <DarkModeButton />
      <h3>Labels</h3>
      <button onClick={() => onAddLabelClick()}>
        <FaPlus size={30}/>
      </button>
      
      <ul>
        {labels.map((val) => (
          <li
            key={val.id}
            className="row"
            onClick={() => onLabelClick(val)}
          >
            <div>{val.name}</div>
          </li>
        ))}
      </ul>

      <h3>Projects</h3>
      <ul>
        {labels.map((val) => (
          <li 
          key={val.id} 
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
