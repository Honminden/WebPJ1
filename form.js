var CAPTCHA;

function createCAPTCHA()
{
    let imgs = document.querySelectorAll("#sign_up img");
    CAPTCHA = "";

    for (let i = 0; i < 4; i++)
    {
        let v = Math.floor((Math.random()*10));
        CAPTCHA += v + "";
        imgs[i].src = "CAPTCHA/" + v + ".png";
    }
}

function validate(element)
{
    let isOK = true;
    let labels = document.querySelectorAll("#sign_up label.validation");
    let label;
    let inputs = document.querySelectorAll("#sign_up input");
    let sSpanWrapHead = "";
    let sIfValid = "";
    let sInvalidType = "";
    let sSpanWrapEnd = "";

    if (element.id === "username")
    {
        label = labels[0];

        if (/[0-9]/.test(element.value) && /[A-z]/.test((element.value)) && element.value.length >= 6)
        {
            sSpanWrapHead = "<p style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<p style='color: #ff0000'>";
            sIfValid = "(×)";

            if (element.value.length === 0)
            {
                sInvalidType = "This is required.";
            }
            else if (element.value.length < 6)
            {
                sInvalidType = "Username too short" +
                    "<br>(at least 6)."
            }
            else
            {
                sInvalidType = "At least one character and one digit are required." +
                    "<br>(example: toad26).";
            }
            isOK = false;
        }

        sSpanWrapEnd = "</p>";
    }
    else if (element.id === "password") 
    {
        label = labels[1];
        let username = inputs[0];

        if (element.value.length >= 6 && element.value !== username.value)
        {
            sSpanWrapHead = "<p style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<p style='color: #ff0000'>";
            sIfValid = "(×)";

            if (element.value.length === 0)
            {
                sInvalidType = "This is required.";
            }
            else if (element.value.length < 6)
            {
                sInvalidType = "Password too short" +
                    "<br>(at least 6)."
            }
            else if (element.value === username.value)
            {
                sInvalidType = "Password can't be the same as the username."
            }
            isOK = false;
        }

        sSpanWrapEnd = "</p>";

        if (inputs[2].value.length > 0)
        {
            validate(inputs[2]);
        }
    }
    else if (element.id === "conform_password")
    {
        label = labels[2];
        let password = inputs[1];

        if (element.value === password.value && password.value.length >= 6)
        {
            sSpanWrapHead = "<p style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<p style='color: #ff0000'>";
            sIfValid = "(×)";

            if (password.value.length < 6)
            {
                sInvalidType = "Please fill in the password first.";
            }
            else if (element.value.length === 0)
            {
                sInvalidType = "This is required.";
            }
            else
            {
                sInvalidType = "Not matching the password."
            }
            isOK = false;
        }

        sSpanWrapEnd = "</p>";
    }
    else if (element.id === "email")
    {
        label = labels[3];
        let reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/

        if (reg.test(element.value))
        {
            sSpanWrapHead = "<p style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<p style='color: #ff0000'>";
            sIfValid = "(×)";

            if (element.value.length === 0)
            {
                sInvalidType = "This is required.";
            }
            else
            {
                sInvalidType = "Please use a valid email address." +
                    "<br>(example: toad26@elder.com).";
            }
            isOK = false;
        }

        sSpanWrapEnd = "</p>";
    }
    else if (element.id === "CAPTCHA")
    {
        label = labels[4];

        if (element.value === CAPTCHA)
        {
            sSpanWrapHead = "<p style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<p style='color: #ff0000'>";
            sIfValid = "(×)";

            if (element.value.length === 0)
            {
                sInvalidType = "This is required.";
            }
            else
            {
                sInvalidType = "Not matching the pictures";
            }
            isOK = false;
        }

        sSpanWrapEnd = "</p>";
    }
    else if (element.id === "agree")
    {
        label = labels[5];

        isOK = element.checked;

        if (!isOK)
        {
            sSpanWrapHead = "<p style='color: #ff0000'>";
            sIfValid = "(×)";
            sInvalidType = "This is required.";
            sSpanWrapEnd = "</p>";
        }
    }

    label.innerHTML = sSpanWrapHead + sIfValid + sInvalidType + sSpanWrapEnd;

    return isOK;
}

let divLogin;
let divSignUp;
let spans;

function submitCheck(element)
{
    let isOK = true;
    let username;

    if (divSignUp.style.display !== "none")
    {
        for (var i = 0; i <= 4; i++)
        {
            isOK = isOK && validate(document.querySelectorAll("#sign_up input")[i]);
        }

        if (!isOK)
        {
            return false;
        }

        username = document.querySelectorAll("#sign_up input")[0].value;
        alert("Successfully sign up.");
    }
    else if (divLogin.style.display !== "none")
    {
        username = document.querySelectorAll("#login input")[0].value;
        alert("Successfully login.");
    }
    else
    {
        username = "";
        alert("Successfully logout.");
    }

    setLoginCookie(username);
    return true;
}

function displayLogin(element)
{
    divLogin = document.querySelector("#top_nav form #login");
    divSignUp = document.querySelector("#top_nav form #sign_up");
    spans = document.querySelectorAll("#top_nav form>span");

    divLogin.style.display = "block";
    divSignUp.style.display = "none";

    spans[0].style.textDecoration = "#000000 solid underline";
    spans[1].style.textDecoration = "none";

}

function displaySignUp(element)
{
    divLogin.style.display = "none";
    divSignUp.style.display = "block";


    spans[0].style.textDecoration = "none";
    spans[1].style.textDecoration = "#000000 solid underline";
}

function setLoginCookie(username)
{
    setCookie(username);
}

function getLoginCookie()
{
    return getcookie();
}

function setCookie(s)
{
    document.cookie = s;
}

function getcookie()
{
    return document.cookie;
}

function changeLoginIcon()
{
    if (getLoginCookie() !== undefined && getLoginCookie() !== "")
    {
        document.querySelector("#top_nav #user").innerHTML = "J";
    }
    else
    {
        document.querySelector("#top_nav #user").innerHTML = "I";
    }
}

function showUserDetail()
{
    if (getLoginCookie() !== undefined && getLoginCookie() !== "")
    {
        document.querySelectorAll("#top_nav form>span")[0].style.display = "none";
        document.querySelectorAll("#top_nav form>span")[1].style.display = "none";
        document.querySelector("#sign_up").style.display = "none";
        document.querySelector("#login").style.display = "none";
        document.querySelector("#detail #welcome").innerHTML = "Welcome, " + getLoginCookie() + "!";
        document.querySelector("#user_form>input").setAttribute("value", "logout");
    }
    else
    {
        document.querySelectorAll("#top_nav form>span")[0].style.display = "inline-block";
        document.querySelectorAll("#top_nav form>span")[1].style.display = "inline-block";
        document.querySelector("#sign_up").style.display = "none";
        document.querySelector("#login").style.display = "block";
        document.querySelector("#detail #welcome").innerHTML = "";
        document.querySelector("#user_form>input").setAttribute("value", "submit");
    }
}