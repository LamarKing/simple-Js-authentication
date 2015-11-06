
function logFunc()
{
	var email = prompt(" Enter Your Email");
	var passChar = ["a","A","b","B","c","C","d","D","e","E",
	"f","F","g","G","h","H","i","I","j","J","k","K","l","L",
	"m","M","n","N","o","O","p","P","q","Q","r","R","s","S",
	"t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];

	var letter = " ";
	var word = "";

	var len = Math.floor( Math.random() * (8)  + 1 );

	for (i=0; i < len; i++)
	{
		letter = passChar[Math.floor( Math.random() * (passChar.length) )];
	
		word = word + letter;
	}
	
	document.write('<a href="mailto:'+email+'?subject='+"PASSWORD"+'&body='+word'">'+'send password to your email'+'<'+'/a>'); 
}
