class features {
    static findFeature(feature, cb) {
        setImmediate(() => {
            cb(null, new features(feature));
        });
    }

    constructor(feature, attributeNumber, attributeType, location, date) {
        this.feature = feature;
        this.attributeNumber = attributeNumber;
        this.attributeType = attributeType;
        this.location = location;
        this.date = date;
    }
    //Get methods for created objects
    getFeature() {
        return this.feature;
    }
    getAttributeNumber() {
        return this.attributeNumber;
    }
    getAttributeType() {
        return this.attributeType;
    }
    getLocation() {
        return this.location;
    }
    getDate() {
        return this.date;
    }
    // Setter methods for created objects
    setFeature(feature) {
        this.feature = feature;
    }
    setAttributeNumber(attributeNumber) {
        this.attributeNumber = attributeNumber;
    }
    setAttributeType(attributeType) {
        this.attributeType = attributeType;
    }
    setLocation(location) {
        this.location = location;
    }
    setDate(date) {
        this.date = date;
    }
}

module.exports = features;