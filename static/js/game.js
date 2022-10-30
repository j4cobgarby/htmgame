var scenario = 4
var feature = 0

var invMax = 4
var gold = 7
var selection = null

var items = [
    {
        name: "Pet Cat",
        description: "Do not the cat.",
    },
    {
        name: "Russian Doll",
        description: "\"Da.\"",
    },
]

function onLoad() {
    renderInventory()
    renderScenario()
    renderClassList()
}

function renderInventory() {
    var inv = document.getElementById("inventory")
    inv.innerHTML = ""

    inv.appendChild(inventoryTotal())

    for (var item of items) {
        inv.appendChild(inventoryItem(item))
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

    if (selection) {
        stagedItem.classList.remove("disabled")
        button.classList.remove("disabled")

        var h2 = document.createElement("h2")
        h2.innerHTML = selection.name

        var p = document.createElement("p")
        p.innerHTML = selection.description

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
    elem.innerHTML = items.length + "/" + invMax
    elem.id = "inv-total"
    return elem
}

function inventoryItem(item) {
    var elem = document.createElement("div")
    elem.className = "item"

    var h2 = document.createElement("h2")
    h2.innerHTML = item.name

    var p = document.createElement("p")
    p.innerHTML = item.description

    elem.appendChild(h2)
    elem.appendChild(p)

    const it = item
    elem.onclick = () => selectItem(it)

    return elem
}

function selectItem(item) {
    if (selection) {
        items.push(selection)
    }
    
    selection = item
    
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == item.name) {
            items.splice(i, 1)
        }
    }

    renderInventory()
    renderSelection()
}