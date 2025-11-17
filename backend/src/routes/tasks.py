from fastapi import APIRouter, Depends
from ..models.task import Task
from ..controllers.tasks import get_all_tasks, get_one_task, create_new_task, update_task, delete_task, get_column_tasks
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(tags=["tasks"])

@router.get("/tasks")
async def get_all(db: Session = Depends(get_db)):
    return get_all_tasks(db)

@router.get("/tasks/{id}")
async def get_one(id: str, db: Session = Depends(get_db)):
    return get_one_task(id, db)

@router.post("/tasks")
async def create(name: str, description: str, column_id: str, position: int, db: Session = Depends(get_db)):
    return create_new_task(name, description, column_id, position, db)

@router.put("/tasks/{id}")
async def update(task: Task, db: Session = Depends(get_db)):
    return update_task(task,db)

@router.delete("/tasks/{id}")
async def delete(id: str, db: Session = Depends(get_db)):
    return delete_task(id, db)

@router.get("/tasks/column/{column_id}")
async def get_by_column(column_id: str, db: Session = Depends(get_db)):
    return get_column_tasks(column_id, db)