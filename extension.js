// This code uses Clutter which has been deprecated but appears to remain in place (as of Ubuntu 22.04 ) 
// for legacy code.   I spent some time trying to get GTK working but decided it was not worth the 
// effort.   Thank you to anyone who updates this code to GTK.

const Clutter = imports.gi.Clutter;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

// Left this in as comment to note how to get Gtk version.
// const { Gtk } = imports.gi;
// const version = Gtk.get_major_version();
// const minor_version = Gtk.get_minor_version();


let COMMAND = "";
// Set COMMAND, FONT_SIZE, XPOS, YPOS as needed.
COMMAND = "lsb_release -d";
// Make sure that desktop_notes.sh is somewhere in your $PATH if you uncomment the following line.
// COMMAND = "desktop_notes.sh";
const FONT_SIZE = 24;
const XPOS = 100;
const YPOS = 50;

function run_command() {
    let output = "";
    try {
        output = GLib.spawn_command_line_sync(COMMAND, null, null, null, null);
    } catch(e) {
        throw e;
    }
    
    let res = output[1] + "";
    if (res.slice(-1) == '\n') {
        res = res.slice(0,-1);
    }
    return res;
}

function init() {
}

let myactor = null;

function enable() {
    myactor = new Clutter.Text();
    myactor.set_font_name("Sans " + FONT_SIZE);

    // Adjust position according to taste.
    myactor.set_position(XPOS, YPOS);

    let white_color = Clutter.Color.get_static(Clutter.StaticColor.WHITE);
    myactor.set_color(white_color);

    // Set background color if appropriate.
    // let stage_bg_color = Clutter.Color.get_static(Clutter.StaticColor.CHOCOLATE_DARK);
    // myactor.set_background_color(stage_bg_color);
    
    myactor.set_text(run_command());

    let myindex = Main.layoutManager._backgroundGroup.get_n_children();
    Main.layoutManager._backgroundGroup.insert_child_at_index(myactor, myindex);
}

function disable() {
    Main.layoutManager._backgroundGroup.remove_child(myactor);
    myactor = null;
}
