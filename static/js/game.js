var scenario = 0
var feature = 0

var playerName = ""
var playerID = -1
var invMax = 4
var gold = 7
var selection = null

var answers

var sceneNames = [
    "join",
    "lobby",
    "setting",
    "choice",
    "answer",
    "voting",
    "loot-waiting",
    "loot-choose",
    "waiting",
]

var state = "lobby"

var ws

var inventory = []

function onLoad() {
    ws = new WebSocket("ws://localhost:6483")

    ws.addEventListener('message', (event) => {
        console.log('msg: ', event.data)

        var data = JSON.parse(event.data)

        switch (data.action) {
        case "room_description":
            scenario = data.description_id
            feature = data.feature_id
            renderScenario()
            renderInventory()
            break
        case "request_answers":
            getStatus()
            changeState("setting")

            window.setTimeout(() => {
                changeState("choice")
            }, 5000)
            break
        case "status_response":
            playerID = data.player_id
            inventory = data.items
            renderInventory()
            break
        case "all_answers":
            changeState("answer")
            answers = data.players

            showAllAnswers(0)
            break
        case "looting_begin":
            changeState("loot-waiting")
            break
            
        case "request_item_choice":
            changeState("loot_choose")
            lootOptions = data.options
            break
        }
    })

    renderClassList()

    changeState("lobby")
}

function changeState(to) {
    state = to
    showHidePages()
}

function getStatus() {
    ws.send(JSON.stringify({"action":"get_status"}))
}

function showHidePages() {
    for (var name of sceneNames) {
        document.getElementById("scene-" + name).hidden = name != state
    }
}

function startVote() {
    var container = document.getElementById("vote-players")
    container.innerHTML = ""

    for (var answer of answers) {
        if (answer.user_id != playerID) {
            var el = document.createElement("div")
            el.className = "vote-player"

            var img = document.createElement("img")
            img.src = "img/test.png"
            el.appendChild(img)

            var p = document.createElement("P")
            p.innerHTML = answer.message
            p.className = "answer"
            el.appendChild(p)

            const ID = answer.user_id
            el.onclick = () => {
                castVote(ID)
                wait()
            }

            container.appendChild(el)
        }
    }

    changeState("voting")
}

function wait() {
    changeState("waiting")
}

function castVote(userID) {
    ws.send(JSON.stringify({
        "action": "send_vote",
        "player": userID
    }))
}

function showAllAnswers(n) {
    if (n >= answers.length) {
        startVote()
        return
    }

    var answer = answers[n]
    const N = n + 1

    console.log(answer)
    document.getElementById("answer-class").innerHTML = answer.user
    document.getElementById("answer-item").innerHTML = itemsData[answer.item].name
    document.getElementById("answer-text").innerHTML = answer.message

    window.setTimeout(() => {
        showAllAnswers(N)
    }, 5000)
}

function renderInventory() {
    var inv = document.getElementById("inventory")
    inv.innerHTML = ""

    inv.appendChild(inventoryTotal())

    for (var item of inventory) {
        inv.appendChild(inventoryItem(item, itemsData[item]))
    }
}

function renderScenario() {
    document.getElementById("setting-description").innerHTML = roomDescriptions[scenario]
    document.getElementById("setting-img").src = "img/scenes/" + roomImages[scenario]

    document.getElementById("choice-description").innerHTML = roomDescriptions[scenario]
    document.getElementById("choice-img").src = "img/scenes/" + roomImages[scenario]
    document.getElementById("choice-classname").innerHTML = classData[selectedClass].name

    document.getElementById("answer-description").innerHTML = roomDescriptions[scenario]
    document.getElementById("answer-img").src = "img/scenes/" + roomImages[scenario]
}

function renderSelection() {
    var stagedItem = document.getElementById("staged")
    var button = document.getElementById("submit")

    if (selection != null) {
        stagedItem.classList.remove("disabled")
        button.classList.remove("disabled")

        var h2 = document.createElement("h2")
        h2.innerHTML = itemsData[selection].name

        var p = document.createElement("p")
        p.innerHTML = itemsData[selection].description

        stagedItem.innerHTML = ""
        stagedItem.appendChild(h2)
        stagedItem.appendChild(p)
    } else {
        stagedItem.classList.add("disabled")
        button.classList.add("disabled")
    }
}

function inventoryTotal() {
    var elem = document.createElement("p")
    elem.innerHTML = inventory.length + "/" + invMax
    elem.id = "inv-total"
    return elem
}

function inventoryItem(index, item) {
    var elem = document.createElement("div")
    elem.className = "item"

    var h2 = document.createElement("h2")
    h2.innerHTML = item.name

    var p = document.createElement("p")
    p.innerHTML = item.description

    elem.appendChild(h2)
    elem.appendChild(p)

    const it = item
    elem.onclick = () => selectItem(index)

    return elem
}

function selectItem(index) {
    if (selection != null) {
        inventory.push(selection)
    }
    
    selection = index
    
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i] == index) {
            inventory.splice(i, 1)
        }
    }

    renderInventory()
    renderSelection()
}

function submitSolution() {
    if (selection == null) {
        alert("no selection")
        return
    }

    var data = {
        "action": "send_answer",
        "message": document.getElementById("solution-input").value,
        "item_id": selection,
    }

    ws.send(JSON.stringify(data))

    wait()
}

function showLootOptions() {
    var container = document.getElementById("loot-choices")
    container.innerHTML = ""

    for (var option of lootOptions) {
        var el = document.createElement("div")
        el.className = "item"

        var h2 = document.createElement("h2")
        h2.innerHTML = option.name
        el.appendChild(h2)

        var p = document.createElement("p")
        p.innerHTML = option.description
        el.appendChild(p)
    }
}
