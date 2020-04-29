# React Typescript Webpack Template
test2

## Component Types

### Functional Dumb Component
```js
export const FunctionalDumbComponent = props => <div>{props.title}</div>;
```

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

```
npm install i18next
npm install react-i18next
npm install i18next-xhr-backend
npm install i18next-browser-languagedetector
```

### create structure

- create folder "public" in root
- create folder "locales" inside "public"
- create folders for each locale - i.e. "en"
- create file "translation.json" for each locale

### update webpack.config

```js
// ... 
plugins: [
	// ... 
	new CopyWebpackPlugin([
		{
			from: path.resolve(__dirname, 'public'),
			to: 'public'
		},
	]),
	// ... 
]
// ...
```


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
