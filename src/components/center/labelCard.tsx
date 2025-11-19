import { useEffect, useState } from "react";
import { ILabel } from "../../types/label";

type Props = {
  label: ILabel;
};


function LabelCard(props: Props) {
    const { label } = props;

    return (
        <div className="LabelCard">
            <h4>{label.name}</h4>
        </div>
    );
}

  export default LabelCard;