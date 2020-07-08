const jbdap = require('../src/JBDAP')
const helper = jbdap.helper
const path = require('path')
const getConn = (name) => {
    return jbdap.knex({
        client: 'sqlite3',
        connection: {
            filename: path.join(__dirname,name+'.sqlite')
        },
        useNullAsDefault: true,
        asyncStackTraces: true,
        debug: false
    })
}

const files = ['user','category','blog','comment','subscription']

async function initDB(conn) {
    // 创建数据表
    for (let i=0; i<files.length; i++) {
        let model = require(`./model/${files[i]}`)
        try {
            await helper.createTable(conn,model)
        }
        catch (err) {
            console.log(err)
        }
    }
}

async function emptyDB(conn) {
    // 创建数据表
    for (let i=0; i<files.length; i++) {
        let model = require(`./model/${files[i]}`)
        try {
            await helper.dropTable(conn,model.name)
        }
        catch (err) {
            console.log(err)
        }
    }
}

async function resetDB(conn) {
    await emptyDB(conn)
    await initDB(conn)
    console.log('数据库重置完毕')
}

module.exports = {
    getConn,
    initDB,
    emptyDB,
    resetDB,
}