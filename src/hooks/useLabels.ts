import { useState } from "react";
import { ILabel } from "../types/label";

const useLabel = (): {
    showLabel: boolean;
    dataLabel: ILabel | null;
    showAddLabel: boolean;
    openLabel: (data: ILabel) => void;
    closeLabel: () => void;
    handleAddLabel: (data: ILabel) => void;
    openAddLabel: () => void;
} => {
    const [showLabel, setShowLabel] = useState(false);
    const [dataLabel, setdataLabel] = useState<ILabel | null>(null);
    const [showAddLabel, setShowAddLabel] = useState(false);

    const openLabel = (data: ILabel) => {
    setdataLabel(data);
    setShowLabel(true);
    console.log(data.name)
    };

    const openAddLabel = () => setShowAddLabel(true);


    const handleAddLabel = (data: ILabel) => {
    console.log("New label:", data);

    // here you can push it to state, API, etc.
    };
    const closeLabel = () => {
    setShowLabel(false);
    setShowAddLabel(false);
    };
    
    return { showLabel, dataLabel, showAddLabel, openLabel, closeLabel, handleAddLabel, openAddLabel };
}

export default useLabel;