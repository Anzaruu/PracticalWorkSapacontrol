const menuInit = () => {
    const toggleMenu = document.querySelector('.toggle-menu')

    if (!toggleMenu) return

    const menu = document.querySelector('.nav__menu')
    const phone = document.querySelector('.header__phone')

    const handleToggleMenu = () => {
        toggleMenu.classList.toggle('toggle-menu_active')
        menu.classList.toggle('menu_active')
        phone.classList.toggle('phone_active')
    }

    toggleMenu.addEventListener('click', handleToggleMenu)
}

export default menuInit