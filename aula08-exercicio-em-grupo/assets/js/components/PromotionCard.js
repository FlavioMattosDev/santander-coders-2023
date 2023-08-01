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

    const cardIcon = document.createElement('i')
    cardIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="auto" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM180,192a12,12,0,1,1-12,12A12,12,0,0,1,180,192Zm-96,0a12,12,0,1,1-12,12A12,12,0,0,1,84,192Z"></path></svg>`

    promotionButton.appendChild(promotionButtonIcon)
    promotionButton.appendChild(cardIcon)

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

      div.promotion_card:hover img {
        transform: scale(1.1)
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
        margin-top: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px
      }

      div.card_box_right .card_box_right__button:hover {
        background-color:  #e69c00
      }
    `

    return style
  }
}

customElements.define('promotion-card', PromotionCard);
