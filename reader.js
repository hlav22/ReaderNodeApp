 const fs = require('fs');
 const path = require('path');
 const csv = require('fast-csv');
 const csvtojson = require('csvtojson'); // This is a package that works with fast csv to give us the json format we need for the data base.
 const User = require('./models/features'); //This gains access for the objects created for the application
 const fileName = 'sampleData.csv';

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
         let csvData = [];
         let csvStream = csv
             .parse()
             .on('data', function (data) {
                 user.push({
                     feature: data[0],
                     name: data[1],
                     description: data[2],
                     createdAt: data[3]
                 });
             })
             .on('end', function () {
                 //remove the first line
                 csvData.shift();
             });
         stream.pipe(csvStream);
     }
 });