import shuffle from "@/shuffle.js"

describe('shuffle-Funktion', () => {

  it('Shuffle Liste mit einem Element', () => {
    const element = {
      question: "Spielt keine Rolle",
      answers: ["korrekt"],
      right: 0,
    };
    const result = shuffle(element);
    expect(result.answers[result.right]).toMatch("korrekt");
  });

  it('Shuffle Liste mit zwei Elementen, erstes korrekt', () => {
    const element = {
      question: "Spielt keine Rolle",
      answers: ["korrekt", "falsch"],
      right: 0,
    };
    const result = shuffle(element);
    expect(result.answers[result.right]).toMatch("korrekt");
  });

  it('Shuffle Liste mit zwei Elementen, zweites korrekt', () => {
    const element = {
      question: "Spielt keine Rolle",
      answers: ["falsch", "korrekt"],
      right: 1,
    };
    const result = shuffle(element);
    expect(result.answers[result.right]).toMatch("korrekt");
  });

  it('Shuffle Liste mit drei Elementen, letztes korrekt', () => {
    const element = {
      question: "Spielt keine Rolle",
      answers: ["falsch", "falsch", "korrekt"],
      right: 2,
    };
    const result = shuffle(element);
    expect(result.answers[result.right]).toMatch("korrekt");
  });  

})
