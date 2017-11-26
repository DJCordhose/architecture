import { Element } from './node_modules/@polymer/polymer/polymer-element.js';
// import './node_modules/@polymer/polymer/polymer-element.js';

// https://github.com/PolymerLabs/lit-html
// https://gist.github.com/kenchris/0188cac7467df2b9c03e777948d08fa2

import { html, render } from './node_modules/lit-html/lit-html.js';

export const MyElement = class extends Element {
  static get template() {
    const h = `
    <h2>Hello Modules!</h2>
    <paper-input>[[name]]</paper-input>
    <paper-button id="optionA" class="answer" on-click="_greet">Greet</paper-button>

`;
console.log(h);
return h;
  }
        static get properties() {
          return {
            name: {
              type: String,
              value: "Oma"
            },
            greeting: {
              type: String,
              value: "Huhu"
            }
          };
        }


  static get is() { return 'my-element'; }

  _greet() {
    console.log(`${this.greeting}, ${this.name}`);
  }
  
}
window.customElements.define(MyElement.is, MyElement);