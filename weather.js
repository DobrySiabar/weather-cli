#!/usr/bin/env node

import { getARgs } from './helpers/args.js'

const initCLI = () => {
    const args = getARgs(process.argv);
    console.log("Server is started with args ${args}");
    
    // help
    if (args.h) {

    }

    // save city
    if (args.s) {

    }

    // save token
    if (args.t) {

    }
    
    // print weather 
};

initCLI();

