# To Do List

## Specifications

- [X] Design data model
- [ ] Implement web API
  - [ ] Start a server listening on a specified port with `npm start`
  - [ ] Authentication via cookies w/ JWT
    - [ ] Login
    - [ ] Logout
    - [ ] Error on invalid credentials
  - [ ] Retrieve authenticated user's profile data
  - [ ] Update authenticated user's name, email, password
  - [ ] Retrieve user's lists
  - [ ] Create new list
  - [ ] Update existing list
  - [ ] Delete list
  - [ ] Retrieve a list's items
  - [ ] Edit an item's description
  - [ ] Mark item as completed/not completed
  - [ ] Delete an item
- [X] Implement tests
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

#### Instructions for setting up local database

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
$ npm run start
```

#### Instructions for running tests
- In terminal:
```
$ npm test
```

### Instructions for deploying to Heroku
- Create Heroku account [here](https://signup.heroku.com/login?redirect-url=https%3A%2F%2Fid.heroku.com%2Foauth%2Fauthorize%3Fclient_id%3D9e08c4e5-b105-43bb-a1fc-ba4c58a2ab8f%26response_type%3Dcode%26scope%3Dglobal%252Cplatform%26state%3DFe26.2**c35f51c53f436c1210bc19c19a1fd046462655fd561c2376beb5ef83d0ca50f4*FZAxbfqK8ft0Apg1YqAFOA*z7RaEUdX2vFq-NVjT6isiEwA1nGgxt6VcpBbShxZgHCRrNzQoxZjW0ZexVT264IYfQ24G5lBu8rpUDlJh8NlLw*1475793613238*1e460e093186430472b34f463d6206e0a5430a5c6f0ce374a58262ca0e13455b*PFDv8K3fSXNNHa-95kqgq6fHez7EYeTVzfWglmW_jYU) if you don't have one already
- [Download](https://devcenter.heroku.com/articles/heroku-command-line) and install Heroku Command Line on local machine:
- In terminal install:
```
$ heroku —version
```
- Login to Heroku in terminal:
```
$ heroku login
```

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
