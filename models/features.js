class features {
    static findFeature(feature, cb) {
        setImmediate(() => {
            cb(null, new features(feature));
        });
    }

    constructor(date, location, type, comment) {
        this.date = date;
        this.location = location;
        this.type = type;
        this.comment = comment;
    }

    //Get methods for created objects
    getDate() {
        return this.date;
    }
    getLocation() {
        return this.location;
    }
    getType() {
        return this.type;
    }
    getComment() {
        return this.comment;
    }

    // Setter methods for created objects
    setDate(date) {
        this.date = date;
    }
    setLocation(location) {
        this.location = location;
    }
    setType(type) {
        this.type = type;
    }
    setComment(comment) {
        this.comment = comment;
    }
}

module.exports = features;