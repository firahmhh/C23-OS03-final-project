from flask import Flask, jsonify, request
from keras.models import load_model
import pandas as pd
import numpy as np

app = Flask(__name__)

models = {
    'Bandeng Eceran': ['Bandengn(Eceran).h5', 'Data Price Prediction - Bandeng-Eceran.csv', 12],
    'Bandeng Grosir': ['Bandengn(Grosir).h5', 'Data Price Prediction - Bandeng-Grosir.csv', 12],

    'Gurame Eceran': ['Gurame(Eceran).h5', 'Data Price Prediction - Gurami-Eceran.csv', 12],
    'Gurame Grosir': ['Gurame(Grosir).h5', 'Data Price Prediction - Gurami-Grosir.csv', 12],

    'Lele Eceran': ['Lele(Eceran).h5', 'Data Price Prediction - Lele-Ecer.csv', 12],
    'Lele Grosir': ['Lele(Grosir).h5', 'Data Price Prediction - Lele-Grosir.csv', 12],

    'Nila Eceran': ['Nila(Eceran).h5', 'Data Price Prediction - Nila-Eceran.csv', 6],
    'Nila Grosir': ['Nila(Grosir).h5', 'Data Price Prediction - Nila-Grosir.csv', 8],

    'Tongkol Eceran': ['Tongkol(Eceran).h5', 'Data Price Prediction - Tongkol-Eceran.csv', 12],
    'Tongkol Grosir': ['Tongkol(Grosir).h5', 'Data Price Prediction - Tongkol-Grosir.csv', 12],

    #'Tongkol Eceran': 'model\Tongkol(Eceran).h5',
    #'Tongkol Grosir': 'model\Tongkol(Grosir).h5'
}


def load_data(path):
    data=pd.read_csv(path)
    value=[]
    for row in data['Harga']:
        value.append(float(row)/1000)
    

    return value


def load_models():
    loaded_models = {}
    for model_name, model_path in models.items():
        loaded_models[model_name] = [load_model(model_path[0]),model_path[1], model_path[2]]
        #print(model_path)

    return loaded_models


loaded_models = load_models()


@app.route('/predict', methods=['POST'])
def predict():
    # Terima data dari Postman
    data = request.get_json()

    # Lakukan prediksi harga ikan menggunakan model yang sesuai dengan permintaan
    jenis_ikan = data['jenis_ikan']
    kategori = data['kategori']
    jumlah_bulan = data['jumlah_bulan']
    hasil_prediksi = None

    

    load = loaded_models.get(f'{jenis_ikan} {kategori}')
    model=load[0]
    dataset=load[1]
    window=load[2]

    data_series=load_data(dataset)
    last_window = data_series[-window:]
    last_window = np.reshape(last_window, (1, window, 1))
    

    if model is not None:
        # Lakukan pemrosesan data jika diperlukan
        # ...

        # Lakukan prediksi harga ikan menggunakan model yang sesuai dengan permintaan
            #predicted_price = model.predict(last_window)[0,0]

        forecast_norm = []
        for i in range(jumlah_bulan):
            pred = model.predict(last_window)[0, 0]
            forecast_norm.append(str(pred*1000))
            last_window = np.roll(last_window, -1, axis=1)
            last_window[0, -1, 0] = pred


        # Mengembalikan hasil prediksi
        #hasil_prediksi = predicted_price.tolist()

    # Buat respons dalam format JSON
    response = {'predicted_price': (forecast_norm)}


    return jsonify(response)

@app.route('/', methods=['GET'])
def index():
    return 'BANDENG GROSIR'

if __name__ == '__main__':
    app.run()
