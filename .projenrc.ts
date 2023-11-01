import {
  TypeScriptWorkspaceProject,
  TypeScriptPackageProject,
} from "@scaleleap/projen-project-typescript"
import { PnpmWorkspace } from "@scaleleap/projen-pnpm-workspace"

const scoped = (name: string) => ["@scaleleap", name].join("/")

const scopedProjen = (name: string) =>
  [scoped(name), `link:../projen/packages/${name}`].join("@")

const project = new TypeScriptWorkspaceProject({
  name: "boilerkit",
  devDeps: [
    scopedProjen("projen-project-typescript"),
    scopedProjen("projen-pnpm-workspace"),
  ],
  prettier: true,
  prettierOptions: {
    settings: {
      semi: false,
    },
  },
})

new PnpmWorkspace(project)

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
