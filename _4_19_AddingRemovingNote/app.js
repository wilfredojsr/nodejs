const yargs = require('yargs')
const notes = require('./notes')

console.log('Using process object')
console.log(process.argv)
console.log()

console.log('Using Yargs')
console.log('Customizing the version value')
yargs.version('1.1.0')

console.log('Creating an add command')
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

console.log('Creating a remove command')
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

console.log('Creating a list command')
yargs.command({
  command: 'list',
  describe: 'Listing your notes',
  handler() {
    notes.listNotes()
  }
})

console.log('Creating a read command')
yargs.command({
  command: 'read',
  describe: 'Reading the note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()
//console.log(yargs.argv)
