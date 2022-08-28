function expandVideo()
{
    let video = document.getElementById("original");
    if (video == null)
        return;

    document.body.insertBefore(video, document.body.childNodes[0]);
    video.style.minWidth = "100%";
    scroll(0, 0);

    let header = document.body.getElementsByTagName("header");
    header[0].style.display = "none";
}

expandVideo();
