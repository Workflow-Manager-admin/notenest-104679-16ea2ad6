#!/bin/bash
cd /home/kavia/workspace/code-generation/notenest-104679-16ea2ad6/notes_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

