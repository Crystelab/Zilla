from fastapi import APIRouter, Depends
from ..models.column import Column
from ..controllers.columns import get_all_columns, get_one_column, create_new_column, update_column, delete_column
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(tags=["columns"])

@router.get("/columns")
async def get_all(db: Session = Depends(get_db)):
    return get_all_columns(db)

@router.get("/columns/{id}")
async def get_one(id: str, db: Session = Depends(get_db)):
    return get_one_column(id, db)

@router.post("/columns")
async def create(name: str, project_id: str, position: int, db: Session = Depends(get_db)):
    return create_new_column(name, project_id, position, db)

@router.put("/columns/{id}")
async def update(column: Column, db: Session = Depends(get_db)):
    return update_column(column,db)

@router.delete("/columns/{id}")
async def delete(id: str, db: Session = Depends(get_db)):
    return delete_column(id, db)