import DiscordClient from './DiscordClient'
import { readdirSync, lstatSync } from 'fs'
import { join } from 'path'
import CommandConfig from './DiscordCommand'

export default {
    startCommands(client: DiscordClient, path: string) {

        const files: string[] = readdirSync(path)
            .filter(file => lstatSync(join(path, file)).isFile())

        for (const [index, file] of files.entries()) {

            const props: CommandConfig = require(join(path, file))

            const nullInfo = !props.help || !props.help.name && !props.help.aliases

            if (nullInfo) return console.log(`::${index} [CommandHandler] => ${file} Não foi lido pois não contém informações de configuração.`)

            if (props.help.name) {
                console.log(`::${index} [CommandHandler] => ${file} Carregado com sucesso.`)
                client.commands.set(props.help.name, props)
            }

        }
    }
}