// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.
// ref  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// https://github.com/young/frontend-interviewing/blob/master/questions/moveElement.js



function moveElement(duration, distance, element){
	var start = performance.now();
	function move(currentTime){
		var elapsed = currentTime - start;
		var progress = elapsed/duration;
		var amountToMove = progress*distance;
		element.style.transform = `translateX(${amountToMove}px)`;

		if (amountToMove < distance) {
			window.requestAnimationFrame(move);
		}

	}
	window.requestAnimationFrame(move);
}

moveElement(1000, 500, document.getElementById("element"));
