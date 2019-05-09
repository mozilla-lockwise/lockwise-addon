# Lockbox Desktop Addon Metrics Plan

_Last Updated: Mar 20, 2019_

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


Events are defined by **registering** them using a call to `browser.telemetry.registerEvents(category, eventData)`.

Here's a breakdown of how a to register a typical event:


```javascript
browser.telemetry.registerEvents("eventcategory", {
    "eventName": {
        methods: ["click", ... ], // types of events that can occur
        objects: ["aButton", ... ], // objects event can occur on
        extra: {"key": "value", ... } // key-value pairs (strings)
    }
```

For our purposes, we will use the `extra` field for a few purposes:

- To log the UUID of the item that has been added or changed (e.g. `"itemid": UUID`)
  * TODO: Do we still want to do this? I removed the old datastore events, since they weren't in the list of planned events below.
- To log the fields that are modified when an item is updated in the datastore (e.g. `"fields": "username,password,hostname"` (because the value has to be a string we will have to concat the fields that were updated somehow)

Once an event is registered, we can record it with: (\*)

`browser.telemetry.recordEvent(category, method, object, value, extra)`

Note: The semantics of `value` is contingent on the event being recorded, see list below.

See the Events section for specific examples of event registration and recording.

\* Due to a bug in Firefox 67-, we will need to use a fallback embedded API experiment to correctly record telemetry events. See bug 1536877 for details.)

#### Scalar recording

We use the js api for scalar recording as well. Here registration happens with the following syntax:

```javascript
browser.telemetry.registerScalars(category, {
	"scalarName": {
		kind: browser.Telemetry.SCALAR_TYPE_COUNT, // SCALAR_TYPE_COUNT, SCALAR_TYPE_BOOLEAN. or SCALAR_TYPE_STRING
		keyed: false,
		record_on_release: false, // NEEDS TO BE SET TO RECORD ON RELEASE CHANNEL
		expired: false,
	}
```
We set scalar values in the following way:

```javascript
browser.telemetry.scalarSet(
	"category.scalar_name", value
);
```
e.g. `lockbox-addon.loginCount` for the scalar name.

We can also use `scalarAdd` to increment a scalar value by some amount.

## Scalar Metrics

These are the metrics we currently collect regarding the state of the user's login storage.

- `loginCount` (SCALAR_TYPE_COUNT). Current count of the number of items in the user's login storage. If possible, this scalar should be set upon opening either the doorhanger or full extension interface. It need not be set "in the background" in the absence of any user interaction with the app.

- `loginsAccessed` (SCALAR_TYPE_COUNT). Total of logins accessed (copied, revealed) during the last telemetry session.


## List of Planned Metrics Events

All events are currently implemented under the **category: lockboxaddon**. The `extra` field contains `itemid` for events pertaining to a particular Lockbox item. They are listed and grouped together below based on the contents of the event's `method` field.

1. `startup` fires when the webextension is loaded. **objects**: `webextension`. Note that this event fires whenever the browser is started, so is not indicative of direct user interaction with Lockbox. **value** is null.

2. `click` fires when someone clicks on one of the UI elements listed **objects**: `toolbar`, `getMobile`, `faq`, `accountSettings`, `giveFeedback`, `settingsMenu`, `signinSync`, `openPlayStore`, `openAppStore`.  **value** is null. `sortMenu` has **value** of `lastUsed`, `lastChanged`, or `name`.

3. `show` events fire when various UI elements are rendered shown to the user. **objects**: `itemListManager`, `itemListDoorhanger`, `itemDetailDoorhanger` `itemDetailManager`, `newItem`, `itemEdit`, `deleteConfirm`, `connectAnotherDevice` (referring to the dialog displayed after a user clicks on the button to learn about the mobile apps) **value** should be a boolean for `itemList*` events indicating whether any logins are in the login list (e.g. `False` if the list is empty).

4. `itemAdd`, `itemUpdate`, `itemDelete` fire after a successful adding, editing or deleting of a credential. **objects**: manager, doorhanger (contingent on where the user initiated the action). item GUID should be in the extra field. **value** is null

5. `itemSelected` fires when a user clicks an item in the itemlist. **objects** manager, doorhanger  **value** is null

6. `copyPassword` and `copyUsername` fire when a user copies their username or password from an item. **objects**: `itemDetailManager`, `itemDetailDoorhanger` **value** is null. item GUID should be in the extra field.

7. `revealPassword` fires when a user reveals a password from within the item detail view. **objects**: `itemDetailManager`, `itemDetailDoorhanger` **value** is null item GUID should be in the extra field (or null, if the item is being created, and doesn't have an ID yet)

8. `concealPassword` fires when a user conceals a previously revealed password from within the item detail view. **objects**: `itemDetailManager`, `itemDetailDoorhanger` **value** is null item GUID should be in the extra field (or null, if the item is being created, and doesn't have an ID yet)

8. `openWebsite` fires when a user clicks to open a credential's associated web address. **objects**: `itemDetailManager`, `itemDetailDoorhanger` **value** is null item GUID should be in the extra field.




---

## References

Docs for the Mozilla privileged JS API that allows us to log events thru an add-on:

[Telemetry Public JS API](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/collection/events.html#the-api)
