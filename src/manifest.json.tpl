{
  "manifest_version": 2,
  "name": "{{title}}",
  "short_name": "{{name}}",
  "version": "{{version}}",
  "description": "{{description}}",
  "icons": {
    "48": "icons/icon-lockwise.svg",
    "96": "icons/icon-lockwise.svg"
  },


  "content_security_policy": "script-src 'self' {{testing_csp_scripts}} ; object-src 'self' {{testing_csp_objects}}",

  "browser_specific_settings": {
    "gecko": {
      "id": "{{id}}",
      "strict_min_version": "67.0"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "32": "icons/icon-lockwise.svg"
    },
    "browser_style": false
  },

  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+L"
      }
    }
  },

  "experiment_apis": {
    "logins": {
      "schema": "experiments/logins/schema.json",
      "parent": {
        "scopes": ["addon_parent"],
        "script": "experiments/logins/api.js",
        "paths": [["experiments", "logins"]]
      }
    },
    "sync": {
      "schema": "experiments/sync/schema.json",
      "parent": {
        "scopes": ["addon_parent"],
        "script": "experiments/sync/api.js",
        "paths": [["experiments", "sync"]]
      }
    },
    "temptelemetry": {
      "schema": "experiments/temptelemetry/schema.json",
      "parent": {
        "scopes": ["addon_parent"],
        "script": "experiments/temptelemetry/api.js",
        "paths": [["experiments", "temptelemetry"]]
      }
    }
  },

  "permissions": [
    "tabs",
    "clipboardRead",
    "clipboardWrite",
    "mozillaAddons",
    "storage",
    "telemetry"
  ]
}
