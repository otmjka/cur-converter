`npm i`
`npm run dev`

## Structure

Used the [Feature-Sliced Design](https://feature-sliced.design/) an architectural methodology

```
├── src
│   ├── App
│   ├── pages
│   ├── features
│   ├── widgets
│   └── shared

│   ├── tests
│   ├── vite-env.d.ts
│   ├── index.css
│   ├── main.tsx



├── shared
│   │   ├── UiKit
│   │   ├── api
│   │   ├── components ! shadcn
│   │   ├── lib ! shadcn
│   │   ├── queryClient -> config
│   │   ├── store +
│   │   └── types +

```

TODO: remove

```
├── src
│   ├── App
│   ├── pages
│   ├── features
│   ├── widgets
│   └── shared
│   ├── __tests__
│   ├── UiKit -> TODO: move to shared/UiKit
│   ├── components -> TODO: move to shared/components/ui
│   ├── index.css
│   ├── lib -> TODO: move to shared/lib
│   ├── main.tsx
│   ├── mocks
│   ├── setupTests.ts
│   ├── types.ts
│   ├── vite-env.d.ts
```

## change log

inter font
TODO: optimize
TODO: make as default color 950

12px
#737373 neutral/500
weight 400
weight semi-bold 600

#0A0A0A neutral/950
600

500

---

14px

---

18px
600 semibold
#0A0A0A

---

24px
700
#0A0A0A

---

## Colors

neutral/500
#737373

blue/50
#EFF6FF

blue/200
#BEDBFF

blue/700
#1447E6

green/200
#B9F8CF

green/700
#008236

Sizes
12px
14px
18px
24px
32px
