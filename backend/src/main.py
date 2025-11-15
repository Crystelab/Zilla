from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import labels, projects, columns
from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
)

app.include_router(labels.router)
app.include_router(projects.router)
app.include_router(columns.router)

@app.get("/", tags=["health check"])
def root():
    return {"Hello World"}