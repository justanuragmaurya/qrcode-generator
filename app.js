const submitButton = document.querySelector(".generateButton");
const qrData = document.querySelector(".inputField");
const qrContainer = document.querySelector("#qrContainer");

submitButton.addEventListener("click", function() {
    const qrImage = document.createElement("img");
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + qrData.value + "&size=200x200";
    qrContainer.innerHTML = ""; // Clear previous content
    qrContainer.appendChild(qrImage);
});
