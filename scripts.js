window.onload = function() {
    const feed = document.getElementById('surveillance-feed');
    setInterval(() => {
        feed.classList.toggle('glitch');
    }, 2000);
};
