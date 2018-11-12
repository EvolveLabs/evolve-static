var trackEl = document.querySelectorAll('[data-ga]');

Array.prototype.forEach.call(trackEl, function(el) {
  el.onclick = function(event) {
    var category = this.getAttribute('data-ga');
    ga('send', 'event', category, 'click', event.target.href);
  };
});
