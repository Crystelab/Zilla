import { useState } from "react";
import { FaCog } from "react-icons/fa";

function ProjectSettingsButton() {

  const handleClick = () => {
  };

  return (
    <button onClick={handleClick}>
      <FaCog size={30}/>
    </button>
  );
}

export default ProjectSettingsButton;