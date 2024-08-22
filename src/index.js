console.log("index.js");
console.log("Version2");

// When you first open the command line or powershel, the commands are running in side the home folder
// So we have to make sure that the commands are running in the folder that contains our code  using "cd" and the folder name like Gid=t and GitHub Testing

////////////////   CREATING THE FIRST VERSION OF OUR CODE   /////////////

//First thing we have to do is set up git inside the folder that contains our code and to do that we have to type this command "git init" then press enter
// The next step is to run the command "git status", this tells us what changes have been made to our file since the previouse version
// Next step, we are creating our first version. The first thing we have to do is to pick which changes we want  in our next verion and to do that
// we say "git add config.js", if we run this, git will only put config.js in the next version and leave out other files (src)
// To all the files in the next version, we say "git add ." (the dot represents folder the command line is currently running in)

// Remember that "git add" does not create a new version, it just let us pick which changes we want in our next version
// So, to create a new version we are goin to use another git command called "git commit -m "
// A verion in git is known ad commit. version = commit
//  -m means we are attoching a message to a commit, you always have to attoch a message to a commit, to describe what you change so that when you are looking at this commit/version in future, you know exactly what happened
// e.g gti commit -m "version 1"

// To check our version history, we run this command "git log"

// Lets say that while you made a commit, you made a mistake, for example... mispeling the commit message or forgot to add a change
// To deal with that you do the following:
// git add
// then git commit -m "Version 1" --amend
// So what --amend means is that isstead of creating a new commit, this changes are just gonna go in the previouse commit
