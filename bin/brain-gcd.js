#!/usr/bin/env node
import * as bin from '../src/cli.js';
import { gcdValue, resultGcd, textGcd } from '../src/gcd.js';

bin.actionWell();
bin.engineProcessing(gcdValue, resultGcd, textGcd, true, false);
