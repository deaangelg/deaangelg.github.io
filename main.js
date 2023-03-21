let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y aplicaciones, y produzco contenido para proyectos de educación y cultura.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
