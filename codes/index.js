let songIndex = 0;
let audioElement = new Audio ("/songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById('myProgressBar');
let songItem =Array.from(document.getElementsByClassName("songItem"));
let song=[
    {songName: "Space Bound", filePath: "/songs/1.mp3" },
    {songName: "Not Afraid", filePath: "/songs/Not-Afraid.mp3" },
    {songName: "Love The Way You Lie", filePath: "/songs/Love-the-way.mp3" },
    {songName: "Cinderella Man", filePath: "/songs/1.mp3" },
    {songName: "Won't Back Down", filePath: "/songs/1.mp3" },
    {songName: "Almost Famous", filePath: "/songs/1.mp3" },
    {songName: "Seduction", filePath: "/songs/1.mp3" },
    {songName: "You are Never Over", filePath: "/songs/1.mp3" },
    {songName: "Cold Wind Blows", filePath: "/songs/1.mp3" },
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    else{
        audioElement.pause();  
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressBar.value= progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value *audioElement.duration)/100);
})
songItem.forEach((element, i)=>{
    // console.log(element,i);
element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
const makeAllPlays= ()=>{
    
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-play-circle'); 
        element.classList.remove('fa-pause-circle');
 })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    // console.log(e.target);
    makeAllPlays();
    songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle'); 
    e.target.classList.add('fa-pause-circle'); 
    audioElement.src=`/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
})