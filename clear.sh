#!/bin/bash

echo "React Native Storybook Clear All"

if command -v watchman &>/dev/null; then
  watchman watch-del-all &>/dev/null
  echo "Watchman deleting all..."
fi

echo "Removing all cached folders..."
rm -rf lib dist node_modules .expo storybook-static
echo "Finished!"
