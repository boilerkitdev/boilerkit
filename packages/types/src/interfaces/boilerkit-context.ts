import type { BoilerKitGeneratorOptions, BoilerKitParameters } from './boilerkit-primitives'

/**
 * @template P BoilerKit parameters
 * @template O BoilerKit generator options
 */
export interface IBoilerKitContext<
  P extends BoilerKitParameters = BoilerKitParameters,
  O extends BoilerKitGeneratorOptions = BoilerKitGeneratorOptions
> {
  parameters: P // json object
  options: O // generator options
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fs: any // TODO: MemFs
}
