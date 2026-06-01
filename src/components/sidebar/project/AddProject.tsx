import { useState } from "react";


type Props = {
  closeBtn: () => void;
  newProject: any;
};

function AddProject(props: Props) {
  const { closeBtn, newProject } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const descriptionHandler = (e: any) => {
    setDescription(e.target.value);
  };

  const submitBtnHandler = (e: any) => {
    e.preventDefault();
    newProject(name, description);
  };


  return (
    <div>
      <div className="pop-up">
        <span onClick={closeBtn}>
          &times;
        </span>
       <form onSubmit={submitBtnHandler}>
            <div>
            <label>Name : </label>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={nameHandler}
            />
            </div>
            <div>
            <label>Description: </label>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={descriptionHandler}
            />
            </div>
            <div>
            <input
                type="submit"
                value="Add Project"
            ></input>
            </div>
      </form>
      </div>
    </div>
  );
};

  export default AddProject;