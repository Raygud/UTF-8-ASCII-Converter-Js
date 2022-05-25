let NewString;
const TextToProcess = document.getElementById("TextToProcess")
const ProcessedText = document.getElementById("ProcessedText")
const DecodeButton = document.getElementById("DecodeButton")
const EncodeButton = document.getElementById("EncodeButton")
ProcessedText.readOnly = true;
TextToProcess.setAttribute("Process", "Decode");
DecodeButton.style.backgroundColor = "lightgreen"

const ASCII = [{
    Code: "%C3%B3",
    Char: "ó"
},
{
    Code: "%C3%93",
    Char: "Ó"
},
{
    Code: "%C3%B0",
    Char: "ð"
},
{
    Code: "%C3%90",
    Char: "Đ"
},
{
    Code: "%C3%A1",
    Char: "á"
},
{
    Code: "%C3%81",
    Char: "Á"
},
{
    Code: "%C3%AD",
    Char: "í"
},
{
    Code: "%C3%8D",
    Char: "Í"
},
{
    Code: "%C3%BA",
    Char: "ú"
},
{
    Code: "%C3%9A",
    Char: "Ú"
},
{
    Code: "%C3%BD",
    Char: "ý"
},
{
    Code: "%C3%9D",
    Char: "Ý"
},
{
    Code: "%C3%A6",
    Char: "æ"
},
{
    Code: "%C3%86",
    Char: "Æ"
},
{
    Code: "%C3%B8",
    Char: "ø"
},
{
    Code: "%C3%98",
    Char: "Ø"
}
]

ToDecipher = "Tað skrivar SEV. Sjóvarfalsdrekin byrjaði beinanvegin at framleiða elorku inn á netið, og royndarkoyringin hevur gingið eftir ætlan. Tað er ein fragd at kunna boða frá, at fyrsta vikan við royndarkoyring av Dragon Class 4 hevur gingið væl. Allir staklutir hava virkað eftir ætlan, og elorka er framleidd inn á netið, sigur Martin Edlund, forstjóri í Minesto. Vit fóru undir elframleiðslu fyrsta dagin, so skjótt sum allar neyðugar forkanningar vóru gjørdar á fyrsta sjóvarfallinum. Dragon 4 roynist sera væl, og vit fara nú undir arbeiðið at fínjusterað stýriskipanina, so at sum mest av elframleiðslu fæst burturúr, sigur Bernt Erik Westre, tekniskur stjóri í Minesto."

// Bert er br --> %C3%B3 <-- FIND --> %C3%B0 <--urleyst bak


function DecodeFo(ToDecipher) {
    if (ToDecipher.includes("+")) {
        ToDecipher = ToDecipher.split("+").join(" ")
    }
    for (let i = 0; i < ToDecipher.length; i++) {
        if (ToDecipher[i] == "%") {
            for (let q = 0; q < ASCII.length; q++) {
                if (ASCII[q].Code.includes(ToDecipher.substr(i, 6))) {
                    console.log(`Eureka! We found a ASCCI code : ${ToDecipher.substr(i, 6)}`)
                    let indexInASCII = ASCII.map(object => object.Code).indexOf(ToDecipher.substr(i, 6));
                    console.log(indexInASCII)
                    console.log(`Character to replace:${ASCII[indexInASCII].Code} --> ${ASCII[indexInASCII].Char}`)
                    NewString = ToDecipher.split(ASCII[indexInASCII].Code).join(ASCII[indexInASCII].Char)
                    ToDecipher = NewString
                    console.log("New String = ", NewString)

                }
            }
        } ShowProccessed(NewString = ToDecipher)
    }

}


function EncodeFo(ToDecipher) {
    if (ToDecipher.includes("+")) {
        ToDecipher = ToDecipher.split("+").join(" ")
    }
    for (let i = 0; i < ToDecipher.length; i++) {
        for (let q = 0; q < ASCII.length; q++) {
            if (ASCII[q].Char.includes(ToDecipher[i])) {
                console.log(`Eureka! We found a letter : ${ToDecipher[i]}`)
                let indexInASCII = ASCII.map(object => object.Char).indexOf(ToDecipher[i]);
                console.log(indexInASCII)
                console.log(`Character to replace:${ASCII[indexInASCII].Char} --> ${ASCII[indexInASCII].Code}`)
                NewString = ToDecipher.split(ASCII[indexInASCII].Char).join(ASCII[indexInASCII].Code)
                ToDecipher = NewString
                console.log("New String = ", NewString)
            }
        }
    }
    ShowProccessed(NewString)
}

function ProcessText() {
    console.log(TextToProcess.value)
    console.log(TextToProcess.getAttribute("Process"))
    console.log(TextToProcess.value.length > 0)
    if (TextToProcess.value.length > 0) {
        switch (TextToProcess.getAttribute("Process")) {
            case "Decode":
                console.log("Decode")
                DecodeFo(TextToProcess.value)
                break;
            case "Encode":
                console.log("Encode")
                EncodeFo(TextToProcess.value)
                DecodeButton.style.backgroundColor = "lightgray"
                EncodeButton.style.backgroundColor = "lightgreen"
                break;

            default:
                break;
        }
    }
    else {
        console.log("No text")
        ProcessedText.value = "Type something.."
    }

}

function ShowProccessed(text) {
    ProcessedText.value = text
}

function ChooseProcess(Process) {
    TextToProcess.setAttribute("Process", Process);
    switch (TextToProcess.getAttribute("Process")) {
        case "Decode":
            DecodeButton.style.backgroundColor = "lightgreen"
            EncodeButton.style.backgroundColor = "lightgray"
            break;
        case "Encode":
            DecodeButton.style.backgroundColor = "lightgray"
            EncodeButton.style.backgroundColor = "lightgreen"
            break;

        default:
            break;
    }

}

// NewString = ToDecipher.replace(/%C3%B3/g, "ó").replace(/%C3%B0/g, "ð")
