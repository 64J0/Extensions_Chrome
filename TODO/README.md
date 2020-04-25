# A TODO extension for chrome

The aim of this extension is to show a TODO popup that a user can put the tasks he/she wants to do in the day.

Those informations will be saved in the browser self storage mechanism.

## The Architecture of an extension:

### Background Script:

The background script is the extension's event handler; it contains listeners for browser events that are important to the extension. It lies dormant until an event is fired then performs the instructed logic. An effective background script is only loaded when it is needed and unloaded when it goes idle.
