from fastapi import APIRouter, Depends
from ..models.project import Project
from ..controllers.projects import get_all_projects, get_one_project, create_new_project, update_project, delete_project
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(tags=["projects"])

@router.get("/projects")
async def get_all(db: Session = Depends(get_db)):
    return get_all_projects(db)

@router.get("/projects/{id}")
async def get_one(id: str, db: Session = Depends(get_db)):
    return get_one_project(id, db)

@router.post("/projects")
async def create(name: str, description: str, db: Session = Depends(get_db)):
    return create_new_project(name, description, db)

@router.put("/projects/{id}")
async def update(project: Project, db: Session = Depends(get_db)):
    return update_project(project,db)

@router.delete("/projects/{id}")
async def delete(id: str, db: Session = Depends(get_db)):
    return delete_project(id, db)