from pydantic import BaseModel
from sqlalchemy import Column, UUID, ForeignKey
from ..database import Base

# Database model - NO id field needed!
class TaskLabelDB(Base):
    __tablename__ = "tasklabel"
    
    task_id = Column(UUID, ForeignKey("task.id"), primary_key=True)
    label_id = Column(UUID, ForeignKey("label.id"), primary_key=True)

# API model - also simple!
class TaskLabel(BaseModel):
    task_id: str
    label_id: str