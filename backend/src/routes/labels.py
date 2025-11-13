from fastapi import APIRouter
from ..models.label import Label
from ..controllers.labels import get_all_labels, get_one_label, create_new_label

router = APIRouter(tags=["labels"])

@router.get("/labels")
async def get_labels():
    return get_all_labels()

@router.get("/labels/{id}")
async def get_label(id: int):
    return get_one_label(id)

@router.post("/labels")
async def create_label(label: Label):
    return create_new_label(label)