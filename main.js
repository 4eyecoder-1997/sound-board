const btns = document.querySelectorAll('.btn');

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let clickedBtn = this.innerHTML;
        

        switch(clickedBtn) {
            case "bird":
                const birdSound = new Audio('sounds/bird.mp3');
                birdSound.play();
                break;
            
            case "cat":
                const catSound = new Audio('sounds/cat.mp3');
                catSound.play();
                break;

            case "cow":
                const cowSound = new Audio('sounds/cow.mp3');
                cowSound.play();
                break;
            
            case "cricket":
                const cricketSound = new Audio('sounds/cricket.mp3');
                cricketSound.play();
                break;

            case "dog":
                const dogSound = new Audio('sounds/dog.mp3');
                dogSound.play();
                break;
            
            case "lion":
                const lionSound = new Audio('sounds/lion.mp3');
                lionSound.play();
                break;
            
            case "rooster":
                const roosterSound = new Audio('sounds/rooster.mp3');
                roosterSound.play();
                break;
            
            default :
                alert('Move Bitch');
        };

    });
};

