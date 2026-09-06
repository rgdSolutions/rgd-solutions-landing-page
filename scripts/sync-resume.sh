#!/usr/bin/env bash
# Copies the latest resume PDF from the resume-typst project into public/.
# Override RESUME_SOURCE / RESUME_DEST to point elsewhere (used by tests).
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
src="${RESUME_SOURCE:-$here/../../../resume-typst/out/resume.pdf}"
dest="${RESUME_DEST:-$here/../public/ricardo-dalessandro-resume.pdf}"

if [ ! -f "$src" ]; then
  echo "sync-resume: source not found: $src" >&2
  echo "sync-resume: build it with 'make build' in resume-typst, or set RESUME_SOURCE" >&2
  exit 1
fi

mkdir -p "$(dirname "$dest")"
cp "$src" "$dest"
echo "sync-resume: copied $(wc -c < "$src" | tr -d ' ') bytes to $dest"
