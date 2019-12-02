# Telemetry Test Plan: Lockwise-extension

Given the importance the Lockwise team places on actionable user telemetry, ensuring confidence in the fidelity of that data is vital. Coverage aspects are broken into two distinct areas: test automation and manual testing.

## Unit tests

When a new feature is developed or an additional user action needs to be recorded, the developer implementing the new telemetry event will add a unit test to ensure the action creates a ping.

## Manual tests

### New telemetry events

Once a new telemetry event is added to a feature and that event has a unit test, the telemetry ping will be manually inspected by either Leif Oines, Product Data Scientist or Product Integrity. The goal of this exercise it to ensure the new event and accompanying unit test are capturing the correct user behavior.

### Regression testing

A small handful of smoke tests will manually be run prior to each release. Note, the team will rely on the underlying unit tests for comprehensive testing of event verification.

Product Integrity will investigate options for automating these tests into the integration test suite. 

## Metrics being gathered

For a comprehensive list of metrics being gathered review the [Lockwise Telemetry Plan](/metrics/).
