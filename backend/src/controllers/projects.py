import os
import uuid
from fastapi import HTTPException
from typing import List
from ..models.project import ProjectDB, Project
from sqlalchemy.orm import Session

def get_all_projects(db: Session) -> List[Project]:
    projects = db.query(ProjectDB).all()
    return projects

def get_one_project(id: str, db: Session) -> Project:
    try:
        uuid_id = uuid.UUID(id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    project = db.query(ProjectDB).filter(ProjectDB.id == uuid_id).first()
    
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return project

def create_new_project(name: str, description: str, db: Session) -> Project:
    db_project = ProjectDB(name=name, description=description)
    
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    
    # Convert to Pydantic model for response
    project = Project(
        id=str(db_project.id),
        name=db_project.name,
        description=db_project.description
    )
    
    return project

def update_project(project: Project, db: Session) -> Project:
    try:
        uuid_id = uuid.UUID(project.id)
        
        db_project = db.query(ProjectDB).filter(ProjectDB.id == uuid_id).first()
        
        if not db_project:
            raise HTTPException(status_code=404, detail="Project not found")
        
        db_project.name = project.name
        db_project.description = project.description
        
        db.commit()
        db.refresh(db_project)
        
        return Project(
            id=str(db_project.id),
            name=db_project.name,
            description=db_project.description
        )
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")

        
def delete_project(id: str, db: Session) -> dict:
    try:
        uuid_id = uuid.UUID(id)
        
        db_project = db.query(ProjectDB).filter(ProjectDB.id == uuid_id).first()
        
        if not db_project:
            raise HTTPException(status_code=404, detail="Project not found")
        
        db.delete(db_project)
        db.commit()
        
        return {"message": f"Project {id} deleted successfully"}
        
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid ID format")