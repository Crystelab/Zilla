from fastapi import APIRouter, HTTPException
from ..controllers.labels import get_all_labels

router = APIRouter(tags=["labels"])

@router.get("/labels")
async def get_labels():
    return get_all_labels()
