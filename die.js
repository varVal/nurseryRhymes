function die(){
    old_womanTummy.style.border = "none";
    old_womanTorso.style.border = "none";
    old_womanTorso.style.marginLeft = "-20px";
    old_womanTorso.style.fontSize = "130px";
    old_womanTorso.style.color = "red";
    old_womanTorso.innerHTML = "BOOM!";
    oldWomanHead.style.width="0px";
    oldWoman.removeChild(oldWomanHead);
    oldWoman.removeChild(oldWomanFootR);
    oldWoman.removeChild(oldWomanFootL);
}