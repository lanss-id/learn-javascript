    class Developer{
        constructor(name) {
            this.name = name;
        }

        commitChange() {
            console.log(`${this.name} sedang commit perubahan`)
        }
    }

    function canBuildUI(dev) {
        return {
            buildUI: () => {
                console.log(`${dev.name} sedang membuat UI`)
            }
        }
    }

    function canBuildAPI(dev) {
        return {
            buildAPI: () => {
                console.log(`${dev.name} sedang membuat API`)
            }
        }
    }

    function canDeployApp(dev) {
        return {
            deployApp: () => {
                console.log(`${dev.name} sedang mendeploy Aplikasi`)
            }
        }
    }

    function createFrontEndDev(name) {
        const dev = new Developer(name)
        return Object.assign(dev, canBuildUI(dev))
    }

    function createBackEndDev(name) {
        const dev = new Developer(name)
        return Object.assign(dev, canBuildAPI(dev))
    }

    function createDevOps(name) {
        const dev = new Developer(name)
        return Object.assign(dev, canDeployApp(dev))
    }

    function createFullStackDev(name){
        const dev = new Developer(name)
        return Object.assign(dev, canDeployApp(dev), canBuildUI(dev), canBuildAPI(dev))
    }

    const frontEndDev = createFrontEndDev('Figo')
    frontEndDev.buildUI()
    frontEndDev.commitChange()
    console.log(`Apakah ${frontEndDev.name} developer?`, frontEndDev instanceof Developer)

    const backEndDev = createBackEndDev('Alan')
    backEndDev.buildAPI()
    backEndDev.commitChange()
    console.log(`Apakah ${backEndDev.name} developer?`, backEndDev instanceof Developer)

    const devOps = createDevOps('Satria')
    devOps.commitChange()
    devOps.deployApp()
    console.log(`Apakah ${devOps.name} developer?`, devOps instanceof Developer)

    const fullStackDev = createFullStackDev('Taofik')
    fullStackDev.buildUI()
    fullStackDev.buildAPI()
    fullStackDev.commitChange()
    fullStackDev.deployApp()
    console.log(`Apakah ${fullStackDev.name} developer?`, fullStackDev instanceof Developer)
