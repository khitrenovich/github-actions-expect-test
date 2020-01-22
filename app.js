'use strict';

const { promisify } = require('util');
const prompt = require('prompt');

async function main() {

  prompt.start();
  prompt.message = '';
  prompt.delimiter = '';

  const result = await promisify(prompt.get)({
    properties: {
      something: {
        description: 'Type something:',
        type: 'string',
        required: true
      }
    }
  });

  console.log(`You've typed: ${result.something}`);
  return true;
}

main();
