// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const img = document.querySelector('.img');
  const button = document.querySelector('.btn');
  const display = document.querySelector('.display');
  
  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "Sana yol görünmüş balım. Alem duruşuna yollar gidişine hasta hadii bakiyiiiimmm",
    2: "Bu ciddiyet sana fazla değil mi ponçik kuş? Hayatı bu kadar ciddiye almasan varyaaa nasıl uçarsın sen.",
    3: "Hiçbir şey göremedim canım",
    4: "Ay sen baya ballısın cicim. Kediler dört ayak üstüne düşür, sen onlardan da ballısın. Hayrını gör.",
    5: "Üç vakte kadar sana gelen gelir haberin olsun.",
    6: "Falın baya bi fallanmış. Öyle böyle bir fallanma değil o kadar diyim.",
    7: "Bir daha çevir canım bu olmadı.",
    8: "Sen varya müthişsin!",
  }

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
  }

  button.addEventListener('click', () => {
    // Reset display
    display.innerHTML = " ";
    // Disable button during spin
    button.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    img.style.transition = 'all 5s ease-out';
    // Rotate the wheel
    img.style.transform = `rotate(${deg}deg)`;
  });

  img.addEventListener('transitionend', () => {
    // Enable button when spin is over
    button.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    img.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    img.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();
