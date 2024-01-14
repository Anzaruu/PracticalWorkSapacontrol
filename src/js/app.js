import initSlider from "./modules/_slider.js"
import requestDialogInit from "./modules/_request-dialog.js"
import menuInit from "./modules/_menu.js"
import submenuInit1 from "./modules/_submenu1.js"
import submenuInit2 from "./modules/_submenu2.js"
import submenuInit3 from "./modules/_submenu3.js"

const init = () => {
    initSlider()
    requestDialogInit()
    menuInit()
    submenuInit1()
    submenuInit2()
    submenuInit3()
}

init()
