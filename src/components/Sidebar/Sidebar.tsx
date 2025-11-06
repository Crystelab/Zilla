import DarkModeButton from "./DarkModeButton";

function Sidebar() {
    return (
       <div>
         <h2 className="title" > Sidebar</h2>
         <DarkModeButton></DarkModeButton>
         <h3>Projects</h3>
         <h3>Labels</h3>
      </div>
    );
  }

  export default Sidebar;