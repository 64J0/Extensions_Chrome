<p align="center">
  <img src="./images/checklist3-128.png" alt="Extension's logo" />
</p>

# A TODO extension for chrome

The aim of this extension is to show a TODO popup that a user can put the tasks he/she wants to do in the day, and then, when those tasks have been completed, the user could just click in the checkbox to erase that task. **Dopamine boost**
<<<<<<< HEAD

Those informations will be saved in the browser localStorage mechanism.

_This is the first extension that I make :smile:_

![A print of the page of the extension in chrome web store](https://github.com/64J0/Extensions_Chrome/blob/master/imgs-github/todo-extension.JPG)

Vinícius Gajo Marques Oliveira, 2020.

<hr>

# Anotações / Resumo

_Neste arquivo irei colocar algumas das anotações que estive fazendo a respeito do desenvolvimento de extensões para o Google Chrome, baseados na documentação oficial._

- manifest.json -> arquivo de configurações da aplicação/extensão.

- background script -> é o manipulador de eventos da extensão; contém event listeners do navegador que são importantes para a extensão.

<hr>

## chrome.declarativeContent

https://developer.chrome.com/extensions/declarativeContent

Description: Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content.

### Usage:

The Declarative Content API allows you to show your extension's **page action** depending on the URL of a web page and the CSS selectors its content matches, without needing to take a host permission or inject a content script. Use the activeTab permission in order to be able to interact with a page after the user clicks on your page action.

If you need more precise control over when your page action appears or you need to change its appearance to match the current tab before the user clicks on it, you'll have to keep using the pageAction API.

### Rules:

As a declarative API, this API lets you register rules on the onPageChanged event object which take an action (ShowPageAction and SetIcon) when a set of conditions, represented as a PageStateMatcher, are met.

<hr>

## chrome.browserAction

https://developer.chrome.com/extensions/browserAction

Description: Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can have a **tooltip**, a **badge**, and a **popup**.

**If you want to create an icon that isn't always visible (that is only active in some circunstances), use a page action instead of a browser action.**

## Usage:

Register your browser action in the extension manifest like this:

```js
{
  "name": "My extension",
  ...
  "browser_action": {
    "default_icon": {               // optional
      "16": "images/icon16.png",    // optional
      "24": "images/icon24.png",    // optional
      "32": "images/icon32.png",    // optional
    },
    "default_title": "Google Mail", // optional
    "default_popup": "popup.html"   // optional
  }
}
```

You could provide any size icon to be used in Chrome, and Chrome will select the closest one and scale it to the appropriate size to fill the 16-dip space. However, if the exact size isn't provided, this scaling can cause the icon to lose detail or look fuzzy.

### Tips:

For the best visual impact, follow these guidelines:

- **Do** use browser actions for features that make sense on most pages.
- **Don't** use browser actions for features that make sense for only a few pages. Use **page actions** instead.
- **Do** use big, colorful icons that make the most of the 16x16-dip space. Browser action icons should seem a little bigger and heavier than page action icons.
- **Don't** attempt to mimic Google Chrome's monochrome menu icon. That doesn't work well with themes, and anyway, extensions should stand out a little.
- **Do** use alpha transparency to add soft edges to your icon. Because many people use themes, your icon should look nice on a variety of background colors.
- **Don't** constantly animate your icon. That's just annoying.

<hr>

## chrome.storage

https://developer.chrome.com/extensions/storage

Description: Use the chrome.storage API to store, retrieve, and track changes to user data.

### Overview:

This API has been optimized to meet the specific storage needs of extensions. It provides the same storage capabilities as the localStorage API with the following key differences:

- User data can be automatically synced with Chrome sync (using storage.sync).
- Your extension's content scripts can directly access user data without the need for background page.
- A user's extension settings can be persisted even when using split incognito behavior.
- It's asynchronous with bulk read and write operations, and therefore faster than the blocking and serial localStorage API.
- User data can be stored as objects (the localStorage API stores data in strings).
- Enterprise policies configured by the administrator for the extension can be read (using storage.managed with a schema).
