export interface IBoilerKitParameterProvider<R extends JsonObject = JsonObject> {
  /**
   * Returns parameters that are provided as inputs to actions.
   */
  parameters: Promise<R>
}
