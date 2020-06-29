function copyLink() {
    var copyText = document.getElementById("invisible-join-js");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}