import { useState } from "react";
import { ILabel } from "../types/label";

const useLabel = (): {
    showLabel: boolean;
    dataLabel: ILabel | null;
    showAddLabel: boolean;
    openLabel: (data: ILabel) => void;
    closeLabel: () => void;
    createLabel: any;
    openAddLabel: () => void;
} => {
    const [showLabel, setShowLabel] = useState(false);
    const [dataLabel, setdataLabel] = useState<ILabel | null>(null);
    const [showAddLabel, setShowAddLabel] = useState(false);
 
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
        closeLabel();
    };

    const closeLabel = () => {
    setShowLabel(false);
    setShowAddLabel(false);
    };
    
    return { showLabel, dataLabel, showAddLabel, openLabel, closeLabel, createLabel, openAddLabel };
}

export default useLabel;