# Zilla

This app is a Kanban board that is still a work in progress. The goal for now is for a single user to be able to manage several projects, each with their own tasks and columns.

## Stack

React.js seems like the best option for the front end of this app, because React can manage states effectively.

FastAPI is definitely the fastest way to make an API and it automatically generates the Swagger documentation that I was looking for.

## Setup Guide
### Frontend

In the main Zilla folder, install all requirements:
```
npm install
```
Then you can run the UI with:
```
npm start
```
### Backend
To run the backend, in a <b>different terminal</b> go to the backend folder:
```
cd backend
```
Then create your virtual environment (if not already created):
```
python -m venv venv
```
Then activate the environment:
```
source venv/bin/activate
```
Once activated, you can install all requirements.
```
pip install -r requirements.txt
```

Finally, run the backend server:
```
uvicorn src.main:app --reload
```

## Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Swagger Documentation: http://localhost:8000/docs