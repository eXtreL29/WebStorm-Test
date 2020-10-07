function snowFlakeGen(screenWidth, screenHeight, objname){
    const w = screenWidth;
    const h = screenHeight;

    let x = Math.floor(Math.random() * w)
    let y = Math.floor(Math.random() * h)

    yPos = y + "px";
    xPos = x + "px";
    document.write(objname, "x:", xPos, " y:", yPos, "<br>")
    const snowFlake = document.getElementById(objname);
    snowFlake.style.position = "absolute";
    snowFlake.style.top = yPos;
    snowFlake.style.left = xPos;

}
snowFlakeGen(1200,800, "PepoCheer");
snowFlakeGen(1200,800, "PepeJAM");
snowFlakeGen(1200,800, "Pepe2");
snowFlakeGen(1200,800, "PepeSad");
snowFlakeGen(1200,800, "PepeHack");
