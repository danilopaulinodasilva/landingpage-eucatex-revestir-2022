window.avise = avise;
window.padrao = padrao;
window.youtube = youtube;

var avise = document.querySelectorAll('.btn-avise');

avise.forEach(element => {
  element.addEventListener('click', function(e) {
    document.querySelector('#inputHiddenAvise').value =
      e.target.dataset.calendar;
  });
});

var padrao = document.querySelectorAll('.btn-padrao');

padrao.forEach(element => {
  element.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    document.getElementById('iframePadrao').src = e.target.dataset.url;
  });
});

var youtube = document.querySelectorAll('.btn-youtube');

youtube.forEach(element => {
  element.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    document.getElementById('iframeYoutube').src = e.target.href;
  });
});
