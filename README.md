# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Software Tree

```
$ npm fund
vue-project@0.0.0
├─┬ https://github.com/sponsors/twbs
│ │ └── bootstrap@5.2.0
│ └── https://opencollective.com/popperjs
│     └── @popperjs/core@2.11.6
├── https://github.com/sponsors/posva
│   └── vue-router@4.1.5
├─┬ https://opencollective.com/eslint
│ │ └── eslint@8.23.0, @eslint/eslintrc@1.3.1, espree@9.4.0
│ ├── https://github.com/sponsors/nzakas
│ │   └── @humanwhocodes/gitignore-to-minimatch@1.0.2, @humanwhocodes/module-importer@1.0.1
│ ├── https://github.com/sponsors/epoberezkin
│ │   └── ajv@6.12.6
│ ├─┬ https://github.com/chalk/chalk?sponsor=1
│ │ │ └── chalk@4.1.2
│ │ └── https://github.com/chalk/ansi-styles?sponsor=1
│ │     └── ansi-styles@4.3.0
│ ├── https://github.com/sponsors/sindresorhus
│ │   └── escape-string-regexp@4.0.0, find-up@5.0.0, locate-path@6.0.0, p-locate@5.0.0, p-limit@3.1.0, yocto-queue@0.1.0, globals@13.17.0, type-fest@0.20.2, import-fresh@3.3.0, strip-json-comments@3.1.1, camelcase@6.3.0, html-tags@3.2.0, globby@11.1.0
│ └── https://github.com/sponsors/isaacs
│     └── rimraf@3.0.2, glob@7.2.3
├── https://github.com/prettier/prettier?sponsor=1
│   └── prettier@2.7.1
├── https://github.com/sponsors/antfu
│   └── vitest@0.22.1, local-pkg@0.4.2
├── https://opencollective.com/postcss/
│   └── postcss@8.4.16
├─┬ https://github.com/inikulin/parse5?sponsor=1
│ │ └── parse5@7.1.1
│ └── https://github.com/fb55/entities?sponsor=1
│     └── entities@4.4.0
├─┬ https://opencollective.com/babel
│ │ └── @babel/core@7.18.13
│ └── https://opencollective.com/browserslist
│     └── browserslist@4.21.3, caniuse-lite@1.0.30001389, update-browserslist-db@1.0.7
├── https://opencollective.com/typescript-eslint
│   └── @typescript-eslint/eslint-plugin@5.36.1, @typescript-eslint/scope-manager@5.36.1, @typescript-eslint/types@5.36.1, @typescript-eslint/visitor-keys@5.36.1, @typescript-eslint/type-utils@5.36.1, @typescript-eslint/typescript-estree@5.36.1, @typescript-eslint/utils@5.36.1, @typescript-eslint/parser@5.36.1
├── https://github.com/fb55/nth-check?sponsor=1
│   └── nth-check@2.1.1
└── https://github.com/sponsors/ljharb
    └── string.prototype.padend@3.1.3, call-bind@1.0.2, get-intrinsic@1.1.2, has-symbols@1.0.3, define-properties@1.1.4, has-property-descriptors@1.0.0, es-abstract@1.20.2, es-to-primitive@1.2.1, is-date-object@1.0.5, has-tostringtag@1.0.0, is-symbol@1.0.4, function.prototype.name@1.1.5, functions-have-names@1.2.3, get-symbol-description@1.0.0, is-callable@1.2.4, is-negative-zero@2.0.2, is-regex@1.1.4, is-shared-array-buffer@1.0.2, is-string@1.0.7, is-weakref@1.0.2, object-inspect@1.12.2, object.assign@4.1.4, regexp.prototype.flags@1.4.3, string.prototype.trimend@1.0.5, string.prototype.trimstart@1.0.5, unbox-primitive@1.0.2, has-bigints@1.0.2, which-boxed-primitive@1.0.2, is-bigint@1.0.4, is-boolean-object@1.1.2, is-number-object@1.0.7, side-channel@1.0.4, resolve@1.22.1, is-core-module@2.10.0, supports-preserve-symlinks-flag@1.0.0
```