type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

//behind the hood, return type of this function is Source is FileSource, which means that if this function returns true, then source is of type FileSource, otherwise it is of type DBSource
function isFile(source: Source): source is FileSource {
  return source.type === 'file';
}

function isDB(source: Source): source is DBSource {
  return source.type === 'db';
}

function loadData(source: Source) {
  if(isFile(source)) {
    // source.path; => use that  to open the file
    return;
  }

  if(isDB(source)) {
    // source.connectionUrl; => use that to connect to the database
    return;
  }
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  if(entity instanceof User) {
    // entity.name; => use that to greet the user
    // entity.join(); => use that to let the user join
    return;
  }

  // entity.scan(); => use that to let the admin scan for issues
}
