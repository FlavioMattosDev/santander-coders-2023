const ourMenuItems = document.querySelectorAll('.our-menu-item')

ourMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseenter', (e) => {
    const img = menuItem.querySelector('img');
    img.classList.add('scaled');
  });

  menuItem.addEventListener('mouseleave', () => {
    const img = menuItem.querySelector('img');
    img.classList.remove('scaled');
  });
});

const ourMenuItemsControllerAll = document.querySelector('button.our-menu-items_controller-all')
const ourMenuItemsControllerBurger = document.querySelector('button.our-menu-items_controller-burger')
const ourMenuItemsControllerPizza = document.querySelector('button.our-menu-items_controller-pizza')
const ourMenuItemsControllerPasta = document.querySelector('button.our-menu-items_controller-pasta')
const ourMenuItemsControllerFries = document.querySelector('button.our-menu-items_controller-fries')

const ourMenuItemsPizzas = document.querySelectorAll('div.our-menu-item-pizza')
const ourMenuItemsBurgers = document.querySelectorAll('div.our-menu-item-burger')
const ourMenuItemsPastas = document.querySelectorAll('div.our-menu-item-pasta')
const ourMenuItemsFries = document.querySelectorAll('div.our-menu-item-fries')

const handleSelectActiveController = (controllerName) => {
  ourMenuItemsControllerAll.classList.remove('active')
  ourMenuItemsControllerBurger.classList.remove('active')
  ourMenuItemsControllerPizza.classList.remove('active')
  ourMenuItemsControllerPasta.classList.remove('active')
  ourMenuItemsControllerFries.classList.remove('active')

  switch (controllerName) {
    case 'all':
      ourMenuItemsControllerAll.classList.add('active')
      break
    case 'burger':
      ourMenuItemsControllerBurger.classList.add('active')
      break
    case 'pizza':
      ourMenuItemsControllerPizza.classList.add('active')
      break
    case 'pasta':
      ourMenuItemsControllerPasta.classList.add('active')
      break
    case 'fries':
      ourMenuItemsControllerFries.classList.add('active')
      break
  }
}

const selectAllMenuItems = () => {
  ourMenuItemsPizzas.forEach(item => item.classList.add('active'))
  ourMenuItemsBurgers.forEach(item => item.classList.add('active'))
  ourMenuItemsPastas.forEach(item => item.classList.add('active'))
  ourMenuItemsFries.forEach(item => item.classList.add('active'))

  handleSelectActiveController('all')
}

const selectAllBurgers = () => {
  ourMenuItemsPizzas.forEach(item => item.classList.remove('active'))
  ourMenuItemsBurgers.forEach(item => item.classList.add('active'))
  ourMenuItemsPastas.forEach(item => item.classList.remove('active'))
  ourMenuItemsFries.forEach(item => item.classList.remove('active'))

  handleSelectActiveController('burger')
}

const selectAllPizzas = () => {
  ourMenuItemsPizzas.forEach(item => item.classList.add('active'))
  ourMenuItemsBurgers.forEach(item => item.classList.remove('active'))
  ourMenuItemsPastas.forEach(item => item.classList.remove('active'))
  ourMenuItemsFries.forEach(item => item.classList.remove('active'))

  handleSelectActiveController('pizza')
}

const selectAllPastas = () => {
  ourMenuItemsPizzas.forEach(item => item.classList.remove('active'))
  ourMenuItemsBurgers.forEach(item => item.classList.remove('active'))
  ourMenuItemsPastas.forEach(item => item.classList.add('active'))
  ourMenuItemsFries.forEach(item => item.classList.remove('active'))

  handleSelectActiveController('pasta')
}

const selectAllFries = () => {
  ourMenuItemsPizzas.forEach(item => item.classList.remove('active'))
  ourMenuItemsBurgers.forEach(item => item.classList.remove('active'))
  ourMenuItemsPastas.forEach(item => item.classList.remove('active'))
  ourMenuItemsFries.forEach(item => item.classList.add('active'))

  handleSelectActiveController('fries')
}

ourMenuItemsControllerAll.addEventListener('click', selectAllMenuItems)
ourMenuItemsControllerBurger.addEventListener('click', selectAllBurgers)
ourMenuItemsControllerPizza.addEventListener('click', selectAllPizzas)
ourMenuItemsControllerPasta.addEventListener('click', selectAllPastas)
ourMenuItemsControllerFries.addEventListener('click', selectAllFries)

const orderForm = document.querySelector('form')

orderForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(orderForm)
  const formValues = Object.fromEntries(formData.entries())

  console.log(formValues)
})