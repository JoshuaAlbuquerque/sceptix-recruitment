let col = document.getElementById("history").addEventListener("click", collapse);
let check=false;
function collapse()
{
    if(check)
    {
        collapseon();
        check = false;
    }
    else
    {
        collapseoff();
        check = true;
    }
}

function collapseon()
{
    document.getElementById("history").classList.toggle("opened");
}

function collapseoff()
{
    document.getElementById("history").classList.toggle("closed");
}