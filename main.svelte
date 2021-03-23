<script>
export let OLSKEmojiPickerDispatchSelect;

const mod = {

	// MESSAGE

	EmojiPickerDidClick (event) {
		OLSKEmojiPickerDispatchSelect(event.detail.unicode);
	},

	// SETUP

	SetupEverything() {
		document.querySelector('emoji-picker').addEventListener('emoji-click', mod.EmojiPickerDidClick);
	},

	// LIFECYCLE

	LifecycleModuleDidLoad() {
		mod.SetupEverything();
	},

};

import { onMount } from 'svelte';
onMount(mod.LifecycleModuleDidLoad);

import 'emoji-picker-element';
</script>

<div class="OLSKEmojiPicker">

<emoji-picker></emoji-picker>
	
</div>
