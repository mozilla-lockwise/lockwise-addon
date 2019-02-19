# Lockbox Desktop Addon Metrics Plan

_Last Updated: Feb 19, 2019_

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Analysis](#analysis)
- [Collection](#collection)
	- [Event Registration and Recording](#event-registration-and-recording)
- [Scalar Metrics](#scalar-metrics)
- [List of Planned Metrics Events](#list-of-planned-metrics-events)
- [References](#references)

<!-- /TOC -->

This is the metrics collection plan for Lockbox. It documents all events currently collected through telemetry, as well those planned for collection but not currently implemented. It will be updated periodically to reflect all new and planned data collection.

For similar docs relating to data collection on other platforms see [iOS](https://github.com/mozilla-lockbox/lockbox-ios/blob/master/docs/metrics.md) and [Android](https://github.com/mozilla-lockbox/lockbox-android/blob/master/docs/metrics.md).

## Analysis

Data collection is done solely for the purpose of product development, improvement and maintenance.

The data collection outlined here is geared toward answering the following questions (see [List of Implemented Events](#list-of-planned-metrics-events):

*Note that when we refer to retrieval of "credentials", we mean access to usernames, passwords, or both*

* Are users using Lockbox to retrieve credentials?
	* For different intervals of time (e.g. day, week, month), what is:
		* The average rate with which a user retrieves a credential or reveals a password
		* The distribution of above rates across all users
* Does adoption of Lockbox lead to adoption of the associated Lockbox Mobile Apps?
* Once downloaded, do users continue to use the app? (i.e., how well are they retained?)
	* We will count a user as retained in a given time interval if they perform one of the following actions:
		* Display the credential list
		* Tap a credential in the credential list
		* Copy a credential to the clipboard
		* Reveal a password
		* Autofill a credential stored in Lockbox into another app
		* Tap the URI associated with a credential (to open it in an app or browser)
	* Since they can be performed automatically, we will **not** count a user as retained if they *only* perform the following actions (in absence of any in the list above):
		* Unlock their credentials
		* Sync their credentials from the Firefox desktop browser
* Does requiring a Firefox Account constitute a roadblock to adoption?
	* What proportion of new Lockbox users are pre-existing Firefox Account users?
	* What proportion of users start the Account sign-in process but never complete it?

In addition to answering the above questions that directly concern actions in the app, we will also analyze telemetry emitted from the native password manager that exist in the the Firefox desktop browser. Users of the extension should not be having to use the native manager, so data suggesting otherwise may be a sign that something is amiss.

## Collection

To record Telemetry we will be making use of the public JavaScript API that allows recording and sending of [events](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/collection/events.html#public-js-api) and [scalar measurements](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/collection/scalars.html#js-api) through a webextension.

Once telemetry is logged on the measurements should appear in [about:telemetry](about:telemetry). From there they will be submitted in the main ping payload under `processes.dynamic.events` and available through the usual services (STMO and ATMO), as well as amplitude (eventually).

### Event Registration and Recording

The events that we will record will conform to the structure expected by the telemetry pipeline. When the events are logged in telemetry they will be a list of:

`[timestamp, category, method, object, value, extra]`

The API takes care of the timestamp for us. We just need to define `category`, `method`, `object` and `extra` (`value` is optional and we won't use it).


Events are defined by **registering** them using a call to `Services.telemetry.registerEvents(category, eventData)`.

Here's a breakdown of how a to register a typical event:


```javascript
Services.telemetry.registerEvents("event_category", {
    "event_name": {
        methods: ["click", ... ], // types of events that can occur
        objects: ["a_button", ... ], // objects event can occur on
        extra: {"key": "value", ... } // key-value pairs (strings)
    }
```

For our purposes, we will use the `extra` field for a few purposes:

- To log the UUID of the item that has been added or changed (e.g. `"item_id": UUID`)
- To log the fields that are modified when an item is updated in the datastore (e.g. `"fields": "username,passsword,address"` (because the value has to be a string we will have to concat the fields that were updated somehow)

Once an event is registered, we can record it with:

`Services.telemetry.recordEvent(category, method, object, value, extra)`

Note: The semantics of `value` is contingent on the event being recorded, see list below.

See the Events section for specific examples of event registration and recording.

#### Scalar recording

We use the js api for scalar recording as well. Here registration happens with the following syntax:

```javascript
Services.telemetry.registerScalars(category, {
	"scalar_name": {
		kind: services.Telemetry.SCALAR_TYPE_COUNT, // SCALAR_TYPE_COUNT, SCALAR_TYPE_BOOLEAN. or SCALAR_TYPE_STRING
		keyed: false,
		record_on_release: false, // NEEDS TO BE SET TO RECORD ON RELEASE CHANNEL
		expired: false,
	}
```
We set scalar values in the following way:

```javascript
Services.telemetry.scalarSet(
	"category.scalar_name", value
);
```
e.g. `lockbox-addon.loginCount` for the scalar name.

We can also use `scalarAdd` to increment a scalar value by some amount.

## Scalar Metrics

These are the metrics we currently collect regarding the state of the user's login storage.

- `loginCount` (SCALAR_TYPE_COUNT). Current count of the number of items in the user's login storage. If possible, this scalar should be set upon opening either the doorhanger or full extension interface.

- `loginsAccessedAllTime` (SCALAR_TYPE_COUNT). Running total of logins accessed (copied, revealed) through the extension interface or doorhanger. Should never be reset.

- `loginsAccessed` (SCALAR_TYPE_COUNT). Total of logins accessed (copied, revealed) since last ping through the extension interface or doorhanger. TODO: in native code scalars are automatically reset when a new ping is cut. Will that happen for us?

Note that if the preceding two scalars are going to cause engineering headaches its possible to obtain equivalent values from the event telemetry (its just more work).

## List of Planned Metrics Events

All events are currently implemented under the **category: lockbox-addon**. The `extra` field contains `itemid` for events pertaining to a particular Lockbox item. They are listed and grouped together below based on the contents of the event's `method` field.

1. `startup` fires when the webextension is loaded. **objects**: webextension. Note that this event fires whenever the browser is started, so is not indicative of direct user interaction with Lockbox. **value** is null.

2. `click` fires when someone clicks on one of the UI elements listed **objects**: `toolbar`, `get_mobile`, `faq`, `account_settings`, `give_feedback`, `settings_menu` (or whatever the menu is that contains links to account settings, faq, etc). **value** is null.

3. `show` events fire when various UI elements are rendered shown to the user. **objects**: `item_list_manager`, `item_list_doorhanger`, `item_detail_doorhanger` `item_detail_manager`, `new_item`, `item_edit`, `delete_confirm`, `connect_another_device`, `reconnect_sync` **value** should be a boolean for `item_list_*` events indicating whether any logins are in the login list (e.g. `False` if the list is empty).

4. `item_add`, `item_update`, `item_delete` fire after a successful adding, editing or deleting of a credential. **objects**: manager, doorhanger (contingent on where the user initiated the action). item GUID should be in the extra field. **value** is null

5. `item_selected` fires when a user clicks an item in the itemlist. **objects** manager, doorhanger  **value** is null

6. `copy_password` and `copy_username` fire when a user copies their username or password from an item. **objects**: `item_detail_manager`, `item_detail_doorhanger` **value** is null

7. `reveal_password` fires when a user reveals a password from within the item detail view. **objects**: `item_detail_manager`, `item_detail_doorhanger` **value** is null

8. `open_website` fires when a user clicks to open a credential's associated web address. **objects**: `item_detail_manager`, `item_detail_doorhanger` **value** is null




---

## References

Docs for the Public JS API that allows us to log events thru an add-on:

[Telemetry Public JS API](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/collection/events.html#the-api)
