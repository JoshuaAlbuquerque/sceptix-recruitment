let col1 = document.getElementById("history").addEventListener("click", collapse1);
let col2 = document.getElementById("applications").addEventListener("click", collapse2);
let col3 = document.getElementById("benefits").addEventListener("click", collapse3);

let check1=false;
let check2=false;
let check3=false;

function collapse1()
{
    if(check1)
    {
        console.log("OFF");
        document.getElementById("history").className="closed";
        check1 = false;
    }
    else
    {
        console.log("On");
        document.getElementById("history").className="opened";
        check1 = true;
    }
}

function collapse2()
{
    if(check2)
    {
        console.log("oFf");
        document.getElementById("applications").className="closed";
        check2 = false;
    }
    else
    {
        console.log("on");
        document.getElementById("applications").className="opened";
        check2 = true;
    }
}

function collapse3()
{
    if(check3)
    {
        console.log("off");
        document.getElementById("benefits").className="closed";
        check3 = false;
    }
    else
    {
        console.log("on");
        document.getElementById("benefits").className="opened";
        check3 = true;
    }
}