import type { IBoilerKitContext } from './boilerkit-context'
import type { BoilerKitGeneratorOptions, BoilerKitParameters } from './boilerkit-primitives'

export interface IBoilerKitParameterProvider<
  P extends BoilerKitParameters = BoilerKitParameters,
  O extends BoilerKitGeneratorOptions = BoilerKitGeneratorOptions
> {

  /**
   * Returns parameters that are provided as inputs to actions.
   *
   * @param ctx BoilerKit context
   */
  parameters(ctx: IBoilerKitContext<P, O>): Promise<P>
}
