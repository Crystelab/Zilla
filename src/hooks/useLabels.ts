import { useState } from "react";
import { ILabel } from "../types/label";

const useLabel = (): {
    showLabel: boolean;
    dataLabel: ILabel | null;
    showAddLabel: boolean;
    openLabel: (data: ILabel) => void;
    closeLabel: () => void;
    deleteLabel: (data: ILabel) => void;
    createLabel: any;
    openAddLabel: () => void;
    refetchLabels: boolean;
} => {
    const [showLabel, setShowLabel] = useState(false);
    const [dataLabel, setdataLabel] = useState<ILabel | null>(null);
    const [showAddLabel, setShowAddLabel] = useState(false);
    const [refetchLabels, setrefetchLabels] = useState(false);
 
    const openLabel = (data: ILabel) => {
    setdataLabel(data);
    setShowLabel(true);
    };

    const openAddLabel = () => setShowAddLabel(true);


    const createLabel = async (name: string, colour: string) => {
        const response = await fetch(
            `http://localhost:8000/labels?name=${name}&colour=${colour}`,
            { method: "POST" }
        );
        setrefetchLabels(prev => !prev);
        closeLabel();
    };

    const closeLabel = () => {
        setShowLabel(false);
        setShowAddLabel(false);
    };

    const deleteLabel = async(data: ILabel) =>{
        const response = await fetch(
            `http://localhost:8000/labels/${data.id}`,
            {method: "DELETE"}
        );
        setrefetchLabels(prev => !prev);
        closeLabel();
    }
    
    return { showLabel, dataLabel, showAddLabel, openLabel, closeLabel, deleteLabel, createLabel, openAddLabel, refetchLabels };
}

export default useLabel;