let index;
let imgs = [];
let img;

function startSwitch()
{
    index = 0;
    imgs[0] = "images/works/large/111030.jpg";
    imgs[1] = "images/works/large/101050.jpg";
    imgs[2] = "images/works/large/002080.jpg";
    imgs[3] = "images/works/large/001090.jpg";
    imgs[4] = "images/works/large/010020.jpg";

    img = document.querySelector("#popular img");

    changeSrc();
    img.addEventListener("animationIteration", changeSrc);
    img.addEventListener("webkitAnimationIteration", changeSrc);
}

function changeSrc()
{
    img.setAttribute("src", imgs[index]);

    if (index < imgs.length - 1)
    {
        index++;
    }
    else
    {
        index = 0;
    }
}