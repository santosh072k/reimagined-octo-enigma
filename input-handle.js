const fileInput = document.getElementById("fileInput");

const FILE_KEY = "FILE";

function handleInput(evt){
  const file = this.files[0];
  const objectURL = URL.createObjectURL(file)
  localStorage.setItem(FILE_KEY, objectURL);
  


}


fileInput.addEventListener("change", handleInput);

