// https://www.webcomponents.org/
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements
// https://gist.github.com/kenchris/0188cac7467df2b9c03e777948d08fa2
// https://developers.google.com/web/fundamentals/architecture/building-components/

import { html, render } from './node_modules/lit-html/lit-html.js';

class MyElement extends HTMLElement {
    static get observedAttributes() { return ['name']; }

    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.attachShadow({ mode: 'open' });
        this._name = 'Oma';
        this._greeting = this.getAttribute("greeting") || 'Huhu';
        this._cnt = 0;
        //   this.attachShadow({mode: 'closed'}).innerHTML = `<h1>Huhu</h1>`;
    }


    get template() {
        return html`
        <div>
        <h1>${this._greeting}, ${this._name}</h1>
        <h2>Clicked: ${this._cnt}</h2>
        <button>Click mich</button>
        </div>
        `;

    }

    connectedCallback() {
        render(this.template, this.shadowRoot);    
        // this.shadowRoot.innerHTML = `
        // <div>
        // <h1>Huhu</h1>
        // <button>Click mich</button>
        // </div>
        // `;
        this.btn = this.shadowRoot.querySelector('button');
        this.btn.addEventListener('click', (event) => {
            this._name = 'Opa';
            this._cnt++;
            render(this.template, this.shadowRoot);    
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'name') {
            this._name = newValue;
        }
    }
}

window.customElements.define('my-element', MyElement);