# PRISMA Website - INT203_62130500090_1_SPA 

This repository was created to fulfill Individual Assignment for INT203. It demonstrates a fully fledged full stack application built with Tailwindcss and Vue.js including CRUD operations, routing, and more.

## Getting started

```bash
# install json-server globally
> npm install -g json-server
```

### To run a server
```bash
# windows
> run-server.cmd

# other os
> npm run serve -- --port 8081
```

### To run a database server
```bash
# windows
> run-db-server.cmd

# other os
> json-server database\db.json --port 3000
```

## Evaluation

### Component design
* Global registration
  1. navbar - Navigation bar existing in every page
* Local registration
  1. slidepic - Slide show for homepage
  2. socialmedia - Social media's channels for news and subscription (*For Facebook embeded, manual refreshing needed sometime due to their internal issue.)

### CRUD with REST API
* POST
  1. Subscribe a new email
* PUT
  1. Subscribe an existed email
  2. Unsubscribe an existed email
* DELETE
  1. Unsubscribe an existed email with delete subscribed history

### Router
* Home
* About
* FollowUs
* Contact

### git commit
Please refer to this repository

## Author's Free Space
Special thanks to Shiraga, my boyfriend.

## License
[MIT](https://choosealicense.com/licenses/mit/)