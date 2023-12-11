export interface IBoilerKitContext<P, O> {
  parameters: P // json object
  options: O // generator options
  fs: unknown // TODO: MemFs
}
