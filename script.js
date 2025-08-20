function firstChar(text) {
  // your code here
	var strin=text.trim()
	 return strin.length > 0 ? strin[0] : "";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
