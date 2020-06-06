# Background Scripts

All of the logic working with the datastore occurs in the background scripts. Front-end pages communicate with these scripts via message ports.

## `open_view`

Open the view named `name` in a new tab. Returns an empty object.

## `close_view`

Close the view named `name` if it's open. Returns an empty object.

## `open_site`

Open website passed as `url` in a new tab. Returns an empty object.

## `list_items`

List all the items in the datastore. Returns an array of summaries of the items in the `items` field.

## `add_item`

Add an item (in the `item` attribute) to the datastore. Returns the updated item in the `item` field with its `id` field filled out.

## `update_item`

Update an existing item (in the `item` attribute) in the datastore. Returns the updated item in the `item` field.

## `remove_item`

Remove the item with ID `id` from the datastore. Returns an empty object.

## `get_item`

Fetches the item with ID `id` from the datastore. Returns the item object in the `item` field.

## `telemetry_event`

Record a telemetry event with method `method`, object `object`, and extra `extra` (value is `null`).

## `telemetry_add`

Increment a telemetry counter with `name` by some `value`.
