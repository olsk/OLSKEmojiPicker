import RollupStart from './main.svelte';

const EmojiPickerProof = new RollupStart({
	target: document.querySelector('body'),
	props: {
		OLSKEmojiPickerDispatchSelect: (function  (inputData) {
			window.TestOLSKEmojiPickerDispatchSelect.innerHTML = parseInt(window.TestOLSKEmojiPickerDispatchSelect.innerHTML) + 1;
			window.TestOLSKEmojiPickerDispatchSelectData.innerHTML = inputData;
		}),
	},
});

export default EmojiPickerProof;
