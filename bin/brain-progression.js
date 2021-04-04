#!/usr/bin/env node
import * as bin from '../src/cli.js';
import { progressionValue, resultProgression, textProgression } from '../src/progression.js';

bin.actionWell();
bin.engineProcessing(progressionValue, resultProgression, textProgression, true, false);
