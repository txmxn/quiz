export default function shuffle(element) {
    console.log(JSON.stringify(element.answers) + ", " + element.right);
    for (let i = element.answers.length -1 ; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [element.answers[i], element.answers[j]] = [element.answers[j], element.answers[i]];
        console.log("Tausche " + i + ", " + j);
        if (element.right == j) {
          element.right = i;
        }
        else if (element.right == i) {
            element.right = j;
        }
        console.log(JSON.stringify(element.answers) + ", " + element.right);
    }
    return element;
}
