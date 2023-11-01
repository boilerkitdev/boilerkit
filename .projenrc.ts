import {
  TypeScriptWorkspaceProject,
  TypeScriptPackageProject,
} from "@scaleleap/projen-project-typescript"

const scoped = (name: string) => ["@scaleleap", name].join("/")

const scopedProjen = (name: string) =>
  [scoped(name), `link:../projen/packages/${name}`].join("@")

const project = new TypeScriptWorkspaceProject({
  name: "boilerkit",
  devDeps: [scopedProjen("projen-project-typescript")],
  prettier: true,
  prettierOptions: {
    settings: {
      semi: false,
    },
  },
})

const tplPackage = new TypeScriptPackageProject({
  parent: project,
  name: "@boilerkit/tpl",
})

project.synth()
