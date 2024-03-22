// Event listener to handle messages posted from the parent window
window.addEventListener('message', function (event) {
    // Check if the message is from an allowed origin
    if (event.data.bodyHeight) {
        let height = event.data.bodyHeight;
        console.log('Received message from parent window:', height);
        document.getElementById('caseFinderIframe').style.height = height + 'px';
    }else if (event.data.URL) {
        let url = event.data.URL;
        console.log(url, "Parent");
        this.window.location = url;
    }
});