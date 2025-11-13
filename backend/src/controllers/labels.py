import json
import os
from fastapi import HTTPException
from typing import List
from ..models.label import Label

# File path for your JSON data
file_path = os.path.join(os.path.dirname(__file__), '../data/label.json')


def get_all_labels() -> List[Label]:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return [Label(**item) for item in data]
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading labels: {e}")
        return []

def get_one_label(id: int) -> Label:
    labels = get_all_labels()
    
    # Loop through all labels and find the one with matching id
    for label in labels:
        if label.id == id:
            return label
    
    raise HTTPException(status_code=404, detail=f"Label {id} not found")

def create_new_label(label: Label) -> Label:
    labels = get_all_labels()
    labels.append(label)
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump([label.dict() for label in labels], f, indent=2)
        return label
    except Exception as e:
        print(f"Error writing labels: {e}")
        raise

def update_label(label: Label) -> Label:
    labels = get_all_labels()
    
    try:
        # Loop through all labels and find the one with matching id
        i = 0
        for l in labels:
            if l.id == label.id:
                labels[i] = label
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump([label.dict() for label in labels], f, indent=2)
                return l
            i+=1
    except Exception as e:
        print(f"Error writing labels: {e}")
        raise

