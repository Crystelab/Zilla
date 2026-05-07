import { useLabelContext } from '../../../contexts/LabelContext';
import { useEffect, useState } from 'react';
import { ILabel } from '../../../types/label';
import { FaPlus } from 'react-icons/fa';

export const LabelList = () => {
  const { openLabel, openAddLabel, refetchLabels } = useLabelContext();
  const [labels, setLabels] = useState<ILabel[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/labels")
      .then(res => res.json())
      .then(setLabels);
  }, [refetchLabels]);

  return (
    <div className="Sidebar">
        <h3>Labels</h3>
        <button onClick={() => openAddLabel()}>
            <FaPlus size={30}/>
        </button>
        <ul>
        {labels.map((val) => (
          <li
            key={val.id}
            className="row"
            onClick={() => openLabel(val)}
          >
            <div>{val.name}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}