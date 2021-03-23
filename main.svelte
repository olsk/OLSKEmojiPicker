<script>
export let OLSKEmojiPickerDispatchSelect;

import { OLSKLocalized } from 'OLSKInternational';
import { OLSK_SPEC_UI } from 'OLSKSpec';

const mod = {

	// MESSAGE

	EmojiPickerDidClick (event) {
		OLSKEmojiPickerDispatchSelect(event.detail.unicode);
	},

	// SETUP

	SetupEverything() {
		if (OLSK_SPEC_UI()) {
			return;
		}

		console.log(OLSKLocalized('OLSKEmojiPickerStringsObject'));

		document.querySelector('.OLSKEmojiPicker').appendChild(new Picker({
			i18n: OLSKLocalized('OLSKEmojiPickerStringsObject'),
		}));

		document.querySelector('emoji-picker').addEventListener('emoji-click', mod.EmojiPickerDidClick);
	},

	// LIFECYCLE

	LifecycleModuleDidLoad() {
		mod.SetupEverything();
	},

};

import { onMount } from 'svelte';
onMount(mod.LifecycleModuleDidLoad);

import { Picker } from 'emoji-picker-element';
</script>

<div class="OLSKEmojiPicker">

{#if OLSK_SPEC_UI() }
<emoji-picker></emoji-picker>
<pre id="TestOLSKEmojiPickerStrings">{ JSON.stringify(OLSKLocalized('OLSKEmojiPickerStringsObject')) }</pre>
{/if}
	
</div>
