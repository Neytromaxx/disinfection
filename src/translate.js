export default{
    install(app, options){
        console.log('app', app)
        console.log('opt', options)

        app.config.globalPtoperties.$alert = text =>{
            window.alert(text)
        }

        // let current = 'uz'

    //     app?.config?.globalPtoperties.$i18n = key =>{
    //         return key.split('.').reduce((word, k)=>{
    //             return word[k] ? word[k] : 'no word'
    //         },options[current])
    //     }
    //     const changeLanguage = lang =>{
    //         current = lang
    //     }
    //     app.provide('i18nChange', changeLanguage)
    }
}