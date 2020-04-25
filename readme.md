# React Typescript Webpack Template


## Component Types
- Functional Dumb Component
- Functional Param Component
- Hook Component
- Class Component
- HOC


## Routing

Install dependencies

`npm install react-router-dom`

`npm install @types/react-router-dom`


Index.tsx

```tsx
import { HashRouter as Router } from "react-router-dom";

render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
```

App.tsx
```tsx
<Switch>
	<Route exact path="/">
		<Home />
	</Route>
	<Route exact path="/about">
		<About />
	</Route>
	<Route render={() => <div>Miss</div>} />
</Switch>
```

## i18n
TODO


## form & form validation
TODO


## animations
TODO



## Components


### Communicating between Components
TODO


### access children (i.e. tab/tabcontent)
TODO


### render lists with custom template
TODO


### Portal
TODO


### Dynamic Component
TODO


### Mixins
TODO
