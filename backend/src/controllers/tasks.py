import os
import uuid
from fastapi import HTTPException
from typing import List
from ..models.task import TaskDB, Task
from sqlalchemy.orm import Session

def get_all_tasks(db: Session) -> List[Task]:
    tasks = db.query(TaskDB).all()
    return tasks

def get_one_task(id: str, db: Session) -> Task:
    try:
        uuid_id = uuid.UUID(id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    task = db.query(TaskDB).filter(TaskDB.id == uuid_id).first()
    
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    return task

def create_new_task(name: str, description: str,column_id: str, position: int, db: Session) -> Task:
    db_task = TaskDB(name=name, description=description, column_id=column_id, position=position)
    
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    
    # Convert to Pydantic model for response
    task = Task(
        id=str(db_task.id),
        name=db_task.name,
        description=db_task.description,
        column_id=str(db_task.column_id),
        position=db_task.position
    )
    
    return task

def update_task(task: Task, db: Session) -> Task:
    try:
        uuid_id = uuid.UUID(task.id)
        
        db_task = db.query(TaskDB).filter(TaskDB.id == uuid_id).first()
        
        if not db_task:
            raise HTTPException(status_code=404, detail="Task not found")
        
        db_task.name = task.name
        db_task.description = task.description
        db_task.column_id = task.column_id
        db_task.position = task.position
        
        db.commit()
        db.refresh(db_task)
        
        return Task(
            id=str(db_task.id),
            name=db_task.name,
            description=db_task.description,
            column_id=str(db_task.column_id),
            position=db_task.position
        )
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")

        
def delete_task(id: str, db: Session) -> dict:
    try:
        uuid_id = uuid.UUID(id)
        
        db_task = db.query(TaskDB).filter(TaskDB.id == uuid_id).first()
        
        if not db_task:
            raise HTTPException(status_code=404, detail="Task not found")
        
        db.delete(db_task)
        db.commit()
        
        return {"message": f"Task {id} deleted successfully"}
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")