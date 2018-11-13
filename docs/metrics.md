# Lockbox Metrics Plan

_Last Updated: Feb 19, 2018_

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Analysis](#analysis)
- [Collection](#collection)
	- [Event Registration and Recording](#event-registration-and-recording)
- [Scalar Metrics](#scalar-metrics)
- [List of Events Currently Recorded](#list-of-events-currently-recorded)
- [References](#references)

<!-- /TOC -->

This is the metrics collection plan for Lockbox. It documents all events currently collected through telemetry, as well those planned for collection but not currently implemented. It will be updated periodically to reflect all new and planned data collection.

## Analysis

Data collection is done solely for the purpose of product development, improvement and maintenance. Specifically, it is done to help its creators examine the validity of the following hypothesis.

Core Hypothesis: **We believe that people want the browser to do more than only remember their passwords.**

We will know this to be true when:

1. The password generator is clicked 20% of the time a new entry is created. **This will indicate that users value the ability to create secure passwords.** (Events regarding password generation will be added when feature development is complete)

2. 75% of Lockbox downloads result in a Firefox account attached. **This will indicate that users value secure storage for their credentials.** We currently record the event `fxaUpgrade` to know whether a user has attached an Firefox account to their lockbox installation.

3. 60% of users choose to import their existing credentials from Firefox into Lockbox. **This will indicate that users trust lockbox more than the browser for managing their credentials.** (Events regarding the importing of credentials from the firefox password manager will be added when feature development is complete)

4. We observe increased engagement with the management system (Create-Read-Update-Delete; CRUD) for users that import their credentials. **This will indicate that users value greater visibility into the number of accounts that they have.** We currently record `render` events when a user opens the credential manager.

5. CRUD usage rates are comparable to Firefox login manager usage prior to lockbox installation. **This will indicate that users value Lockbox's credential management system, and use it to access credentials when they are needed.** Firefox telemetry currently collects data on password autofill usage, which requires credentials be stored in the firefox password manager. We plan to compare lockbox credential usage (e.g. via the `usernameCopied` and `passwordCopied` lockbox events) to pre-lockbox autofill frequencies on a per-user basis.

6. 20% of Lockbox users access their datastore on more than 1 device, **indicating that users value having a single datastore of credentials.**


Other questions we aim to answer through data collection, but are not directly related to the hypothesis above:

- Do people Save Passwords in Lockbox?
	- How many? (measured by count of items saved per user)
	- How often? (number of credentials saved per user per time interval)
- Do people create their own passwords or use Lockbox to generate them?
	- Ratio: (Number of times the PW generator is used when storing an item) / (number of credentials stored)
- When using the pw generator, do people create purely random passwords or customize them with their own input? (if this is going to be in the final design)
- Do people use the passwords they store on Lockbox?
	- How many times (per some unit of time) do stored credentials get filled?
	- How many times (per some unit of time) do stored credentials get copied?
- How many times do users click to reveal a password?
- Do people continue to use Lockbox after first use?
	- Out of those who install, how many use it more than once?
- Where are the drop-off points in the user flow?
	- Do the majority of people make it all the way through the setup process?
	- Once initially setup, do people continue to add credentials?
- Do people sync their passwords between Firefox instances?
	- How does syncing affect engagement?


## Collection

At this point, all measurements related to Lockbox will be made client-side. However, future releases will give users the option to sync their Lockbox data via an FxA account, at which point additional measurements will be logged server-side through the FxA data pipeline. We are not directly responsible for the measurements made through that mechanism.

For our internal alpha release, we will be making use of the public JavaScript API that allows recording and sending of event data and scalar data through an add-on. The API is documented here:

https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/collection/events.html#the-api

Once events are logged in the client they should appear in [about:telemetry](about:telemetry). From there they will be submitted in the main ping payload under `processes.dynamic.events` and available through the usual services (STMO and ATMO), as well as amplitude.

### Event Registration and Recording

The events that we will record will conform to the structure expected by the telemetry pipeline. When the events are logged in telemetry they will be a list of:

`[timestamp, category, method, object, value, extra]`

The API takes care of the timestamp for us. We just need to define `category`, `method`, `object` and `extra` (`value` is optional and we won't use it).

Because we are using the API through an add-on it **isn't** necessary that we include an events.yaml file.

Instead we will define our events by **registering** them using a call to `Services.telemetry.registerEvents(category, eventData)`.

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
- To log the fields that are modified when an item is updated in the datastore (e.g. `"fields": "password,notes"`  (because the value has to be a string we will have to concat the fields that were updated somehow)

Once an event is registered, we can record it with:

`Services.telemetry.recordEvent(category, method, object, null, extra)`

When recording, we can use `null` for `value`.

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
e.g. `lockboxV1.datastoreCount` for the scalar name.

We can also use `scalarAdd` to increment a scalar value by some amount.

## Scalar Metrics

These are the metrics we currently collect regarding the state of user datastores.

- `datastoreCount` (integer). Current count of the number of items in the user's datastore. Note that this scalar is only updated when the user renders their full item list, either in the management view or in the doorhanger. So when testing whether this scalar is accurately updated, please re-render the item list.

## List of Events Currently Recorded

All events are currently implemented under the **category: lockboxV2**. The `extra` field contains `itemid` for events pertaining to a particular Lockbox item. They are listed and grouped together below based on the contents of the event's `method` field.

1. `startup` fires when the webextension is loaded. **objects**: webextension. Note that this event fires whenever the browser is started, so is not indicative of direct user interaction with Lockbox.

2. `iconClick` fires when someone clicks the toolbar icon. **objects**: toolbar

3. `render` events fire when the item manager or doorhanger (when implemented) are rendered. **objects**: manage, doorhanger

4. `itemAdding`, `itemUpdating`, `itemDeleting` fire when a user clicks to submit a new item or edit or delete an existing item. **objects**: addItemForm, updatingItemForm

5.  `itemAdded`, `itemUpdated`, `itemDeleted` fire after a successful add/update/delete action. **objects**: addItemForm, updatingItemForm

6. `added`, `updated`, `deleted` fire when an item is added/updated/deleted in the backend datastore. Has itemid in the extra field. **objects**: datastore

7. `itemSelected` fires when a user clicks an item in the itemlist. **objects** itemList  

8. `usernameCopied` and `passwordCopied` fire when a user copies their username or password from an item. **objects**: itemDetails

9. `feedbackClick` fires when the user clicks the "Send Feedback" button. **objects**: manage

10. `faqClick` fires when the user clicks the "FAQ" button. **objects**: manage

---

## References

Docs for the Public JS API that allows us to log events thru an add-on:

[Telemetry Public JS API](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/collection/events.html#the-api)
