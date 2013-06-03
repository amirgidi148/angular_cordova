var count = 0;
var currentTimeout = null;
buttonMarkup.hoverDelay = 0 ;
function stopCount() {
    clearTimeout(time );
}

function timedCount() {
    document.getElementById('time').value = count;
    sec.dataset.sec = count;
    count++;

    if(count==91) {
        alert("time over");
        stopCount();
        count=0;
    }
    else {
		currentTimeout=setTimeout("timedCount()",10);
    }
}