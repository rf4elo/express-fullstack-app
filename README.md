# Express Full-Stack App

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](./LICENSE)

## Project structure
- `./public` is the folder that contains all the application's static files (images, CSS files, front-end JS files).
- `./views` is project's frontend.
    - `./views/pages` are the project pages.
    - `./views/partials` are the reusable components.
    - `./views/index.ejs` is the frontend main page.
- `./src` is the project's back-end.
    - `./src/services` is the pure backend logic.
    - `./src/controller` is responsible for the backend logic. It connects the logic to its respective route.
    - `./src/routes` are the project routes.

## Requirements for executing the project

### Environment setup:
- [Node v24 LTS](https://nodejs.org/en/download)


### How do I run this on my machine?
- Clone the repository
```bash
git clone https://github.com/rf4elo/express-fullstack-app.git
```

- Install dependences
```bash
npm install
```

- Run the project
```bash
# Normal mode
npm run start

# Or watch mode
npm run start:watch
```

## Project License

- [MIT License](./LICENSE)

## Professional contact

- [Linkedin](https://www.linkedin.com/in/rafael-j-rocha/)
- [Github](https://github.com/rf4elo)
