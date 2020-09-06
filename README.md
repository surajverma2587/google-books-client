# Google Books Client

## Tickets

### GB-1 - Create the frontend boilerplate

#### Description

In order to get started and have code that the rest of the team can develop on, we need some sort of scaffolded structure in place.

#### ACs

- Use `npx create-react-app` to generate the basic boilerplate for the frontend in a **separate** frontend repo.
- Should have the basic app in a deployable state if you wanted e.g. if I check it out and run it - I can see the react app.
- Cleanup the `src/` folder so that it's in a simple workable state
- Install `react-bootstrap` to aid our component creation and 'solution' acquiring

### GB-2 - Create the google books nav bar

#### Description

`As a user I want to navigate to other places, so that I can see the search screen, or I can see the saved screen.`
We can create a navbar in dark theme potentially (dealer's choice) from the react-bootstrap package. It should have a Logo and 2 links.

#### ACs

- Introduce `react-router-dom` package using the `HashRouter`
- Create a `Router.js` file with a Router component that can switch between 2 different screens: `Search.js` and `Saved.js`.
- `Search.js` should be the home page, or the 'initial' page.
- The `<Navigation />` should be abstracted into it's own component, just like the `<Router />`
- Remove React-Bootstrap in favour of the standard Bootstrap package.
- Create dummy screens for both `<Search />` and `<Saved />`
