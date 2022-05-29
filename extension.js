    const Clutter = imports.gi.Clutter;
    const Main = imports.ui.main;
    const GLib = imports.gi.GLib;

    const COMMAND = "hostname --fqdn";
    const FONT_SIZE = 48;
    let stage_bg_color = Clutter.Color.get_static(Clutter.StaticColor.CHOCOLATE_DARK);

    let myactor = null;

    function run_command() {
        let output = "";
        try {
            output = GLib.spawn_command_line_sync(COMMAND, null, null, null, null);
        } catch(e) {
            throw e;
        }
        
        return output[1] + "";
    }

    function init() {
        let myactor = new Clutter.Text();
        myactor.set_font_name("Sans " + FONT_SIZE);
        myactor.set_position(400, 400);
        myactor.set_background_color(stage_bg_color);
        
        myactor.set_text(run_command());

        let n_children = Main.layoutManager._backgroundGroup.get_n_children();
        Main.layoutManager._backgroundGroup.insert_child_at_index(myactor, n_children);
    }

    function enable() {
    }

    function disable() {
    }
