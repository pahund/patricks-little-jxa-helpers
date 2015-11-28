# Patrick's Little JXA Helpers

Shell scripts that use JavaScript for Automation in Mac OS X (JXA) to do things _very_ specific to my work setup.

If you're not me, you'll find this only useful as a reference, you most likely won't be able to use these scripts on your own machine.

## Installation

The JavaScript source code for the scripts are in the [src](src) folder. They are in ES6 (ECMAScript 2015), to be compiled
into JXA scripts. The compilation is done using [webpack](http://webpack.github.io/).

To compile, you need to:

* Have [Node.js](https://nodejs.org/) 4.0.0 or greater installed
* Have webpack installed as a global module (`npm install -g webpack`)

You can then simply do an `npm install` to compile the JXA scripts, which are then located in the `bin` directory and
can be executed directly from the command line.

## Use With Karabiner

I use [Karabiner](https://github.com/tekezo/Karabiner) to execute my JXA scripts using keyboard shortcuts on an [Ideazon Fang](http://ecx.images-amazon.com/images/I/51XBVJ4807L._SS500_.jpg) keyboard.

You can find my Karabiner configuration file here: [private.xml](karabiner/private.xml)

## Further Reading

JXA resources on the web:

* [JavaScript for OS X Automation by Example](http://developer.telerik.com/featured/javascript-os-x-automation-example/)
* [JavaScript for Automation Cookbook](https://github.com/dtinth/JXA-Cookbook/wiki)
* [JXA Reference in OS X 10.10 Release Notes](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1)


