class features {
    static findFeature(feature, cb) {
        setImmediate(() => {
            cb(null, new features(feature));
        });
    }
    consructor(date, FB_NO, FB_PG, number, comment, weight, type, joint_id, event_type, degree, direction, degree_2, direction_2, cover, location, no_wires, vented, crossing, OD, wall_thickness, angle, id, quality, material, owner, clearance, serial_number, model_number, NO_Of_Members, electric, condition, height, photo_no, coating, heat, placement, invert, sack_weight) {
        this.date = date;
        this.FB_NO = FB_NO;
        this.FB_PG = FB_PG;
        this.number = number;
        this.comment = comment;
        this.weight = weight;
        this.type = type;
        this.joint_id = joint_id;
        this.event_type = event_type;
        this.degree = degree;
        this.direction = direction;
        this.degree_2 = degree_2;
        this.direction_2 = direction_2;
        this.cover = cover;
        this.location = location;
        this.no_wires = no_wires;
        this.vented = vented;
        this.crossing = crossing;
        this.OD = OD;
        this.wall_thickness = wall_thickness;
        this.angle = angle;
        this.id = id;
        this.quality = quality;
        this.material = material;
        this.owner = owner;
        this.clearance = clearance;
        this.serial_number = serial_number;
        this.model_number = model_number;
        this.NO_Of_Members = NO_Of_Members;
        this.electric = electric;
        this.condition = condition;
        this.height = height;
        this.photo_no = photo_no;
        this.coating = coating;
        this.heat = heat;
        this.placement = placement;
        this.invert = invert;
        this.sack_weight = sack_weight;
    }

    //Get methods for created objects
    getDate() {
        return this.date;
    }
    getFB_NO() {
        return this.FB_NO;
    }
    getFB_PG() {
        return this.FB_PG
    }
    getNumber() {
        return this.number;
    }
    getComment() {
        return this.comment;
    }
    getWeight() {
        return this.weight;
    }
    getType() {
        return this.type;
    }
    getJoint_ID() {
        return this.joint_id;
    }
    getEvent_Type() {
        return this.event_type;
    }
    getDegree() {
        return this.degree;
    }
    getDirection() {
        return this.direction;
    }
    getDegree2() {
        return this.degree_2;
    }
    getDirection2() {
        return this.direction_2;
    }
    getCover() {
        return this.cover;
    }
    getLocation() {
        return this.location;
    }
    getNO_Wires() {
        return this.no_wires;
    }
    getVented() {
        return this.vented;
    }
    getCrossing() {
        return this.crossing;
    }
    getOD() {
        return this.OD;
    }
    getWallThickness() {
        return this.wall_thickness;
    }
    getAngle() {
        return this.getAngle;
    }
    getID() {
        return this.id;
    }
    getQuality() {
        return this.quality;
    }
    getMaterial() {
        return this.material;
    }
    getOwner() {
        return this.owner;
    }
    getClearance() {
        return this.clearance;
    }
    getSerialNumber() {
        return this.serial_number;
    }
    getModelNumber() {
        return this.model_number;
    }
    getNoMembers() {
        return this.NO_Of_Members;
    }
    getElectric() {
        return this.electric;
    }
    getCondition() {
        return this.condition;
    }
    getHeight() {
        return this.height;
    }
    getPhotoNo() {
        return this.photo_no;
    }
    getCoating() {
        return this.coating;
    }
    getHeat() {
        return this.heat;
    }
    getPlacement() {
        return this.placement;
    }
    getInvert() {
        return this.invert;
    }
    getSackWeight() {
        return this.sack_weight;
    }
    // Setter methods for created objects
    setDate(date) {
        this.date = date;
    }
    setFB_NO(FB_NO) {
        this.FB_NO = FB_NO;
    }
    setFB_PG(FB_PG) {
        this.FB_PG = FB_PG;
    }
    setNumber(number) {
        this.number = number;
    }
    setComment(comment) {
        this.comment = comment;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setType(type) {
        this.type = type;
    }
    setJoint_ID(joint_id) {
        this.joint_id = joint_id;
    }
    setEvent_Type(event_type) {
        this.event_type = event_type;
    }
    setDegree(degree) {
        this.degree = degree;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    setDegree2(degree_2) {
        this.degree_2 = degree_2;
    }
    setDirection2(direction_2) {
        this.direction_2 = direction_2;
    }
    setCover(cover) {
        this.cover = cover;
    }
    setLocation(location) {
        this.location = location;
    }
    setNO_Wires(no_wires) {
        this.no_wires = no_wires;
    }
    setVented(vented) {
        this.vented = vented;
    }
    setCrossing(crossing) {
        this.crossing = crossing;
    }
    setOD(OD) {
        this.OD = OD;
    }
    setWallThickness(wall_thickness) {
        this.wall_thickness = wall_thickness;
    }
    setAngle(angle) {
        this.angle = angle;
    }
    setID(id) {
        this.id = id;
    }
    setQuality(quality) {
        this.quality = quality;
    }
    setMaterial(material) {
        this.material = material;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    setClearance(clearance) {
        this.clearance = clearance;
    }
    setSerialNumber(serial_number) {
        this.serial_number = serial_number;
    }
    setModelNUmber(model_number) {
        this.model_number = model_number;
    }
    setNOMembers(NO_Of_Members) {
        this.NO_Of_Members = NO_Of_Members;
    }
    setElectric(electric) {
        this.electric = electric;
    }
    setCondition(condition) {
        this.condition = condition;
    }
    setHeight(height) {
        this.height = height;
    }
    setPhotoNO(photo_no) {
        this.photo_no = photo_no;
    }
    setCoating(coating) {
        this.coating = coating;
    }
    setHeat(heat) {
        this.heat = heat;
    }
    setPlacement(placement) {
        this.placement = placement;
    }
    setInvert(invert) {
        this.invert = invert;
    }
    setSackWeight(sack_weight) {
        this.sack_weight = sack_weight;
    }
}
module.exports = features;