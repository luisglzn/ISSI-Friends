'use strict';

import { parseHTML } from '../utils/parseHTML.js';

function getErrorsDiv() {
    return document.getElementById("errors");
}

const messageRenderer = {

    showMessageAsAlert: function (message, bootClass, err) {
        let html = `<div class="alert alert-${bootClass} alert-dismissible col-md-12 fade show">
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        ${message}
                    </div>`;
        let errorsDiv = getErrorsDiv();
        
        if (errorsDiv === null) {
            console.error("You tried to render the following message, however, a " +
                `<div id="${msgsDivID}"> could not be found in your view to show it there:`);
            console.error(message);
            return;
        }

        let messageElem = parseHTML(html);
        errorsDiv.appendChild(messageElem);

        if(err != null) {
            throw(err);
        }
    },

    showErrorAsAlert: function (message, err = null) {
        this.showMessageAsAlert(message, "danger", err);
    },

    showWarningAsAlert: function (message, err = null) {
        this.showMessageAsAlert(message, "warning", err);
    },

    showSuccessAsAlert: function (message, err = null) {
        this.showMessageAsAlert(message, "success", err);
    },
}

export { messageRenderer };