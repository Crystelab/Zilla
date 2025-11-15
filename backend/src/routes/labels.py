from fastapi import APIRouter, Depends
from ..models.label import Label
from ..controllers.labels import get_all_labels, get_one_label, create_new_label, update_label, delete_label
from ..database import get_db
from sqlalchemy.orm import Session

router = APIRouter(tags=["labels"])

@router.get("/labels")
async def get_all(db: Session = Depends(get_db)):
    return get_all_labels(db)

@router.get("/labels/{id}")
async def get_one(id: str, db: Session = Depends(get_db)):
    return get_one_label(id, db)

@router.post("/labels")
async def create(name: str, colour: str, db: Session = Depends(get_db)):
    return create_new_label(name, colour, db)

@router.put("/items/{id}")
async def update(label: Label, db: Session = Depends(get_db)):
    return update_label(label,db)

@router.delete("/items/{id}")
async def delete(id: str, db: Session = Depends(get_db)):
    return delete_label(id, db)