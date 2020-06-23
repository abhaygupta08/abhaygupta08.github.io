/*
Javascript Document
Author: Jacob Scott
Created: 11-14-15
Modified: 12-17-15

Handles functionality for rich text editor web component.
*/


$(document).ready(function(){
	// Call iFrameReady function
	iFrameReady();
	
	// Handle Editor Permissions
	setPermissions(1,1,1,1,1,1,1,1,1,1,1);
	
	// Handle text file import event
	$("#fileImport").change(function() {
		var fr = new FileReader();
		console.log("This = " + this);
		fr.onload = function() {
			loadContent(this.result);
			console.log("This.result = " + this.result);
		};
		fr.readAsText(this.files[0]);
		console.log("This.Files[0] = " + this.files[0]);
	});
	
	
	// Load content
	//loadContent("This is <i>Awesome</i>!");
	
	// Preformat text font
	$('.editor-richText-box').ready(function() {
		richTextBox.document.execCommand('fontName',false,'sans-serif'); 
	})
	
	// Dropdown Functionality
	// font family
	$('#fontFamily').change(function() {
		var fontFamily = this.value;
		// Match dropdown box style to selected color
		$(this).css('font-family',fontFamily);
		
		// Set selected color
		richTextBox.document.execCommand('fontName',false,fontFamily);
	});
	
	$('#parStyle').change(function() {
		richTextBox.document.execCommand('formatBlock',false,this.value); 
	});
	
	$('#fontSize').change(function() {
		richTextBox.document.execCommand('fontSize',false,this.value); 
	});
	
	$('#textColor').change(function() {
		var colorValue = this.value;
		var textColor = $(this).css('color');
		console.log("TextColor: ",textColor);
		if (colorValue == "CUSTOM") {
			// Prompt for Custom Color
			colorValue = prompt("Enter the HEX value or RGBA value: ","");
		}
		// Match dropdown box style to selected color
		$(this).css('background-color',colorValue);
		
		// Set selected color
		richTextBox.document.execCommand('foreColor',false,colorValue); 
	});
	
	$('#textHilight').change(function() {
		var color = this.value;
		if (color == "CUSTOM") {
			// Prompt for Custom Color
			color = prompt("Enter the HEX value or RGBA value: ","");
		}
		richTextBox.document.execCommand('foreColor',false,color); 
	});
	
});

/* FUNCTION DEFINITIONS */

/* FUNCTION: iFrameReady()
Allows user editing of iFrame contents. */
function iFrameReady() {
	richTextBox.document.designMode = 'On';
}

/* FUNCTION: submitContent()
Inserts rich text iFrame content into textarea field and submits the content to the parser */
function submitContent() {
	var theForm = document.getElementById("wc-richTextEditor-form");
	theForm.elements["textareaBox"].value = window.frames['richTextBox'].document.body.innerHTML;
	theForm.submit();
}

/* FUNCTION: importContent()
Gets html content from database and injects it into the editor iframe */
function loadContent(content) {
	var theForm = document.getElementById("wc-richTextEditor-form");
	window.frames['richTextBox'].document.body.innerHTML = content;
}

/* FUNCTION: setPermissions()
Gets object editing permissions and sets Constants for editor's use. */
function setPermissions(HTML,CHANGE_PAR_STYLE,ALLOW_H1,CHANGE_INLINE_STYLE,CHANGE_SIZE,CHANGE_FONT_FAMILY,CHANGE_PAR_ALIGNMENT,CHANGE_TEXT_COLOR,ADD_LINK,ADD_LIST,ADD_IMAGE) {
		// Restrict all HTML features
		if (HTML == 0) {
			CHANGE_PAR_STYLE = 0;
			ALLOW_H1 = 0;
			CHANGE_INLINE_STYLE = 0;
			CHANGE_SIZE = 0;
			CHANGE_FONT_FAMILY = 0;
			CHANGE_PAR_ALIGNMENT = 0;
			CHANGE_TEXT_COLOR = 0;
			ADD_LINK = 0;
			ADD_LIST = 0;
			ADD_IMAGE = 0;
		}
		
		//Handle Permissions
		if (CHANGE_PAR_STYLE == 0) {
			$('.editor-controls > #parStyleGroup').hide();
		}
		if (ALLOW_H1 == 0) {
			$('option#heading1').hide();
			$('option#heading1').selected = false;
		}
		if (CHANGE_INLINE_STYLE == 0) {
			$('.editor-controls > #inlineStyleGroup').hide();
		}
		if (CHANGE_SIZE == 0) {
			$('.editor-controls > #textSizeGroup').hide();
		}
		if (CHANGE_FONT_FAMILY == 0) {
			$('.editor-controls > #fontFamilyGroup').hide();
		}
		if (CHANGE_PAR_ALIGNMENT == 0) {
			$('.editor-controls > #alignmentGroup').hide();
		}
		if (CHANGE_TEXT_COLOR == 0) {
			$('.editor-controls > #textColorGroup').hide();
		}
		if (ADD_LIST == 0) {
			$('.editor-controls > #listsGroup').hide();
		}
		if (ADD_LINK == 0) {
			$('.editor-controls > #linkGroup').hide();
		}
}

