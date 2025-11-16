import uuid
from fastapi import HTTPException
from typing import List
from ..models.tasklabel import TaskLabelDB, TaskLabel
from sqlalchemy.orm import Session

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

def get_labels_for_task(task_id: str, db: Session) -> List[str]:
    # This would return label IDs for a task
    # You might want to join with Label table to get label names
    task_uuid = uuid.UUID(task_id)
    
    tasklabels = db.query(TaskLabelDB).filter(TaskLabelDB.task_id == task_uuid).all()
    return [str(tl.label_id) for tl in tasklabels]