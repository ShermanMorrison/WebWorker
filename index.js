var worker = new Worker('worker.js');
alert("HI!!!!!!!!");

function sayHI() {
	worker.postMessage({'cmd': 'start', 'msg': 'Hi'});
}

function stop() {
	worker.postMessage({'cmd': 'stop', 'msg': 'Bye'});
}

function unknownCmd() {
	worker.postMessage({'cmd': 'wooo', 'msg': '???'});
}
	


worker.addEventListener('message',function(e){
	$('#result').textContent = e.data;
});
