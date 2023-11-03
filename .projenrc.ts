import {
  TypeScriptWorkspaceProject,
  TypeScriptPackageProject,
  TypeScriptAppProject,
} from "@scaleleap/projen-project-typescript"
import { PnpmWorkspace } from "@scaleleap/projen-pnpm-workspace"
import { ProjenReactApp } from "@scaleleap/projen-react"
import { TypeScriptModuleResolution } from "projen/lib/javascript"

const scoped = (name: string) => ["@scaleleap", name].join("/")

const scopedProjen = (name: string) =>
  [scoped(name), `link:../projen/packages/${name}`].join("@")

const project = new TypeScriptWorkspaceProject({
  name: "boilerkit",
  devDeps: [
    scopedProjen("projen-project-typescript"),
    scopedProjen("projen-pnpm-workspace"),
    scopedProjen("projen-react"),
  ],
  prettier: true,
  prettierOptions: {
    settings: {
      semi: false,
    },
  },
})

new PnpmWorkspace(project)

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

const reactApp = new ProjenReactApp(docsApp, {})

docsApp.tsconfig?.file.addOverride("compilerOptions.jsx", "preserve")
docsApp.gitignore.exclude(".next")

const tplPackage = new TypeScriptPackageProject({
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

project.synth()
