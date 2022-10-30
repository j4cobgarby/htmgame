var classData = [
    {
        "name": "Dr. Professor, PhD",
        "category": "Smart",
        "description": "As a smart doctor professor with a doctorate, you possess unbounded intelligence. Your power lies in binding unrelated things together and deducing what will happen before you do it."
    },
    {
        "name": "Sage Mage",
        "category": "Smart",
        "description": "You are a wise wizard whose power is in herbs and spices. Most of all, the sacred herb of Sage. Your power lies in giving flavour and life as well as using your wisdom to anticipate the result of your actions."
    },
    {
        "name": "The Quantum Mechanic",
        "category": "Smart",
        "description": "You are a tremendous bore who makes up literally everything. Your power is in the fine-tuning of inscrutable mechanisms in the universe, such as by quantum tunneling between two places and by observation lock in a particular result to your actions."
    },
    {
        "name": "Swashbuckler",
        "category": "Strong",
        "description": "You are a strong and charismatic go-getter who does not buckle under pressure and swashes using buckles. Your power is lassoing and thwacking using your belt of belting and overpowering obstacles using sheer brute strength."
    },
    {
        "name": "Barber-ian",
        "category": "Strong",
        "description": "You are rage-filled hairstylist whose passion is style and whose style is passion. Your power is using versatile hairgel to do basically any function of hygiene, style, or other and using brute strength to overpower your foes."
    },
    {
        "name": "Strongman",
        "category": "Strong",
        "description": "You are a strong strongman who was not at all strongarmed into the circus. Your power is in using your extra-nifty moustache that is a handlebar in more than one sense and overpowering obstacles using your rippling muscular brute strength."
    },
    {
        "name": "Magician",
        "category": "Sneaky",
        "description": "You are a stage magician whose power is in their props and the quickness of their hands rather than true magic. You have an endless handkerchief and can fashion objects into shivs and lockpicks."
    },
    {
        "name": "Rouge [Sic]",
        "category": "Sneaky",
        "description": "You are either dyslexic, or a sneaky red-themed scoundrel. Your power is in tempting yet deadly redness, and fashioning regular objects into weapons or lockpicks."
    },
    {
        "name": "Cookie-jar Pilferer",
        "category": "Sneaky",
        "description": "You are a no-good brat who does what they want and blames it on the dog. Your power is in your larcenous sticky fingers and your ability to fashion household objects into dangerous objects and thieves' tools."
    },
    {
        "name": "Astronomer",
        "category": "Saintly",
        "description": "You are a definitely legitimate science professional who uses the stars to know things about reality. Your power is in prediction and observation using your horrific telescope and your ability to use your knowledge of mag-science to keep an object in working order."
    },
    {
        "name": "Cult Leader",
        "category": "Saintly",
        "description": "You are a charismatic leader whose power is installing religious fervour in your minions and having a minion find replacements for broken objects."
    },
    {
        "name": "Bar Nun",
        "category": "Saintly",
        "description": "You are a purveyor of spirits of many varieties, a barlady of the cloth. You are the best... Bar Nun.  Your power is bestowing holy drinks and blessing objects to never break."
    }
]



var categoryData = {
    "Smart": "You can determine the outcome of an event one time.",
    "Strong": "You receive Brute Strength as an item.",
    "Sneaky": "You can turn one item into a shiv or a lock-pick",
    "Saintly": "You may reuse an item one time."
}




