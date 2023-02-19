let col1 = document.getElementById("history").addEventListener("click", collapse1);
let col2 = document.getElementById("applications").addEventListener("click", collapse2);
let col3 = document.getElementById("benefits").addEventListener("click", collapse3);

let check=false;

function collapse1()
{
    if(check)
    {
        console.log("ON");
        document.getElementById("history").classList.toggle("opened");
        check = false;
    }
    else
    {
        console.log("OFF");
        document.getElementById("history").classList.toggle("closed");
        check = true;
    }
}

function collapse2()
{
    if(check)
    {
        console.log("ON");
        document.getElementById("applications").classList.toggle("opened");
        check = false;
    }
    else
    {
        console.log("OFF");
        document.getElementById("applications").classList.toggle("closed");
        check = true;
    }
}

function collapse3()
{
    if(check)
    {
        console.log("ON");
        document.getElementById("benefits").classList.toggle("opened");
        check = false;
    }
    else
    {
        console.log("OFF");
        document.getElementById("benefits").classList.toggle("closed");
        check = true;
    }
}