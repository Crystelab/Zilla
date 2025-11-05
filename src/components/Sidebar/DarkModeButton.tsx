import { useState } from "react";

function DarkModeButton() {

    const [dark, setDark] = useState('Light');

    const handleClick = () => {
        setDark(dark === 'Light'? 'Dark' : 'Light');
    };

    return (
        <button onClick={handleClick}>{dark}</button>
    );
  }

  export default DarkModeButton;