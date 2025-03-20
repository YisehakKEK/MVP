// Array of 100 quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Believe you can and you're halfway there.",
    "Do what you can, with what you have, where you are.",
    "Act as if what you do makes a difference. It does.",
    "Don't watch the clock; do what it does. Keep going.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way to predict your future is to create it.",
    "It is always the simple that produces the marvelous.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Opportunities don't happen. You create them.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Dream big and dare to fail.",
    "The only way to do great work is to love what you do.",
    "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    "Start where you are. Use what you have. Do what you can.",
    "Everything you can imagine is real.",
    "You must be the change you wish to see in the world.",
    "The road to success and the road to failure are almost exactly the same.",
    "The secret of getting ahead is getting started.",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
    "I never dreamed about success. I worked for it.",
    "Don't let what you cannot do interfere with what you can do.",
    "Quality means doing it right when no one is looking.",
    "You can't use up creativity. The more you use, the more you have.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Do what you feel in your heart to be right – for you'll be criticized anyway.",
    "It is not length of life, but depth of life.",
    "Tough times never last, but tough people do.",
    "To be the best, you must be able to handle the worst.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "You don’t have to be great to start, but you have to start to be great.",
    "If opportunity doesn’t knock, build a door.",
    "Life isn’t about finding yourself. Life is about creating yourself.",
    "It always seems impossible until it's done.",
    "Courage is resistance to fear, mastery of fear, not absence of fear.",
    "Go confidently in the direction of your dreams. Live the life you have imagined.",
    "I find that the harder I work, the more luck I seem to have.",
    "Perseverance is not a long race; it is many short races one after the other.",
    "Don’t count the days, make the days count.",
    "If you really look closely, most overnight successes took a long time.",
    "Do what you love and the money will follow.",
    "You are never too old to set another goal or to dream a new dream.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The best way to appreciate your job is to imagine yourself without one.",
    "The successful warrior is the average man, with laser-like focus.",
    "Happiness depends upon ourselves.",
    "If you're going through hell, keep going.",
    "No great thing is created suddenly.",
    "Don’t let yesterday take up too much of today.",
    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    "It is never too late to be what you might have been.",
    "Sometimes later becomes never. Do it now.",
    "Dream it. Wish it. Do it.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "Don't stop when you're tired. Stop when you're done.",
    "Failure is not the opposite of success; it's part of success.",
    "If you want to achieve greatness stop asking for permission.",
    "We generate fears while we sit. We overcome them by action.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Work hard in silence, let success make the noise.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "Doubt kills more dreams than failure ever will.",
    "The key to success is to focus on goals, not obstacles.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The harder the battle, the sweeter the victory.",
    "Your limitation—it’s only your imagination.",
    "Dream bigger. Do bigger.",
    "The future depends on what you do today.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "The secret of success is to do the common thing uncommonly well.",
    "Opportunities are usually disguised as hard work, so most people don’t recognize them.",
    "A year from now you may wish you had started today.",
    "Act as if what you do makes a difference. It does.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
    "With the new day comes new strength and new thoughts.",
];

// Function to get a random quote
function fetchNewQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').textContent = `"${quotes[randomIndex]}"`;
}

// Add event listener for button click
document.getElementById('newQuoteButton').addEventListener('click', fetchNewQuote);

// Load a random quote on page load
window.onload = fetchNewQuote;
