(function(){
  // Timeline fill animation on load (respects prefers-reduced-motion via CSS transition-duration override)
  var track = document.querySelector('#timeline .track');
  window.addEventListener('load', function(){
    requestAnimationFrame(function(){
      setTimeout(function(){ track.classList.add('filled'); }, 200);
    });
  });

  // 1968 / aujourd'hui structure toggle
  var buttons = document.querySelectorAll('.toggle-btn');
  var diagrams = document.querySelectorAll('.diagram');
  var caption = document.getElementById('diagramCaption');
  var captions = {
    d1968: "Une tête, une chaîne de commandement : l'adhésion passe par l'organisation.",
    d2020: "Aucun centre : chacun se relie à plusieurs autres, la légitimité se partage."
  };

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      buttons.forEach(function(b){ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed','true');

      var target = btn.getAttribute('data-target');
      diagrams.forEach(function(d){ d.classList.toggle('active', d.id === target); });
      caption.textContent = captions[target];
    });
  });
})();
