import type { BoilerKitGeneratorOptions, BoilerKitParameters } from './boilerkit-primitives'

export interface IBoilerKitContext<
  P extends BoilerKitParameters,
  O extends BoilerKitGeneratorOptions
> {
  parameters: P // json object
  options: O // generator options
  fs: unknown // TODO: MemFs
}
