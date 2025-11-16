from pydantic import BaseModel
from sqlalchemy import Column, String, UUID, ForeignKey, Integer
from ..database import Base
import uuid

# Database model
class TaskDB(Base):
    __tablename__ = "task"
    
    id = Column(UUID, primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    column_id = Column(UUID, ForeignKey("columns.id"), nullable=False)
    position = Column(Integer, nullable=False)

# API model
class Task(BaseModel):
    id: str
    name: str
    description: str
    column_id: str
    position: int