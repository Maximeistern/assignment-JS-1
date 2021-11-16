const drawCardButt = document.getElementById("drawCard");
const card = document.getElementById("card");
let playCard;
let oldCard;
let omgångar = 0;
async function getDeck(){
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const data = await res.json();

    deck = data;
}
getDeck()

drawCardButt.addEventListener("click", async () => {
  const res = await fetch(
    `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
  );
  const data = await res.json();
  console.log(data);
  let playCard = data.cards[0];
  if(playCard.value == "10"){
    playCard.value = 10;
}else if(playCard.value == "JACK"){
    playCard.value = 11;
}else if(playCard.value == "QUEEN"){
    playCard.value = 12;
}else if(playCard.value == "KING"){
    playCard.value = 13;
}else if(playCard.value == "ACE"){
    playCard.value = 14;
}else{
    playCard.value = playCard.value;
}
  card.children[0].innerText = playCard.value;
  oldCard = playCard.value;
  
  card.children[1].setAttribute("src", playCard.image);

});

higher.addEventListener("click", async () => {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    );
    const data = await res.json();
    console.log(data);
    let playCard = data.cards[0];
    if(playCard.value == "10"){
        playCard.value = 10;
    }else if(playCard.value == "JACK"){
        playCard.value = 11;
    }else if(playCard.value == "QUEEN"){
        playCard.value = 12;
    }else if(playCard.value == "KING"){
        playCard.value = 13;
    }else if(playCard.value == "ACE"){
        playCard.value = 14;
    }else{
        playCard.value = playCard.value;
    }
    if(playCard.value > oldCard){
        console.log("Du vann")
        oldCard = playCard.value;
        card.children[0].innerText = playCard.value;
        card.children[1].setAttribute("src", playCard.image);
        omgångar ++;
    }else if(playCard.value < oldCard){
        oldCard = playCard.value;
        card.children[0].innerText = playCard.value;
        card.children[1].setAttribute("src", playCard.image);
        alert(`Du förlorade! Du överlevde ${omgångar} omgångar`);
        location.reload();
    
    }
    
  
  });

  lower.addEventListener("click", async () => {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    );
    const data = await res.json();
    console.log(data);
    let playCard = data.cards[0];
    if(playCard.value == "10"){
        playCard.value = 10;
    }else if(playCard.value == "JACK"){
        playCard.value = 11;
    }else if(playCard.value == "QUEEN"){
        playCard.value = 12;
    }else if(playCard.value == "KING"){
        playCard.value = 13;
    }else if(playCard.value == "ACE"){
        playCard.value = 14;
    }else{
        playCard.value = playCard.value;
    }
    if(playCard.value < oldCard){
        console.log("Du vann")
        oldCard = playCard.value;
        card.children[0].innerText = playCard.value;
        card.children[1].setAttribute("src", playCard.image);
        omgångar++;
    }else if(playCard.value > oldCard){
        oldCard = playCard.value;
        card.children[0].innerText = playCard.value;
        card.children[1].setAttribute("src", playCard.image);
        alert(`Du förlorade! Du överlevde ${omgångar} omgångar`);
        location.reload();
    
    }
    
  
  });