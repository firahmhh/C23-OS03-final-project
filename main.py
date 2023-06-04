import io
from flask import Flask, jsonify, request
import numpy as np
import tensorflow as tf
from PIL import Image

app = Flask(__name__)
model = tf.keras.models.load_model("gills.h5")

def process_image(image):
    img = image.resize((224, 224))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array.astype(np.float32)
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files.get('file')
    
    if file is None or file.filename == "":
        return jsonify({"Error": "File Not Found"})
    
    try:
        bytes_image = file.read()
        pil_image = Image.open(io.BytesIO(bytes_image))
        img_array = process_image(pil_image)
        classes = model.predict(img_array)
        
        index = np.argmax(classes)
        
        if index == 0:
            return jsonify({"Prediksi": "Tidak Segar"})
        elif index == 1:
            return jsonify({"Prediksi": "Kurang Segar"})
        elif index == 2:
            return jsonify({"Prediksi": "Segar"})
        
    except Exception as e:
        return jsonify({"Error": str(e)})

@app.route('/', methods=['GET'])
def index():
    return 'Freshness Gills'

if __name__ == '__main__':
    app.run(debug=True)
