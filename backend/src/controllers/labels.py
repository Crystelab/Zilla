import json
import os
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