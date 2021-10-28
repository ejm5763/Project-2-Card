import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {

    constructor() {
        super();
        this.img = lightbulb;
        this.dark = false;
        this.alt = "lightbulb icon";
    }

    static get tag() {
        return 'learning-icon';
    }

    static get properties() {
        return {
            ...super.properties,
            icon: {type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                background-color: blue;
                width: 100px;
                height: 100px;
            }
        `;
    }

    render() {
        return html`
            <div>
                <img src="${this.icon}" alt="${this.alt}">
            </div>
        `;
    }

}
customElements.define(LearningIcon.tag, LearningIcon);