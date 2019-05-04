class Greeting {
  private phrase: string;

  constructor(phrase: string) {
    this.phrase = phrase;
  }

  greet(name: string) {
    return `${this.phrase}, ${name}`;
  }
}

const g = new Greeting("Hello");




g.greet(123);

g.phrase = "goodbye";


const result: number = g.greet("Klaus");