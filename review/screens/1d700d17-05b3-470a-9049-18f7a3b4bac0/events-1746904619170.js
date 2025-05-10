jQuery("#simulation")
  .on("click", ".s-1d700d17-05b3-470a-9049-18f7a3b4bac0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/49a8beee-2b9f-429d-a2af-1fbeae0397d1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_4 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_7 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_11 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_6 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_7 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_11 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_6 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_5 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#82888C",
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_4 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_7 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_11 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_6 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_6 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_4 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_7 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_11 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_5 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_4 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_11 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_6 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_5 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_11 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_4 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_7 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_6 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_5 span",
                  "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#82888C",
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-1d700d17-05b3-470a-9049-18f7a3b4bac0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_6 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1d700d17-05b3-470a-9049-18f7a3b4bac0 #s-Text_11 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-1d700d17-05b3-470a-9049-18f7a3b4bac0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_6")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_7")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });