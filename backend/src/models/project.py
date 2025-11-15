from pydantic import BaseModel
from sqlalchemy import Column, String, UUID
from ..database import Base
import uuid

# Database model
class ProjectDB(Base):
    __tablename__ = "project"
    
    id = Column(UUID, primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)

# API model
class Project(BaseModel):
    id: str
    name: str
    description: str