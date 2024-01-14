const submenuInit3 = () => {
    const link2 = document.querySelector('.open-submenu-3')

    if (!link2) return

    const submenu = document.querySelector('.submenu-3')

    const handleLink = () => {
        link2.classList.toggle('open-submenu-3_active')
        submenu.classList.toggle('submenu-3_active')
    }

    link2.addEventListener('click', handleLink)
}

export default submenuInit3