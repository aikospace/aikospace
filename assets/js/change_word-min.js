var count = 0;
var count2 = 0;
var interval = 100;
var total_words = 10;
var final_value = 0;
var initialTimer = 0;
var handler = 0;
var initial_name = "ARTIFICIAL INTELLIGENCE KNOWLEDGE ";
initialTimer = setTimeout(function asd() {
    pickChange()
}, interval);
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z", "!", "£", "$", "%", "&", "/", "(", ")", "=", "?", "^", "é", "è", "+", "*", "à", "ò", "ù", "-", ".", ",", "°", "§", "ç", "{", "}"];
var final_name = [String.fromCharCode(34 + 45), String.fromCharCode(2 * 8 / 2 / 4 * 41), String.fromCharCode(69 - 2), String.fromCharCode(2 * 3 * 6 * 2), String.fromCharCode(138 / 2), String.fromCharCode(100 - 17), String.fromCharCode(84), String.fromCharCode(82), String.fromCharCode(65)];
var r_text = new Array();
r_text = ["ONES", "OFFICE", "OPERATORS", "ORGANIZATION", "ORIGAMI", "OH YEAH!", "OBJECTS", "OFFICERS", "OAKS", "OATMEALS", "OCARINAS", "OWLS", "OPTIMIZATION", "OPPORTUNITY", "OPENERS", "OMELETTES", "ODYSSEY"];
var r2_text = new Array();
var idx = 0;
var idx_array = new Array();
for (idx = 0; idx < r_text.length - 1; idx++) {
    idx_array.push(idx);
    final_value++
}
shuffle(idx_array);
var i = 0;
i = Math.floor(20 * Math.random());

function pickChange() {
    clearInterval(handler);
    handler = setInterval(pickChange, interval);
    if (i > 0 && i < 5 && count <= final_value) {
        changeText()
    }
    if (i > 4 && i < 10 && count < final_value) {
        changeText2()
    }
    if (i > 9 && i < 15 && count < final_value) {
        changeText3()
    }
}

function changeText() {
    count2 < total_words ? count = idx_array[count2] : count = final_value;
    $("#INITIAL-NAME").text(initial_name)
    if (count==final_value) {
      $("#O-WORD").text(final_name.join(""));
    } else {
      $("#O-WORD").text(r_text[idx_array[count]]);
    }

    count2 < total_words ? count2++ : count2 = total_words;
    interval = interval + count * 8
}

function randomORCH(a) {
    if (a < 8) {
        r2_text[a] = alphabet[Math.floor(alphabet.length * Math.random())]
    } else {
        r2_text[a] = "A"
    }
}
idx = 0;
counter = 0;

function changeText2() {
    randomORCH(counter);
    var a = r2_text.join("");
    $("#INITIAL-NAME").text(initial_name);
    $("#O-WORD").text(a);
    interval = 40;
    idx++;
    if (idx % (final_name.length - counter) == 0) {
        r2_text[counter] = final_name[counter];
        counter++;
        idx = 0
    }
    if (counter == final_name.length) {
        clearInterval(handler)
    }
}

function changeText3() {
  $("#INITIAL-NAME").text("ARTIFICIAL INTELLIGENCE IN SPACE. ")
  $("#O-WORD").text("DELIVERED.")
}

function shuffle(d) {
    var c = d.length,
        b, a;
    while (0 !== c) {
        a = Math.floor(Math.random() * c);
        c -= 1;
        b = d[c];
        d[c] = d[a];
        d[a] = b
    }
    return d
};
