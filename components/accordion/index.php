<template src="accordion.twig" />
<style src="accordion.css" external />

<script src="accordion.js" external />

<script>
document.addEventListener("DOMContentLoaded", function() { 

	var accordions = document.getElementsByClassName('js-accordion');
	for (var i = 0; i < accordions.length; i++) {
		var accordion = new Accordion( accordions[i], {
			allowMultipleOpen : false,
			allowToggleOpen : false
		} );
	}
});
</script>


<?php
return [
  'data' => [
    'items' =>  [
    	[
    		'title' => 'Section 1',
    		'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo purus quis mi cursus hendrerit eu eu metus. Aliquam aliquam arcu eget aliquet scelerisque. Pellentesque sodales turpis vitae venenatis vehicula. Ut id porta velit. Ut eu dignissim dui, quis gravida est. Cras quis venenatis mauris, a bibendum enim. Sed at augue libero. Nullam tortor metus, tincidunt ut urna id, posuere placerat orci. Ut quis risus dictum risus facilisis imperdiet quis sed eros.</p>'
    	],
    	[
    		'title' => 'Section 2',
    		'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo purus quis mi cursus hendrerit eu eu metus. Aliquam aliquam arcu eget aliquet scelerisque. Pellentesque sodales turpis vitae venenatis vehicula. Ut id porta velit. Ut eu dignissim dui, quis gravida est. Cras quis venenatis mauris, a bibendum enim. Sed at augue libero. Nullam tortor metus, tincidunt ut urna id, posuere placerat orci. Ut quis risus dictum risus facilisis imperdiet quis sed eros.</p>'
    	],
    	[
    		'title' => 'Section 3',
    		'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo purus quis mi cursus hendrerit eu eu metus. Aliquam aliquam arcu eget aliquet scelerisque. Pellentesque sodales turpis vitae venenatis vehicula. Ut id porta velit. Ut eu dignissim dui, quis gravida est. Cras quis venenatis mauris, a bibendum enim. Sed at augue libero. Nullam tortor metus, tincidunt ut urna id, posuere placerat orci. Ut quis risus dictum risus facilisis imperdiet quis sed eros.</p>'
    	]
    ]
  ]
];
?>

