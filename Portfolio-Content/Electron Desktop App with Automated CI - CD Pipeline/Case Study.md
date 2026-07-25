The Electron Desktop App CI/CD Pipeline is a fully automated build, release, and auto-update system built around a cross-platform desktop browser application developed with Electron. The pipeline handles building native installers for both Windows and macOS, publishing versioned releases automatically, and updating the app on every user's machine without any manual download. Built with GitHub Actions, Electron, Render, and Supabase.
🔍 The Problem
The client had a working Electron application but no professional release process. Every update required manually building for both Windows and macOS, packaging installers, uploading them somewhere, and notifying users to download the new version themselves. The process was slow, error-prone, and did not scale. The client needed a single command to handle the entire release end to end, and an auto-update mechanism so users always stayed on the latest version automatically.
🏗️ How We Built It
We designed a complete CI/CD pipeline using GitHub Actions and integrated Electron's native auto-update mechanism alongside automated deployment flows for the backend and database.
GitHub Actions CI/CD pipeline:

Pipeline triggers automatically when the developer runs the release script, pushing to the main branch
Windows runner: compiles and packages the Electron application into a native Windows installer
macOS runner: compiles and packages the same codebase into a native macOS installer
Both builds must succeed before any release is published
Pipeline publishes a versioned release to a separate public GitHub repository with both installer files attached as release assets

Auto-update mechanism:

Electron's built-in auto-update system configured to point at the public releases repository
On every app launch, the application checks the releases list and compares the installed version against the latest published version
If a newer version is available, the update downloads and installs automatically in the background, no user action required

Backend and database automation:

Backend hosted on Render with a deploy hook triggering automatic redeployment on every push to main
Supabase database configured to apply schema migrations automatically, keeping the database in sync with the codebase throughout development

🚀 Results
The client went from a slow, manual release process to a fully automated zero-touch pipeline. A single release script now handles everything: Windows and macOS builds, versioned release publishing, and auto-update delivery to every installed instance. The client ships updates confidently knowing every user receives them automatically, with no manual steps and no user action required.