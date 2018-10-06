// url will change based on which video is clicked so make it a variable
var url = '';

var videoWidth = (/iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ? '375' : '650';
console.log(videoWidth);

// This function puts the video on the page
function embedVideo(video) {
  document.getElementById('video-embed').innerHTML = unescape(video.html);
}

// If I don't unembed the last video it'll flash briefly when next video is clicked. I do not like flashing!
function unembedVideo(video) {
  document.getElementById('video-embed').innerHTML = ""
}

// This function loads the data from Vimeo
function loadVideo() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('src', url);
  document.getElementsByTagName('head').item(0).appendChild(js);
}

function openVideoOverlay(videoLink, title) {
  url = 'https://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoLink) + '&callback=embedVideo&title=false&byline=false&portrait=false&width=' + videoWidth;;
  loadVideo();
  document.getElementById("video-overlay").style.display = "block";
  document.getElementById("video-title").innerHTML = title;
}

function closerVideoOverlay() {
  unembedVideo();
  document.getElementById("video-overlay").style.display = "none";
}

// I really do not like it when pop-ups of any kind can not be closed with the Escape key
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
      closerVideoOverlay();
  }
};