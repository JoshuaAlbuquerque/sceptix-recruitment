document.getElementById("sidenav").addEventListener("click", sidebar);

function sidebar()
{
    if(this.checked)
    {
        sidebaron();
        this.checked=false;
    }
    else
    {
        sidebaroff();
        this.checked=true;
    }
}

function sidebaron()
{
    console.log("ON");
}

function sidebaroff()
{
    console.log("OFF");
}