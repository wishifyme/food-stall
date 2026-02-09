function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Music play failed:', error);
    });
}

function openCard() {
    const card = document.querySelector('.card');
    if (card.classList.contains('closed')) {
        card.classList.remove('closed');
        card.classList.add('open');
        // Play music when card opens
        playMusic();
        // Create sparkles on open
        createSparkles();
    } else {
        card.classList.remove('open');
        card.classList.add('closed');
    }
}
function revealSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
    // Play background music on user interaction
    const audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Music play failed:', error);
    });
    // Trigger sparkles on surprise reveal
    createSparkles();
}
function revealGiftMessage() {
    const giftMessage = document.getElementById('gift-message');
    giftMessage.style.display = 'block';
    // Add sparkles on gift reveal
    createSparkles();
    // Create magical gift animation
    createMagicalGift();
}

function createSparkles() {
    const sparkleCount = 20;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(sparkle);
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
}

// Add sparkles on gift box click/hover for mobile and desktop
const giftBox = document.querySelector('.big-gift-box');
if (giftBox) {
    giftBox.addEventListener('click', createSparkles);
    giftBox.addEventListener('mouseenter', createSparkles); // For desktop hover
}

function checkRiddle() {
    const answer = document.getElementById('riddle-answer').value.toLowerCase();
    const result = document.getElementById('riddle-result');
    if (answer === 'piano') {
        result.style.display = 'block';
    } else {
        alert('Try again!');
    }
}

function createMagicalGift() {
    const gifts = ['🎁', '✨', '🌟', '💎', '🪄', '🎇', '🎊', '🎈', '💖', '🌸', '🦄', '🍭', '🐾', '🎀'];
    const colors = ['#ff69b4', '#ffd700', '#00d4ff', '#ff6b6b', '#4caf50', '#9c27b0', '#ff9800', '#2196f3', '#e91e63', '#9c27b0', '#3f51b5', '#009688'];
    for (let i = 0; i < 12; i++) {
        const gift = document.createElement('div');
        gift.className = 'magical-gift';
        gift.textContent = gifts[Math.floor(Math.random() * gifts.length)];
        gift.style.left = Math.random() * 80 + 10 + '%';
        gift.style.top = Math.random() * 80 + 10 + '%';
        gift.style.color = colors[Math.floor(Math.random() * colors.length)];
        gift.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(gift);
        setTimeout(() => {
            gift.remove();
        }, 7000);
    }
}

function revealFortune() {
    const fortunes = [
        "🌟 Your kindness creates ripples of positivity that touch countless hearts!",
        "✨ The seeds of gratitude you plant today will bloom into beautiful friendships tomorrow!",
        "💫 Your support is like a guiding star that lights the path for others to follow!",
        "🌈 Every act of encouragement you give is a rainbow bridge connecting dreams to reality!",
        "🦄 Your presence brings magic and inspiration to everyone around you!",
        "🎭 Your support is the spark that ignites creativity and innovation!",
        "🌸 Like a beautiful flower, your kindness blooms and brightens the world!",
        "🎨 Your encouragement paints the canvas of success for those you support!",
        "🌙 Your wisdom and support are like moonlight guiding us through challenges!",
        "⭐ Your positive energy creates constellations of hope and possibility!"
    ];
    const fortuneMessage = document.getElementById('fortune-message');
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneMessage.textContent = randomFortune;
    fortuneMessage.style.display = 'block';
    // Add sparkles for magical effect
    createSparkles();
    // Play a magical sound effect if available
    playMusic();
}

function makeWish() {
    const wishes = [
        "🌟 May your college journey be filled with endless discoveries and achievements!",
        "✨ Wishing you a semester filled with inspiration, success, and wonderful memories!",
        "💫 May all your academic dreams come true and your path be illuminated with knowledge!",
        "🌈 Wishing you colorful adventures, meaningful friendships, and bright futures ahead!",
        "🦄 May your creativity soar and your innovative ideas change the world!",
        "🎭 Wishing you the courage to pursue your passions and the wisdom to make great choices!",
        "🌸 May your efforts bloom into beautiful opportunities and lasting success!",
        "🎨 Wishing you a canvas of possibilities painted with your unique talents!",
        "🌙 May your nights be peaceful and your days filled with purpose and joy!",
        "⭐ Wishing you constellations of opportunities and galaxies of success in your journey!"
    ];
    const wishMessage = document.getElementById('wish-message');
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    wishMessage.textContent = randomWish;
    wishMessage.style.display = 'block';
    // Create shooting star effect
    createShootingStar();
    // Add sparkles for magical effect
    createSparkles();
    // Play music
    playMusic();
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.textContent = '⭐';
    shootingStar.style.left = Math.random() * 80 + 10 + '%';
    shootingStar.style.top = Math.random() * 50 + '%';
    shootingStar.style.animationDelay = '0s';
    document.body.appendChild(shootingStar);
    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}

// Autoplay music on first user interaction
document.addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Music play failed:', error);
    });
}, { once: true });
