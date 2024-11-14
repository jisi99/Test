document.getElementById('upload-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const textInput = document.getElementById('text-input').value;
  const imageInput = document.getElementById('image-input').files[0];
  
  if (textInput && imageInput) {
    const formData = new FormData();
    formData.append('text', textInput);
    formData.append('image', imageInput);

    fetch('/upload', {  // Assuming you have a server endpoint '/upload'
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(result => {
      document.getElementById('message').innerHTML = 'Content uploaded successfully!';
    })
    .catch(error => {
      document.getElementById('message').innerHTML = 'Error uploading content.';
    });
  } else {
    alert('Please enter text and select an image!');
  }
});
