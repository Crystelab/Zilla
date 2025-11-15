import os
import uuid
from fastapi import HTTPException
from typing import List
from ..models.column import ColumnDB, Column
from sqlalchemy.orm import Session

def get_all_columns(db: Session) -> List[Column]:
    columns = db.query(ColumnDB).all()
    return columns

def get_one_column(id: str, db: Session) -> Column:
    try:
        uuid_id = uuid.UUID(id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    column = db.query(ColumnDB).filter(ColumnDB.id == uuid_id).first()
    
    if not column:
        raise HTTPException(status_code=404, detail="Column not found")
    
    return column

def create_new_column(name: str, project_id: str, position: int, db: Session) -> Column:
    db_column = ColumnDB(name=name, project_id=project_id, position=position)
    
    db.add(db_column)
    db.commit()
    db.refresh(db_column)
    
    # Convert to Pydantic model for response
    column = Column(
        id=str(db_column.id),
        name=db_column.name,
        project_id=str(db_column.project_id),
        position=db_column.position
    )
    
    return column

def update_column(column: Column, db: Session) -> Column:
    try:
        uuid_id = uuid.UUID(column.id)
        
        db_column = db.query(ColumnDB).filter(ColumnDB.id == uuid_id).first()
        
        if not db_column:
            raise HTTPException(status_code=404, detail="Column not found")
        
        db_column.name = column.name
        db_column.project_id = column.project_id
        db_column.position = column.position
        
        db.commit()
        db.refresh(db_column)
        
        return Column(
            id=str(db_column.id),
            name=db_column.name,
            project_id=str(db_column.project_id),
            position=db_column.position
        )
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")

        
def delete_column(id: str, db: Session) -> dict:
    try:
        uuid_id = uuid.UUID(id)
        
        db_column = db.query(ColumnDB).filter(ColumnDB.id == uuid_id).first()
        
        if not db_column:
            raise HTTPException(status_code=404, detail="Column not found")
        
        db.delete(db_column)
        db.commit()
        
        return {"message": f"Column {id} deleted successfully"}
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")