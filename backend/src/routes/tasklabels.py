from fastapi import APIRouter, Depends
from ..models.tasklabel import TaskLabel
from ..controllers.tasklabels import add_label_to_task, remove_label_from_task, get_labels_for_task
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(tags=["tasklabels"])

@router.post("/tasklabels/{task_id}/{label_id}")
async def add_label(task_id: str, label_id: str, db: Session = Depends(get_db)):
    return add_label_to_task(task_id, label_id, db)

@router.delete("/tasklabels/{task_id}/{label_id}")
async def remove_label(task_id: str, label_id: str, db: Session = Depends(get_db)):
    return remove_label_from_task(task_id, label_id, db)

@router.get("/tasklabels/{task_id}")
async def get_task_labels(task_id: str, db: Session = Depends(get_db)):
    return get_labels_for_task(task_id, db)