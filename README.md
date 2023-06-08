# Fish Price Prediction


Base URL:

 <p >
  <a href="https://price-prediction-mps7ogpvxa-et.a.run.app/">fish-price-prediction</a>
</p>

### Prediksi Harga Ikan
- Endpoint
  - /predict
- Method
  - POST
- Request Body
  - jenis_ikan = string
  - kategori = string
  - jumlah_bulan = int
- Contoh Request dalam RAW
```json
{
    "jenis_ikan": "Bandeng",
    "kategori": "Eceran",
    "jumlah_bulan": 5
}
```
- Response
```json
{
    "predicted_price": [
        "31211.984634399414",
        "30814.451217651367",
        "30739.761352539062",
        "30648.113250732422",
        "30752.580642700195"
    ]
}
```
