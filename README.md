# AngularJs: Up & Running Workshop - Part 1

### AngularJS boiler plate

This project includes the use of following  <br>
	 * Node <br>
	 * Bower <br>
	 * Gulp <br>
	 * MongoDb (Connects to an api that uses) <br>
	 * Sails <br>

### Steps to run this project
 
1. Install node from here http://nodejs.org can also use nvm to swap between versions of Node https://github.com/creationix/nvm <br>
	```
    nvm install  6.2.1 
    nvm use 6.2.1
    ```
2. Download and run MongoDb from here https://www.mongodb.org/downloads
	
	Create a testtable and add a few records to it
	```
	use sailsDb

	db.testtable.insert( { firstname: 'Audrey', lastname: 'Bennouar' } );

	db.testtable.find({}); //list all added records

	Show dbs
	show collections
	```

3. Install sails & Create sails project <br>
	```
		mkdir sails
		cd sails 
		sudo npm -g install sails 
		sails new testProject 
	```
   Lift the server

    ```
   	sails lift

    ```
    Go to http://localhost:1337/

    Connect to MongoDb <br>

    ```
    cd testProject
    npm install sails-mongo --save 
    cd config 
    vi connections.js  
    ```
    Add the following code <br>

	```
    someMongodbServer: {
	    adapter: 'sails-mongo',
	    host: 'localhost',
	    port: 27017,
	    // user: 'username',
	    // password: 'password',
	    database: 'sailsDb'
	  },
 
	vi models.js // add the following

		module.exports.models = {
			connection: ‘someMongodbServer’
		};
	
	sails generate api testTable
	sails lift
		 // Choose safe 1 
	```
	Test the api is bringing back data go to http://localhost:1337/testtable/ <br>
	Should list the records you added in step 2 above

4. Do an npm install & bower install in the projecttest1 directory and run gulp <br>
   Go to the following url:  http://localhost:8888/




