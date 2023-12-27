import { OclifCli } from "@scaleleap/projen-oclif"
import { PnpmWorkspace } from "@scaleleap/projen-pnpm-workspace"
import { ProjenReactApp } from "@scaleleap/projen-react"
import { TypeScriptAppProject } from "@scaleleap/projen-typescript-app-project"
import { TypeScriptLibProject } from "@scaleleap/projen-typescript-lib-project"
import { TypeScriptWorkspaceProject } from "@scaleleap/projen-typescript-workspace-project"
import { TypeScriptModuleResolution } from "projen/lib/javascript"

const project = new TypeScriptWorkspaceProject({
  name: "boilerkit",
  minNodeVersion: "18.17.0",
  projenVersion: "0.77.6",
  pnpmVersion: "8.12.0",
  defaultReleaseBranch: "main",
  devDeps: [
    "@scaleleap/projen-oclif",
    "@scaleleap/projen-pnpm-workspace",
    "@scaleleap/projen-react",
    "@scaleleap/projen-typescript-app-project",
    "@scaleleap/projen-typescript-lib-project",
    "@scaleleap/projen-typescript-workspace-project",
  ],
  prettier: true,
  prettierOptions: {
    settings: {
      semi: false,
    },
  },
})

new PnpmWorkspace(project)

// const docsApp = new web.NextJsTypeScriptProject({
//   parent: project,
//   defaultReleaseBranch: "main",
//   dir
//   outdir: '',
//   name: "docs",
//   deps: ["nextra", "nextra-theme-docs"],
//   tsconfig: {
//     compilerOptions: {
//       // jsx: "preserve",
//       // allowJs: true,
//       // moduleResolution: TypeScriptModuleResolution.NODE,
//       // isolatedModules: true,
//     },
//   },
// })
const docsApp = new TypeScriptAppProject({
  parent: project,
  name: "docs",
  deps: ["next", "nextra", "nextra-theme-docs"],
  tsconfig: {
    compilerOptions: {
      // jsx: "preserve",
      allowJs: true,
      moduleResolution: TypeScriptModuleResolution.NODE,
      isolatedModules: true,
    },
  },
})

const buildDocs = docsApp.tasks.addTask("build:docs", {
  exec: "next build",
})

docsApp.compileTask.spawn(buildDocs)

docsApp.tasks.addTask("dev:docs", {
  exec: "next",
})

new ProjenReactApp(docsApp, {})
docsApp.tryRemoveFile("src/index.tsx")
docsApp.tryRemoveFile("index.html")
docsApp.tryRemoveFile("vite.config.ts")
docsApp.compileTask.reset()
docsApp.compileTask.spawn(buildDocs)
docsApp.tsconfig?.file.addOverride("compilerOptions.jsx", "preserve")
docsApp.gitignore.exclude(".next")
docsApp.eslint?.addExtends("plugin:@next/next/recommended")
docsApp.addDevDeps("@next/eslint-plugin-next")

new TypeScriptLibProject({
  parent: project,
  name: "@boilerkit/types",
  vitest: true,
  release: true,
})

new TypeScriptLibProject({
  parent: project,
  name: "@boilerkit/core",
  vitest: true,
  release: true,
  deps: ["@boilerkit/types"],
})

new TypeScriptLibProject({
  parent: project,
  name: "@boilerkit/tpl",
  vitest: true,
  release: true,
})

const cliPackage = new TypeScriptLibProject({
  parent: project,
  deps: ["@boilerkit/tpl"],
  name: "@boilerkit/cli",
})

// Do not actually need this, becasue Oclif just warns about it in dev mode
// also opened an issue to discuss this "feature": https://github.com/oclif/core/issues/851
// cliPackage.package.addField("files", ["lib"])

new OclifCli(cliPackage, {
  executableName: "bk",
})

project.synth()
