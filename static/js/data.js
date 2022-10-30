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




var roomDescriptions = ["Tragedy besets your party as a cave-in strands you in the darkest depths of the dungeon for days. As your rations dwindle, it becomes clear to each of you that you must supplement them for the sake of morale. How do you gather more food?", "It's becoming increasingly clear that the stone giant's assault on the barricade is unceasing. If you are to survive, you must create a distraction to hold the giant's attention when it breaches so that your archers can surround the monster. How do you hold its attention?", "\"It's pronounced 'ch-ai-mber' you miserable ingrate!\" one of your party members calls out, an unusual warcry to say the least. \"Not ch-ah-mber! I'll kill you! I'll kill all of you!\" It seems things are escalating rather drastically. You should probably nip this in the bud before it turns into a full-on mutiny. What do you do?", "As you reach the end of the corridor, you see three towering armoured spectres, their eyes aglow. All around, the voices of the departed whisper to you, \"One door leads to freedom, the others certain doom. Of the three figure, one is ever truthful, another tells only lies, and the last stabs would-be logicians asking tricky questions.\" How will you overcome this puzzle?", "As you go to check on your companions' progress, you see them wailing and gnashing their teeth. \"Alas, the path forward is impossible!\" they cry. \"Of the three doors, one is clearly for washing oneself, one is a place to hang your garments, and the last is clearly marked with a warning not to disturb! Thus ends our brave foray into this ancient tomb.\" It seems your companions are beset by madness, what do you do?", "As you reach the centre of the room, you catch yourself just in time; unbeknownst to you there was a pit reaching from wall to wall in the middle of the room. The walls of the pit are vertical, and the gap is eleven foot wide. How do you cross the pit?", "You freeze, the moment you enter this next chamber. It seems that another adventuring party had been exploring this dungeon ahead of you. Emphasis on the word 'had'. A gaggle of ghouls are feasting on the remains of your predecessors. They don't appear to have noticed you yet, but one wrong move could bring down the entire pack upon you at once. How do you deal with this... infestation?", "After slaying a dark mage sequestered in a labyrinth, you and your party members are dividing its possessions amongst yourselves. Part way into a drawer containing odds and ends, you pause. It's been some time since you've seen your companions. You rush from room to room looking for them, until you finally check the library. Your companions are there, weeping openly around a single book. \"How?\" they cry. \"How are we to go on, knowing that free will is an impossibility? That everything we do is pre-ordained or some result of purely random forces?\" You sigh, gathering your wits. How do you defuse this nihilistic whinging?", "You are some distance into this latest chamber, when the lit torches adorning the walls are suddenly extinguished, all at once. You hear the unmistakeable chittering of giant cockroaches, growing louder as they surge towards you. You have but a moment to act. What do you do?", "As you enter this latest chamber, you spot that the floor is adorned with large individual tiles in a grid, around five foot across. Something feels off. As you ponder exactly what this is, you spot Steve jogging ahead with reckless abandon. Before you can say a word, a tile that Steve stands on sinks into the floor. There is a sizeable explosion, and Steve goes, quite frankly, everywhere. It has made rather a mess, to be perfectly honest with you. Luckily, it was just Steve and not someone of import. Clearly, your path ahead requires a more careful hand. How do you proceed?", "You enter a room, and in the centre is a crude wooden stand, with a troll sittingbehind it. The sign above reads 'Trol Boof'. It appears it expects payment from you to proceed. The price is difficult to read, but clearly has far too many digits. How do you decide to pass?", "It seems your adventure has to be put on hold for now. Your local liege lord expects tribute from your adventuring. He has very exacting standards. Nothing too flashy or gaudy, but nothing a commoner would ever be able to own. No strong food or drink, but nothing tastless. Nothing too obvious of purpose, but also nothing where he cannot grasp the subtlety. In short, he is impossible to please. What gift do you decide to give him, and why?", "You enter a room with a fabulous amount of treasure covering the floor. You are overjoyed, until you spot the large dragon partially buried in all the coins. You might be able to grab a treasure or two, but you must be careful not to disturb the dragon, at least not unless you are prepared to finish the job. What do you do?", "The door to the next room is barred with numerous locks. Attempts to pick the door lead to electric shocks and gouts of flame. How do you deal with the door?", "This next barrier is more frustrating than dangerous. There is a rocky 20 foot wall blocking your progress. Not too difficult, in of itself. However, atop the wall there are mischievous goblins with 10-foot long wooden poles pushing you and your fellow adventurers off, while cackling maniacally. How do you make progress?", "This room appears to be a crossroads, and when you arrive there appear to be two groups of goblins engaged in a turf war. One side call themselves goblins of the mind, while the other are goblins of the heart. Armed as they are with projectiles and explosives, you and your party are unlikely to emerge unscathed should the fight worsen. How do you resolve the situation?", "During your downtime, you and your party decide to stake some of the recently unearthed treasure on a rousing game of capture the flag. What is your plan?", "You and your party have arranged for a secret santa. Choose one gift to give to [person on your left, etc.] and explain why you think this would be a good gift for them.", "This next room is filled to the brim with long, tendrilled vines. You scan the vines, and realise from a flicker of movement and a backhanded compliment that there are extremely judgemental snakes hiding among them. They seem to be making crude comments about your appearance and outfit. What do you do to deal with the creepers? And the creepers?", "When you move to open the next door, the ornamental sheep's head knocker bleats a riddle. \"Poor people have me, rich people need me, if you eat me you shall die. What am I?\" As you are about to answer a dim-witted ranger yells \"Rat droppings!\" The door glows, before melting into the wall. You are naturally furious, but something must be done to proceed onward. What do you do?", "All you have left for food is bland and tasteless soup. At this point you and your companions would kill to give it some flavour. What do you use to flavour the soup?", "As you and your companions explore this latest room, you see a silhouette dart out from behind a statue. A silhouette of a woman with a snake-like tail and snakes for hair. A gorgon! You quickly close your eyes, before its gaze turns you to stone. Fighting like this will not be easy, but you have a way to turn the tide. What do you do?", "The situation is dire. One of your number is writhing on the floor, clutching their arm. It appears they have been bitten by the dreaded half-adder snake. The venom is very deadly, taking around ten minutes to kill, being gradually pumped ever closer to the victim's heart. What do you do for the poor victim, either to put them out of their misery or to save their life?", "A malevolent spirit clearly infests this room, and it is flinging quite delicate and expensive artefacts everywhere. Clearly it is dissatisfied with the current state of its existence. Choose an object to banish or contain the phantom."]



var roomImages = [
    "hungry.png",
    "giant.png",
    "group.png",
    "guards.png",
    "do-not-disturb.png",
    "pit.png",
    "ghost-feast.png",
    "book.png",
    "black.png",
    "tiles.png",
    "troll.png",
    "lords-gift.png",
    "dragon.png",
    "lock-door.png",
    "ledge.png",
    "mind-goblin.png",
    "flag.png",
    "santa.png",
    "snakes.png",
    "sheep-knocker.png",
    "soup.png",
    "medusa.png",
    "adder.png",
    "poltergeist.png",
]