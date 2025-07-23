# Instructions for ESIP 2025 Workshop
1. Create a new branch using the naming mechanism esip2025_your-name
2. Navigate to your branch and look through some of the options for available datasets under app -> content -> datasets
3. Make a note of the ```id``` and ```layerid``` of the dataset and variable you're interested in telling a story with
4. Now it's time to write a story story! We have two options available:
   - **Crafting your own story with some of the available datasets.** Navigate to app -> content -> stories -> select ```template-story.mdx``` and open it in GitHub editor (the pencil symbol). Try writing in your own story and swapping out the datasets which are preloaded. There are two widgets to test - first is a comparison map slider between two dates of the same dataset. Another is a scrollytelling widget that allows you to jump around on a map and show different datasets.
   - **Contribute to an existing agriculture story by adding a mapping widget.** Navigate to app -> content -> stories -> select ```sat-data-agriculture.mdx```. This is a pre-made story that does not show any interactiev maps highlighting the GEOGLAM dataset. Try adding any type of widget (getting inspiration from the ```template-story.mdx``` or any other posted story). This will require you to get metadata information for the GEOGLAM dataset which can be found under app -> content -> datasets -> ```geoglam.mdx```
5. Open a PR to merge your branch. This will initaite some GitHub actions that produces a preview link. If anything looks off or you would like to make any further edits, you can keep making commits to your branch and check back to view the preview. 


## Getting Started

To set up and run this project locally, refer to the [Development guide](./docs/DEVELOPMENT.md).

## Documentation

Documentation for this project can be found in the [`docs`](./docs) directory. Below is a quick summary of available resources:

1. [How to Run / Development](./docs/DEVELOPMENT.md)
2. [Overview of Architecture](./docs/ARCHITECTURE_OVERVIEW.md)
3. [Configuration](./docs/CONFIGURATION.md)
4. [Veda-UI Components](./docs/VEDA_UI_COMPONENTS.md)
5. [STYLING / USWDS](./docs/STYLING.md)

## License

[MIT](LICENSE)
