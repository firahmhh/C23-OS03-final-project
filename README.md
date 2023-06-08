﻿<h1>API Docs</h1>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/15710919-02c12464-72c8-4a52-a955-656d1592b021?action=collection%2Ffork&collection-url=entityId%3D15710919-02c12464-72c8-4a52-a955-656d1592b021%26entityType%3Dcollection%26workspaceId%3D47d7d502-7365-4157-97be-2f07577bb417)

Base URL for **Development**:

 <p >
  <a href="https://api.fishku.id/">https://octofish.et.r.appspot.com/</a>
</p>

Endpoint:

[**Seller**](#seller)

- [Registrasi seller](#registrasi-seller)
- [Login seller](#Login-seller)
- [Get all fish seller](#Get-all-fish-seller)
- [Search fish seller](#Search-fish-seller)
- [Input fish seller](#Input-fish-seller)
- [Edit fish seller](#Edit-fish-seller)
- [Delete fish seller](#Delete-fish-seller)
- [Get all order seller](#Get-all-order-seller)
- [Get detail order seller](#Get-detail-order-seller)
- [Sending order seller](#Sending-order-seller)

## Seller

### Registrasi seller

- Endpoint
  - /seller/regist
- Method
  - POST
- Request Body
  - name = string
  - email = string
  - password = string , min 6
  - phone_number = string
  - location = string
  - roles = string
- Response

```json
{
  "message": "Input Success"
}
```

### Login seller

- Endpoint
  - /seller/login
- Method
  - POST
- Request Body
  - email = string
  - password = string , min 6
- Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjYyMzY1OTM2fQ.mmd1atcc4CqnDlIpbjzzrFT5gH-OtYzY9sYbKRowcKc",
  "data": [
    {
      "id": 4,
      "name": "jajang",
      "email": "jajang@yahoo.co.id",
      "password": "$2b$10$JzIkiBxONM6WHahRYDJkeeQR.V1NTmuSAHJLiQ9E1JjtYCqFva8L.",
      "phone_number": "083736429343",
      "location": "garut",
      "roles": "pembudidaya"
    }
  ]
}
```
### Show profile seller
- Endpoint
  - /seller/profile/:idSeller
- Method
  - GET
- Request Params
  - id_seller = int
- Response
```json
{
    "banyak": 1,
    "data": [
        {
            "name": "naruto",
            "phone_number": "08976543212",
            "email": "dyahnahdya@gmail.com",
            "location": "konoha",
            "roles": "nelayan",
            "photo_url": null
        }
    ]
}
```

### Edit profile seller 
- Endpoint
  - /seller/profile/edit/:idSeller
- Method
  - PUT
- Request Params
  - id_seller = int
- Request Body
  - name = string
  - phone_number = string
  - location = string
  - roles = string
  - photo = file
  - nama_pemilik_rekening = string
  - nomor_rekening = string
  - nama_bank = string
- Response
```json
{
    "message": "Profile updated"
}
```

### Get all fish seller

- Endpoint
  - /seller/ikan/:idSeller
- Method
  - GET
- Request Params
  - idSeller = int
- Response

```json
{
    "banyak": 4,
    "data": [
        {
            "id_fish": 1,
            "name": "arwana",
            "weight": 100,
            "price": 5000,
            "photo_url": null
        },
        {
            "id_fish": 2,
            "name": "megalodon",
            "weight": 950,
            "price": 10000,
            "photo_url": null
        },
        {
            "id_fish": 3,
            "name": "cupang",
            "weight": 999,
            "price": 2000,
            "photo_url": null
        },
        {
            "id_fish": 78,
            "name": "arwanaa",
            "weight": 20,
            "price": 30000,
            "photo_url": "https://blabla"
        }
    ]
}
```

### Search fish seller

- Endpoint
  - /seller/ikan/:idSeller/:name
- Method
  - GET
- Request Params
  - idSeller = int
  - name = string
- Response

```json
{
    "banyak": 1,
    "data": [
        {
            "id_fish": 1,
            "name": "arwana",
            "weight": 100,
            "price": 5000,
            "photo_url": null
        }
    ]
}
```

### Input fish seller

- Endpoint
  - /seller/ikan/input
- Method
  - POST
- Request Body
  - id_seller = int
  - name = string
  - weight = int
  - description = string
  - price = int
  - photo_url = string
- Response

```json
{
  "message": "Input Success"
}
```

### Edit fish seller

- Endpoint
  - /seller/ikan/edit/:idFish
- Method
  - PUT
- Request Params
  - idFish = int
- Request Body
  - name = string
  - weight = int
  - description = string
  - price = int

- Response

```json
{
  "message": "Edit Success"
}
```

### Delete fish seller

- Endpoint
  - /seller/ikan/delete/:idFish
- Method
  - DELETE
- Request Params
  - idFish = int
- Response

```json
{
  "message": "Delete Success"
}
```

### Get all order seller

- Endpoint
  - /seller/pesanan/:idSeller
- Method
  - GET
- Request Params
  - idSeller = int
- Response

```json
{
    "data": {
        "total": 8459000,
        "banyak": 8,
        "result": [
            {
                "id_order": null,
                "date": null,
                "status": null,
                "total_price": "245000",
                "photo_url": null
            },
            {
                "id_order": null,
                "date": null,
                "status": null,
                "total_price": "7260000",
                "photo_url": null
            },
            {
                "id_order": null,
                "date": null,
                "status": null,
                "total_price": "84000",
                "photo_url": null
            },
            {
                "id_order": 1,
                "date": "2022-11-11T05:23:44.000Z",
                "status": "sending",
                "total_price": "200000",
                "photo_url": null
            },
            {
                "id_order": 1,
                "date": "2022-11-11T05:23:44.000Z",
                "status": "sending",
                "total_price": "300000",
                "photo_url": null
            },
            {
                "id_order": 2,
                "date": "2022-11-11T05:23:44.000Z",
                "status": "sending",
                "total_price": "50000",
                "photo_url": null
            },
            {
                "id_order": 2,
                "date": "2022-11-11T05:23:44.000Z",
                "status": "sending",
                "total_price": "300000",
                "photo_url": null
            },
            {
                "id_order": 3,
                "date": "2023-06-06T12:34:56.000Z",
                "status": "test",
                "total_price": "20000",
                "photo_url": null
            }
        ]
    }
}
```

### Get detail order seller

- Endpoint
  - /seller/pesanan/detail/:idOrder
- Method
  - GET
- Request Params
  - idOrder = string
- Response

```json
{
    "data": {
        "banyak": 4,
        "result": [
            {
                "consumer_name": "narutoo",
                "consumer_phone_number": "08964544",
                "date": "2022-11-11T05:23:44.000Z",
                "address": "jkt",
                "fish_name": "arwana",
                "fish_note": "-",
                "weight": 10,
                "fish_price": 5000,
                "price": 50000,
                "photo_url": null
            },
            {
                "consumer_name": "narutoo",
                "consumer_phone_number": "08964544",
                "date": "2022-11-11T05:23:44.000Z",
                "address": "jkt",
                "fish_name": "kakap",
                "fish_note": "-",
                "weight": 10,
                "fish_price": 30000,
                "price": 300000,
                "photo_url": null
            },
            {
                "consumer_name": "wohin",
                "consumer_phone_number": "018392648263",
                "date": "2022-11-11T05:23:44.000Z",
                "address": "korea",
                "fish_name": "arwana",
                "fish_note": "ggg",
                "weight": 30,
                "fish_price": 5000,
                "price": 150000,
                "photo_url": null
            },
            {
                "consumer_name": "admin",
                "consumer_phone_number": "081234567890",
                "date": "2022-11-11T05:23:44.000Z",
                "address": "semarang",
                "fish_name": "megalodon",
                "fish_note": "yang besar ikannya",
                "weight": 12,
                "fish_price": 9000,
                "price": 108000,
                "photo_url": null
            }
        ]
    }
}
```