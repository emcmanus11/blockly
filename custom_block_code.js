// Language Code

// site block
Blockly.Blocks['search_site'] = {
	init: function() {
	    this.setHelpUrl('http://www.example.com/');
	    this.appendValueInput("NAME")
	        .setCheck("String")
	        .appendField("search within site")
	        .appendField(new Blockly.FieldTextInput("site name"), "NAME");
	    this.setOutput(true);
	    this.setTooltip('');
	}
};

// exact phrase block
Blockly.Blocks['search_exact'] = {
	init: function() {
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME")
		    .setCheck("String")
		    .appendField("search exact phrase")
		    .appendField(new Blockly.FieldTextInput("ex. vegan desserts"), "NAME");
		this.setOutput(true);
		this.setTooltip('');
	}
};

// do not include 
Blockly.Blocks['do_not_include'] = {
	init: function() {
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME")
		    .setCheck("String")
		    .appendField("do not include")
		    .appendField(new Blockly.FieldTextInput("ex. vegetarian"), "NAME");
		this.setOutput(true);
		this.setTooltip('');
	}
};

//within range
Blockly.Blocks['within_this_range'] = {
	init: function() {
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME")
		    .setCheck("String")
		    .appendField("range from")
		    .appendField(new Blockly.FieldTextInput("ex. $10, etc. "), "NAME")
		    .appendField("to")
		    .appendField(new Blockly.FieldTextInput("ex. 2$0, etc. "), "NAME1");
		this.setOutput(true);
		this.setTooltip('');
	}
};


//wildcard
Blockly.Blocks['wildcard'] = {
	init: function() {
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME")
		    .appendField("wildcard");
		this.setOutput(true);
		this.setTooltip('');
	}
};

// OR
Blockly.Blocks['or'] = {
	init: function() {
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME")
		    .appendField("OR");
		this.setOutput(true);
		this.setTooltip('');
	}
};

////////////////////
// Generator stub
////////////////////

// site block
Blockly.JavaScript['search_site'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME');
	// TODO: Assemble JavaScript into code variable.
	var code = '...';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

// exact phrase block
Blockly.JavaScript['search_exact'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME');
	// TODO: Assemble JavaScript into code variable.
	var code = '...';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

// do not include
Blockly.JavaScript['do_not_include'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME');
	// TODO: Assemble JavaScript into code variable.
	var code = '...';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

//within range
Blockly.JavaScript['within_this_range'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	var text_name = block.getFieldValue('NAME');
	var text_name1 = block.getFieldValue('NAME1');
	// TODO: Assemble JavaScript into code variable.
	var code = '...';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

//wildcard
Blockly.JavaScript['wildcard'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = '...';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

//or
Blockly.JavaScript['or'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = '...';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

/*
function myUpdateFunction() {
	var code = Blockly.JavaScript.workspaceToCode();
	console.log("code");
	console.log(code);
	// document.getElementById('textarea').value = code;
}
Blockly.addChangeListener(myUpdateFunction);
*/