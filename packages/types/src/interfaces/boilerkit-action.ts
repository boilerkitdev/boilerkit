import type { IBoilerKitContext } from './boilerkit-context'
import type { BoilerKitGeneratorOptions, BoilerKitParameters } from './boilerkit-primitives'

export interface IBoilerKitAction <
  P extends BoilerKitParameters = BoilerKitParameters,
  O extends BoilerKitGeneratorOptions = BoilerKitGeneratorOptions
> {

  /**
   * Executes the action logic.
   *
   * @param ctx BoilerKit context
   */
  execute(ctx: IBoilerKitContext<P, O>): Promise<void>
}
