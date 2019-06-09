## connectToSortable

Type: **Selector**

Default: **false**

Allows the draggable to be dropped onto the specified sortables. If this option is used, a draggable can be dropped onto a sortable list and then becomes part of it.

_Note: The `helper option` must be set to `clone` in order to work flawlessly.
Requires the `jQuery UI Sortable plugin` to be included._

Code examples:
Initialize the draggable with the connectToSortable option specified:

```js
// Getter
var connectToSortable = $( ".selector" ).draggable( "option", "connectToSortable" );

// Setter
$( ".selector" ).draggable( "option", "connectToSortable", "#my-sortable" );
```
---

## revert

Type: **Boolean or Number**

Default: **false**

Whether the sortable items should revert to their new positions using a smooth animation.

Multiple types supported:

- ***Boolean***: When set to true, the items will animate with the default duration.
- ***Number***: The duration for the animation, in milliseconds.

```
// Getter
var revert = $( ".selector" ).sortable( "option", "revert" );

// Setter
$( ".selector" ).sortable( "option", "revert", true );
```


