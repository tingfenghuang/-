import ImgView from './imgView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const componentsPlugin = {
    install(app) {
        app.component('XtxImgView', ImgView)
        app.component('XtxSku', XtxSku)
    }
}