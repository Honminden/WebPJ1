class Cart
{
    constructor()
    {
        this.username = "";
        this.cartTitle = document.querySelector("#cart_title");
        this.itemAmount = document.querySelector("#item_amount");
        this.totalPrice = document.querySelector("#total_price");
        this.cartContainer = document.querySelector("#cart_container");
        this.itemList = [];
        this.items = document.querySelectorAll("#cart_container #item");
        this.thumbnails = document.querySelectorAll("#cart_container #item #thumbnail");
        this.titles = document.querySelectorAll("#cart_container #item #title");
        this.prices = document.querySelectorAll("#cart_container #item #price");
        this.artists = document.querySelectorAll("#cart_container #item #artist");
        this.descriptions = document.querySelectorAll("#cart_container #item #description");
        this.deletes = document.querySelectorAll("#cart_container #item #delete");
        this.check = document.querySelector("#cart_container #check");
    }

    setUsername(s)
    {
        this.username = s;
    }

    setCartTitle(s)
    {
        this.cartTitle.innerHTML = s;
    }

    setItemAmount(s)
    {
        this.itemAmount.innerHTML = s;
    }

    setThumbnails(ss)
    {
        for (let i = 0; i < ss.length; i++)
        {
            this.thumbnails[i].src = ss[i];
        }
    }

    setTitles(ss)
    {
        for (let i = 0; i < ss.length; i++)
        {
            this.titles[i].innerHTML = ss[i];
            this.thumbnails[i].alt = ss[i];
        }
    }

    setPrices(ss)
    {
        for (let i = 0; i < ss.length; i++)
        {
            this.prices[i].innerHTML = ss[i];
        }
    }

    setArtists(ss)
    {
        for (let i = 0; i < ss.length; i++)
        {
            this.artists[i].innerHTML = ss[i];
        }
    }

    setDescriptions(ss)
    {
        for (let i = 0; i < ss.length; i++)
        {
            this.descriptions[i].innerHTML = ss[i];
        }
    }

    clearItems()
    {
        this.setItemAmount("An empty cart! Go and fetch something!");
        this.cartContainer.style.display = "none";
        this.totalPrice.style.display = "none";
    }

    delete()
    {
        alert("Successfully delete.");
    }

    checkOut()
    {
        alert("Successfully check out.")
    }
}