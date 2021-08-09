'use strict';

const DEFAULT_AMOUNT = 1;
const MAX_ADS_AMOUNT = 1000;
const MAX_MONTHS_PERIOD = 3;
const MOCK_FILENAME = `mocks.json`;
const MAX_ANNOUNCE_SENTENCES_AMOUNT = 5;
const mockFilePaths = [`./data/sentences.txt`, `./data/titles.txt`, `./data/categories.txt`];

const DEFAULT_PORT = 3000;

module.exports = {
  MAX_ADS_AMOUNT,
  DEFAULT_AMOUNT,
  MOCK_FILENAME,
  MAX_ANNOUNCE_SENTENCES_AMOUNT,
  MAX_MONTHS_PERIOD,
  mockFilePaths,
  DEFAULT_PORT,
};
