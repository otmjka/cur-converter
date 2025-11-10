# Convertation Currencies

[DEMO link](https://otmjka.github.io/cur-converter/)

### To start locally:

`npm i`
`npm run dev`

## Structure

Entry point:

```
index.html
├── src
│   ├── main.tsx
```

structure via [FSD methodology]()

```
├── src
│   ├── App <-- App level logic, routing, configs
│   ├── pages <-- Pages, index page, may be user page

│   ├── features <-- large entities, that can include several widgets, can used in pages
│   ├── widgets <-- entities that can be used in features
│   └── shared <-- common used utils, helpers, ui

├── shared
│   │   ├── UiKit
│   │   ├── api
│   │   ├── components
│   │   ├── lib
│   │   ├── queryClient
│   │   ├── store
│   │   └── types
```

### UI: [shadcn](https://ui.shadcn.com/)

```
├── src
├── shared
│   │   ├── components
```

Custom components:

```
├── src
├── shared
│   │   ├── UiKit
```

### Routing

[React Router](https://reactrouter.com/)

### Handling date

manage cache, interval requests, handling errors, fetching data
via [Tan Query](https://tanstack.com/query/latest)

setup TAN Query to persist data in localStorage via `@tanstack/query-async-storage-persister` in

`src/shared/queryClient/queryClient.ts`

#### low level api methods:

```
├── src
├── shared
│   │   ├── api
```

```ts
fetchRates: 'https://api.fxratesapi.com/latest',
currencyList: 'https://api.fxratesapi.com/currencies',
```

#### Tan Query queries:

```
├── src
├── shared
│   │   ├── store
```

### Bundling, Code quality

- `Vite` as bundler
- `Husky` triggered on commit, starts lint, tests, build
- eslint
- prettier

lazy loading `CurrencyExchanger`
