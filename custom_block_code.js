// Language Code

// refine search -- beginning block
Blockly.Blocks['refine_search'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("NAME")
        .appendField("refine search");
    this.setTooltip('Drag the blocks to create a more specific search');
    this.setDeletable(false);
    this.setMovable(false);
  }
};

// site block
Blockly.Blocks['search_site'] = {
	init: function() {
	    //this.setHelpUrl('http://www.example.com/');
	    this.appendValueInput("NAME2")
	        .setCheck("String")
	        .appendField("within site")
	        .appendField(new Blockly.FieldTextInput("reddit.com"), "NAME2");
	    this.setOutput(true);
	    this.setTooltip('Search for content within this site\n Ex. "reddit.com"');
	    this.setColour(20);
	}
};

// exact phrase block
Blockly.Blocks['search_exact'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME3")
		    .setCheck("String")
		    .appendField("exact phrase")
		    .appendField(new Blockly.FieldTextInput("cat paw"), "NAME3");
		this.setOutput(true);
		this.setTooltip('Search for these exact words in this exact order.');
		this.setColour(65);
	}
};

// exact phrase block
Blockly.Blocks['search_similar'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME8")
		    .setCheck("String")
		    .appendField("similar term")
		    .appendField(new Blockly.FieldTextInput("puppy"), "NAME8");
		this.setOutput(true);
		this.setTooltip('Search for words related to search term. Ex. kitten');
		this.setColour(260);
	}
};

// do not include 
Blockly.Blocks['do_not_include'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME4")
		    .setCheck("String")
		    .appendField("do not include")
		    .appendField(new Blockly.FieldTextInput("kitten"), "NAME4");
		this.setOutput(true);
		this.setTooltip('Exclude this term from your search results');
		this.setColour(210);
	}
};

//within range
Blockly.Blocks['within_this_range'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME")
		    .setCheck("String")
		    .appendField("range from")
		    .appendField(new Blockly.FieldTextInput("$10"), "NAME")
		    .appendField("to")
		    .appendField(new Blockly.FieldTextInput("$20"), "NAME1");
		this.setOutput(true);
		this.setTooltip('Search within a number range\nEx. 1992 - 2012, $10 - $20');
		this.setColour(120);
	}
};

// search filetype
Blockly.Blocks['search_filetype'] = {
	init: function() {
	    //this.setHelpUrl('http://www.example.com/');
	    this.appendValueInput("NAME7")
	        .setCheck("String")
	        .appendField("filetype")
	        .appendField(new Blockly.FieldTextInput("pdf"), "NAME7");
	    this.setOutput(true);
	    this.setTooltip('Search pages with this filetype.\nEx. pdf, jpg, docx, ppt');
	    this.setColour(290);
	}
};


//wildcard
Blockly.Blocks['wildcard'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME5")
		    .appendField("wildcard");
		this.setOutput(true);
		this.setTooltip('');
		this.setColour(120);
	}
};

// OR
Blockly.Blocks['or'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME6")
		    .appendField("OR");
		this.setOutput(true);
		this.setTooltip('');
		this.setColour(120);
	}
};

////////////////////
// Generator stub
////////////////////
// refine search -- beginning block
Blockly.JavaScript['refine_search'] = function(block) {
	return Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
};

// site block
Blockly.JavaScript['search_site'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME2');
	// TODO: Assemble JavaScript into code variable.
	var code = "site:" + text_name + " " + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// exact phrase block
Blockly.JavaScript['search_exact'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME3', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME3');
	// TODO: Assemble JavaScript into code variable.
	var code = '"' + text_name + '" ' + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// simialr phrase block
Blockly.JavaScript['search_similar'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME8', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME8');
	// TODO: Assemble JavaScript into code variable.
	var code = '~' + text_name + " " + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// do not include
Blockly.JavaScript['do_not_include'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME4', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME4');
	// TODO: Assemble JavaScript into code variable.
	var code = '-' + text_name + " " + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//within range
Blockly.JavaScript['within_this_range'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME');
	var value_name1 = Blockly.JavaScript.valueToCode(block, 'NAME1', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name1 = block.getFieldValue('NAME1');
	// TODO: Assemble JavaScript into code variable.
	var code = text_name + '..' + text_name1 + " " + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// search filetype
Blockly.JavaScript['search_filetype'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME7', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME7');
	// TODO: Assemble JavaScript into code variable.
	var code = "filetype:" + text_name + " " + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//wildcard
Blockly.JavaScript['wildcard'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME5', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = ' * ' + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//or
Blockly.JavaScript['or'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME6', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = ' OR ' + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

function myUpdateFunction() {
	var code = Blockly.JavaScript.workspaceToCode();
	code = code.substring(0, code.length - 3)
	if (code.search("\n") <= -1) {
		var textarea = document.getElementById('searchText'),
		currText = textarea.value
		textarea.value = code;
	}
	return code;
}

// redirects page to google
function goToGoogle() {
	var code = encodeURIComponent(myUpdateFunction());
	window.location.href = "https://google.com/webhp?q=m#q=" + code;
}