function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

BasicCard.prototype.getFront = function () {
    return this.front;
};

BasicCard.prototype.getBack = function () {
    return this.back;
};

BasicCard.prototype.setFront = function (newFront) {
    this.front = newFront;
};

BasicCard.prototype.setBack = function (newBack) {
    this.back = newBack;
};

module.exports = BasicCard;