var itemsData = [
    {
        "name": "Binder of Binding",
        "description": "When it comes to adventure, it helps to bundle things together.",
        "adjective": "Binding"
    },
    {
        "name": "The Spice of Life",
        "description": "You're not called 'sage' for nothing.",
        "adjective": "Herbal"
    },
    {
        "name": "Quantum Shovel",
        "description": "\"Quantum Tunneling\" - wave goodbye to barriers, particularly ones that matter.",
        "adjective": "Quantum"
    },
    {
        "name": "Belt of Belting",
        "description": "Buckle up, buttercup. Someone's earned a belting.",
        "adjective": "Belting"
    },
    {
        "name": "Manly All-In-One Hairgel",
        "description": "Doubles as shampoo, moisturizer,  body wash, toothpaste, ketchup, rat poison..",
        "adjective": "Jelled"
    },
    {
        "name": "Handlebar Moustache",
        "description": "Detach for crowbar, uncoil for rope. It even comes with a bell!",
        "adjective": "Stylish"
    },
    {
        "name": "Endless Handkerchief",
        "description": "Dry those endless tears.",
        "adjective": "Endlessly absorbent"
    },
    {
        "name": "Red Lead Paint",
        "description": "Endless uses, ranging from wholesome to decidedly less so.",
        "adjective": "Red and Deadly"
    },
    {
        "name": "Sticky Fingers",
        "description": "No evidence, save for an innocent look and a grubby face.",
        "adjective": "Sticky"
    },
    {
        "name": "Horror-scope",
        "description": "Perfect for forseeing doom, and for seeing it.",
        "adjective": "Doom-seeing"
    },
    {
        "name": "Fanatical Follower",
        "description": "The only thing shorter than the list of things they won't do for you is their life expectancy.",
        "adjective": "Loyal"
    },
    {
        "name": "Tankard of Holy Water",
        "description": "Fill a tankard with beer and boil the hell out of it. Careful with it though, it could be whiskey.",
        "adjective": "Holy"
    },
    {
        "name": "Pet Cat",
        "description": "Do not the cat.",
        "adjective": "Feline"
    },
    {
        "name": "Box",
        "description": "Empty inside. Just like me!",
        "adjective": "Boxy"
    },
    {
        "name": "Empty Wine Bottle",
        "description": "Why ish it empty? A myshtery...",
        "adjective": "Emptied"
    },
    {
        "name": "Cloak and Dagger",
        "description": "Two for one discount, on account of accidentally stapling them together...",
        "adjective": "Mysterious"
    },
    {
        "name": "'S-word sword' sword",
        "description": "It's got a word inscribed on it, but I'm not allowed to say it in present company...",
        "adjective": "Profane"
    },
    {
        "name": "Dave's Axe",
        "description": "Don't let Dave find you with this. He'll make a body spray.",
        "adjective": "Dave's"
    },
    {
        "name": "Glumbrella",
        "description": "An umbrella that's sad. Don't read too much into this.",
        "adjective": "Tear-resistant"
    },
    {
        "name": "Wacky Inflatable Person",
        "description": "Watch it dance! Sadly, his outfit is incomplete.",
        "adjective": "Inflatable"
    },
    {
        "name": "Suspicious Skull",
        "description": "It knows what you did...",
        "adjective": "Suspicious"
    },
    {
        "name": "Friendly Plank",
        "description": "It'll never be board with you.",
        "adjective": "Friendly"
    },
    {
        "name": "Russian Doll",
        "description": "\"Da.\"",
        "adjective": "Nested"
    },
    {
        "name": "Invisible Paperclip",
        "description": "Don't drop it.",
        "adjective": "Invisible"
    },
    {
        "name": "Filled Notebook",
        "description": "You're having trouble reading this. There's soom room in the margins though...",
        "adjective": "Graffitied"
    },
    {
        "name": "Tome of Practically Useless Information",
        "description": "\"The thing about dragon puberty is...\"",
        "adjective": "Monotonous"
    },
    {
        "name": "Flag of 'France'",
        "description": "A mythical country where the inhabitants eat snails and too much garlic.",
        "adjective": "Frankly Absurd"
    },
    {
        "name": "Theodore Bear",
        "description": "Mm, no. You're not on nickname terms yet. Give it time.",
        "adjective": "Aloof"
    },
    {
        "name": "Creepy Doll",
        "description": "You're not sure if it's the gleeful expression, the way it twitches, or if it just has too many legs...",
        "adjective": "Creepy"
    },
    {
        "name": "Tongs of Tongues",
        "description": "Honestly, this doesn't make a lick of sense.",
        "adjective": "Tongue-filled"
    },
    {
        "name": "War Saw",
        "description": "She saw one stab the other's heart, and wished they would just cut it out.",
        "adjective": "Serrated"
    },
    {
        "name": "Bamboo stick",
        "description": "A very versatile material. Beware, shoots and leaves.",
        "adjective": "Flourishing"
    },
    {
        "name": "Stopped watch",
        "description": "I am told it's correct twice a day.",
        "adjective": "Static"
    },
    {
        "name": "Comfy Blanket",
        "description": "Swaddled like this, I may fall asleep while typing. I just want to grab a pizzzzzzzzzzzzzzzzzz",
        "adjective": "Comfy"
    },
    {
        "name": "Colour-Changing Sequin Cushion",
        "description": "You can flip the sequins over with your finger. You can draw a scene, and even show a whole sequence.",
        "adjective": "Dynamic"
    },
    {
        "name": "Sack with 'Sack' written on the side",
        "description": "The person whose job it was to make this more descriptive was presumably... sacked.",
        "adjective": "Vacant"
    },
    {
        "name": "Scary Mask",
        "description": "Aah! ...Wait, you're not wearing it yet, are you?",
        "adjective": "Scary"
    },
    {
        "name": "Glasses and Nose Moustache Disguise",
        "description": "Er, can't stick around. Must dash.",
        "adjective": "Disguised"
    },
    {
        "name": "Lead guitar",
        "description": "Far too heavy, and a dull gray shade.",
        "adjective": "Lead"
    },
    {
        "name": "Bagpipes",
        "description": "For when you want to make music. Or, rather, the opposite.",
        "adjective": "Dolorous"
    },
    {
        "name": "Talking Drum",
        "description": "You may just want to see a psychiatrist...",
        "adjective": "Talking"
    },
    {
        "name": "Swanky Hat",
        "description": "That's it, maybe they won't focus so much on your face now.",
        "adjective": "Stylish"
    },
    {
        "name": "Cracked Mirror",
        "description": "It wasn't broken before you looked in it.",
        "adjective": "Cracked"
    },
    {
        "name": "10-foot Pole",
        "description": "Good if you're lack-toes intolerant. Don't put it down or it'll walk off.",
        "adjective": "10-foot long"
    },
    {
        "name": "The Evidence",
        "description": "I wouldn't carry that around if I were you...",
        "adjective": "Evidential"
    },
    {
        "name": "Puce Goose",
        "description": "A maroon bird, to go with your spruce moose.",
        "adjective": "Puce"
    },
    {
        "name": "Egg.",
        "description": "I'm not yolking.",
        "adjective": "Eggy"
    },
    {
        "name": "Bees?",
        "description": "Bees.",
        "adjective": "Infested"
    },
    {
        "name": "Almighty Cod",
        "description": "Holy mackerel.",
        "adjective": "Holy"
    },
    {
        "name": "Pecan Danish",
        "description": "Pekannød.",
        "adjective": "Flaky"
    },
    {
        "name": "Bugged Duck",
        "description": "It'll listen in, and never quack. Mallard, your will be done.",
        "adjective": "Bugged"
    },
    {
        "name": "Sir Amik Vase",
        "description": "Good knight, Sir Amik.",
        "adjective": "Ceramic"
    },
    {
        "name": "Rope",
        "description": "Want to see a trick?",
        "adjective": "Ropy"
    },
    {
        "name": "Yummy poison",
        "description": "Oh, man. You've gotta try this.",
        "adjective": "Toxic"
    },
    {
        "name": "Makeup",
        "description": "I think you're supposed to kiss as well?",
        "adjective": "Fabulous"
    },
    {
        "name": "Name Tag",
        "description": "I think you should leave it as it is.",
        "adjective": "Named"
    },
    {
        "name": "Magical Pencil",
        "description": "Watch what happens as you wobble it.",
        "adjective": "Magic"
    },
    {
        "name": "Wizard Hat",
        "description": "You've never seen a beret that can make a fireball before, have you?",
        "adjective": "Wizardly"
    },
    {
        "name": "Cork",
        "description": "Oh, sure, let's plug drinks with foul-tasting wood...",
        "adjective": "Blocking"
    },
    {
        "name": "Frayed Wire",
        "description": "Can this thing talk? I'm afraid not.",
        "adjective": "Wiry"
    },
    {
        "name": "Chocolate Hammer",
        "description": "You're just as useful.",
        "adjective": "Choccy"
    },
    {
        "name": "Laxatives",
        "description": "Sorry, sorry, gotta go, gonna run.",
        "adjective": "Lax"
    },
    {
        "name": "Medikit",
        "description": "Useful if your healer is demanding you respect them.",
        "adjective": "Healing"
    },
    {
        "name": "Beaker of Aqueous Dihydrogen Monoxide Solution",
        "description": "I hear they give this stuff to kids. Don't they know how many people die from inhaling it each year?",
        "adjective": "Watery"
    },
    {
        "name": "Pocket Sand",
        "description": "All well and good in the moment, but irritating to loiter forever after.",
        "adjective": "Sandy"
    },
    {
        "name": "A Pail of Pale Water",
        "description": "Jack and Jacked Jill went up the hill...",
        "adjective": "Pale"
    },
    {
        "name": "A Metal Fan",
        "description": "Woo! Go lead guitarist!",
        "adjective": "Fangirling"
    },
    {
        "name": "Potion of Forging",
        "description": "No, you're a homonym.",
        "adjective": "Forging"
    },
    {
        "name": "Potion of Wakefulness",
        "description": "Comes in a mug, is brown and steamy.",
        "adjective": "Woke"
    },
    {
        "name": "Treasure Map",
        "description": "It better not be the friends we made along the way.",
        "adjective": "Mapping"
    },
    {
        "name": "Nuts that belong to Dee",
        "description": "An assortment of cashews and pistashios that all happen to belong to Dee. No joke here, no sir.",
        "adjective": "Nutty"
    },
    {
        "name": "Sturdy Leather Boots",
        "description": "Nice dry feet, but you realise a cow died and was dyed to make this?",
        "adjective": "Leather"
    },
    {
        "name": "Bellows!",
        "description": "I SAID, THEY'RE USED IN A FORGE!",
        "adjective": "Bellowing"
    },
    {
        "name": "Meatless meatloaf",
        "description": "The haters might just call this bread.",
        "adjective": "Loafing"
    },
    {
        "name": "Bland String",
        "description": "...You couldn't have painted it a little? Given it some sequins, perhaps? So generic...",
        "adjective": "Stringy"
    },
    {
        "name": "Message Brick",
        "description": "A mobile unbreakable otherworldly object with a message that indicates that someone was not in fact killed in action.",
        "adjective": "Indestructible"
    },
    {
        "name": "F-Shirt",
        "description": "A shirt for someone who's just alright.",
        "adjective": "Wearable"
    },
    {
        "name": "Handful of soil",
        "description": "No! Put that down! Don't put it in your mouth!",
        "adjective": "Soiled"
    },
    {
        "name": "Fingernail",
        "description": "Kid named finger.",
        "adjective": "Nailed"
    },
    {
        "name": "False Eyebrow",
        "description": "You can have the monobrow of your dreams!",
        "adjective": "Brow-raising"
    },
    {
        "name": "Shameless plug",
        "description": "Boy, do I wish I had a way to protect our party's information from outside sources. Luckily I can tell this plug everything, and so can you for the low, low price of...",
        "adjective": "Shameless"
    },
    {
        "name": "Stubborn Stain",
        "description": "No, it won't leave. You leave.",
        "adjective": "Stubborn"
    },
    {
        "name": "An Olive",
        "description": "Completely useless, really.",
        "adjective": "Extra-virgin"
    },
    {
        "name": "Whimsical Bookmark",
        "description": "Very quirky. Might help you to forget you're a MASSIVE NERD.",
        "adjective": "Whimsical"
    },
    {
        "name": "Malfunctioning Invisibility Cloak",
        "description": "Now you see me... now you see me...",
        "adjective": "Malfunctioning Invisible"
    }
]