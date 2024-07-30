import os
import json
import requests
import shutil

# URL of the API endpoint
api_url = "https://api.i18nexus.com/project_resources/translations.json?api_key=DYakBRUY9khHNdVoXqYXcQ"

# Send the API request
response = requests.get(api_url)
data = response.json()

# Function to create folders and JSON files
def create_files_from_json(data):
    for lang, namespaces in data.items():
        # Remove the existing folder if it exists
        if os.path.exists(lang):
            shutil.rmtree(lang)
        # Create folder for each language
        os.makedirs(lang, exist_ok=True)
        for namespace, content in namespaces.items():
            # Create JSON file for each namespace
            file_path = os.path.join(lang, f"{namespace}.json")
            with open(file_path, 'w', encoding='utf-8') as json_file:
                json.dump(content, json_file, ensure_ascii=False, indent=4)

    print("DONE !!!!!!!!!!!!!!!!!!!")

# Call the function with the retrieved data
create_files_from_json(data)
