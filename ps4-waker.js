const { Device } = require('ps4-waker')
const ps4 = new Device()

const arg = process.argv[2]

switch (arg) {

    case 'status':
        ps4.getDeviceStatus()
            .then(resp => console.log(resp))
            .then(ps4.close())

            break

    case 'ligar':
        ps4.turnOn().then(() => ps4.close())
        console.log(`Ligando PS4...`)

        break

    case 'desligar':
        ps4.turnOff()
        console.log(`Desligando PS4...`)

        break

    case 'youtube':
        ps4.getDeviceStatus()
            .then(resp => {
                if (resp.status == 'Standby') {
                    ps4.turnOn()
                        .then(() => ps4.startTitle('CUSA01116'))
                        .then(() => ps4.close())
                    
                        console.log(`Ligando PS4 e abrindo Youtube...`)
                } else {
                    ps4.startTitle('CUSA01116').then(() => ps4.close())
                    console.log(`Abrindo Youtube...`)
                }
            })
            .then(() => ps4.close())

        break

    case 'netflix':
        ps4.getDeviceStatus()
            .then(resp => {
                if (resp.status == 'Standby') {
                    ps4.turnOn()
                        .then(() => ps4.startTitle('CUSA00129'))
                        .then(() => ps4.close())

                        console.log(`Ligando PS4 e abrindo Netflix...`)
                } else {
                    ps4.startTitle('CUSA00129').then(() => ps4.close())
                    console.log(`Abrindo Netflix...`)
                }
            })
            .then(() => ps4.close())

        break

        case 'fifa':
            ps4.getDeviceStatus()
            .then(resp => {
                if (resp.status == 'Standby') {
                    ps4.turnOn()
                        .then(() => ps4.startTitle(''))
                        .then(() => ps4.close())

                        console.log(`Ligando PS4 e abrindo Fifa...`)
                } else {
                    ps4.startTitle('').then(() => ps4.close())
                    console.log(`Abrindo Fifa...`)
                }
            })
            .then(() => ps4.close())

        break

    default:
        console.log('Argument not found')

}