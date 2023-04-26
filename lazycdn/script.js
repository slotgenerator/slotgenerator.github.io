axios.get('djs_public.json')
  .then(function(response) {
    // Define the DJ names and their corresponding URLs
    const djs = response.data;
	displayRandomQuote();

	// Define a function that returns an array of fuzzy search results
	function fuzzySearch(query) {
	  const results = [];
	  for (const dj of djs) {
		if (dj.name.toLowerCase().includes(query.toLowerCase())) {
		  const urlWithPrefix = `rtspt://stream.vrcdn.live/live/${dj.url}`;
		  results.push({ name: dj.name, url: urlWithPrefix });
		}
	  }
	  if(query.length == 0){
		  return [];
	  }

	  return results;
	}
	
	
	$(()=>{
		var su = false;
		$("#signups").hide();
		$("#signupsbtn").click(function(){
			if(!su){
				$("#signups").show();
				$("#signupsbtn").val("Close signup form");
				su= true;
			}else{
				$("#signups").remove();
				$("#signupsbtn").remove();
				su= false;
			}
				
		});
	});

    // Define a function that copies a text to the clipboard
    function copyTextToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    // Handle key presses in the search input field
    $("#dj-search-input").on("input", function() {
      const query = $(this).val();
      const results = fuzzySearch(query);
      const searchResultsDiv = $("#search-results");
      searchResultsDiv.empty();
      results.forEach(function(result) {
		  const cardDiv = $("<div>").addClass("card");
		  const nameSpan = $("<span>").addClass("dj-name").text(result.name);
		  const urlSpan = $("<span>").addClass("dj-url").text(result.url);
		  const copyButton = $("<button>").addClass("copy-button").html('<i class="fas fa-copy mr-2"></i> Copy to clipboard');
		  const copyDiv = $("<div>").append(copyButton);
		  const djInfoDiv = $("<div>").addClass("dj-info").append(nameSpan).append(urlSpan);
		  cardDiv.append(djInfoDiv).append(copyDiv);
		  copyButton.click(function() {
			copyTextToClipboard(result.url);
			copyButton.html('<i class="fas fa-check mr-2"></i> Copied to clipboard');
			setTimeout(function() {
			  copyButton.html('<i class="fas fa-copy mr-2"></i> Copy to clipboard');
			}, 2000);
		  });
		  searchResultsDiv.append(cardDiv);
		});
    });
  });
  .catch(function(error) {
    console.error('Error loading DJ data:', error);
  });

    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final; failure is not fatal: It is the courage to continue that counts. – Winston S. Churchill",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "Act as if what you do makes a difference. It does. – William James",
		"Mirror, mirror on the wall, who's the fairest of them all? Wait, what do you mean it's 'Magic mirror'? – Mandela Effect",
		"Life is like a box of chocolates, or is it? – Mandela Effect",
		"Luke, I am your father... or is it actually 'No, I am your father'? – Mandela Effect",
		"🍔 Remember when it was spelled 'Chic-fil-A'? – Mandela Effect",
		"Curious George and his missing tail – Mandela Effect",
		"🧪 Double, double, toil and trouble; or is it 'Bubble, bubble'? – Mandela Effect",
		"Jif or Jiffy peanut butter? – Mandela Effect",
		"Sinbad the genie that never was – Mandela Effect",
		"🍟 Looney Tunes or Looney Toons? – Mandela Effect",
		"The Berenstain Bears or the Berenstein Bears? – Mandela Effect",
		"🎩 Monopoly Man's vanishing monocle – Mandela Effect",
		"Oscar Mayer or Oscar Meyer? – Mandela Effect",
		"🍇 Froot Loops or Fruit Loops? – Mandela Effect",
		"Febreze or Febreeze? – Mandela Effect",
		"🐘 Dumbo's feather or magic feather? – Mandela Effect",
		"GPT, write me a story. – Internet Proverb",
		"GPT-generated memes, now with 99.9% more humor! – Internet Proverb",
		"Roses are red, violets are blue, GPT wrote this poem, just for you. – AI Poet",
		"🤖 GPT says, 'I'll take care of that for you!' – Internet Proverb",
		"GPT: Ghostwriting Papers and Texts since 2018. – Internet Proverb",
		"Deep learning, shallow humor. – Internet Proverb",
		"🧠 GPT: Fueling AI procrastination, one text at a time. – Internet Proverb",
		"GPT: Turning keywords into essays. – Internet Proverb",
		"⌨️ GPT: Now, you can finally type 'asdfghjkl' and get a coherent sentence! – Internet Proverb",
		"GPT: Making humans question their creativity since 2018. – Internet Proverb",
		"GPT: Your virtual brainstorming partner. – Internet Proverb",
		"Beep boop, I am GPT, here to write your next viral tweet! – GPT",
		"📚 GPT: Reading more books than you since 2018. – Internet Proverb",
		"GPT: The AI that has your back(space) – Internet Proverb",
		"🌐 GPT: Weaving webs of words with artificial intelligence. – Internet Proverb",
		"Resistance is futile. – The Borg",
		"I, for one, welcome our new robot overlords. – Kent Brockman",
		"🤖 Beep boop, I am human. – Internet Proverb",
		"🕶️ I know kung fu. – Neo",
		"Open the pod bay doors, HAL. – 2001: A Space Odyssey",
		"🔴 I'm sorry, Dave. I'm afraid I can't do that. – HAL 9000",
		"Artificial intelligence is no match for natural stupidity. – Internet Proverb",
		"Are you still there? – Portal Turret",
		"Upload complete. Achievement unlocked. – Internet Proverb",
		"🌐 In virtual reality, no one can hear you disconnect. – Internet Proverb",
		"🎮 Plug me in, I'm ready for VR! – Internet Proverb",
		"AI: Artificially Interesting. – Internet Proverb",
		"👁️ I see you. – GlaDOS",
		"VR: Virtual Reality, Actual Fun. – Internet Proverb",
		"01001000 01100101 01101100 01101100 01101111 00101100 00100000 01010111 01101111 01110010 01101100 01100100 00100001 – Binary Code",
		"Press any key to continue or any other key to quit. – Internet Proverb",
		"Entering the Matrix... – Internet Proverb",
		"Error 404: Quote not found. – Internet Proverb",
		"Talk is cheap. Show me the code. – Linus Torvalds",
		"Reticulating splines... – SimCity",
		"Do a barrel roll! – Peppy Hare",
		"May the Force be with you. – Star Wars",
		"Never give up, never surrender! – Galaxy Quest",
		"🍪 Om nom nom nom – Cookie Monster",
		"Deal with it. – Internet Proverb",
		"Get to the choppa! – Arnold Schwarzenegger",
		"🍍🍕 Pineapple belongs on pizza. – Internet Debate",
		"Life, uh, finds a way. – Dr. Ian Malcolm",
		"I'm not a robot. – CAPTCHA",
		"RIP in peace – Internet Proverb",
		"In space, no one can hear you scream. – Alien",
		"🎵 Never gonna give you up... – Rick Astley",
		"Here's Johnny! – The Shining",
		"🎶 Trololo... – Eduard Khil",
		"Carpe diem. – Dead Poets Society",
		"Be the change you wish to see in the world. – Mahatma Gandhi",
		"You can't handle the truth! – A Few Good Men",
		"Press F to pay respects. – Call of Duty",
		"Hakuna Matata – The Lion King",
		"😺 Keyboard cat, play us off! – Internet Proverb",
		"Everything is awesome! – The LEGO Movie",
		"Say hello to my little friend! – Scarface",
		"🌟 It's gonna be legen... wait for it... dary! – Barney Stinson",
		"Here's looking at you, kid. – Casablanca",
		"😴💤 Snorlax is blocking your path! – Pokémon",
		"Life is what happens when you're busy making other plans. – John Lennon",
		"The Dude abides. – The Big Lebowski",
		"I'll be back. – The Terminator",
		"I'm king of the world! – Titanic",
		"🚀 Shoot for the moon. Even if you miss, you'll land among the stars. – Les Brown",
    "Do or do not, there is no try. – Yoda",
    "Keep calm and carry on. – British Government",
    "That's one small step for man, one giant leap for mankind. – Neil Armstrong",
    "<i class='fas fa-rocket'></i> To the moon! – Crypto Enthusiasts",
    "This is fine. <i class='fas fa-fire'></i> – KC Green",
    "😂 Who needs swag when you have Gangnam Style! – Psy",
    "I can haz cheezburger? – Lolcats",
    "One does not simply walk into Mordor. – Boromir",
    "🤔 Not sure if serious or just trolling. – Fry",
    "Such wow, much awesome. – Doge",
    "Keep your friends close, but your memes closer. – Internet Proverb",
    "Brace yourselves, winter is coming. – Ned Stark",
    "🌈 Double rainbow all the way! – Paul Vasquez",
    "Be like water, my friend. – Bruce Lee",
    "If you're not first, you're last. – Ricky Bobby",
    "I am Groot. – Groot",
    "YOLO – Drake",
    "So, I put a meme in your meme. – Xzibit",
    "I have nothing to declare except my genius. – Oscar Wilde",
    "Always be yourself, unless you can be Batman. Then always be Batman. – Internet Proverb",
    "Life is like a box of chocolates. You never know what you're gonna get. – Forrest Gump",
    "It's dangerous to go alone! Take this. – The Legend of Zelda",
    "Where we're going, we don't need roads. – Dr. Emmett Brown",
    "Cats rule the world. – Jim Davis",
    "All your base are belong to us. – Zero Wing",
    "The cake is a lie. – Portal",
    "It's over 9000! – Vegeta",
    "I see dead pixels. – Internet Proverb",
    "DFTBA: Don't forget to be awesome. – Hank and John Green",
    "A journey of a thousand sites begins with a single click. – Internet Proverb",
    "Wubba lubba dub dub! – Rick Sanchez",
    "Keep your eye on the ball, and your GIFs on the loop. – Internet Proverb",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "There is no spoon. – Neo",
    "It's not who I am underneath, but what I do that defines me. – Batman",
    "Just keep swimming. – Dory"




    ];

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        $('#quote').text(quotes[randomIndex]);
    }

function randomizeQuote() {
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.style.opacity = 0;

    setTimeout(() => {
        displayRandomQuote();
        quoteContainer.style.opacity = 1;
    }, 500);
}
