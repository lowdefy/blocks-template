# Lowdefy Blocks Template

This is a template repository to show the most basic setup for developing custom Lowdefy blocks. To read a detailed description of building custom blocks, visit the [Custom Blocks](https://docs.lowdefy.com/custom-blocks) sections in the docs.

This repository contains basic example of blocks for the five different block categories; `display`, `input`, `container`, `context` and `list`. You can read more about how blocks are used in Lowdefy in the [Blocks](https://docs.lowdefy.com/blocks) section of the docs.

A lowdefy block consist of two files, the block meta data and the block React component.

To run the development server, you will need to have node / npm and yarn installed.
Then run `yarn install`, then `yarn start`.

## Running the blocks

1. You must have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/getting-started/install) installed.
2. Clone this repository.
3. Run `yarn install`, then `yarn start`, then check the you block is served by viewing the meta data at: http://localhost:3002/meta/DisplayBlock.json.
4. Add the `types` to you the lowdefy.yaml. For example:

```yaml
name: may-app
lowdefy: 3.10.0
types:
  DisplayBlock:
    url: http://localhost:3002/meta/DisplayBlock.json
# ...
```

5. Use your new block type in your Lowdefy app.
6. Start your Lowdefy app and test if it works, run: `npx lowdefy@latest dev`
7. Continue to develop your block React component. Change to your block will need auto reload the app in the browser, you need to hit refresh.

## Other Lowdefy Blocks Packages

- [@lowdefy/blocks-basic](https://github.com/lowdefy/lowdefy/tree/main/packages/blocks/blocksBasic): Official Lowdefy blocks some basic Html elements.
- [@lowdefy/blocks-antd](https://github.com/lowdefy/lowdefy/tree/main/packages/blocks/blocksAntd): Official Lowdefy blocks for [Antd design](https://ant.design/).
- [@lowdefy/blocks-color-selectors](https://github.com/lowdefy/lowdefy/tree/main/packages/blocks/blocksColorSelectorsd): Official Lowdefy blocks for [react-color](https://casesandberg.github.io/react-color/).
- [@lowdefy/blocks-markdown](https://github.com/lowdefy/lowdefy/tree/main/packages/blocks/blocksMarkdown): Official Lowdefy blocks to render Markdown.
- [@lowdefy/blocks-amchoart](https://github.com/lowdefy/lowdefy/tree/main/packages/blocks/blocksMarkdown): Lowdefy blocks to render [AmCharts v4](https://www.amcharts.com/).

## More Lowdefy resources

- Getting started with Lowdefy - https://docs.lowdefy.com/tutorial-setup
- Lowdefy docs - https://docs.lowdefy.com
- Lowdefy website - https://lowdefy.com

## Licence: Appache-2.0

See the LICENSE.md file for license rights and limitations.
