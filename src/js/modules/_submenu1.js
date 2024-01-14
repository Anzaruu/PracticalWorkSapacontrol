const submenuInit1 = () => {
    const link1 = document.querySelector('.open-submenu-1')

    if (!link1) return

    const submenu = document.querySelector('.submenu-1')
    const arrow = document.querySelector('.menu__link-arrow')

    const handleLink = () => {
        link1.classList.toggle('open-submenu-1_active')
        submenu.classList.toggle('submenu-1_active')
        arrow.classList.toggle('menu__link-arrow_active')
    }

    link1.addEventListener('click', handleLink)
}

export default submenuInit1