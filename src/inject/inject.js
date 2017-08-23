var SPECIAL_KEY = ';';

document.addEventListener('keyup', function(e) { 
        if (e.keyCode == 186) { // if semi-colon gets pressed... 59 SHOULD BE REPLACED WITH VARIABLE
                var active = document.activeElement;
                var caretPosition = active.selectionStart; // +1 is needed because 
                var text = active.value;
                var right = caretPosition - 1; // 

                console.log(text);

                var left = findSpecial(-1, right - 1, text);
                if (left === -1) {
                        left = right;
                        right = findSpecial(1, left + 1, text);
                        console.log("not found");
                }

                if (left >= 0 && right >= 0) {

                        console.log("left: " + left);
                        console.log("right: " + right);

                        var kaomoji = "KAOMOJI";

                        active.value = text.substring(0, left) + kaomoji + text.substring(right + 1);

                        active.focus();
                        active.selectionStart = left + kaomoji.length + 1;
                        active.selectionEnd = left + kaomoji.length + 1;  
                }              
        }
});

var findSpecial = function(direction, start, text) {
        while (start < text.length && start >= 0) {
                if (text.charAt(start) === SPECIAL_KEY) return start;
                else if (text.charAt(start) === ' ') break;
                start += direction;
        }
        return -1;
};
