athens.alert = (function () {

    var messageTypes = {
        success: {
            glyphicon: 'glyphicon-ok',
            bootstrapType: 'success'
        },
        wait: {
            glyphicon: 'glyphicon-time',
            bootstrapType: 'info'
        },
        info: {
            glyphicon: 'glyphicon-exclamation-sign',
            bootstrapType: 'info'
        },
        error: {
            glyphicon: 'glyphicon-remove',
            bootstrapType: 'danger'
        },
    };

    var DelayedAlert = function(message, type, duration, delay)
    {
        var alert = undefined;

        this.timeout = window.setTimeout(
            function() {
                alert = makeAlert(message, type, duration);
            },
            delay
        );

        this.close = function() {
            window.clearTimeout(this.timeout);

            if (typeof alert !== 'undefined') {
                alert.close();
            }
        };

        return this;
    };

    /**
     * Creates an alert div, appends it to the notification area, and schedules it for removal.
     *
     * @param {string} message The message to be displayed on the alert.
     * @param {string} type The type of the message, likely "success", or "failure".
     * @param {number} duration How long to leave the alert displayed, in milliseconds.
     * @param {number} delay How long to wait to display the alert, in milliseconds.
     */
    var makeAlert = function(message, type, duration, delay)
    {
        if (typeof duration === 'undefined') {
            duration = 5000;
        }

        if (typeof delay === 'undefined') {
            delay = 0;
        }

        if (delay > 0) {
            return DelayedAlert(message, type, duration, delay);
        } else {
            var messageType = messageTypes[type];

            return $.notify({
                icon: 'glyphicon ' + messageType.glyphicon,
                message: message
            },{
                type: messageType.bootstrapType,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                delay: duration
            });
        }
    };

    return {
        makeAlert: makeAlert
    };

}());


// MagicFAQ.notify = (function () {
//
//
//
//     var DelayedNotification = function(message, type, duration, delay)
//     {
//         var notification = undefined;
//
//         this.timeout = window.setTimeout(
//             function() {
//                 notification = notify(message, type, duration);
//             },
//             delay
//         );
//
//         this.close = function() {
//             window.clearTimeout(this.timeout);
//
//             if (typeof notification !== 'undefined') {
//                 notification.close();
//             }
//         };
//
//         return this;
//     };
//
//     var notify = function(message, type, duration, delay)
//     {
//         if (typeof duration === 'undefined') {
//             duration = 5000;
//         }
//
//         if (typeof delay === 'undefined') {
//             delay = 0;
//         }
//
//         if (delay > 0) {
//             return DelayedNotification(message, type, duration, delay);
//         } else {
//             var messageType = messageTypes[type];
//
//             return $.notify({
//                 icon: 'glyphicon ' + messageType.glyphicon,
//                 message: message
//             },{
//                 type: messageType.bootstrapType,
//                 animate: {
//                     enter: 'animated fadeInDown',
//                     exit: 'animated fadeOutUp'
//                 },
//                 delay: duration
//             });
//         }
//     };
//
//     return notify;
//
// }());
//
//
//
//
//
