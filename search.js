class Search
{
    constructor()
    {
        this.value = "";
        this.searchValue = document.querySelector("#search_value");
        this.searchResult = document.querySelector("#search_result");
        this.resultList = [];
        this.items = document.querySelectorAll("#search_result #item");
        this.thumbnails = document.querySelectorAll("#search_result #item #thumbnail");
        this.titles = document.querySelectorAll("#search_result #item #title");
        this.prices = document.querySelectorAll("#search_result #item #price");
        this.artists = document.querySelectorAll("#search_result #item #artist");
        this.descriptions = document.querySelectorAll("#search_result #item #description");
    }

    setValue(s)
    {
        this.value = s;
    }

    setSearchValue(s)
    {
        this.searchValue.innerHTML = s;
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

    clearSearchValue()
    {
        this.setSearchValue("Search something in the navigation bar.");
        this.searchResult.style.display = "none";
    }
}