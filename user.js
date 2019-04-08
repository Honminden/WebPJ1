class User {
    constructor() {
        this.username = "";
        this.userTitle = document.querySelector("#cart_title");
        this.userUpdate = document.querySelector("#user_update");
        this.userUpdateObject = new UserUpdate();
        this.purchaseOrder = document.querySelectorAll("#order")[0];
        this.purchaseOrderObject = new Order();
        this.sellOrder = document.querySelectorAll("#order")[1];
        this.sellOrderObject = new Order();
    }

    setUsername(s) {
        this.username = s;
    }

    setUserTitle(s) {
        this.userTitle.innerHTML = s;
    }

    deposit()
    {
        alert("Successfully deposit.");
    }
}

class UserUpdate
{
    constructor()
    {
        this.itemList = [];
        this.items = document.querySelectorAll("#user_update #item");
        this.thumbnails = document.querySelectorAll("#user_update #item #thumbnail");
        this.titles = document.querySelectorAll("#user_update #item #title");
        this.prices = document.querySelectorAll("#user_update #item #price");
        this.artists = document.querySelectorAll("#user_update #item #artist");
        this.descriptions = document.querySelectorAll("#user_update #item #description");
    }

    setThumbnails(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.thumbnails[i].src = ss[i];
        }
    }

    setTitles(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.titles[i].innerHTML = ss[i];
            this.thumbnails[i].alt = ss[i];
        }
    }

    setPrices(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.prices[i].innerHTML = ss[i];
        }
    }

    setArtists(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.artists[i].innerHTML = ss[i];
        }
    }

    setDescriptions(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.descriptions[i].innerHTML = ss[i];
        }
    }
}

class Order
{
    constructor()
    {
        this.itemList = [];
        this.items = document.querySelectorAll("#order #item");
        this.ids = document.querySelectorAll("#order #id");
        this.dates = document.querySelectorAll("#order #date");
        this.titles = document.querySelectorAll("#order #item #title");
        this.prices = document.querySelectorAll("#order #item #price");
    }

    setIds(ss)
    {
        for (let i = 0; i < ss.length; i++) {
            this.ids[i].src = ss[i];
        }
    }

    setDates(ss)
    {
        for (let i = 0; i < ss.length; i++) {
            this.dates[i].src = ss[i];
        }
    }

    setTitles(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.titles[i].innerHTML = ss[i];
            this.thumbnails[i].alt = ss[i];
        }
    }

    setPrices(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.prices[i].innerHTML = ss[i];
        }
    }
}