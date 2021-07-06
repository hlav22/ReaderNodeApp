class features {
    static findFeature(feature, cb) {
        setImmediate(() => {
            cb(null, new features(feature));
        });
    }

    constructor() {
        this.feature = feature;
        this.attributeNumber = attributeNumber;
        this.attributeType = attributeType;
        this.location = location;
        this.date = date;
    }
    //Get methods for created objects
    getFeature() {
        return '${this.feature}';
    }
    getAttributeNumber() {
        return '${this.attributeNumber}';
    }
    getAttributeType() {
        return '${this.attributeType}';
    }
    getLocation() {
        return '${this.location}';
    }
    getDate() {
        return '${this.date}';
    }
    // Setter methods for created objects
    setFeature(feature) {
        return this.feature = feature;
    }
    setAttributeNumber(attributeNumber) {
        return this.attributeNumber = attributeNumber;
    }
    setAttributeType(attributeType) {
        return this.attributeType = attributeType;
    }
    setLocation(location) {
        return this.location = location;
    }
    setDate(date) {
        return this.date = date;
    }
}

module.exports = features;