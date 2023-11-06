const previous = document.querySelector('#previous');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const title = document.querySelector('#title');
const image = document.querySelector('#image');
const track = document.createElement('audio');

let index = 0;
let playingSong = false;

let songs = [{
        name: 'Mere Samne Wali Khidki',
        path: './songs/mere samne wali.mp3',
        image: './images/padosan.png',
    },
    {
        name: 'Teri Mohabbat Nein',
        path: './songs/teri mohaabat.mp3',
        image: './images/terimohabbat.png',
    },
    {
        name: 'Dil Jhoom',
        path: './songs/dil jhoom.mp3',
        image: './images/gadar2.png',
    },
    {
        name: 'Hotho Se Chulo',
        path: './songs/hotho se.mp3',
        image: './images/dardejigar.png',
    },
    {
        name: 'Tumse Milke Dil Ka',
        path: './songs/tumse milke.mp3',
        image: './images/mainhoonna.png',
    }
];
function loadTrack(index) {
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    track.load();
}
loadTrack(index);

function playSong() {
    track.play();
    playingSong = true;
    play.innerHTML = '<button class="alok_btn">pause</button>';
}
function pauseSong() {
    track.pause();
    playingSong = false;
    play.innerHTML = '<button class="alok_btn">pause</button>';
}
function nextSong() {
    if (index < songs.length - 1) {
        index += 1;
        loadTrack(index);
        playSong();
    } else {
        index = 0;
        loadTrack(index);
        playSong();
    }
}

function previousSong() {
    if (index > 0) {
        index -= 1;
        loadTrack(index);
        playSong();
    } else {
        index = songs.length;
        loadTrack(index);
        playSong();
    }
}
function justPlay() {
    if (playingSong == false) {
        playSong();
    } else {
        pauseSong();
    }
}