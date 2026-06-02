import { useState } from "react";
import { IProject } from "../../types/project";


type Props = {
    closeBtn: () => void;
    modifyProject: (data: IProject) => void;
    project: IProject;
};

function ProjectSettings(props: Props) {
    const { closeBtn, modifyProject, project } = props;

    const [id, setId] = useState(project?.id || ""); 
    const [name, setName] = useState(project?.name || "");
    const [description, setDescription] = useState(project?.description || "");


    const idHandler = (e: any) => {
        setId(e.target.value);
    };
    const nameHandler = (e: any) => {
        setName(e.target.value);
    };

    const descriptionHandler = (e: any) => {
        setDescription(e.target.value);
    };

    const submitBtnHandler = (e: any) => {
        e.preventDefault();
        modifyProject({id, name, description});
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
                    value="Update Project"
                ></input>
                </div>
        </form>
        </div>
        </div>
    );
};

  export default ProjectSettings;