const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');
var el = document.getElementById("sendPFP");
console.log(el);
//todo - preveri ce obstaja cookie token pa ga poslji v headerjih poleg pfp-ja
if(el){
  el.addEventListener("click", sendPFP);
}
function sendPFP() { //to dela
  formData.append("pfpicture", fileField.files[0]);
  fetch("http://127.0.0.1/matura/Backend/database/database.php?changeProfileImage=true", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); // vir: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
}


