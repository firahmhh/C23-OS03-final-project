# Machine Learning Notes
## Step of building price prediction model:
1. Collect the dataset for Price prediction [from KKP;](https://statistik.kkp.go.id/mobile/asset/book/Buku_KPDA_2022_270522_FINAl_FIX_FP_SP.pdf)
2. Choosing learning algorithm that maybe suitable: Linear Regression, RNN, LSTM, and ARIMA;
3. Build model architecture with all learning algorithm options;
4. Train and Evaluate the model by compare each learning algorithm result;
5. Improve the model;
6. Choose the best model;

## Step of building freshness detection model:
1. Collect the dataset of gills and fish eyes images from Fishku;
2. Choosing learning algorithm that maybe suitable: CNN and MobileNet;
3. Build model architecture with all learning algorithm options;
4. Train and Evaluate the model by compare each learning algorithm result;
5. Improve the model;
6. Choose the best model;

## Result:
### Fish Freshness Detection
1. Using Gills

    ![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/e69f7f26-d7f9-43f4-a485-a486d3bcdd7e)
    ![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/7c7c8e74-3225-484c-8151-ad850dcfb8b9)
    ![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/096290f3-b660-4976-a1f2-cb5a46b5688c)

2. Using Eyes
    
    ![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/8159b418-896d-40d8-b7a6-f2d050be2ca4)
    ![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/a3c9c7d2-457d-4483-9d30-468186e4d58d)
    ![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/f77478c3-4ce3-4196-9f69-4ab3f8d4f62d)

### Price Prediction
#### Bandeng
- Eceran
MSE :4.68, 
MAE :1.93

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/2ed00d44-4d08-416d-9d91-8d96213bab2e)

- Grosir
MSE :5.93, 
MAE :1.65

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/16fa1d81-59a6-4e76-8f3e-c043136db762)

#### Gurame
- Eceran
MSE :5.96, 
MAE :1.76

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/e9e62fc9-9eb4-4b3c-8a4e-1345688eaef9)

- Grosir
MSE :5.32,
MAE :1.81

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/2b1f7a68-8c36-474c-b97f-be494a4571c3)


#### Lele
- Eceran
MSE :3.27, 
MAE :1.56

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/3fd5c580-aca4-46f9-b265-3fbc8a51f0be)

- Grosir
MSE :0.47
MAE :0.48

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/15286a6e-2a88-4882-86ef-792c0898f970)

#### Nila
- Eceran
MSE :5.04, 
MAE :1.63

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/6ccd7d13-c0c4-4f9d-9f0b-8cde66869494)

- Grosir
MSE :3.05, 
MAE :1.22

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/67877937-df48-45b0-8432-cca213d7ab35)

#### Tongkol
- Eceran
MSE :5.70,
MAE :2.02

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/bf352288-2535-4521-b99e-37e54963c4c6)

- Grosir
MSE :0.78, 
MAE: 0.55

![image](https://github.com/firahmhh/OCTOFISH-CHECKPOINT/assets/125654103/b9909019-64d7-4a50-94f8-64890d86b4cf)
