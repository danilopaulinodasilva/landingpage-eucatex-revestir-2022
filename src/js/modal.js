window.avise = avise;
window.padrao = padrao;

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
