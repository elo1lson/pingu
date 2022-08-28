'use strict'

export default class Process {

    constructor() { }

    static all(log) {
        process.on('unhandledRejection', (reason, p) => {
            console.log(' [antiCrash] :: Unhandled Rejection/Catch');
            if (log) console.log(reason, p);
            return
        });

        process.on("uncaughtException", (err, origin) => {
            console.log(' [antiCrash] :: Uncaught Exception/Catch');
            if (log) console.log(err, origin);
            return
        })

        process.on('uncaughtExceptionMonitor', (err, origin) => {
            console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
            if (log) console.log(err, origin);
            return
        });
        process.on('multipleResolves', (type, promise, reason) => {
            console.log(' [antiCrash] :: Multiple Resolves');
            if (log) console.log(type, promise, reason);
            return
        });
    }
}