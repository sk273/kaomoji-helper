var SPECIAL_KEY = ';';
var SPECIAL_KEYCODE = 186;

document.addEventListener('keyup', function(e) { 
        if (e.keyCode == SPECIAL_KEYCODE) { // if semi-colon gets pressed... 
                var active = document.activeElement;
                var text = extractValue(active);
                
                var caretPos = getCaretCharacterOffsetWithin(active) - 1;
                var right = caretPos; // 

                var left = findSpecial(-1, right - 1, text);
                if (left === -1) {
                        left = right;
                        right = findSpecial(1, left + 1, text);
                }

                if (left >= 0 && right >= 0) {

                        var kaomoji = "KAOMOJI";

                        if (active.value !== undefined) {
                                active.value = text.substring(0, left) + kaomoji + text.substring(right + 1);
                        }
                        else if (active.textContent !== undefined) {
                                active.textContent = text.substring(0, left) + kaomoji + text.substring(right + 1);
                        }

                        setCaretCharacterOffsetWithin(active, left + kaomoji.length);

                }              
        }
});

// Taken from Tim Down's answer in the following SO answer
var getCaretCharacterOffsetWithin = function(element) {
        if (element.selectionStart !== undefined) return element.selectionStart;
        var caretOffset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (typeof win.getSelection != "undefined") {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {
                        var range = win.getSelection().getRangeAt(0);
                        var preCaretRange = range.cloneRange();
                        preCaretRange.selectNodeContents(element);
                        preCaretRange.setEnd(range.endContainer, range.endOffset);
                        caretOffset = preCaretRange.toString().length;
                }
        } else if ( (sel = doc.selection) && sel.type != "Control") {
                var textRange = sel.createRange();
                var preCaretTextRange = doc.body.createTextRange();
                preCaretTextRange.moveToElementText(element);
                preCaretTextRange.setEndPoint("EndToEnd", textRange);
                caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;
};

var setCaretCharacterOffsetWithin = function(element, offset) {
        if (element.selectionStart !== undefined) {
                element.selectionStart = offset;
                element.selectionEnd = offset;
        } else {
                element.focus();
                var range = document.createRange();
                range.setStart(element.childNodes[0], offset);
                range.collapse(true);
                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
        }
};

var findSpecial = function(direction, start, text) {
        while (start < text.length && start >= 0) {
                if (text.charAt(start) === SPECIAL_KEY) return start;
                else if (text.charAt(start) === ' ') break;
                start += direction;
        }
        return -1;
};

var extractValue = function(active) {
        if (active.value !== undefined) return active.value;
        return active.textContent;
};

