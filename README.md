# To Do List Backend 📋

## Specifications

- [X] Design data model
- [X] Implement web API
  - [X] Start a server listening on a specified port with `npm start`
  - [X] Users
    - [X] Get
    - [X] Update
    - [X] Create
    - [X] Delete
    - [X] Find all
  - [X] Lists
    - [X] Get
    - [X] Create
    - [X] Update
    - [X] Delete
    - [X] Find all
  - [X] List Items
    - [X] Get
    - [X] Create
    - [X] Update
    - [X] Delete
    - [X] Find all
- [X] Implement tests
- [X] Deploy to Heroku
- [X] Create documentation
  - [X] Local environment setup
  - [X] Deployment
  - [X] Testing
  - [X] Licensing (OSS, e.g. MIT)

---
### Instructions for running app in local environment
- [Download](https://nodejs.org/en/download/) and install node
- Navigate to repo inside terminal, then type:
```
$ npm i
```

#### Setting up local database

- [Download](http://postgresapp.com/) postgres app, then open
- Set path by adding the follow line to ~/.bash_profile (if using zsh ~/.zshrc):
```
$ export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
```
- In terminal:  
```
$ createdb todo
```

- Create a new file in root level of repo: .env.development
- Paste inside the .env.development file:

```
 $ DATABASE_URL=postgresql://localhost/todo
 ```

- In terminal:
```
$ npm run local
```

#### Instructions for running tests
- In terminal:
```
$ npm test
```

### Instructions for deploying to Heroku ☁️
- Create Heroku account [here](https://signup.heroku.com/)
- [Download](https://devcenter.heroku.com/articles/heroku-command-line) and install Heroku Command Line on local machine
- Verify install:
```
$ heroku —version
```
- Login to Heroku in terminal:
```
$ heroku login
```
- Create Heroku app:
```
$ heroku create
```
- Deploy code:
```
$ git push heroku master
```
- Verify app is running:
```
$ heroku ps:scale web=1
```
- Go your Heroku account and find the newly created app. Navigate to resources tab, and search for Heroku Postgres. Install add on.
- Open app! 😆

## License

[MIT](https://opensource.org/licenses/MIT)
