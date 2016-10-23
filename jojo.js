var videos = ["8w9LYL0sMx4", "SgWcSuxyvT8", "o7aW0Uj3778", "vgLbcuDhmzo",
              "BEQMXjN8mxU", "3P7qWQ5dBmA", "YWbkUKtogB4", "yacOhxLutX4",
              "tyzt4N0XDUM", "uFqjIOWs8Cg", "7I6OtXYXv20", "hWKB1Zxg84s",
              "hS3nur6o6ME", "dZHMuUxuUfQ", "FwEQlJAYh3c", "tGhiCs6QRKw",
              "t2Gkc7LgoQ8", "jTCygHGhu78", "6zZlQ1WSn5U", "4KNqFhJ6-n0",
              "slxjvldJ3jg", "6BgqFYrD8UM"];

var lastVideos = [];
var player;
var keepGoing = true;

function onYouTubeIframeAPIReady()
{
    player = new YT.Player('player',
    {
        //height: '720',
        //width: '1280',
        videoId: 'iZ7Y5IqIHSk',
        events:
        {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars:
        {
            'controls': 0,
            'autoplay': 1,
            'showinfo': 0,
            'modestbranding': 1
        }
    });
   
}

function onPlayerReady(event)
{
    
}

function onPlayerStateChange(event)
{
    if (event.data == YT.PlayerState.ENDED && keepGoing)
    {
        playNext();
    }
}

function playNext()
{
    player.loadVideoById("4NsqFlZhlSo");
    player.setVolume(25);
    
    var curTimeout = setTimeout(function()
    {
        var videoList = _.difference(videos, lastVideos);
        
        if (videoList.length == 0)
        {
            alert("JOJO RESERVES ARE DEPLETED. REFRESH TO RELIVE THE EXPERIENCE.");
            window.clearTimeout(curTimeout);
            keepGoing = false;
            return;
        }
        
        var selectedVideo = videoList[Math.floor(Math.random() * videoList.length)];
        
        lastVideos.push(selectedVideo);
        player.loadVideoById(selectedVideo);
    }, 1000);
}

