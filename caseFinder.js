// Event listener to handle messages posted from the parent window
window.addEventListener('message', function (event) {
    // Check if the message is from an allowed origin
    if (event.data.bodyHeight) { // Replace 'http://example.com' with the actual origin of the parent window
        let height = event.data.bodyHeight;
        console.log('Received message from parent window:', height);
        document.getElementById('caseFinderIframe').style.height = height + 'px';
    }
});