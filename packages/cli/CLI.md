<!-- ~~ Generated by projen. To modify, edit .projenrc.js and run "pnpm --silent dlx projen". -->

# Table of Contents

<!-- toc -->
* [Table of Contents](#table-of-contents)
<!-- tocstop -->

## Usage

<!-- usage -->
```sh-session
$ npm install -g @boilerkit/cli
$ bk COMMAND
running command...
$ bk (--version)
@boilerkit/cli/0.0.0 darwin-arm64 node-v18.12.1
$ bk --help [COMMAND]
USAGE
  $ bk COMMAND
...
```
<!-- usagestop -->

## Commands

<!-- commands -->
* [`bk autocomplete [SHELL]`](#bk-autocomplete-shell)
* [`bk foo [FILE]`](#bk-foo-file)
* [`bk help [COMMANDS]`](#bk-help-commands)
* [`bk plugins`](#bk-plugins)
* [`bk plugins:install PLUGIN...`](#bk-pluginsinstall-plugin)
* [`bk plugins:inspect PLUGIN...`](#bk-pluginsinspect-plugin)
* [`bk plugins:install PLUGIN...`](#bk-pluginsinstall-plugin-1)
* [`bk plugins:link PLUGIN`](#bk-pluginslink-plugin)
* [`bk plugins:uninstall PLUGIN...`](#bk-pluginsuninstall-plugin)
* [`bk plugins:uninstall PLUGIN...`](#bk-pluginsuninstall-plugin-1)
* [`bk plugins:uninstall PLUGIN...`](#bk-pluginsuninstall-plugin-2)
* [`bk plugins:update`](#bk-pluginsupdate)
* [`bk version`](#bk-version)

## `bk autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ bk autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ bk autocomplete

  $ bk autocomplete bash

  $ bk autocomplete zsh

  $ bk autocomplete powershell

  $ bk autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.0.1/src/commands/autocomplete/index.ts)_

## `bk foo [FILE]`

describe the command here

```
USAGE
  $ bk foo [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ bk foo
```

## `bk help [COMMANDS]`

Display help for bk.

```
USAGE
  $ bk help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bk.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.5/src/commands/help.ts)_

## `bk plugins`

List installed plugins.

```
USAGE
  $ bk plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bk plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/index.ts)_

## `bk plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bk plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bk plugins:add

EXAMPLES
  $ bk plugins:install myplugin 

  $ bk plugins:install https://github.com/someuser/someplugin

  $ bk plugins:install someuser/someplugin
```

## `bk plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bk plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bk plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/inspect.ts)_

## `bk plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bk plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bk plugins:add

EXAMPLES
  $ bk plugins:install myplugin 

  $ bk plugins:install https://github.com/someuser/someplugin

  $ bk plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/install.ts)_

## `bk plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bk plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bk plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/link.ts)_

## `bk plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bk plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bk plugins:unlink
  $ bk plugins:remove
```

## `bk plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bk plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bk plugins:unlink
  $ bk plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/uninstall.ts)_

## `bk plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bk plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bk plugins:unlink
  $ bk plugins:remove
```

## `bk plugins:update`

Update installed plugins.

```
USAGE
  $ bk plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/update.ts)_

## `bk version`

```
USAGE
  $ bk version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.0.4/src/commands/version.ts)_
<!-- commandsstop -->
