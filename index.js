console.log('Loading function');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const csvtojson = require('csvtojson'); // This is a package that works with fast csv to give us the json format we need for the data base.
const featuresClass = require('./models/features'); //This gains access for the objects created for the application
const aws = require('aws-sdk');
const s3 = new aws.S3({
    apiVersion: '2006-03-01'
}); // This API allows you to get object from bucket 
exports.handler = async (event, context) => {
    //const fileName = 'SampleEntry.csv';
    const bucket = 'arn:aws:s3:::hlavput';
    const key = 'SampleEntry.csv';
    let fileToFormat = s3.getObject({
        Bucket: bucket,
        Key: key,
    });
    fs.writeFile('/tmp/SampleEntry.csv'); //When writing to a directory after I get it to work, should definetly add a error check for good practice if something where to go wrong.
    fs.access(fileToFormat, (err) => {
        if (err) {
            console.log("The file does not exist or is not in CSV format.");
        } else {
            csvtojson()
                .fromFile(fileToFormat)
                .then(csvData => {
                    console.log(csvData);
                });

            let stream = fs.createReadStream(fileToFormat);
            let csvData = []
            let csvStream = csv
                .parse()
                .on('data', function (data) {
                    let dataObject = new featuresClass(data[0], data[1], data[2], data[3]);
                    csvData.push(dataObject);
                })
                .on('end', function () {

                    csvData.shift();
                });
            stream.pipe(csvStream);
        }
    });
};