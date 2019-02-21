import { LitElement, html, property, customElement } from 'lit-element';

@customElement('my-element')
class MyElement extends LitElement {
    @property() greeting: string = 'Hello';

    render() {
        return html`
        <input value="${this.greeting}" @keyup="${(event: any) => this.greeting = event.target.value}">
        <p>${this.greeting}, World</p>
        <input type="button" value="Clear" @click="${this.handleClick}">`;
    }

    handleClick() {
        this.greeting = '';
    }
}
