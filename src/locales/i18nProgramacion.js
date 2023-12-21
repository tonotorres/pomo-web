import { createI18n } from "vue-i18n";

import en from "./EN_programacion.json"
import es from "./ES_programacion.json"

const i18nProgramacion = createI18n({
    legacy: false,
    locale: "es",
    messages: {
        es: es,
        en: en
    }
})

export default i18nProgramacion;