import type { IBoilerKitContext } from './boilerkit-context'
import type { BoilerKitGeneratorOptions, BoilerKitParameters } from './boilerkit-primitives'

export interface IBoilerKitParameterProvider<
  P extends BoilerKitParameters = BoilerKitParameters,
  O extends BoilerKitGeneratorOptions = BoilerKitGeneratorOptions
> {

  /**
   * Returns parameters that are provided as inputs to actions.
   *
   * @template P BoilerKit parameters
   * @template O BoilerKit generator options
   * @param ctx BoilerKit context
   */
  provide(ctx: IBoilerKitContext<P, O>): Promise<P>
}
