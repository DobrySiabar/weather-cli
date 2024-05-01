#!/usr/bin/env node

import { getARgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		await saveKeyValue('token', token);
		printSuccess('Токен сохранён');
	} catch (e) {
		printError(e.message);
	}
}

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
      return saveToken(args.t);
    }
    
    // print weather 
};

initCLI();

