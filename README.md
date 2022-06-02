A gnome shell extension that displays the output of a command on the desktop.

Original code taken from answer to https://stackoverflow.com/questions/29816027/a-simple-way-to-show-my-hostname-ip-in-gnome-panel-or-on-my-desktop-background

* Use `git clone  https://github.com/dc25/cmd_wallpaper.git "~/.local/share/gnome-shell/extensions/cmd_wallpaper@davecompton.net"` to install this extension.  
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

