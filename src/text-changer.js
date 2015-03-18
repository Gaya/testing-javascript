var textChanger = {
    replaceText: function (element, newText) {
        if (!this.isDomElement(element)) {
            throw new Error("element is not a DOM element");
        }

        this.removeChildren(element);

        element.appendChild(
            document.createTextNode(newText)
        );
    },

    isDomElement: function (element) {
        return (element && element.nodeType && element.nodeType === 1);
    },

    removeChildren: function (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
};

module.exports = function () {
    return Object.create(textChanger);
};