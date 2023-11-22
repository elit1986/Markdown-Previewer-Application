# Markdown Previewer

This project is a Markdown Previewer built with React and TypeScript. It allows users to input Markdown text and see the rendered HTML output in real time.

## Project Structure

The project is structured into several main components:

- `App.tsx`: This is the main component of the application. It manages the state of the markdown text and whether the markdown guide is shown.

- `Header.tsx`: This component displays the header of the application, including the title and a button to toggle the markdown guide.

- `MarkdownGuide.tsx`: This component displays a guide for writing markdown. It is shown/hidden when the user clicks the button in the `Header`.

- `MarkdownInput.tsx`: This component includes a text area for the user to input markdown text. It uses a controlled component approach, with the markdown text being managed in the `App` component's state.

- `MarkdownOutput.tsx`: This component takes the markdown text from the `App` component's state and displays the rendered HTML output using the `react-markdown` library.

## Setup

To set up the project, clone the repository and install the dependencies with `npm install`. You can then start the development server with `npm run dev`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.


