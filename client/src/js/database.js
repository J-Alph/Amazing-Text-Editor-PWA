import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
console.error('putDb not implemented');
console.log("PUT to the database");
const jateDb = await openDB("jate", 1);
const tx = jateDb.transaction("jate", "readwrite");
const store = tx.objectStore("jate");
const request = store.put({ id: 1, content });
const result = await request;

}

 // Created a connection to the database database and version we want to use.
  // Created a new transaction and specify the database and data privileges
  // Used the .getAll() method to get all data in the database.

export const getDb = async () =>{ console.error('getDb not implemented');
console.log('GET all from the database');
const jateDb = await openDB('jate', 1);
const tx = todosDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const request = store.get(1);
const result = await request;
console.log('result.value', result);
return result?.content;
}



initdb();
