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
                 dataObject = new features(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29], data[30], data[31], data[32], data[33], data[34], data[35], data[36], data[37]);
                 csvData.push(dataObject);
             })
             .on('end', function () {

                 csvData.shift();
             });
         stream.pipe(csvStream);
     }
 });