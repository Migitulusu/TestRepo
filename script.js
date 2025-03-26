document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('myButton');
//TestComment
  if (myButton) {
    myButton.addEventListener('click', function() {
      alert('Button clicked!');
    });
  } else {
    console.error('Button with ID "myButton" not found.'); // Debugging
  }
});
