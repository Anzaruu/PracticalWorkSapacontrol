const submenuInit2 = () => {
    const link2 = document.querySelector('.open-submenu-2')

    if (!link2) return

    const submenu = document.querySelector('.submenu-2')
    const arrow = document.querySelector('.menu__link-arrow')

    const handleLink = () => {
        link2.classList.toggle('open-submenu-2_active')
        submenu.classList.toggle('submenu-2_active')
        arrow.classList.toggle('menu__link-arrow_active')
    }

    link2.addEventListener('click', handleLink)
}

export default submenuInit2