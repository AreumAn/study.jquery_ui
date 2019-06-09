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

## Sortable Widget: revert

Type: **Boolean or Number**

Default: **false**

Whether the sortable items should revert to their new positions using a smooth animation.

_Multiple types supported:_

- ***Boolean***: When set to true, the items will animate with the default duration.
- ***Number***: The duration for the animation, in milliseconds.

```js
// Getter
var revert = $( ".selector" ).sortable( "option", "revert" );

// Setter
$( ".selector" ).sortable( "option", "revert", true );
```

---

## Draggable Widget: revert

Type: **Boolean or String or Function()**

Default: **false**

Whether the element should revert to its start position when dragging stops.

_Multiple types supported:_

- ***Boolean***: If set to true the element will always revert.
- ***String***: If set to `invalid`, revert will only occur if the draggable has not been dropped on a droppable. For `valid`, it's the other way around.
- ***Function***: A function to determine whether the element should revert to its start position. The function must return true to revert the element.

___

## snap

Type: **Boolean or Selector**

Default: **false**

Whether the element should snap to other elements.

_Multiple types supported:_

- ***Boolean***: When set to true, the element will snap to all other draggable elements.
- ***Selector***: A selector specifying which elements to snap to.

```js
// Getter
var snap = $( ".selector" ).draggable( "option", "snap" );

// Setter
$( ".selector" ).draggable( "option", "snap", true );
```

---

## snapMode

Type: **String**

Default: **"both"**

Determines which edges of snap elements the draggable will snap to. Ignored if the snap option is false.

Possible values: `inner`, `outer`, `both`.

```js
// Getter
var snapMode = $( ".selector" ).draggable( "option", "snapMode" );

// Setter
$( ".selector" ).draggable( "option", "snapMode", "inner" );
```

---

## stack

Type: **Selector**
Default: **false**

Controls the z-index of the set of elements that match the selector, always brings the currently dragged item to the front. Very useful in things like window managers.

```js
// Getter
var stack = $( ".selector" ).draggable( "option", "stack" );

// Setter
$( ".selector" ).draggable( "option", "stack", ".products" );
```
