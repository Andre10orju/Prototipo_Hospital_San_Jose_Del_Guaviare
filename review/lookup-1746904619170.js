(function(window, undefined) {
  var dictionary = {
    "c6d40743-4c77-443d-a8bd-b92f6cd74d27": "Perfil Medico",
    "8ac6c456-b8fc-4077-9028-28da378ec580": "Login Medico",
    "1d700d17-05b3-470a-9049-18f7a3b4bac0": "Historia Clinica",
    "417ccd32-19dc-48d9-b6c2-735a628d5474": "Modulo Principal Medico",
    "56c23aa3-5b76-42d8-bf07-b95be48ba4f6": "Citas medicas Simplificadas.",
    "60b5f115-50eb-47e1-8837-7cdb5d035c53": "Agenda  Madicos",
    "9a954d5a-650a-49ab-b253-5407883f0c36": "Perfil Usuario",
    "97a29b9d-370a-4ed7-82d3-e298f80b6652": "Plataforma Web de Citas Medicas",
    "904db431-397a-4a46-848f-8e7c124d65e2": "Registro Usuario",
    "49a8beee-2b9f-429d-a2af-1fbeae0397d1": "Modulo Principal Usuario",
    "5a0b3255-4a40-4446-a2e0-8b50517ac59c": "Pacientes Con Cita",
    "9b416ef7-4355-4c05-b48a-f8d667f8a734": "Servicios",
    "161e4075-e902-4e11-93f0-8559a58c4812": "Consulta tus Citas",
    "7fcf2d07-621e-4150-a802-6673559be50c": "Solicita tu Cita",
    "0944a97d-8c00-43f5-a20c-509f57494a18": "Formulario Registro Usuario",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);