var SPECIAL_KEY = ';';
var SPECIAL_KEYCODE = 186;
var kaomojis = [

        {"kao" : "(╯°□°）╯︵ ┻━┻", "id" : "1","name" : "flip" },
        {"kao" : "┬─┬ノ( º _ ºノ)" , "id" : "2","name" : "fix" },
        {"kao" : "¯\\_(ツ)_/¯" ,"id" : "3","name" : "shrug" },
        {"kao" : "(シ_ _)シ" ,"id" : "4","name" : "bow" },
        {"kao" : "( ͡° ͜ʖ ͡°)" ,"id" : "5","name" : "lenny" },
        {"kao" : "(´・ω・｀)" ,"id" : "6","name" : "denko" },
        {"kao" : "(◕ᴗ◕✿)" ,"id" : "7","name" : "girl" },
        {"kao" : "ᕕ( ᐛ )ᕗ" ,"id" : "8","name" : "gary" },
        {"kao" : "ヽ༼ຈل͜ຈ༽ﾉ" ,"id" : "9","name" : "donger" },
        {"kao" : "ಠ_ಠ" ,"id" : "10","name" : "judge" },
        {"kao" : "三三ᕕ( ⌓̈ )ᕗ" ,"id" : "11","name" : "run" },
        {"kao" : "(☞ ᐛ )☞" ,"id" : "12","name" : "point" },
        {"kao" : "（。・＿・。）ﾉ" ,"id" : "13","name" : "hi" },
        {"kao" : "( ˘ ³˘)♥" ,"id" : "14","name" : "kiss" },
        {"kao" : "ヽ(*｀ﾟД´)ﾉ" ,"id" : "15","name" : "mad" },
        {"kao" : "（＾－＾）" ,"id" : "16","name" : "content" },
        {"kao" : "（￣^￣）凸" ,"id" : "17","name" : "finger" },
        {"kao" : "|・ω・`）" ,"id" : "18","name" : "peek" },
        {"kao" : "ヽ( ´O｀)ゞ" ,"id" : "19","name" : "morning" },
        {"kao" : "ｷﾀ━(ﾟ∀ﾟ)━!" ,"id" : "20","name" : "kita" },
        {"kao" : "(ಠ_ಠ)>⌐■-■" ,"id" : "21","name" : "sunoff" },
        {"kao" : "( ͡⌐■_-■)" ,"id" : "22","name" : "sunon" },
        {"kao" : "[̲̅$̲̅(̲̅ ͡ಠ_ಠ)̲̅$̲̅]" ,"id" : "23","name" : "money" },
        {"kao" : "(´・(oo)・｀)" ,"id" : "24","name" : "pig" },
        {"kao" : "ʕ •ᴥ•ʔ" ,"id" : "25","name" : "bear" },
        {"kao" : "U・ᴥ・U" ,"id" : "26","name" : "dog" }


];

// create a map from the ids and names to the kaomojis

var kaomojiMap = {};
for (i = 0; i < kaomojis.length; i++) {
        cur = kaomojis[i];
        kaomojiMap[cur.id] = cur.kao;
        kaomojiMap[cur.name] = cur.kao;
}
