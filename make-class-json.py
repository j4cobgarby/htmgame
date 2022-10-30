string = """Dr. Professor, PhD
Smart
As a smart doctor professor with a doctorate, you possess unbounded intelligence. Your power lies in binding unrelated things together and deducing what will happen before you do it.
Sage Mage
Smart
You are a wise wizard whose power is in herbs and spices. Most of all, the sacred herb of Sage. Your power lies in giving flavour and life as well as using your wisdom to anticipate the result of your actions.
The Quantum Mechanic
Smart
You are a tremendous bore who makes up literally everything. Your power is in the fine-tuning of inscrutable mechanisms in the universe, such as by quantum tunneling between two places and by observation lock in a particular result to your actions.
Swashbuckler
Strong
You are a strong and charismatic go-getter who does not buckle under pressure and swashes using buckles. Your power is lassoing and thwacking using your belt of belting and overpowering obstacles using sheer brute strength.
Barber-ian
Strong
You are rage-filled hairstylist whose passion is style and whose style is passion. Your power is using versatile hairgel to do basically any function of hygiene, style, or other and using brute strength to overpower your foes.
Strongman
Strong
You are a strong strongman who was not at all strongarmed into the circus. Your power is in using your extra-nifty moustache that is a handlebar in more than one sense and overpowering obstacles using your rippling muscular brute strength.
Magician
Sneaky
You are a stage magician whose power is in their props and the quickness of their hands rather than true magic. You have an endless handkerchief and can fashion objects into shivs and lockpicks.
Rouge [Sic]
Sneaky
You are either dyslexic, or a sneaky red-themed scoundrel. Your power is in tempting yet deadly redness, and fashioning regular objects into weapons or lockpicks.
Cookie-jar Pilferer
Sneaky
You are a no-good brat who does what they want and blames it on the dog. Your power is in your larcenous sticky fingers and your ability to fashion household objects into dangerous objects and thieves' tools.
Astronomer
Saintly
You are a definitely legitimate science professional who uses the stars to know things about reality. Your power is in prediction and observation using your horrific telescope and your ability to use your knowledge of mag-science to keep an object in working order.
Cult Leader
Saintly
You are a charismatic leader whose power is installing religious fervour in your minions and having a minion find replacements for broken objects.
Bar Nun
Saintly
You are a purveyor of spirits of many varieties, a barlady of the cloth. You are the best... Bar Nun.  Your power is bestowing holy drinks and blessing objects to never break."""

import json

lines = string.split("\n")
data = []

for i in range(0, len(lines), 3):
    name = lines[i]
    category = lines[i + 1]
    desc = lines[i + 2]
    data.append({
        "name": name,
        "category": category,
        "description": desc,
    })

print(json.dumps(data))