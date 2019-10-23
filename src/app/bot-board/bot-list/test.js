var {Observable} = require("rxjs");


var bots = new Observable(subscriber => {
    subscriber.next([{
    name: "",
    decription: "fzefze"    
    },
    {
        name: "gergrgr",
        decription: "gregregrg"    
        }])
});

bots.subscribe(x => {
    console.log(JSON.stringify(x))
});
