<script lang="ts">
	import { spring } from "svelte/motion";
	import { onDestroy } from 'svelte';
	import { width, height, isCircle } from './store';

	let coords = { x: 0, y: 0 };
	let sWidth = spring($width);
	let sHeight = spring($height);
	let isC = $isCircle;

	const unsubWidth = width.subscribe(value => {
		sWidth.set(value);
	});

	const unsubHeight = height.subscribe(value => {
		sHeight.set(value);
	});

	const unsubIsCircle = isCircle.subscribe(value => {
		isC = value;
	});

	onDestroy(() => {
		unsubWidth();
		unsubHeight();
		unsubIsCircle();
	});

	const handleMouseMove = (e: MouseEvent) => {
		//const target = e.currentTarget as HTMLElement
		//width.set(target.clientWidth);
		//height.set(target.clientHeight);
		coords = { x: e.clientX, y: e.clientY };
	};
</script>

<svelte:window
		on:mousemove={handleMouseMove}
/>
<div
		style="position: absolute; top: {coords.y}px; left: {coords.x}px; width: {$sWidth}px; height: {$sHeight}px;
  background-color: #fe8019; border-radius: {isC ? '50%' : '0'}; transform: translate(-50%, -50%); pointer-events: none;">
</div>