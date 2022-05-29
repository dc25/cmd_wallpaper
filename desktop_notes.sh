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
