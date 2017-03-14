var count = 0;
var count2 = 0;
var interval = 100;
var total_words = 10;
var final_value = 0;
var initialTimer = 0;
var handler = 0;
var initial_name = "ARTIFICIAL INTELLIGENCE KNOWLEDGE "

initialTimer = setTimeout( function asd(){pickChange(); },interval);

var alphabet = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z',
                        '!','£','$','%','&','/','(',')','=','?','^','é','è','+','*','à','ò','ù','-','.',',',
						'°','§','ç','{','}']

var final_name = [String.fromCharCode(34+45),String.fromCharCode(2*8/2/4*41),
                           String.fromCharCode(69-2),String.fromCharCode(2*3*6*2),
						   String.fromCharCode(138/2),String.fromCharCode(100-17),
						   String.fromCharCode(84),String.fromCharCode(82),
						   String.fromCharCode(65)]

var r_text = new Array ();
	r_text = ["ONES", "OFFICE", "OPERATORS", "ORGANIZATION", "OBSESSED",
	              "ORIGAMI","OBJECTS", "OFFICERS", "OAKS", "OATMEALS", "OCARINAS",
				  "OWLS","OPTIMIZATION", "OPPORTUNITY", "OPENERS", "OMELETTES", "ODYSSEY"]

var r2_text = new Array();

var idx = 0;
var idx_array = new Array();
for (idx=0; idx<r_text.length-1; idx++) {
	idx_array.push(idx);
	final_value++;
	//console.log(final_value)
}
//idx_array.push(10)
shuffle(idx_array)

var i=0;
i = Math.floor(10000*Math.random());

function pickChange(){

	//remove timer and create new one, this allows to change the interval each time
	clearInterval(handler)
	handler = setInterval(pickChange, interval)

	//with a very low chance you'll get our name or the words display
	if (i>0 && i<5 && count < final_value) changeText()
	else if (i==0 && count < final_value) {changeText2()}

}

function changeText(){
	// While we reach the total words shown, count becomes a random idx from idx_array
	count2 < total_words ? count = idx_array[count2] : count = final_value
	// Show the random word chosen
	$("#INITIAL-NAME").text(initial_name);
	$("#O-WORD").text(r_text[idx_array[count]]);
	// Count2 counts the total amount of times we do the animation
	count2 < total_words ? count2++ : count2 = total_words;
	// Later words stay longer on the screen
	interval = interval+count*8;
}

function randomORCH(counter){
	if (counter<8)
		r2_text[counter] = alphabet[Math.floor(alphabet.length*Math.random())];
	else
		r2_text[counter] = 'A';
}

idx = 0;
counter = 0;

function changeText2(){

	// Show a random char until counter is right
	randomORCH(counter)
	var s = r2_text.join("")
	$("#INITIAL-NAME").text(initial_name);
	$("#O-WORD").text(s);

	interval = 40;
	idx++;

	/* Each char position should show random chars for n times
	// and n should decrease to speed up the animation towards
	// the ending */
	if (idx % (final_name.length-counter) == 0) {
		// Show the correct char in each position at end of random animation
		r2_text[counter] = final_name[counter];
		counter++;
		idx=0;
	}

	// Stop setting timers
	if (counter==final_name.length) {
		clearInterval(handler)
	}
}

// Shuffle the index values to pick random words each time
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
