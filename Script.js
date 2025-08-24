function toggleMenu(){
  const m = document.querySelector('.menu');
  if(!m) return;
  m.classList.toggle('open');
}