/* FUNCTION: importFromFile()
Gets object editing permissions and sets Constants for editor's use. */


/* FUNCTION: header1Sel()
Sets Header 1 peragraph style for the text */
function header1Sel() {
	richTextBox.document.execCommand('formatBlock',false,'h1'); 
}

/* FUNCTION: header2Sel()
Sets Header 2 peragraph style for the text */
function header2Sel() {
	richTextBox.document.execCommand('formatBlock',false,'h2'); 
}

/* FUNCTION: header3Sel()
Sets Header 3 peragraph style for the text */
function header3Sel() {
	richTextBox.document.execCommand('formatBlock',false,'h3'); 
}

/* FUNCTION: paragraphSel()
Sets Paragraphy peragraph style for the text */
function paragraphSel() {
	richTextBox.document.execCommand('formatBlock',false,'p'); 
}

/* FUNCTION: fontSel()
Change font family of selected text. */
function fontSel() {
	
}

/* FUNCTION: sizeSel()
Change font size of selected text. */
function sizeSel() {
	var size = prompt('Font size:', '');
	richTextBox.document.execCommand('FontSize',false,size);
}

/* FUNCTION: boldSel()
Bolds selected text. */
function boldSel() {
	richTextBox.document.execCommand('bold',false,null); 
}

/* FUNCTION: underlineSel()
Underlines selected text. */
function underlineSel() {
	richTextBox.document.execCommand('underline',false,null); 
}

/* FUNCTION: italicSel()
Italicizes selected text. */
function italicSel() {
	richTextBox.document.execCommand('italic',false,null); 
}

/* FUNCTION: strikethroughSel()
Stikes through selected text. */
function strikethroughSel() {
	richTextBox.document.execCommand('strikeThrough',false,null); 
}

/* FUNCTION: textColorSel()
Changes text color of selected text. */
function textColorSel() {
	
}

/* FUNCTION: highlightColorSel()
Changes highlight color of selected text. */
function highlightColorSel() {
	
}

/* FUNCTION: alignLeftSel()
Left-aligns selected text. */
function alignLeftSel() {
	richTextBox.document.execCommand('justifyLeft',false,null); 
}

/* FUNCTION: alignCenterSel()
Center-aligns selected text. */
function alignCenterSel() {
	richTextBox.document.execCommand('justifyCenter',false,null); 
}

/* FUNCTION: alignRightSel()
Right-aligns selected text. */
function alignRightSel() {
	richTextBox.document.execCommand('justifyRight',false,null); 
}

/* FUNCTION: alignJustifySel()
Justifies selected text. */
function alignJustifySel() {
	richTextBox.document.execCommand('justifyFull',false,null); 
}

/* FUNCTION: newOlSel()
Creates new Ordered List. */
function newOlSel() {
	richTextBox.document.execCommand("InsertOrderedList", false,"newOL");
}

/* FUNCTION: newUlSel()
Creates new Unordered List. */
function newUlSel() {
	richTextBox.document.execCommand("InsertUnorderedList", false,"newUL");
}

/* FUNCTION: linkSel()
Creates new hyperlink. */
function linkSel() {
	var linkURL = prompt("Enter URL:", "http://"); 
	richTextBox.document.execCommand("CreateLink", false, linkURL);
}

/* FUNCTION: unlinkSel()
Removes hyperlink. */
function unlinkSel() {
	richTextBox.document.execCommand("Unlink", false, null);
}