var admin = require("firebase-admin");

var serviceAccount = require("./service_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "Your_FireStore_Database_Url"
});

const firestore = admin.firestore();
const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "files");
const data = {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA'
};

fs.readdir(directoryPath, function (err, files) {
  console.log("directoryPath: " + directoryPath);
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    var lastDotIndex = file.lastIndexOf(".");

    var menu = require("./files/" + file);
    
    menu.forEach(function (obj) {
      console.log("menu: " + file.substring(0, lastDotIndex));
      console.log("obj.id: " + obj.id);
      const categoryCollection = firestore.collection("Categories")
      firestore
          .collection(file.substring(0, lastDotIndex))
          .doc(`${obj.id}`)
          .set(obj)
          .then(function (docRef) {
                    console.log("Document written");
                  })
                  .catch(function (error) {
                    console.error("Error adding document: ", error);
                  });
    });
  });
});
