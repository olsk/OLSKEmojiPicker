const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKEmojiPicker_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	context('select', function () {

		const item = Math.random().toString();

		before(function () {
			browser.assert.text('#TestOLSKEmojiPickerDispatchSelect', '0');
			return browser.assert.text('#TestOLSKEmojiPickerDispatchSelectData', 'undefined');
		});

		before(function () {
			// browser.pressButton(item);
		});
		
		it.skip('sends OLSKEmojiPickerDispatchSelect', function () {
			browser.assert.text('#TestOLSKEmojiPickerDispatchSelect', '1');
			return browser.assert.text('#TestOLSKEmojiPickerDispatchSelectData', item);
		});
	
	});

});
