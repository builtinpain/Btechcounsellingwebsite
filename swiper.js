const sound = document.getElementById("clickSound");

document.querySelectorAll("div").forEach(div => {
    div.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();



        setTimeout(() => {
            sound.pause();
            sound.currentTime = 0;
        }, 2000); 
    });
});


const college = {
    name: "Delhi Technological University",
    domain: "dtu.ac.in"
};

const logo = `https://img.logo.dev/${college.domain}?token=YOUR_KEY`;