function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partialText = this.setPartialText(text, cloze);
}

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
