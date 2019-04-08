class detail
{
    constructor()
    {
        this.img = document.querySelector("#detailed_art img");
        this.title = document.querySelector("#detailed #title");
        this.artist = document.querySelector("#detailed #artist");
        this.description = document.querySelector("#detailed #description");
        this.price = document.querySelector("#detailed #price");
        this.date = document.querySelector("#details #date");
        this.dimensions = document.querySelector("#details #dimensions");
        this.genres = document.querySelector("#details #genres");
        this.subjects = document.querySelector("#details #subjects");
        this.heat = document.querySelector("#details #heat");

        this.scope = document.querySelector("#detailed_art #scope");
        this.initializeScope();
    }

    static addToCart()
    {
        alert("Successfully added to cart.")
    }

    static addToCollection()
    {
        alert("Successfully added to collection.")
    }

    setDetails(source)
    {

    }

    setImg(s)
    {
        this.img.src = s;
        this.initializeScope();
    }

    setTitle(s)
    {
        this.title.innerHTML = s;
        this.img.alt = s;
    }

    setArtist(s)
    {
        this.artist.innerHTML = s;
    }

    setDescription(s)
    {
        this.description.innerHTML = s;
    }

    setPrice(s)
    {
        this.price.innerHTML = s;
    }

    setDate(s)
    {
        this.date.innerHTML = s;
    }

    setDimensions(s)
    {
        this.dimensions.innerHTML = s;
    }

    setGenres(s)
    {
        this.genres.innerHTML = s;
    }

    setHeat(s)
    {
        this.heat.innerHTML = s;
    }

    initializeScope()
    {
        this.scope.style.backgroundImage = "url(\"" + this.img.src + "\")";
    }

    moveScope(event)
    {
        let x = event.clientX;
        let y = event.clientY;
        this.scope.style.left = x - this.scope.offsetWidth / 2 + "px";
        this.scope.style.top = y - this.scope.offsetHeight / 2 + "px";

        let posX = (x - this.img.offsetLeft) / this.img.offsetWidth * this.img.naturalWidth;
        let posY = (y - this.img.offsetTop) / this.img.offsetHeight * this.img.naturalHeight;
        let scopeRadius = this.scope.offsetWidth / 2;

        if (posX > 0 && posX < this.img.naturalWidth && posY > 0 && posY < this.img.naturalHeight)
        {
            this.scope.style.display = "block";
        }
        else
        {
            this.scope.style.display = "none";
        }

        this.scope.style.backgroundPosition = -(posX - scopeRadius / 2) + "px " + -(posY - scopeRadius / 2) + "px";
    }
}