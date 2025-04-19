
function toggleAnswer(id) {
  const answer = document.getElementById(`${id}-answer`);
  const icon = document.getElementById(`${id}-icon`);
  
  answer.classList.toggle('hidden');
  icon.classList.toggle('rotated');
}
