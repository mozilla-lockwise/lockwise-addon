# List Views

This directory contains the list views for the extension (the doorhanger - in `popup/` - and the full management UI - in `manage/`). Code in other directories is shared between both views.

## Redux storage

The list views are the primary users of Redux in the extension. This section describes how the state is stored at a high level.

### Cache reducer (common)

This reducer contains a local cache of the necessary portions of the Lockbox datastore. In particular, it contains a summary of all the items in the store, plus full details of the currently-selected item. Item summaries have the following fields:

```
title
id
origins
username
```

### List reducer (common)

This reducer contains the logic for the actual item list. It stores the ID of the currently-selected item as well as any filter to be applied to the list.

### Editor reducer (manager)

This reducer tracks the state of the editor components. It stores whether the editor is active and if the user has changed any of the fields. `hideHome` is a bit more subtle; it's used when selecting another item when the editor is open, and prevents the home view from appearing while that item is loading.

### Modal reducer (manager)

This reducer contains the state for any modal dialogs to be shown in the manager. It contains the ID of the modal and any props that should be passed to the modal when it's displayed.
