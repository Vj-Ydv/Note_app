This is a simple note taking application performing CRUD operations. The database used is MongoDB.

#### To Run this project Clone it, and install the dependencies using
```
npm install
```

Then Create a config.env file and create PORT and MONGO_URI Variable within that file and specify Values of these files.
example:
MONGO_URI variable looks like,
MONGO_URI=mongodb+srv://username:password@cluster0.p4bna.mongodb.net/DatabaseName?retryWrites=true&w=majority

The project is ready to run now. Use,

```
npm start

```

To perform Search by title, go to
http://localhost:3000/api/notetitle/Title_of_Note

eg: http://localhost:3000/api/notetitle/Note1

(The UI of this module is still in progress...)


