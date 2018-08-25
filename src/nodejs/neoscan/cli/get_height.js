// neoscan get_height

require('module-alias/register')

const program = require('commander');
const _       = require('underscore')

const dbg     = require('nodejs_util/debug')
const neoscan = require('nodejs_neoscan/neoscan')

function print(msg) {
  console.log(msg);
}

program
  .version('0.1.0')
  .usage('')
  .option('-d, --debug', 'Debug')
  .option('-n, --net [net]', 'Select Neoscan network [net]: i.e., test_net or main_net (will use correct neoscan host and path respectively - defaults to test_net)', 'test_net')
  .parse(process.argv);

if (!program.net) {
}

if (program.debug) {
  print('DEBUGGING');
}

neoscan.set_net(program.net)

neoscan.get_height().then(result => {
  dbg.logDeep('\nresult:\n', result)
})
