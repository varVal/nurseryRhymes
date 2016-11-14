function swallow(creature){
      var makeAnimal = document.createElement("div");
      for(var i = 0; i < total_animal_images.length; i++){
        if(total_animal_images[i].className === creature){ 
          makeAnimal.appendChild(total_animal_images[i]);
          if(creature === "fly"){
            old_womanTorso.style.marginLeft = "44%";
            oldWomanHead.style.backgroundColor="#bdb76b";
          }
          else if(creature === "spider"){
            old_womanTummy.style.width="42%"; old_womanTummy.style.height="15%"; 
            old_womanTorso.style.width="15%"; old_womanTorso.style.marginLeft = "40%";
            oldWomanHead.style.backgroundColor="#d8bfd8";
          }
          else if(creature === "bird"){
            old_womanTummy.style.width="55%"; old_womanTummy.style.height="40%";
            old_womanTorso.style.width="20%"; old_womanTorso.style.marginLeft="38%";
            oldWomanHead.style.backgroundColor="#bdb76b";
          }
          else if(creature === "cat"){
            old_womanTummy.style.width="68%"; old_womanTummy.style.height="50%"; 
            old_womanTorso.style.width="30%"; old_womanTorso.style.marginLeft="33%";
            oldWomanHead.style.backgroundColor="#d8bfd8";
          }
          else if(creature === "dog"){
            old_womanTummy.style.width="72%"; old_womanTummy.style.height="75%";
            old_womanTorso.style.width="35%"; old_womanTorso.style.marginLeft="30%";
            oldWomanHead.style.backgroundColor="#bdb76b";
          }
          else if(creature === "goat"){
            old_womanTummy.style.width="75%"; old_womanTummy.style.height="60%";
            old_womanTorso.style.width="70%"; old_womanTorso.style.marginLeft="13%";
            oldWomanHead.style.backgroundColor="#d8bfd8";
          }
          else if(creature === "cow"){
            old_womanTummy.style.width="95%"; old_womanTummy.style.height="90%"; old_womanTummy.style.borderRadius="20%";
            old_womanTorso.style.width="100%"; old_womanTorso.style.marginLeft="0px"; old_womanTummy.style.padding="1%"; 
            oldWomanHead.style.backgroundColor="#bdb76b";
          }
          else if(creature === "horse"){return die(); }
        }
      }
      old_womanTummy.insertBefore(makeAnimal, old_womanTummy.firstChild);
    }