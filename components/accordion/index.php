<template src="accordion.twig" />
<style src="../components/accordion/accordion.css" external />

<script src="../components/accordion/accordion.js" external />
<script>
document.addEventListener("DOMContentLoaded", function() { 

	var accordions = document.getElementsByClassName('js-accordion');
	for (var i = 0; i < accordions.length; i++) {
		var accordion = new Accordion( accordions[i], {
			allowMultipleOpen : false
		} );
	}
});
</script>


<?php
return [
    'data' => function() {
        return [
            'greeting' => 'Hello'
        ];
    }
];
?>
