window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "swagger/auth.yml", name: "Auth Spec" },
      { url: "swagger/homeworks.yml", name: "Homeworks Spec" },
      { url: "swagger/lessons.yml", name: "Lessons Spec" },
      { url: "swagger/materials.yml", name: "Materials Spec" },
      { url: "swagger/profile.yml", name: "Profile Spec" },
      { url: "swagger/teachers.yml", name: "Teachers Spec" }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
