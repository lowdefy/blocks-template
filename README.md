# Custom Blocks

This is a starter repository for creating custom Lowdefy blocks. Lowdefy uses webpack module federation to implement a micro front-end strategy, importing blocks at load time. This means that blocks are not part of the Lowdefy app build.

The decoupling of blocks provides the considerable advantages:
- Block developers can extend the UI capabilities of Lowdefy by building blocks for the community to utilize.
- Lowdefy app developers can use community blocks to experiment and extend their apps.
- Lowdefy blocks are simple, most often stateless React components, thus blocks can be developed fast and can be used inside Lowdefy apps with ease.
- The build process is simple and fast since you only build the code for your block, and not the entire application.
- The Lowdefy engine takes care off the application state, the the block only has to concern itself which a easy application interface.

> Blocks run javascript on your site - this can lead to potential security vulnerabilities. __Make sure you trust the block publisher or even better, deploy your own blocks.__

[unpkg](https://unpkg.com/) provides

Even though the code might be vulnerability free when you deploy your app, your app will always load the block code currently hosted. Thus is the publisher changed the deployed block code in the future, the newly deployed code will run on your site the next time someone opens your app.

## Block API

- `blockId: string`: The block's id within the Lowdefy app, this is useful for setting a unique `id` on DOM elements.
- `content: object`: Passed to `container` and `context` block types. The `content` object with methods to render sub blocks into content areas. The method name is the same as the area key, for example, 'content.content()` renders a blocks default `content` area.
- `events: object`: All events defined on the block in the Lowdefy app config.
  - `[event_key]: object`: Event keys gives a handle name to the event details.
    - `loading: boolean`: True while the list of actions are being evaluated.
    - `actions: actionObjects[]`: The list of evaluated [Lowdefy action objects](https://docs.lowdefy.com/events-and-actions) which will be  evaluated by the Lowdefy engine.
    - `history: object[]`: A list of objects logging the event calls and responses.
      - `blockId: string`: The block id from which the event was called.
      - `event: object`: The event object passed to the event.
      - `eventName: string`: The event name which which triggerEvent was called.
      - `success: boolean`: True if all actions for the event executed without throwing any errors.
      - `timestamp: datetime`: Timestamp for when the event was completed.  
      - `responses: object[]`: The list of action responses.
        - `actionId: string`: The id of the triggered action.
        - `actionsType: string`: The type of action called.
        - `error: Error: If the action throw an error.
        - `response: any`: The returned result of the action.
        - `skipped: boolean`: True if the action was skipped.
- `methods: object`: All application methods built into Lowdefy, available for the block.
  - `makeCssClass(cssObject | cssObject[]): string`: This methods creates a css class for the block to apply to DOM elements. Css classes are created using [Emotion](https://emotion.sh/docs/introduction). If a list of cssObject are given the cssObjects are shallow merged with the preceding objects properties being overwritten by the latter. Any valid css style object can be passed, including media queries. Default media queries are built in:
    - `xs?: object`: Css object applied for screen media with max width of 576px.
    - `sm?: object`: Css object applied for screen media with min width of 576px.
    - `md?: object`: Css object applied for screen media with min width of 768px.
    - `lg?: object`: Css object applied for screen media with min width of 992px.
    - `xl?: object`: Css object applied for screen media with min width of 1200px.
    - `xxl?: object`: Css object applied for screen media with min width of 1600px.
  - `registerEvent(event: { name: string, actions: actionObjects[] })`: This method can be used to register internal actions for the block to trigger, and overwrites the user config if user defined actions are provided for the same event key.
  - `registerMethod(methodName: string, fn(any))`: This method allows the block developed to expose a method to the Lowdefy app developer via the [`CallMethod`](https://docs.lowdefy.com/CallMethod) action. When the method name for the block id is triggered via a `CallMethod` action, `fn` is evaluated.
  - `triggerEvent({name: string, event?: any })`: This methods triggers a event when called, like `onClick` for when a button is clicked. Optionally, event data can be passed which will be available inside the event actions through the [`_event`](https://docs.lowdefy.com/_event) operator.
- `properties: object`: The properties object provides all the block settings defined in the Lowdefy config, operators can be used when defining block properties and evaluated operators are passed to the block. When the evaluated result of these properties change, the block rerenders to display the updated block.
- `required: boolean`: For `input` block types, whether or not a input value is required. Required can be defined by operators and the evaluated result is passed to the block. The [`Validate`](https://docs.lowdefy.com/Validate) action will check if the required values are present else raise `validation` errors and suspend further block action in the event queue.
- `validation: object`: For `input` block types, the validation property provides result of `Validate` relevant relevant to the specific block.
  - `status: string`: The validation status result. Can be 


  schema

  types link

  unpck

  examples

