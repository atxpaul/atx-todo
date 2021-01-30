const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear:{
        type:`boolean`,
        default:true,
        alias:`c`,
        desc: `Clear the console`,
    },
    debug:{
        type:`boolean`,
        default:false,
        alias:`d`,
        desc:`Print debug info`
    },
    version:{
        type:`boolean`,
        default:false,
        alias:`v`,
        desc: `Print CLI info`
    }
}

const commands = {
    help:{
        desc: `Print help info`
    },
    view:{
        desc: `View or list all ToDo`
    },
    add:{
        desc: `Add new ToDo`
    },
    del:{
        desc: `Clear ToDos`
    }

    
}

const helpText = meowHelp({
    name:`todo`,
    flags,
    commands,
})

const options = {
    inferType:true,
    description:false,
    hardRejection:false,
    flags
}

module.exports = meow(helpText,options)
