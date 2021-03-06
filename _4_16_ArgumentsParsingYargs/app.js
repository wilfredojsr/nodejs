const yargs = require('yargs')

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
  handler: function (argv) {
    console.log('Adding a new note!')
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
  }
})

console.log('Creating a remove command')
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})

console.log('Creating a list command')
yargs.command({
  command: 'list',
  describe: 'Listing your notes',
  handler: function () {
    console.log('Listing out all notes')
  }
})

console.log('Creating a read command')
yargs.command({
  command: 'read',
  describe: 'Reading the note',
  handler: function () {
    console.log('Listing notes')
  }
})

yargs.parse()
//console.log(yargs.argv)
