export function initHome() {
    console.log("Home Modülü Ateşlendi 🎬");
    const video = document.getElementById('bgVideo'); 
    if(video) { 
        video.muted = true; 
        video.play().catch(err => console.log("Video oynatılamadı:", err)); 
    } 
}