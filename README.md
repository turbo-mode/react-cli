# react-cli

Typescript and customized version to my fully need for my project with nextjs from [generate-react-cli](https://github.com/arminbro/generate-react-cli)

## how to run

I don't think it's necessary to publish this package to npm registry. So you can execute the program with `npx` that target this remote repository
`npx github:turbo-mode/react-cli component <ComponentName>`

## available options

you can pass `--path` to your desired outdir for the components that will be generated. 

you can also pass `--type="<type>"` as additional arguments. all available types are;

- `default`
  - will generate the files under `src/components/<ComponentName>`, with necessary files such; 
    - `index.ts` as component aggregator
    - `styles.ts`
    - `<ComponentName>.tsx`
- `pages`
  - will generate the files under `src/pages/<ComponentName>`, with files `index.page.tsx` and `_components` directory that contains; 
    - `index.ts` as component aggregator
    - `styles.ts`
    - `<ComponentName>.tsx`
