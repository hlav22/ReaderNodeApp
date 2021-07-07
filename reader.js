 const fs = require('fs');
 const path = require('path');
 const csv = require('fast-csv');
 const csvtojson = require('csvtojson'); // This is a package that works with fast csv to give us the json format we need for the data base.
 const featuresClass = require('./models/features'); //This gains access for the objects created for the application
 const features = require('./models/features');
 const fileName = 'SampleEntry.csv';

 fs.access(fileName, (err) => {
     if (err) {
         console.log("The file does not exist or is not in CSV format.");
     } else {
         csvtojson()
             .fromFile(fileName)
             .then(csvData => {
                 console.log(csvData);
             })

         let stream = fs.createReadStream(fileName);
         let csvData = []
         let csvStream = csv
             .parse()
             .on('data', function (data) {
                 dataObject = new features(data[0], data[1], data[2], data[3]);
                 csvData.push(dataObject);
             })
             .on('end', function () {

                 csvData.shift();
             });
         stream.pipe(csvStream);
     }
 });