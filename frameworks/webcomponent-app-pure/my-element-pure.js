const template = `
<style>
p {
    color: green;
}
</style>
<input id="in">
<p><span id="log"></span>, World</p>
<input id="btn" type="button" value="Clear">
`;

class MyElement extends HTMLElement {
    static get observedAttributes() {
        return ['greeting'];
    }
    constructor() {
        super();
        this.render();
    }

    connectedCallback() {
        this.bind();
        this.model = this.getAttribute("greeting");
    }

    bind() {
        this.input.addEventListener("keyup", event => this.model = event.target.value);
        this.button.addEventListener("click", event => {
            this.model = "";
            this.input.focus();
        });
    }

    render() {
        // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = template;
        this.input = this.shadowRoot.querySelector("#in");
        this.log = this.shadowRoot.querySelector("#log");
        this.button = this.shadowRoot.querySelector("#btn");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "greeting") {
            this.model = newValue;
        }
    }

    set model(value) {
        this.log.textContent = value;
        this.input.value = value;
    }
}

customElements.define('my-element', MyElement);