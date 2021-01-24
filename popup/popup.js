
window.addEventListener("load", (event) => {
  chrome.runtime.sendMessage({ greeting: "GetURL" }, function (response) {
    tabURL = response.navURL;
    document.getElementById("tabURL").innerHTML = tabURL;

    var qrcode = new QRCode("qrcode");
    qrcode.makeCode(tabURL);
  });
});
