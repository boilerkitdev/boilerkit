import type { IBoilerKitAction } from './boilerkit-action'
import type { IBoilerKitParameterProvider } from './boilerkit-parameter-provider'

export interface IBoilerKitGenerator {
  name: string
  parameters: IBoilerKitParameterProvider
  actions: IBoilerKitAction[]
}
