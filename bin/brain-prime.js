#!/usr/bin/env node
import * as bin from '../src/cli.js';
import * as actions from '../src/prime.js';

const { primeValue, resultPrime, textPrime } = actions;
bin.actionWell();
bin.engineProcessing(primeValue, resultPrime, textPrime, true);
