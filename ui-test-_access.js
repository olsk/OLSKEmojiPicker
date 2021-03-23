const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKEmojiPicker: '.OLSKEmojiPicker',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKEmojiPicker_Access', function () {

	const OLSKEmojiPickerLineCount = Math.max(1, Date.now() % 10);

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKEmojiPickerLineCount,
		});
	});

	it('shows OLSKEmojiPicker', function () {
		browser.assert.elements(OLSKEmojiPicker, 1);
	});

	it('shows emoji-picker', function () {
		browser.assert.elements('emoji-picker', 1);
	});

});
