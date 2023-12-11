import { OclifCli } from "@scaleleap/projen-oclif"
import { PnpmWorkspace } from "@scaleleap/projen-pnpm-workspace"
import {
  TypeScriptAppProject,
  TypeScriptPackageProject,
  TypeScriptWorkspaceProject,
} from "@scaleleap/projen-project-typescript"
import { ProjenReactApp } from "@scaleleap/projen-react"
import { TypeScriptModuleResolution } from "projen/lib/javascript"

const scoped = (name: string) => ["@scaleleap", name].join("/")

const scopedProjen = (name: string) =>
  [scoped(name), `link:../projen/packages/${name}`].join("@")

const project = new TypeScriptWorkspaceProject({
  name: "boilerkit",
  minNodeVersion: "18.17.0",
  projenVersion: "0.77.6",
  devDeps: [
    scopedProjen("projen-project-typescript"),
    scopedProjen("projen-pnpm-workspace"),
    scopedProjen("projen-react"),
    scopedProjen("projen-oclif"),
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

new TypeScriptPackageProject({
  parent: project,
  name: "@boilerkit/tpl",
  vitest: true,
  release: true,
})

const cliPackage = new TypeScriptPackageProject({
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
