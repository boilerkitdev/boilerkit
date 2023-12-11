import type { IBoilerKitContext } from './boilerkit-context'

export interface IBoilerKitAction {
  run(ctx: IBoilerKitContext): Promise<void>
}
