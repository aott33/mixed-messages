// Declare and initialize arrays
const verb1 = ["sang", "danced", "argued", "baked", "calculated"];
const noun1 = ["car", "bike", "UFO", "tractor", "boat"];
const verb2 = ["boiling", "bouncing", "eating", "exploring", "hopping"];
const noun2 = ["aunt", "best friend", "pet dog", "salamander", "yoyo"];

const mixedMessage = () => {
    let randVerb1 = Math.floor(Math.random() * verb1.length);
    let randNoun1 = Math.floor(Math.random() * noun1.length);
    let randVerb2 = Math.floor(Math.random() * verb2.length);
    let randNoun2 = Math.floor(Math.random() * noun2.length);

    console.log(`The cow ${verb1[randVerb1]} in a ${noun1[randNoun1]} and was ${verb2[randVerb2]} with his ${noun2[randNoun2]}.`);
}

mixedMessage();