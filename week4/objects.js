let s = "string"
let s2 = new String("string")

// s

let machine1 = {
    memory: 16,
    processor: "intel",
    storage: 250,
    screenSize: 13,
    os: "windows 10"
}

let machine2 = {
    memory: 8,
    processor: "arm",
    storage: 256,
    screenSize: 13,
    os: "mac os ventura"
}

// laptop.upgradeRAM(16)

function Laptop(memory, processor, storage, screenSize, os, colour) {
    this.memory = memory
    this.processor = processor
    this.storage = storage
    this.screenSize = screenSize
    this.os = os
    this.colour = colour 
    this.keyboard = "built-in"

    this.upgradeRAM = function(newRAM) {
        this.memory = newRAM
    }

    this.score = function() {
        let tempScore = this.memory * this.storage + this.screenSize 
        if (tempScore > 10 ) {
            return { finalScore: "good"}
        } else {
            return { finalScore: "not good"}
        }
    }
}



let suluxansMac = new Laptop(8, "arm - m1", 256, 13, "ventura mac os", "space grey")
let laptop1 = new Laptop(8, "intel", 256, 13, "windows", "space grey")
let laptop2 = new Laptop(16, "intel", 256, 16, "windows", "space grey")
let laptop3 = new Laptop(32, "intel", 256, 13, "windows", "space grey")

let laptops = [
    suluxansMac, 
    laptop1,
    laptop2,
    laptop3
]

// laptops.forEach((laptop) => {
    
// })

const laptopsFiltered = laptops.map((laptop) => laptop.memory >= 16 && laptop.screenSize >= 13 );
console.log(suluxansMac.score())

Laptop.prototype.osCheck = function() {
    console.log(`this laptop has the ${this.os} OS`)
}

laptop1.osCheck

String.prototype.hasLetters = function() {
    return "yes"
}

s.hasLetters