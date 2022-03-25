const fileInput = document.getElementById("fileInput");

const FILE_KEY = "FILE";

function handleInput(evt) {
    const file = this.files[0];

    const reader = new FileReader();
    reader.addEventListener(
        "load",
        function () {
            localStorage.setItem(FILE_KEY, reader.result);
        },
        false
    );

    if (file) {
        reader.readAsDataURL(file);
    }
}

fileInput.addEventListener("change", handleInput);
