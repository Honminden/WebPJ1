function validate(element)
{
    var isOK = false;
    var labels = document.querySelectorAll("#sign_up label.validation");
    var label;
    var sSpanWrapHead = "";
    var sIfValid = "";
    var sInvalidType = "";
    var sSpanWrapEnd = "";

    if (element.id === "username")
    {
        label = labels[0];

        if (/[0-9]/.test(element.value) && /[A-z]/.test((element.value)) && element.value.length >= 6)
        {
            sSpanWrapHead = "<span style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<span style='color: #ff0000'>";
            sIfValid = "(×)";

            if (element.value.length === 0)
            {
                sInvalidType = "This is required";
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

        sSpanWrapEnd = "</span>";
    }
    else if (element.id === "password") 
    {
        label = labels[1];
        var username = document.querySelectorAll("#sign_up input")[0];

        if (element.value.length >= 6 && element.value !== username.value)
        {
            sSpanWrapHead = "<span style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<span style='color: #ff0000'>";
            sIfValid = "(×)";

            if (element.value.length === 0)
            {
                sInvalidType = "This is required";
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

        sSpanWrapEnd = "</span>";

        if (document.querySelectorAll("#sign_up input")[2].value.length > 0)
        {
            validate(document.querySelectorAll("#sign_up input")[2]);
        }
    }
    else if (element.id === "conform_password")
    {
        label = labels[2];
        var password = document.querySelectorAll("#sign_up input")[1];

        if (element.value === password.value && password.value.length >= 6)
        {
            sSpanWrapHead = "<span style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<span style='color: #ff0000'>";
            sIfValid = "(×)";

            if (password.value.length < 6)
            {
                sInvalidType = "Please fill in the password first.";
            }
            else if (element.value.length === 0)
            {
                sInvalidType = "This is required";
            }
            else
            {
                sInvalidType = "Not matching the password."
            }
            isOK = false;
        }

        sSpanWrapEnd = "</span>";
    }
    else if (element.id === "email")
    {
        label = labels[3];
        var reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/

        if (reg.test(element.value))
        {
            sSpanWrapHead = "<span style='color: #009900'>";
            sIfValid = "(√)";
            isOK = true;
        }
        else
        {
            sSpanWrapHead = "<span style='color: #ff0000'>";
            sIfValid = "(×)";

            if (element.value.length === 0)
            {
                sInvalidType = "This is required";
            }
            else
            {
                sInvalidType = "Please use a valid email address." +
                    "<br>(example: toad26@elder.com).";
            }
            isOK = false;
        }

        sSpanWrapEnd = "</span>";
    }
    else if (element.id === "agree")
    {
        label = labels[4];

        isOK = element.checked;

        if (!isOK)
        {
            sSpanWrapHead = "<span style='color: #ff0000'>";
            sIfValid = "(×)";
            sInvalidType = "This is required";
            sSpanWrapEnd = "</span>";
        }
    }

    label.innerHTML = sSpanWrapHead + sIfValid + sInvalidType + sSpanWrapEnd;

    return isOK;
}

function submitCheck(element)
{
    var isOK = true;

    for (var i = 0; i <= 4; i++)
    {
        isOK = isOK && validate(document.querySelectorAll("#sign_up input")[i]);
    }

   return isOK;
}