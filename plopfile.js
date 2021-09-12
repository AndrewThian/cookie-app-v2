module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'storybook component generation',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/components/{{name}}/index.tsx',
        templateFile: 'plop-templates/components/index.txt',
      },
      {
        type: 'add',
        path: 'src/ui/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/components/component.txt',
      },
      {
        type: 'add',
        path: 'src/ui/components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'plop-templates/components/story.txt',
      },
    ],
  })
}
