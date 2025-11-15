from pydantic import BaseModel
from sqlalchemy import Column, String, Integer, UUID, ForeignKey
from ..database import Base
import uuid

# Database model
class ColumnDB(Base):
    __tablename__ = "columns"
    
    id = Column(UUID, primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    project_id = Column(UUID, ForeignKey("project.id"), nullable=False)
    position = Column(Integer, nullable=False)

# API model
class Column(BaseModel):
    id: str
    name: str
    project_id: str
    position: int