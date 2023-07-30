class PromotionCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'promotion_card');

    const title = this.getAttribute('title')
    const description = this.getAttribute('description')
    const imageSrc = this.getAttribute('imageSrc')

    const leftSide = document.createElement('div')
    leftSide.setAttribute("class", "card_box_left")

    const promotionImage = document.createElement('img');
    promotionImage.src = `${imageSrc}`

    leftSide.appendChild(promotionImage);

    const rightSide = document.createElement('div')
    rightSide.setAttribute("class", "card_box_right")

    const promotionTitle = document.createElement("h3")
    const promotionDescriptionContainer = document.createElement("div")
    const promotionDescription = document.createElement("h4")
    const promotionDescriptionOffer = document.createElement("span")
    const promotionButton = document.createElement("button")
    const promotionButtonIcon = document.createElement('i')

    promotionTitle.setAttribute("class", "card_box_right__title")
    promotionDescriptionContainer.setAttribute("class", "card_box_right__description_container")
    promotionDescription.setAttribute("class", "card_box_right__description")
    promotionDescriptionOffer.setAttribute("class", "card_box_right__description_offer")
    promotionButton.setAttribute("class", "card_box_right__button")
    promotionButtonIcon.setAttribute("class", "fa fa-cart-shopping")

    promotionTitle.innerText = title
    promotionDescription.innerText = description
    promotionDescriptionOffer.innerText = "Off"
    promotionButton.innerText = "Order Now"

    promotionButton.appendChild(promotionButtonIcon)

    promotionDescriptionContainer.appendChild(promotionDescription)
    promotionDescriptionContainer.appendChild(promotionDescriptionOffer)

    rightSide.appendChild(promotionTitle)
    rightSide.appendChild(promotionDescriptionContainer)
    rightSide.appendChild(promotionButton)


    componentRoot.appendChild(leftSide);
    componentRoot.appendChild(rightSide);

    return componentRoot;
  }

  style() {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        border: 0
      }

      div.promotion_card {
        display: flex;

        gap: 16px;
        padding: 12px 22px;

        border-radius: 8px;
        background-color: #222831
      }

      @media(max-width: 992px) {
        div.promotion_card {
          flex-direction: column;
          align-items:center
        }
      }

      div.card_box_left {
        border-radius: 100%;
        border: 1px solid #ffbe33;

        width: 175px;
        height: 175px;
        
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      div.card_box_left img {
        width: 100%;
        height: auto;
        transition: all ease .3s
      }

      div.card_box_left img:hover{
        transform: scale(1.1)
      }

      div.card_box_right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-block: 18px
      }

      div.card_box_right .card_box_right__title{
        font-family: 'Dancing Script', cursive;
        font-size: 24px;
        color: #FFFFFF;
      }

      div.card_box_right .card_box_right__description_container {
        display: flex;
        align-items: end;
        gap: 8px;
        font-family: 'Dancing Script', cursive;
        color: #FFFFFF
      }
      
      div.card_box_right .card_box_right__description{
        font-size: 42px;
      }

      div.card_box_right .card_box_right__description_offer {
        text: 16px;
        padding-bottom: 12px
      }
      
      div.card_box_right .card_box_right__button{
        background-color: #ffbe33;
        color: #FFFFFF;
        border-radius: 36px;

        padding: 12px 32px;

        transition: all ease .3s;
        cursor: pointer;
        margin-top: 8px
      }

      div.card_box_right .card_box_right__button:hover {
        background-color:  #e69c00
      }
    `

    return style
  }
}

customElements.define('promotion-card', PromotionCard);
