#!/usr/bin/env node

import { getARgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCLI = () => {
    const args = getARgs(process.argv);
    console.log("Server is started with args ${args}");
    
    // help
    if (args.h) {
	  	printHelp();  
    }

    // save city
    if (args.s) {

    }

    // save token
    if (args.t) {
      saveKeyValue('token', args.t);
    }
    
    // print weather 
};

initCLI();

