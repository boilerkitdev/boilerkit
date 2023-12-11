import type { IBoilerKitAction } from './boilerkit-action'
import type { IBoilerKitParameterProvider } from './boilerkit-parameter-provider'
import type { BoilerKitGeneratorOptions, BoilerKitParameters } from './boilerkit-primitives'

/**
 * @template P BoilerKit parameters
 * @template O BoilerKit generator options
 */
export interface IBoilerKitGenerator<
  P extends BoilerKitParameters = BoilerKitParameters,
  O extends BoilerKitGeneratorOptions = BoilerKitGeneratorOptions
> {
  name: string
  parameters: IBoilerKitParameterProvider<P, O>
  actions: IBoilerKitAction<P, O>[]
}
