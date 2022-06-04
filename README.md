# Crows Electromusic Kicad Library

A library of parts for stuff we've made or are making.

## Usage:

It's important that this is used as a submodule, and the submodule is placed in the same directory as the .kicad_pro, since the 3d models are referenced relative to your project file, not relative to this library.

### Setup:

run this next to your kicad project:

    git submodule add https://github.com/crowselectromusic/crows-kicad-library

then add the library as a project specific library using the path:

    ${KIPRJMOD}/crows-kicad-library/Crows.pretty

### Changes:

To make changes, edit the library, commit and push to `main`. If you're adding a new component, no worries - if you're editing an existing one, it would be a good time to update the submodule in all the projects.

