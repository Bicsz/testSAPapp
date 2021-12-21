sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("segezhsignfiles.controller.Main", {
            onInit: function () {
                
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    this.oRouter.getRoute("RouteMain").attachPatternMatched(this.onRouteMatched, this);
                debugger
                this.getView().getModel().read("/SupportID", {
                    success: data => { 
                        debugger
                    },
                    error: e=>{
                        debugger
                    }
                })

            },

            onRouteMatched: function() {
                debugger
            }
        });
    });
