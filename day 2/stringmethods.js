
b= 'lion is the king of animals';
c= 'tiger';
//charAt(index)
console.log(b.charAt(0)); //give character at index 0

//charCodeAt(index)
console.log(b.charCodeAt(0)); //return unicode of the char at index 0

//endsWith
console.log(b.endsWith('animals'));//checking wheather the string is ends with animals or not

//localeCompare
//-1 if the reference string is sorted before the compareString
//0 if the two strings are equal
//1 if the reference string is sorted after the compareString
console.log(b.localeCompare(c));// returns -1

//match(regularexp)
console.log(b.match(/i/g)); //return 4 times i

//repeat
console.log(b.repeat(2)); //copies string by given count

//replace one word to another
console.log(b.replace("king","Raja"));

//search
console.log(b.search("king"));//returns 12: after 12 literals king string is been searched

//startsWith(string)
console.log(b.startsWith("lion"));//check wheather the string starts with 'lion' or not

//substr(start,end)
console.log(c.substr(1, 3));//it will just print the from tiger to ige

//substring
console.log(c.substring(1, 3));// returns ig

//toString
console.log(c.toString());//returns the value of given string
