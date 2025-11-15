import json
import os
import uuid
from fastapi import HTTPException
from typing import List
from ..models.label import LabelDB, Label
from sqlalchemy.orm import Session

def get_all_labels(db: Session) -> List[Label]:
    labels = db.query(LabelDB).all()
    return labels

def get_one_label(id: str, db: Session) -> Label:
    try:
        uuid_id = uuid.UUID(id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    label = db.query(LabelDB).filter(LabelDB.id == uuid_id).first()
    
    if not label:
        raise HTTPException(status_code=404, detail="Label not found")
    
    return label

def create_new_label(name: str, description: str, db: Session) -> Label:
    db_label = LabelDB(name=name, description=description)
    
    db.add(db_label)
    db.commit()
    db.refresh(db_label)
    
    # Convert to Pydantic model for response
    label = Label(
        id=str(db_label.id),
        name=db_label.name,
        description=db_label.description
    )
    
    return label

def update_label(label: Label, db: Session) -> Label:
    try:
        uuid_id = uuid.UUID(label.id)
        
        db_label = db.query(LabelDB).filter(LabelDB.id == uuid_id).first()
        
        if not db_label:
            raise HTTPException(status_code=404, detail="Label not found")
        
        db_label.name = label.name
        db_label.description = label.description
        
        db.commit()
        db.refresh(db_label)
        
        return Label(
            id=str(db_label.id),
            name=db_label.name,
            description=db_label.description
        )
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")

        
def delete_label(id: str, db: Session) -> dict:
    try:
        uuid_id = uuid.UUID(id)
        
        db_label = db.query(LabelDB).filter(LabelDB.id == uuid_id).first()
        
        if not db_label:
            raise HTTPException(status_code=404, detail="Label not found")
        
        db.delete(db_label)
        db.commit()
        
        return {"message": f"Label {id} deleted successfully"}
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")