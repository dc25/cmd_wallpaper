A gnome shell extension that displays the output of a command on the desktop.


**NOTE:  As of [GNOME Shell 45](https://gjs.guide/extensions/upgrading/gnome-shell-45.html#esm) , this no longer works.  I spent a few hours trying to update it but decided it was not worth the effort.   My guess is that it *could* be fixed but it's not that important to me and I don't think anyone else is using it.   If someone reading this figures out how to get it working again, please let me know what it takes.**


Original code taken from answer to https://stackoverflow.com/questions/29816027/a-simple-way-to-show-my-hostname-ip-in-gnome-panel-or-on-my-desktop-background

* Use `git clone  https://github.com/dc25/cmd_wallpaper.git "$HOME/.local/share/gnome-shell/extensions/cmd_wallpaper@davecompton.net"` to install this extension. 
    * The final directory in the path, `cmd_wallpaper@davecompton.net`, must match the `uuid` specified in the `metadata.json` file.
    * Restart the window manager by logging out and back in to complete the installation.
* Make sure that your gnome shell version is included in the `metadata.json` `shell-version` array.   Use `gnome-shell --version` to find your shell version.
* Edit `COMMAND`, `FONT_SIZE`, `XPOS`, `YPOS` variables in `extensions.js` as needed.  May need to log out and back in to restart window manager after this.
* use `gnome-extensions enable cmd_wallpaper@davecompton.net` to enable.
* use `gnome-extensions disable cmd_wallpaper@davecompton.net` to disable.

I use a set `COMMAND` to a script like this to get some useful info about the machine:
```
#! /bin/sh

# Show the os (Ubuntu) version
echo OS: `lsb_release -ds`

# Show the hostname
echo hostname: `hostname`

# Show the user name 
echo user: $USER

# Show the public facing ip address.
public_ip=`curl -4s icanhazip.com `
echo public ip:  $public_ip

# Show all the ip (v4) addresses on this machine.
ifconfig | sed -e "s/^ *\<inet\> \([0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*\).*/\1/;t;d"
```

