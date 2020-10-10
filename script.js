var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instruction = $("#instuctions")

var content = ""

recognition.continuous = true
// recogintionstratred

recognition.onstart = function () {
    instruction.text("voice Recognition is Start")
}
recognition.onspeechend = function () {
    instruction.text("No Activity")
}
recognition.onerror = function () {
    instruction.text("Try Again")
}
recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript
    content += transcript

    textbox.val(content)
}
$("#start-btn").click(function (event) {
    if (content.length) {
        content += ""
    }
    recognition.start()

})
textbox.on('input', function () {
    content = $(this).val
})