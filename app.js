//Day Tracker
function setProgress(dt) {
  var current = new Date(dt.getTime());
  var previous = new Date(dt.getFullYear(), 04, 17);
  var daysPassed = Math.ceil((current - previous + 1) / 86400000);
  // update element, i.e:
  document
    .querySelector(".progress-bar")
    .setAttribute("aria-valuenow", daysPassed);
  document.querySelector(".progress-bar").style.width = `${daysPassed}%`;
  document.querySelector("#current-days").innerText = daysPassed;
  document.querySelector("#progress-bar-current-days").innerText = daysPassed;
}
setProgress(new Date());

//Thread Fade In
