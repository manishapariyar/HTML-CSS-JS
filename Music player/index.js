let audioElement = new Audio('musics/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let song_item = Array.from(document.getElementsByClassName('song_item'));
let songItemplay = Array.from(document.getElementsByClassName('songItemplay'));
let songs = [
    {songName: "Sirful_-_beyond" , filePath:"musics/1.mp3" , coverPath: "photos/1.jpg" },
    {songName: "Uta_Parli_jhim_jhim" , filePath:"musics/2.mp3" , coverPath: "photos/2.jpg" },
    {songName: "Ukali Orali haru ma" , filePath:"musics/3.mp3" , coverPath: "photos/3.jpg" },
    {songName: "Sushant_kc_SARANGI" , filePath:"musics/4.mp3" , coverPath: "photos/4.jpg" },
    {songName: "Sajjan_Raj_Vaidya_SUNA-KANXi" , filePath:"musics/5.mp3" , coverPath: "photos/5.jpg" },
    {songName: "Para_laijauu_phool" , filePath:"musics/6.mp3" , coverPath: "photos/6.jpg" },
]
song_item.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity= 0;
    }
})
// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
     myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});
const makeAllplay=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
{}
         element.classList.remove('fa-circle-pause');
         element.classList.add('fa-circle-play');
    })


}
songItemplay.forEach((element)=>
{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
         makeAllplay();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause'); 
         audioElement.src=`musics/${songIndex+1}.mp3`;
         masterSongName.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause')
            masterPlay.classList.add('fa-circle-play')
            gif.style.opacity= 1;
            
        
    })
})
songItemplay.forEach((element)=>{
    element.addEventListener('click', (a)=>{
        if(audioElement.paused){
            masterPlay.classList.add('fa-circle.pause');
            masterPlay.classList.remove('fa-circle.play')
        }
        else{
            masterPlay.classList.add('fa circle.play');
            masterPlay.classList.remove('fa-circle.pause');  
        }
    })
})

// backward and forward 

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=6){
    songIndex = 0;
} 
else{
    songIndex +=1;
}
    audioElement.src=`musics/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    } 
    else{
        songIndex -=1;
    }
        audioElement.src=`musics/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
