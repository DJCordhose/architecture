import { LitElement, html, property, customElement } from 'lit-element';
// import { html, property, customElement } from 'lit-element';
// import { PageViewElement } from './page-view-element';

@customElement('hello-world')
export class SimpleGreeting extends LitElement {
// export class SimpleGreeting extends PageViewElement {
  @property() name = 'World';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}