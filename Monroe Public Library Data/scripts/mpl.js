/**
javascript source code for mpl web page
developed by: Thanh-Tung Pham
Script date: Nov 22
*/

// showMessage func returns a message from the system
function showMessage(str) {
	document.write("<h3>Welcome to the " + str + "</h3>");
}

function showEM(userName, emServer) {
	// reverse the text of the userName parameter
	userName = emReverse(userName);
	// reverse the text of the emServer parameter
	emServer = emReverse(emServer);
  var emLink = userName + "@" + emServer;
  document.write("<a href='mailto:" + emLink + "'>");
  document.write(emLink);
  document.write("</a>");
}

// create the emReverse func that reverses the order of characters in a text string
function emReverse(str) {
	if (!str) {
		return '';
	}
	var revStr = '';
	for (var counter = str.length - 1; counter >= 0; counter--) {
		revStr += str.charAt(counter);
	}
	return revStr;
}

