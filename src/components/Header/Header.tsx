import ManageTeamButton from "./ManageTeamButton";
import SearchBar from "./SearchBar";

function Header() {
    return (
       <div className="Header">
         <h1 className="title" > Zilla </h1>
         <SearchBar></SearchBar>
         <ManageTeamButton></ManageTeamButton>
      </div>
    );
  }

  export default Header;