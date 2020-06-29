function copyLink() {
    var copyText = document.getElementById("invisible-join-js");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    let changeText = "Copied";
    let originalText = "Click to copy!"
    $('#copy-js').tooltip('dispose');
    $('#copy-js').attr('data-original-title', changeText);
    $('#copy-js').tooltip('show');
    $('#copy-js').attr('data-original-title', originalText);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})