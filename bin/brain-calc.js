#!/usr/bin/env node
import * as bin from '../src/cli.js';
import { calcValue, resultCalc, textCalc } from '../src/calc.js';

bin.actionWell();
bin.engineProcessing(calcValue, resultCalc, textCalc, true, false);
