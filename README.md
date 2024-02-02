

# PlantVillage Classification Model

This repository contains code for training a plant disease classification model using TensorFlow and deploying it using CI/CD pipelines.

## Dataset

The model is trained on the [PlantVillage dataset](https://www.kaggle.com/emmarex/plantdisease).

## Getting Started

### Prerequisites

Make sure you have the following dependencies installed:

- Python 3.x
- TensorFlow
- Matplotlib
- MLflow
-FastAPI
-ReactJS
-MaterialUI


Install dependencies:

pip install -r requirements.txt

### Training the Model

1. Download the dataset and place it in the specified dataset_path.
2. Run the training script:

python train_model.py

## CI/CD Pipelines

The repository includes GitHub Actions workflows for continuous integration and deployment.

- **Continuous Integration (CI):** Automatically triggered on every push to the main branch. Checks for code quality, tests, and dependencies.

- **Continuous Deployment (CD):** Automatically triggered on successful CI. Deploys the model using MLflow and creates a release.
## Model Evaluation

Evaluate the model's performance on the test set:

### Deployment (deployment.txt)
python deploy_local.py


## Contributing
Feel free to open issues or pull requests for improvements. Contributions are welcome!

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

