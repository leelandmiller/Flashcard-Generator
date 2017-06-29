function ClozeCard(text, cloze) {
    if (this.isValid(text, cloze)) {
        this.partialText = this.setPartialText(text, cloze);
        this.cloze = cloze;
        this.fullText = text;
    } else {
        console.log('Error. The text does not contain the cloze text that was given');
    }
}

ClozeCard.prototype.isValid = function (text, cloze) {
    if (text.includes(cloze)) {
        return true;
    } else {
        return false;
    }
};

ClozeCard.prototype.setPartialText = function (text, cloze) {
    return text.replace(cloze, '...');
};

ClozeCard.prototype.getPartialText = function () {
    return this.partialText;
};

ClozeCard.prototype.getFullText = function () {
    return this.fullText;
};

ClozeCard.prototype.getClozeText = function () {
    return this.cloze;
};

module.exports = ClozeCard;
