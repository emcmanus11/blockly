// Language Code

// site block
Blockly.Blocks['search_site'] = {
	init: function() {
	    //this.setHelpUrl('http://www.example.com/');
	    this.appendValueInput("NAME2")
	        .setCheck("String")
	        .appendField("search within site")
	        .appendField(new Blockly.FieldTextInput("site name"), "NAME2");
	    this.setOutput(true);
	    this.setTooltip('');
	}
};

// exact phrase block
Blockly.Blocks['search_exact'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME3")
		    .setCheck("String")
		    .appendField("search exact phrase")
		    .appendField(new Blockly.FieldTextInput("ex. cat paw"), "NAME3");
		this.setOutput(true);
		this.setTooltip('');
	}
};

// do not include 
Blockly.Blocks['do_not_include'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME4")
		    .setCheck("String")
		    .appendField("do not include")
		    .appendField(new Blockly.FieldTextInput("ex. kitten"), "NAME4");
		this.setOutput(true);
		this.setTooltip('');
	}
};

//within range
Blockly.Blocks['within_this_range'] = {
	init: function() {
		//this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("NAME")
		    .setCheck("String")
		    .appendField("range from")
		    .appendField(new Blockly.FieldTextInput("ex. $10, etc. "), "NAME")
		    .appendField("to")
		    .appendField(new Blockly.FieldTextInput("ex. $20, etc. "), "NAME1");
		this.setOutput(true);
		this.setTooltip('');
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
	}
};

////////////////////
// Generator stub
////////////////////

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
	console.log("%%%%%%%%%%%%%%%%%%%%%%%")
	var code = Blockly.JavaScript.workspaceToCode();
	code = code.substring(0, code.length - 3)
	console.log("code");
	console.log(code.search("\n") > -1);
	if (code.search("\n") <= -1) {
		var textarea = document.getElementById('searchText'),
		currText = textarea.value
		textarea.value = code;
	}
}
