/**
 * proc.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 28 Nov 2015
 */
function end() {
    $.exit(0);
}

function abort(message) {
    console.error(message);
    $.exit(1);
}

export default {
    end,
    abort
}
