import type { BoilerKitParameters } from './boilerkit-primitives'

export interface IBoilerKitTemplateEngine<P extends BoilerKitParameters = BoilerKitParameters> {
  /**
   * Render template with parameters.
   *
   * @param template template string
   * @param params template parameters
   */
  render(template: string, params: P): Promise<string>
}
