import { generateComponent as generate, getComponentByType } from '../utils';
var generateComponent = function (argv, cliConfigFile, program) {
    var selectedComponentType = getComponentByType(argv, cliConfigFile);
    var componentCommand = program
        .command('component [names...]')
        .alias('c')
        // Static component command option defaults.
        .option('-p, --path <path>', 'The path where the component will get generated in.', selectedComponentType.path)
        .option('--type <type>', 'You can pass a component type that you have configured in your GRC config file.', 'default');
    componentCommand.action(function (componentNames, cmd) {
        return componentNames.forEach(function (componentName) {
            return generate(componentName, cmd);
        });
    });
};
export default generateComponent;
