window.addEventListener('hashchange', function () {
  const hash = window.location.hash.replace('#', '');

  this.document.querySelectorAll('.page').forEach(function ($e) {
    $e.classList.add('is-hidden');
  });
  this.document.getElementById(hash).classList.remove('is-hidden');
});
