export class Bot {

constructor (public id: string,
             public userId: string,
             public name: string,
             public image: string,
             public webAdress: string,
             public location: {lat: string; lng: string},
             public description: string,
             public uses: Use[],
             public locationAdresse?: string,
             public slaveBots?: SlaveBot[]
             ) {}
}

export class Use {

    constructor(public name: string,
                public description: string,
                public argument?: string[]
                ) {}
}

export class SlaveBot {

    constructor(public name: string,
                public image: string,
                public webAdress: string,
                public description: string,
                public uses: Use[],
                ) {}
}
