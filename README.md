<h1>API Docs</h1>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/15710919-02c12464-72c8-4a52-a955-656d1592b021?action=collection%2Ffork&collection-url=entityId%3D15710919-02c12464-72c8-4a52-a955-656d1592b021%26entityType%3Dcollection%26workspaceId%3D47d7d502-7365-4157-97be-2f07577bb417)

Base URL for **Production**:

 <p >
  <a href="https://apis.fishku.id/">apis.fishku.id</a>
</p>

Base URL for **Development**:

 <p >
  <a href="https://api.fishku.id/">api.fishku.id</a>
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

[**Consumer**](#consumer)

- [Registrasi consumer](#Registrasi-consumer)
- [Login consumer](#Login-consumer)
- [Get all fish consumer](#Get-all-fish-consumer)
- [Search fish consumer](#Search-fish-consumer)
- [Get detail fish consumer](#Get-detail-fish-consumer)
- [Check fish in cart](#Check-fish-in-cart)
- [Get cart consumer](#Get-cart-consumer)
- [Input & edit cart consumer](#Input-cart-&-edit-cart-consumer)
- [Input cart consumer](#Input-cart-consumer)
- [Edit weight cart consumer](#Edit-weight-cart-consumer)
- [Delete cart consumer](#Delete-cart-consumer)
- [Get all order](#Get-all-order)
- [Get all order by id consumer](#Get-all-order-by-id-consumer)
- [Get all order by id order](#Get-all-order-by-id-order)
- [Get order by idorder & idconsumer](#Get-order-by-idorder-&-idconsumer)
- [Get order by id order](#Get-order-by-id-order)
- [Get order by id consumer](#Get-order-by-id-consumer)
- [Input order consumer](#Input-order-consumer)
- [Input detail order consumer](#Input-detail-order-consumer)
- [Create invoice](#Create-invoice)
- [Get invoice url by invoice ID](#Get-invoice-url-by-invoiceID)

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
  - phone_number = int
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
  - POST
- Request Params
  - id_seller = int
- Request Body
  - name = string
  - phone_number = int
  - location = string
  - roles = string
  - photo_url = string
  - nama_pemilik_rekening = string
  - nomor_rekening = string
  - nama_bank = string
- Response
```json
{
    "message": "Edit Success"
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
    "banyak": 6,
    "data": [
        {
            "id_order": 1,
            "date": "2008-11-11T05:23:44.000Z",
            "notes": null,
            "status": "sending",
            "total_price": "50000",
            "photo_url": null
        },
        {
            "id_order": 2,
            "date": "2123-11-11T05:23:00.000Z",
            "notes": "01osjd081rj81dhnd01",
            "status": "waiting",
            "total_price": "50000",
            "photo_url": null
        },
        {
            "id_order": 1,
            "date": "2008-11-11T05:23:44.000Z",
            "notes": null,
            "status": "sending",
            "total_price": "100000",
            "photo_url": null
        },
        {
            "id_order": 2,
            "date": "2123-11-11T05:23:00.000Z",
            "notes": "01osjd081rj81dhnd01",
            "status": "waiting",
            "total_price": "100000",
            "photo_url": null
        },
        {
            "id_order": 3,
            "date": "2008-11-10T21:23:44.000Z",
            "notes": "",
            "status": "waiting",
            "total_price": "20000",
            "photo_url": null
        },
        {
            "id_order": 4,
            "date": "2008-11-10T21:23:44.000Z",
            "notes": "",
            "status": "waiting",
            "total_price": "20000",
            "photo_url": null
        }
    ]
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
    "banyak": 2,
    "data": [
        {
            "consumer_name": "tsubasa",
            "consumer_phone_number": "011137485912",
            "date": "2008-11-11T05:23:44.000Z",
            "address": "jepang",
            "note_order": null,
            "fish_name": "arwana",
            "fish_note": "-",
            "weight": 10,
            "fish_price": 5000,
            "price": 50000,
            "photo_url": null
        },
        {
            "consumer_name": "tsubasa",
            "consumer_phone_number": "011137485912",
            "date": "2008-11-11T05:23:44.000Z",
            "address": "jepang",
            "note_order": null,
            "fish_name": "megalodon",
            "fish_note": "-",
            "weight": 10,
            "fish_price": 10000,
            "price": 100000,
            "photo_url": null
        }
    ]
}
```

### Sending order seller

- Endpoint
  - /seller/pesanan/edit/:idOrder
- Method
  - PUT
- Request Params
  - idOrder = string
- Request Body
  - status = string
- Response

```json
{
  "message": "Edit Success"
}
```

## Consumer

### Registrasi consumer

- Endpoint
  - /consumer/regist
- Method
  - POST
- Request Body
  - name = string
  - email = string
  - password = string , min 6
  - phone_number = int
  - address = string
- Response

```json
{
  "message": "Input Success"
}
```

### Login consumer

- Endpoint
  - /consumer/login
- Method
  - POST
- Request Body
  - email = string
  - password = string , min 6
- Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY2MTkzNTQ0OH0.9tUJRdqx3D4KlCEYxXcPiMNo7tPAeYOXUdG8_HtKljg",
  "data": [
    {
      "id": 17,
      "name": "contoh",
      "email": "contoh@gmail.com",
      "password": "$2b$10$PFvpFmnL9AuAPpRzHvYTzuAainD3dgbEnJnchzydp7onUQqvEORF2",
      "phone_number": "012345678901",
      "address": "jl contoh no 2"
    }
  ]
}
```

### Show profile consumer
- Endpoint
  - /consumer/profile/:idConsumer
- Method
  - GET
- Request Params
  - id_consumer = int
- Response
```json
{
    "banyak": 1,
    "data": [
        {
            "name": "narutosh",
            "email": "adisti@gmail.com",
            "phone_number": "089645445",
            "address": "jkt",
            "photo_url": "blabla.jpg"
        }
    ]
}
```

### Edit profile consumer 
- Endpoint
  - /consumer/profile/edit/:idConsumer
- Method
  - POST
- Request Params
  - id_consumer = int
- Request Body
  - name = string
  - phone_number = int
  - address = string
  - photo_url = string
- Response
```json
{
    "message": "Edit Success",
    "data": [
        {
            "name": "narutoo",
            "email": "tsubasa@gmail.com",
            "phone_number": "08964544",
            "address": "jkt",
            "photo_url": "blabla.jpg"
        }
    ]
}
```

### Get all fish consumer

- Endpoint
  - /consumer/ikan/all
- Method
  - GET
- Response

```json
{
    "banyak": 17,
    "data": [
        {
            "id_fish": 1,
            "name": "arwana",
            "price": 5000,
            "location": "konoha",
            "photo_url": null
        },
        {
            "id_fish": 2,
            "name": "megalodon",
            "price": 10000,
            "location": "konoha",
            "photo_url": null
        },
        {
            "id_fish": 3,
            "name": "cupang",
            "price": 2000,
            "location": "konoha",
            "photo_url": null
        },
        {
            "id_fish": 4,
            "name": "megalodon",
            "price": 9000,
            "location": "barat",
            "photo_url": null
        },
        {
            "id_fish": 5,
            "name": "biawak",
            "price": 6000,
            "location": "barat",
            "photo_url": null
        },
        {
            "id_fish": 6,
            "name": "gurame",
            "price": 2000,
            "location": "jepang",
            "photo_url": null
        },
        {
            "id_fish": 48,
            "name": "bandeng",
            "price": 15000,
            "location": "jepang",
            "photo_url": null
        },
        {
            "id_fish": 49,
            "name": "bandeng",
            "price": 15000,
            "location": "barat",
            "photo_url": null
        },
        {
            "id_fish": 62,
            "name": "Pindang",
            "price": 200000,
            "location": "Surabaya",
            "photo_url": null
        },
        {
            "id_fish": 63,
            "name": "Tongkol",
            "price": 200000,
            "location": "Surabaya",
            "photo_url": null
        },
        {
            "id_fish": 68,
            "name": "ikan gabus",
            "price": 23000,
            "location": "Jl. Kasih 10",
            "photo_url": null
        },
        {
            "id_fish": 69,
            "name": "Ikan Bandeng",
            "price": 15000,
            "location": "Jl. Kasih 10",
            "photo_url": null
        },
        {
            "id_fish": 77,
            "name": "bandeng",
            "price": 20000,
            "location": "barat",
            "photo_url": "https://blabla"
        },
        {
            "id_fish": 78,
            "name": "arwanaa",
            "price": 30000,
            "location": "konoha",
            "photo_url": "https://blabla"
        },
        {
            "id_fish": 82,
            "name": "FIsher Segar",
            "price": 89,
            "location": "lombok",
            "photo_url": "05-Oct-20221212684520832617619.jpg"
        },
        {
            "id_fish": 83,
            "name": "Pemandangan Segar",
            "price": 20,
            "location": "lombok",
            "photo_url": "06-Oct-20222170633292461802552.jpg"
        },
        {
            "id_fish": 84,
            "name": "arwanaa",
            "price": 30000,
            "location": "barat",
            "photo_url": "https://blabla"
        }
    ]
}
```

### Search fish consumer

- Endpoint
  - /consumer/ikan/:namaIkan
- Method
  - GET
- Request Params
  - namaIkan = string
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

### Get detail fish consumer

- Endpoint
  - /consumer/ikan/detail/:idIkan
- Method
  - GET
- Request Params
  - idIkan = int

```json
{
    "banyak": 1,
    "data": [
        {
            "id_fish": 1,
            "name": "arwana",
            "saller_name": "naruto",
            "location": "konoha",
            "weight": 100,
            "price": 5000,
            "photo_url": null
        }
    ]
}
```
### Check fish in cart

- Endpoint
  - /consumer/ikan/cek/:idConsumer/:idIkan
- Method
  - GET
- Request Params
  - idConsumer = int
  - idIkan = int

```json
{
    "tabel": "Cart",
    "data": [
        {
            "id": 1,
            "notes": "potong 3",
            "weight": 100,
            "id_fish": 2,
            "id_consumer": 1
        },
        {
            "id": 2,
            "notes": "potong 50",
            "weight": 100,
            "id_fish": 2,
            "id_consumer": 1
        },
        {
            "id": 5,
            "notes": "potong 3",
            "weight": 10,
            "id_fish": 2,
            "id_consumer": 1
        }
    ]
}
```

### Get cart consumer

- Endpoint
  - /consumer/keranjang/:idConsumer
- Method
  - GET
- Request Params
  - idConsumer = int
- Response

```json
{
    "banyak": 2,
    "data": [
        {
            "id_cart": 4,
            "id_fish": 5,
            "fish_name": "biawak",
            "weight": 10,
            "price": 6000,
            "notes": "buang kepala",
            "id_consumer": 2,
            "photo_url": null,
            "email_seller": "anya@gmail.com"
        },
        {
            "id_cart": 212,
            "id_fish": 1,
            "fish_name": "arwana",
            "weight": 20,
            "price": 5000,
            "notes": "tes",
            "id_consumer": 2,
            "photo_url": null,
            "email_seller": "naruto@gmail.com"
        }
    ]
}
```

### Input cart & edit cart consumer 

- Endpoint
  - /consumer/keranjang/input/edit
- Method
  - POST
- Request Body
  - id_fish = int
  - id_consumer = int
  - notes = string
  - weight = int
- Response

- jika data belum ada, maka input cart
```json
{
  "message": "Input Success"
}
```
- jika data sudah ada, maka edit cart
```json
{
  "message": "Edit Success"
}
```

### Input cart consumer 

- Endpoint
  - /consumer/keranjang/input 
- Method
  - POST
- Request Params
  - email = string
  - password = string , min 6
- Request Body
  - id_fish = int
  - id_consumer = int
  - notes = string
  - weight = int
- Response

```json
{
  "message": "Input Success"
}
```

### Edit weight cart consumer

- Endpoint
  - /consumer/keranjang/edit/weight/:idCart
- Method
  - PUT
- Request Params
  - idCart = int
- Request Body
  - weight = int
- Response

```json
{
  "message": "Edit Success"
}
```

### Delete cart consumer

- Endpoint
  - /consumer/keranjang/delete/:idCart
- Method
  - DELETE
- Request Params
  - idCart = int
- Response

```json
{
  "message": "Delete Success"
}
```

### Get all order 

- Endpoint
  - /consumer/pesanan/all/
- Method
  - GET
- Response
```json
{
    "banyak": 7,
    "data": [
        {
            "id_ordering": 1,
            "date": "2008-11-11T05:23:44.000Z",
            "total_price": "50000",
            "status": "sending"
        },
        {
            "id_ordering": 1,
            "date": "2008-11-11T05:23:44.000Z",
            "total_price": "100000",
            "status": "sending"
        },
        {
            "id_ordering": 2,
            "date": "2123-11-11T05:23:00.000Z",
            "total_price": "50000",
            "status": "waiting"
        },
        {
            "id_ordering": 2,
            "date": "2123-11-11T05:23:00.000Z",
            "total_price": "100000",
            "status": "waiting"
        },
        {
            "id_ordering": 3,
            "date": "2008-11-10T21:23:44.000Z",
            "total_price": "20000",
            "status": "waiting"
        },
        {
            "id_ordering": 4,
            "date": "2008-11-10T21:23:44.000Z",
            "total_price": "20000",
            "status": "waiting"
        },
        {
            "id_ordering": 2,
            "date": "2123-11-11T05:23:00.000Z",
            "total_price": "90000",
            "status": "waiting"
        }
    ]
}
```

### Get all order by id consumer

- Endpoint
  - /consumer/pesanan/all/idConsumer/:idConsumer
- Method
  - GET
- Request Params
  - idConsumer = int
- Response

```json
{
    "banyak": 2,
    "data": [
        {
            "id_ordering": 1,
            "date": "2008-11-11T05:23:44.000Z",
            "total_price": "50000",
            "status": "sending",
            "invoice_url": null
        },
        {
            "id_ordering": 1,
            "date": "2008-11-11T05:23:44.000Z",
            "total_price": "100000",
            "status": "sending",
            "invoice_url": null
        }
    ]
}
```

### Get all order by id order

- Endpoint
  - /consumer/pesanan/all/idOrder/:idOrder
- Method
  - GET
- Request Params
  - idOrder = int
- Response

```json
{
    "banyak": 1,
    "data": [
        {
            "id_ordering": 1,
            "date": "2008-11-11T05:23:44.000Z",
            "total_price": "150000",
            "status": "sending"
        }
    ]
}
```

### Get order by idorder & idconsumer

- Endpoint
  - /consumer/pesanan/:idConsumer/:idOrder
- Method
  - GET
- Request Params
  - idConsumer = int
  - idOrder = int
- Response

```json
{
    "banyak": 3,
    "data": [
        {
            "id_ordering": 2,
            "consumer_name": "zoro",
            "date": "2123-11-11T05:23:00.000Z",
            "fish_name": "arwana",
            "weight": 10,
            "fish_price": 5000,
            "status": "waiting",
            "photo_url": null,
            "invoice_url": null,
            "email_seller": "naruto@gmail.com"
        },
        {
            "id_ordering": 2,
            "consumer_name": "zoro",
            "date": "2123-11-11T05:23:00.000Z",
            "fish_name": "megalodon",
            "weight": 10,
            "fish_price": 10000,
            "status": "waiting",
            "photo_url": null,
            "invoice_url": null,
            "email_seller": "naruto@gmail.com"
        },
        {
            "id_ordering": 2,
            "consumer_name": "zoro",
            "date": "2123-11-11T05:23:00.000Z",
            "fish_name": "megalodon",
            "weight": 10,
            "fish_price": 9000,
            "status": "waiting",
            "photo_url": null,
            "invoice_url": null,
            "email_seller": "anya@gmail.com"
        }
    ]
}
```

### Get order by id order

- Endpoint
  - /consumer/pesanan/idOrder/:idOrder
- Method
  - GET
- Request Params
  - idOrder = int
- Response

```json
{
    "banyak": 2,
    "data": [
        {
            "id_ordering": 1,
            "consumer_name": "tsubasa",
            "date": "2008-11-11T05:23:44.000Z",
            "fish_name": "arwana",
            "weight": 10,
            "fish_price": 5000,
            "status": "sending",
            "photo_url": null
        },
        {
            "id_ordering": 1,
            "consumer_name": "tsubasa",
            "date": "2008-11-11T05:23:44.000Z",
            "fish_name": "megalodon",
            "weight": 10,
            "fish_price": 10000,
            "status": "sending",
            "photo_url": null
        }
    ]
}
```

### Get order by id consumer

- Endpoint
  - /consumer/pesanan/idConsumer/:idConsumer
- Method
  - GET
- Request Params
  - idConsumer = int
- Response

```json
{
    "banyak": 5,
    "data": [
        {
            "id_ordering": 2,
            "consumer_name": "zoro",
            "date": "2123-11-11T05:23:00.000Z",
            "fish_name": "arwana",
            "weight": 10,
            "fish_price": 5000,
            "status": "waiting",
            "photo_url": null
        },
        {
            "id_ordering": 2,
            "consumer_name": "zoro",
            "date": "2123-11-11T05:23:00.000Z",
            "fish_name": "megalodon",
            "weight": 10,
            "fish_price": 10000,
            "status": "waiting",
            "photo_url": null
        },
        {
            "id_ordering": 3,
            "consumer_name": "zoro",
            "date": "2008-11-10T21:23:44.000Z",
            "fish_name": "cupang",
            "weight": 10,
            "fish_price": 2000,
            "status": "waiting",
            "photo_url": null
        },
        {
            "id_ordering": 4,
            "consumer_name": "zoro",
            "date": "2008-11-10T21:23:44.000Z",
            "fish_name": "cupang",
            "weight": 10,
            "fish_price": 2000,
            "status": "waiting",
            "photo_url": null
        },
        {
            "id_ordering": 2,
            "consumer_name": "zoro",
            "date": "2123-11-11T05:23:00.000Z",
            "fish_name": "megalodon",
            "weight": 10,
            "fish_price": 9000,
            "status": "waiting",
            "photo_url": null
        }
    ]
}
```

### Input order consumer

- Endpoint
  - /consumer/pesanan/input
- Method
  - POST
- Request Body
  - name = string
  - address = string
  - poi = string
  - latitude = string
  - longitude = string
  - mobile_number = string, numeric
  - goods = string
  - date = format(YYYY-MM-DD hh:mm:ss)
  - status = string
  - invoice_url = string


- Response

```json
{
    "message": "input success",
    "id_ordering": 85
}
```

### Input detail order consumer

- Endpoint
  - /consumer/pesanan/input/detail/:id_consumer
- Method
  - POST

- Request Body
  - data = array (id_cart)
  - id_ordering = int
```json
{
    "data": [182, 207],
    "id_ordering": "114"
}
``` 

- Response

```json
{
    "message": "Input data Success"
}
```

### Create invoice

- Endpoint
  - /payment/create/invoice
- Method
  - POST
- Request Body
  - externalID: string;
  - payerEmail: string;
  - description: string;
  - amount: number;
- Response

```json
{
    "message": "Input Success",
    "data": {
        "id": "63648877798a2f8b86c29f6d",
        "external_id": "4",
        "user_id": "633cfec05aa61c3d545bfd58",
        "status": "PENDING",
        "merchant_name": "Fishku Indonesia",
        "merchant_profile_picture_url": "https://xnd-merchant-logos.s3.amazonaws.com/business/production/633cfec05aa61c3d545bfd58-1664944416727.jpeg",
        "amount": 25000,
        "description": "test",
        "expiry_date": "2022-11-05T03:35:19.163Z",
        "invoice_url": "https://checkout-staging.xendit.co/web/63648877798a2f8b86c29f6d",
        "available_banks": [
            {
                "bank_code": "MANDIRI",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "BRI",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "BNI",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "PERMATA",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "BCA",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            }
        ],
        "available_retail_outlets": [
            {
                "retail_outlet_name": "ALFAMART"
            },
            {
                "retail_outlet_name": "INDOMARET"
            }
        ],
        "available_ewallets": [
            {
                "ewallet_type": "OVO"
            },
            {
                "ewallet_type": "DANA"
            },
            {
                "ewallet_type": "SHOPEEPAY"
            },
            {
                "ewallet_type": "LINKAJA"
            },
            {
                "ewallet_type": "ASTRAPAY"
            }
        ],
        "available_direct_debits": [
            {
                "direct_debit_type": "DD_BRI"
            }
        ],
        "available_paylaters": [],
        "should_exclude_credit_card": false,
        "should_send_email": false,
        "created": "2022-11-04T03:35:19.696Z",
        "updated": "2022-11-04T03:35:19.696Z",
        "currency": "IDR",
        "customer_notification_preference": {
            "invoice_created": [],
            "invoice_reminder": [],
            "invoice_expired": [],
            "invoice_paid": [
                "email"
            ]
        }
    },
    "invoice_url": "https://checkout-staging.xendit.co/web/63648877798a2f8b86c29f6d"
}
```

### Get invoice url by invoice ID

- Endpoint
  - /consumer/payment/invoice/:invoiceID
- Method
  - GET
- Request Params
  - invoiceID = string
- Response

```json
{
    "data": {
        "id": "6376b9897e9bbdf3d051bdb6",
        "external_id": "5",
        "user_id": "633cfec05aa61c3d545bfd58",
        "payment_method": "EWALLET",
        "status": "PAID",
        "merchant_name": "Fishku Indonesia",
        "merchant_profile_picture_url": "https://xnd-merchant-logos.s3.amazonaws.com/business/production/633cfec05aa61c3d545bfd58-1664944416727.jpeg",
        "amount": 25000,
        "paid_amount": 25000,
        "paid_at": "2022-11-17T23:05:17.269Z",
        "description": "test",
        "expiry_date": "2022-11-18T22:45:29.290Z",
        "invoice_url": "https://checkout-staging.xendit.co/web/6376b9897e9bbdf3d051bdb6",
        "available_banks": [
            {
                "bank_code": "MANDIRI",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "BRI",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "BNI",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "PERMATA",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            },
            {
                "bank_code": "BCA",
                "collection_type": "POOL",
                "transfer_amount": 25000,
                "bank_branch": "Virtual Account",
                "account_holder_name": "FISHKU INDONESIA",
                "identity_amount": 0
            }
        ],
        "available_retail_outlets": [
            {
                "retail_outlet_name": "ALFAMART"
            },
            {
                "retail_outlet_name": "INDOMARET"
            }
        ],
        "available_ewallets": [
            {
                "ewallet_type": "OVO"
            },
            {
                "ewallet_type": "DANA"
            },
            {
                "ewallet_type": "SHOPEEPAY"
            },
            {
                "ewallet_type": "LINKAJA"
            },
            {
                "ewallet_type": "ASTRAPAY"
            }
        ],
        "available_qr_codes": [
            {
                "qr_code_type": "QRIS"
            }
        ],
        "available_direct_debits": [
            {
                "direct_debit_type": "DD_BRI"
            }
        ],
        "available_paylaters": [],
        "should_exclude_credit_card": false,
        "should_send_email": false,
        "created": "2022-11-17T22:45:29.879Z",
        "updated": "2022-11-17T23:05:18.854Z",
        "currency": "IDR",
        "payment_channel": "OVO",
        "payment_id": "ewc_48bda038-43f9-499a-8e05-4bee82553ca7",
        "payment_method_id": "pm-e209fe01-f3ae-463c-a8de-7c9ca65af658",
        "customer_notification_preference": {
            "invoice_created": [],
            "invoice_reminder": [],
            "invoice_expired": [],
            "invoice_paid": [
                "email"
            ]
        }
    }
}
```

### Input transaksi data

- Endpoint
  - /payment/transaksi/input
- Method
  - POST
- Request Body
  - externalID: string;
  - id_consumer: int;
  - id_ordering: int;
  - created: date (format(YYYY-MM-DD hh:mm:ss))
  - paid_at: date (format(YYYY-MM-DD hh:mm:ss))
  - status: enum (pending, paid, settled, expired);
- Response

```json
{
    "message": "Input Success"
}
```

### Get data transaksi by id consumer

- Endpoint
  - /consumer/payment/transaksi/:id_consumer
- Method
  - GET
- Request Params
  - id_consumer = string
- Response
```json
{
    "banyak": 1,
    "data": [
        {
            "id": 3,
            "id_external": "12321",
            "id_consumer": 3,
            "dates_transaction": "2008-11-11T05:23:44.000Z",
            "dates_payed": "2008-11-11T07:23:44.000Z",
            "id_ordering": 2,
            "status": "paid"
        }
    ]
}
```
