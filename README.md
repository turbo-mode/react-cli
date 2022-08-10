# react-cli

Typescript and customized version to my fully need for my project with nextjs from [generate-react-cli](https://github.com/arminbro/generate-react-cli)

## available options

you can pass `--path` to specify outdir of components that will be generated.

you can also pass `--type` as additional arguments. all available types are;

- `default`
  - will generate the files under `src/components/<ComponentName>`, with necessary files such; 
    - `index.ts` as component aggregator
    - `styles.ts`
    - `<ComponentName>.tsx`
- `page`
  - will generate the files under `src/pages/<component-name>`, with files `index.page.tsx` and `_components` directory that contains; 
    - `index.ts` as component aggregator
    - `styles.ts`
    - `<ComponentName>.tsx`

## how to run

I don't think it's necessary to publish this package to npm registry. So you can execute the program with `npx` that target this remote repository.

first create `react-cli.json` in your root project

```
{
  "component": {
    "default": {
      "path": "src/components"
    },
    "page": {
      "path": "src/pages"
    },
  }
}
```
then run `npx github:turbo-mode/react-cli component <ComponentName>`
