var hammer = new Hammer(document.querySelector('#slider'));


hammer.on('swipeleft', function (ev) {
  $('.carousel').carousel('next')
  console.log(ev);
});
hammer.on('swiperight', (ev) => {
  $('.carousel').carousel('prev')
  console.log(ev);
})