# FireBase_FireStore_Bulk_Data_Uploader_Utility
Upload Json Data in Batch files in Firebase Firestore.

Configuration:
1. Put all your json files under **files** folder.
2. Install following packages:
  ** npm install firebase firebase-admin**
3. Now configure **uploader.js** file. Add Firebase Database Url in **databaseURL: "Your_FireStore_Database_Url"**
4. Create a private key for firebase account and add in root directory and give path in **uploader.js** file as below:
   **var serviceAccount = require("./service_key.json");**
5. Start node server ==>** react-native start**
6. run **node uploader.js** from terminal and data will be uploaded to firebase firestore.

Steps to create private key:
1. Go to Project setting.
<div align="center">
    <img src="screenshots/1.jpg" width="400px"</img> 
    <p></p>
     <p></p>
</div>
3. Goto Service account.
<div align="center">
    <img src="screenshots/2.jpg" width="400px" </img> 
    <p></p>
     <p></p>
</div>
5. Generate a new private key and keep the key at secure location.
<div align="center">
    <img src="screenshots/3.jpg" width="400px" </img>
    <p></p>
     <p></p>
</div>


Steps to get the Firestore Database Url:
1. Goto Firebase Database.
2. You will see your database name. Copy that. Check the red circle marked in screenshot.
<div align="center">
    <img src="screenshots/4.jpg" width="400px" </img>
    <p></p>
     <p></p>
</div>
3. Create a database Url by adding your database name in below Url:
  ** https://**Your_Database_Name**.firebaseio.com**








