from pydantic import BaseModel
from sqlalchemy import Column, String, UUID
from ..database import Base
import uuid

# Database model
class LabelDB(Base):
    __tablename__ = "label"
    
    id = Column(UUID, primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    colour = Column(String(255), nullable=False)

# API model
class Label(BaseModel):
    id: str
    name: str
    colour: str