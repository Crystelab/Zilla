import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function DarkModeButton() {

  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <button onClick={handleClick}>
      {isDark ? <FaSun size={30}/> : <FaMoon size={30}/>}
    </button>
  );
}

export default DarkModeButton;