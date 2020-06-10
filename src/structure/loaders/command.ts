import { Collection } from 'discord.js'

import { join } from 'path'

import { readdirSync, lstatSync } from 'fs'

interface ICommand {
    help: {
        name: string;
        aliases?: string[];
    }
}

class commandLoader {
    commands: Collection<string, string> = new Collection()
    async index(dir: string): Promise<ICommand[]> {
       
        const paths: ICommand[] = readdirSync(dir)
            .filter(file => lstatSync(join(dir, file)).isFile())
            .map(file => require(join(dir, file)))

        return paths

    }
}

export default commandLoader