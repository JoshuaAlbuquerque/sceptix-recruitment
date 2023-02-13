document.getElementById("test").addEventListener("click", sidebar);

function sidebar()
{
    if(this.checked)
    {
        console.log("its on");
        this.checked=false;
    }
    else
    {
        console.log("its off");
        this.checked=true;
    }
}