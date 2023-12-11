import type { IBoilerKitContext } from './boilerkit-context'
import type { BoilerKitGeneratorOptions, BoilerKitParameters } from './boilerkit-primitives'

/**
 * @template P BoilerKit parameters
 * @template O BoilerKit generator options
 */
export interface IBoilerKitAction <
  P extends BoilerKitParameters = BoilerKitParameters,
  O extends BoilerKitGeneratorOptions = BoilerKitGeneratorOptions
> {

  /**
   * Executes the action logic.
   *
   * @template P BoilerKit parameters
   * @template O BoilerKit generator options
   * @param ctx BoilerKit context
   */
  execute(ctx: IBoilerKitContext<P, O>): Promise<void>
}
