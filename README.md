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
- Download and install node: https://nodejs.org/en/download/
- Navigate to repo inside terminal, then type:
```
$ npm i
```

#### Instructions for setting up local database

- Download postgres app http://postgresapp.com/ then open
- Set path by adding the follow line to ~/.bash_profile (if using zsh ~/.zshrc):
```
$ export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
```
- In terminal:  
```
$ createdb mydbname
```

- Create a new file in root level of repo: .env.development
- Paste inside the .env.development file:

```
 $ DATABASE_URL=postgresql://localhost/mydbname
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


## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
