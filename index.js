document.addEventListener('click', event => {
    let x = event.clientX;
    let y = event.clientY;
    let heartColor = '#';
    let characters = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length);
        heartColor += characters[randomCharacter];
    }
    console.log(heartColor)
    
    let randomWidth = Math.floor(Math.random()* 10) + 50;
    let heart = document.querySelectorAll('.heart');
    let heartClone = heart[0].cloneNode(true);
    document.body.append(heartClone);
    
    heartClone.style.position = 'absolute';
    heartClone.style.display = 'block';
    heartClone.style.fill = heartColor;
    heartClone.style.width = randomWidth + 'px';
    heartClone.style.left = x + 'px';
    heartClone.style.top = y + 'px';
    setTimeout(() => {
        heartClone.style.display = 'none';
    }, 14500)
})


