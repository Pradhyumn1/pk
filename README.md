# Potato Disease Classification

## Overview
This project uses a deep learning model to classify diseases in potato plant leaves. It includes a Python script for training the model and a FastAPI backend for making predictions. The frontend is implemented using React.

## Project Structure
- `Disease.ipynb`: Jupyter notebook containing the model training code using TensorFlow and Keras.
- `api.py`: FastAPI backend for serving the model and handling predictions.
- `home.js`: React frontend for uploading images and displaying predictions.

## Model Training
To train the model, run the code in `Disease.ipynb`. Adjust parameters such as batch size, image size, and epochs as needed.

## FastAPI Backend
- Install required packages: `pip install fastapi[all] uvicorn`.
- Run the backend: `uvicorn api:app --reload`.
- Access the backend at `http://localhost:4000`.

## React Frontend
- Navigate to the `frontend` directory: `cd frontend`.
- Install dependencies: `npm install`.
- Start the development server: `npm start`.
- Open the frontend at `http://localhost:3000`.

## Usage
1. Upload an image of a potato plant leaf on the frontend.
2. The backend will classify the disease, and the results will be displayed on the frontend.

## File Descriptions
- `Disease.ipynb`: Model training code.
- `api.py`: FastAPI backend.
- `home.js`: React frontend.
- `saved_model.h5`: Saved model file.
- `models/`: Directory for saving model versions.

## Credits
- TensorFlow: https://www.tensorflow.org/
- FastAPI: https://fastapi.tiangolo.com/
- React: https://reactjs.org/

Feel free to customize and extend the project according to your requirements.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Backend
![image](https://github.com/Pradhyumn1/plant_dis/assets/73153956/2c0b33d0-7314-4806-b1e7-60da9e8eb530)


# Main page

![image](https://github.com/Pradhyumn1/plant_dis/assets/73153956/fa9f201b-aedf-4802-87c6-9a7bc018857a)

# Early blight
![image](https://github.com/Pradhyumn1/plant_dis/assets/73153956/abc65ad0-d875-4c84-8f0e-f0926076fd9d)

# Late Blight
![image](https://github.com/Pradhyumn1/plant_dis/assets/73153956/2734d6c7-5421-4d67-8352-3581f39e0ada)

# Healthy
![image](https://github.com/Pradhyumn1/plant_dis/assets/73153956/7c5c05a2-00f7-4fd8-86cb-90bb714168b4)

