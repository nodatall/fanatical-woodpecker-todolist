# To Do List

## Specifications

- [ ] Create the back end using node and express.
- [ ] Create/manage databases with Sequelize and Postgres
- [ ] Deploy the app to heroku.
- [X] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#### Stretch Goals:
Front-end - Users can do the following:
- [ ] create items.
- [ ] delete items.
- [ ] check items off as complete.
- [ ] log into my account.
- [ ] edit  text on existing to do's.

---
#### Instructions for setting up local database
- Download and install node: https://nodejs.org/en/download/(https://nodejs.org/en/download/)
- In terminal, install dependencies: npm i
- Download postgres app http://postgresapp.com/ ('http://postgresapp.com/') then open
- Set path by adding the follow line to ~/.bash_profile (if using zsh ~/.zshrc): export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
- In terminal, create database: createdb mydbname
- Create a new file in root level of repo: .env.development
- Paste inside .env.development: DATABASE_URL=postgresql://localhost/mydbname
- In terminal, type: npm run start


## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
