class PrimaryButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement('button');
    componentRoot.setAttribute('class', 'button');

    const title = this.getAttribute('text')

    componentRoot.innerText = title

    return componentRoot;
  }

  style() {
    const style = document.createElement('style');
    style.textContent = `
      .button {
        padding: 10px 54px;
        background-color: #ffbe33;
        color: #FFFFFF;
        border: none;
        border-radius: 45px;
        transition: all ease .3s;
        white-space: nowrap;
        cursor: pointer
      }

      .button:hover {
        background-color: #e69c00
      }
    `

    return style
  }
}

customElements.define('primary-button', PrimaryButton);
