

self.addEventListener('message', function(e) {
	var data = e.data;
	switch (data.cmd){
		case 'start':
			self.postMessage("Worker Started: " + data.msg);
			break;
		case 'stop':
			self.postMessage("Worker Stopped: " + data.msg);
			self.close();
			break;
		default:
			self.postMessage("Unknown command: " + data.msg);
	};
}, false);


