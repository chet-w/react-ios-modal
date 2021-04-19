# React iOS Modal

> Am accessible Modal component made to bring the style and experience of iOS's modals to the web

- 🥇 Animated
- ♿️ Accessible
- 📱 Responsive
- 🎣 Made with React Hooks

#### On an iPhone SE equivalent screen

<p align="center">
  <img src="https://github.com/chet-w/react-ios-modal/blob/master/public/mobile-demo.gif"/>
</p>

#### On Desktop

<p align="center">
  <img src="https://github.com/chet-w/react-ios-modal/blob/master/public/desktop-demo.gif"/>
</p>

#### Demo

https://react-ios-modal.netlify.app/

---

## Getting started

To install the package, install it as a dependency using either yarn or npm

```bash
# with yarn
$ yarn add @chet-w/react-ios-modal

# with npm
$ npm install @chet-w/react-ios-modal
```

## Usage

`react-ios-modal` relies on using Context to handle summoning the Modal, and Hooks to manage setting the Content to whatever to you want.

1. Wrap your app in a `ModalProvider`

```tsx
// index.tsx or as high up in yout component tree as you want

import { ModalProvider } from "@chet-w/react-ios-modal";
import App from "./App";

const MyApp = (): React.FC => (
  <ModalProvider>
    <App />
  </ModalProvider>
);
```

2. Once your app is a child of `ModalProvider`, you have access to the `useModal` hook, which lets you open, close, and set the content of the Modal.

3. Create your Modal as separate Component, and pass it in to the `openModal` function returned from `useModal`.

```tsx
// App.tsx
import { Modal, useModal } from "@chet-w/react-ios-modal";

const App = (): React.FC => {
  const { openModal } = useModal();

  return (
    <div>
      <p>Some content for my app.</p>
      <button type="button" onClick={() => openModal(<MyModal />)}>
        Open Modal
      </button>
    </div>
  );
};

const MyModal = (): React.FC => {
  <Modal id="demo-modal" title="A demo modal">
    <p>My first Modal</p>
  </Modal>;
};
```

## Configuration

| Prop                  | Description                                                                                          | Required | Default     |
| --------------------- | ---------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `id`                  | A unique identifier. It is used mainly for accessibility to describe connected elements in the Modal | `true`   |             |
| `title`               | The title that goes in the header                                                                    | `true`   |             |
| `closable`            | Whether or not a close button appears in the Header                                                  | `false`  | `true`      |
| `onClose`             | Function to call when closed via click outside or close button                                       | `false`  | `undefined` |
| `clickOutsideToClose` | Whether or not you can close the Modal by clicking the background                                    | `false`  | `true`      |

## Contributing

The project is fully open to contributions. The goal of the project is to bring the UX of the iOS Modal to the web as best as possible, while making it as easy to use for React develoers as possible.

The repo was initialised with Create React App.

To get set up for development

1. Clone the repo

```bash
$ git clone git@github.com:chet-w/react-ios-modal.git
```

2. `cd` into the directory

```bash
$ cd react-ios-modal
```

3. Install dependencies

```bash
$ yarn
```

🚀 You can now run the demo app on [http://localhost:3000](localhost:3000).

4. Run the tests

```bash
$ yarn test
```
