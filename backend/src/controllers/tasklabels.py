import uuid
from fastapi import HTTPException
from typing import List
from ..models.tasklabel import TaskLabelDB, TaskLabel
from sqlalchemy.orm import Session
from ..models.label import LabelDB, Label
from sqlalchemy.orm import joinedload

def add_label_to_task(task_id: str, label_id: str, db: Session) -> TaskLabel:
    # Convert strings to UUIDs
    task_uuid = uuid.UUID(task_id)
    label_uuid = uuid.UUID(label_id)
    
    # Create the relationship
    db_tasklabel = TaskLabelDB(task_id=task_uuid, label_id=label_uuid)
    
    db.add(db_tasklabel)
    db.commit()
    
    return TaskLabel(task_id=task_id, label_id=label_id)

def remove_label_from_task(task_id: str, label_id: str, db: Session) -> dict:
    task_uuid = uuid.UUID(task_id)
    label_uuid = uuid.UUID(label_id)
    
    # Find and delete the relationship
    tasklabel = db.query(TaskLabelDB).filter(
        TaskLabelDB.task_id == task_uuid,
        TaskLabelDB.label_id == label_uuid
    ).first()
    
    if not tasklabel:
        raise HTTPException(status_code=404, detail="Label not found on task")
    
    db.delete(tasklabel)
    db.commit()
    
    return {"message": f"Label {label_id} removed from task {task_id}"}

def get_labels_for_task(task_id: str, db: Session) -> List[Label]:
    task_uuid = uuid.UUID(task_id)
    
    # Query with join to get full label objects
    task_labels = db.query(LabelDB).join(
        TaskLabelDB, LabelDB.id == TaskLabelDB.label_id
    ).filter(
        TaskLabelDB.task_id == task_uuid
    ).all()
    
    # Convert to Pydantic models
    return [
        Label(
            id=str(label.id),
            name=label.name,
            colour=label.colour
        )
        for label in task_labels
    ]