export default function shuffle(element) {
    for (let i = element.answers.length -1 ; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [element.answers[i], element.answers[j]] = [element.answers[j], element.answers[i]];
        if (element.right == j) {
          element.right = i;
        }
        else if (element.right == i) {
            element.right = j;
        }
    }
    return element;
}
