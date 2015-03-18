var assert = require("assert"),
    textChanger = require("../src/text-changer.js");

describe('TextChanger', function(){
    var element = document.createElement("section");
    element.appendChild(
        document.createElement("span")
            .appendChild(
                document.createTextNode("Replace me")
            )
    );

    describe('#changeText(element, text)', function() {

        it('should replace the content of the element with given text', function() {
            textChanger().replaceText(element, "test");

            assert.equal(element.childNodes[0].nodeValue, "test");
        });

        it('should throw and error if element is not a DOM element', function() {
            assert.throws(function () {
                textChanger().replaceText(null, "test")
            }, /DOM element/);
        });

    });
});