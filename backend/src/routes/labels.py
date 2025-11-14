from fastapi import APIRouter
from ..models.label import Label
from ..controllers.labels import get_all_labels, get_one_label, create_new_label, update_label, delete_label

router = APIRouter(tags=["labels"])

@router.get("/labels")
async def get_all():
    return get_all_labels()

@router.get("/labels/{id}")
async def get_one(id: int):
    return get_one_label(id)

@router.post("/labels")
async def create(name: str, colour: str):
    return create_new_label(name, colour)

@router.put("/items/{id}")
async def update(label: Label):
    return update_label(label)

@router.delete("/items/{id}")
async def delete(id: int):
    return delete_label(id)