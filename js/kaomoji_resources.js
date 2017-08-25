var SPECIAL_KEY = ';';
var SPECIAL_KEYCODE = 186;
var kaomojis = [

        {"kao" : "(╯°□°）╯︵ ┻━┻", "id" : "1","name" : "tableflip" },
        {"kao" : "┬─┬ノ( º _ ºノ)" , "id" : "2","name" : "tablefix" },
        {"kao" : "¯\\_(ツ)_/¯" ,"id" : "3","name" : "shrug" }

];

// create a map from the ids and names to the kaomojis

var kaomojiMap = {};
for (i = 0; i < kaomojis.length; i++) {
        cur = kaomojis[i];
        kaomojiMap[cur.id] = cur.kao;
        kaomojiMap[cur.name] = cur.kao;
}
