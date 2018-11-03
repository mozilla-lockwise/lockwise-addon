{
  "manifest_version": 2,
  "name": "{{title}}",
  "version": "{{version}}",
  "description": "{{description}}",
  "icons": {
    "48": "icons/lb_locked.svg",
    "96": "icons/lb_locked.svg"
  },

  "applications": {
    "gecko": {
      "id": "{{id}}",
      "strict_min_version": "63.0"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "32": "icons/lb_locked.svg"
    },
    "default_title": "Lockbox",
    "browser_style": false
  },

  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+L"
      }
    }
  },

  "permissions": [
    "tabs",
    "clipboardWrite",
    "mozillaAddon",
    "telemetry"
  ]
}
