interface IComponent {
  path: string;
}

declare interface ICliConfigFile {
  component: Record<'default' | string, IComponent>;
}

declare interface ICommandArgv {
  path: string;
  type: string;
}
