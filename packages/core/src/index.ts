import type { BoilerKitGeneratorOptions, BoilerKitParameters, IBoilerKitAction, IBoilerKitContext, IBoilerKitGenerator, IBoilerKitParameterProvider, IBoilerKitTemplateEngine } from '@boilerkit/types'

interface Params extends BoilerKitParameters {
  foo: string
}

interface Options extends BoilerKitGeneratorOptions {
  bar: string
}

class Provider implements IBoilerKitParameterProvider<Params, Options> {
  constructor() {
    console.log('')
  }

  async provide() {
    return {
      foo: 'bar',
    }
  }
}

class CreateFileFromTemplateAction implements IBoilerKitAction {
  constructor(
    private readonly engine: IBoilerKitTemplateEngine,
    private readonly templateFile = '',
  ) {}

  async execute(ctx: IBoilerKitContext) {
    const template = '' + this.templateFile // fs.read(this.templateFile)

    await ctx.fs.write(
      this.engine.render(template, ctx.parameters),
    )
  }
}

export class Gen implements IBoilerKitGenerator<Params> {
  name = 'gen'
  parameters = new Provider()
  actions: IBoilerKitAction[] = [
    // class generator
    new CreateFileFromTemplateAction({
      // inline implementation, but would be a class, e.g. HandlebarsTemplateEngine
      render: async (template, params) => template.replace('%s', JSON.stringify(params)),
    }, 'template.txt'),

    // inline generator
    {
      async execute(ctx) {
        ctx.fs.write('my foo %s')
      },
    },
  ]

  constructor() {
    console.log('')
  }
}

async function main() {
  // load generators from boilerkit.config.ts
  const generators: IBoilerKitGenerator[] = [
    new Gen(),
  ]

  // user chooses generator, e.g. via positional CLI param or interactive prompt
  const generator = generators[0]

  // create context
  const ctx: IBoilerKitContext<BoilerKitParameters, Record<string, unknown>> = {
    parameters: {
      foo: 'bar',
    },
    options: {},
    fs: {},
  }

  // get parameters, e.g. by prompting user, reading from config, or using CLI flags
  ctx.parameters = await generator.parameters.provide(ctx)

  for await (const action of generator.actions) {
    await action.execute(ctx)
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch(console.error)
