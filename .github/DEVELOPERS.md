# Developer On-boarding
The purpose of this document is to document the steps for a new developer of this project to get on-boarded
to be able to contribute.

## Repository Setup
1 - The source code for this application is written in the Pascal programming language.
- Only Windows operating systems are currently supported as the target platform for the application to operate on.

2 - Create a GitHub account if you don't already have one.
- Details available at https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account
- In which case since you are new to GitHub you may also want to review https://docs.github.com/en/get-started/quickstart/contributing-to-projects

3 - Fork the w7sst/MorseRunner repo to your own GitHub account.
- With your browser go to https://github.com/w7sst/MorseRunner
then click on the fork button near the top right of the page.

4 - Clone your your GitHub account's fork of the repo.
- Using GitBash on Windows or a terminal on Linux or MacOS, clone your fork of the repo via the following command
replacing {yourAccountName} with the name of your GitHub account.
- git clone https://github.com/{yourAccountName}/MorseRunner.git

## IDE Setup and compilation
1 - Get your IDE (Integrated Development Environment) setup
- This project is currently supported with the use of two separate IDEs for Pascal
- Lazarus version 2.2.4 (fpc 3.2.2) - Lazarus was the original IDE used for MorseRunner by VE3NEA
- Delphi Community Edition (aka RX RAD Studio 10.4) - Delphi CE is free for use by open source projects and Delphi is the preferred IDE at this time
- Install and start Delphi CE 
- To open the project in the IDE Click File then click Open Project
then navigate to where you cloned your MorseRunner repo and
select the VCL/MorseRunnerVcl.dproj (~44KB) which is a Delphi Project File then click Open.
- Build the project via clicking Project then click Build MorseRunnerVcl
- Install packages via clicking Component on menu then click Install Packages. Click Add (lower right),
navigate to and select VCL/Win32/Debug/MorseRunnerVcl.bpl, click open and click save.
- Reopen the MorseRunner project with the MorseRunner.dproj in the parent directory of the repo
- To run the source code - Click Run and Run again or click the play icon

2 - Directory hierarchy
- .git - DO NOT TOUCH the contents here is how git does all it's magic
- .github - contains support pages
- PerlRegEx - TBD
- VCL - Visual Component Library who's purpose is TBD
- tools - contains verify-normalization.sh script who's purpose is TBD
- . - the parent directory of the repo contains the bulk of the source code, configuration and data files

3 - How to write and contribute unit tests
- There aren't any unit tests. This may be added to the roadmap. Code refactoring will be needed to be able to support unit testing.

4 - How to build the source code into an executable via Delphi IDE
- On the menu click Project then click Build MorseRunner. That will create MorseRunner.exe in the parent directory of your cloned repo.

5 - How to run and test the source code via Delphi IDE
- Click Run and Run again or press F9 which will run it in debug mode. 
- If you wish to not run it in debug mode click Run and Run Without Debugging or press Shift+Ctrl+F9

6 - Production builds are currently created for each release by W7SST

## Creating a New Release
There are several steps to creating a new release.

1 - In general, a new release should have
  - a new section added to the `Readme.txt` file.
  - update the version number in `Main.pas`.
  - update the copyright strings in both `Main.pas` and `Main.dfm`.

2 - Create the release directory.
- To create a release directory, perform the following steps:
  - Compile in release mode.
  - execute the following script in a git/bash shell:
  ```
  tools/make-install.sh '../Morse Runner 1.8x'
  ```

3 - Validate a release directory, execute the same script with the `--verify` option:
  ```
  tools/make-install.sh --verify '../Morse Runner 1.8x'
  ```

4 - Create a ZIP file containing the install directory
- Open a Windows Explorer window and navigate to the parent directory containing the above install directory.
- Right-click on the install folder and select `Compress > ZIP`

5 - To test this install directory
- Copy the ZIP File to your desktop
- Expand the ZIP file to extract the contained installation directory
- Go into this directory and execute `MorseRunner.exe`

6 - Create a new github Release page [here](https://github.com/w7sst/MorseRunner/releases).
- Create new draft release page
- copy contents of a prior release to use as a template.
- edit the release page for the upcoming release.
- Copy the `Morse Runner 1.8x.ZIP` file into the file section at the bottom.
- Save as a draft so you can ask others to review the page before publishing the release.
- Final step is publish the release.

7 - Post an announcement on groups.io [here](https://groups.io/g/MorseRunnerCE/topic/new_version/94523639).
  - First, Unlock the `New Version` topic
  - Write new release announcement and post it.
  - Lock the `New Version` topic

In conclusion, thank you for volunteering to help improve this project. We all look forward to your contributions!

