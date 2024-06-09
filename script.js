function toggleMode() {
    const body = document.querySelector('body');
    const iframe = document.getElementById('discord-iframe');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        iframe.src = "https://widgets.vendicated.dev/user?id=1244715425137295451&theme=light&banner=false&full-banner=true&rounded-corners=true&discord-icon=true&badges=true&guess-nitro=true&background-color=%23FFF&foreground-color=%23000";
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        iframe.src = "https://widgets.vendicated.dev/user?id=1244715425137295451&theme=dark&banner=false&full-banner=true&rounded-corners=true&discord-icon=true&badges=true&guess-nitro=true&background-color=%23111&foreground-color=%23AAA";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
