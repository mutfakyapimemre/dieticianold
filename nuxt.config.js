global.File = typeof window === "undefined" ? Object : window.File;
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  //mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    //apiBaseUrl: "https://api.klinikdiyetisyen.com/api/",
    apiBaseUrl: "http://localhost/dietician/api/",
    //apiPublicUrl: "https://api.klinikdiyetisyen.com/storage/"
    apiPublicUrl: "http://localhost/dietician/storage/"
  },
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  //target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [ {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no, minimal-ui"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    htmlAttrs: {
      lang: "tr"
    }
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [ {
      src: "~/plugins/vee-validate"
    },
    {
      src: "~/plugins/vuetify"
    },
    {
      src: "~/plugins/axios"
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [ "@nuxtjs/vuetify", "@nuxtjs/axios", "@nuxtjs/auth-next" ],
  /*
   ** Nuxt.js modules
   */
  modules: [ "nuxt-izitoast", "dropzone-nuxt" ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    transpile: [ "vee-validate/dist/rules", "vee-validate/dist/locale" ],
    splitChunks: {
      layouts: true
    },
    extend( config, ctx ) {
      config.resolve.symlinks = false;
    }
  },
  auth: {
    strategies: {
      user: {
        scheme: "refresh",
        token: {
          property: "user.api_token",
          required: true,
          type: "Bearer",
          maxAge: 1800
        },
        refreshToken: {
          property: "api_token",
          data: "api_token",
          type: "Bearer",
          maxAge: 1800
        },
        endpoints: {
          login: {
            url: "https://api.klinikdiyetisyen.com/api/users/login",
            method: "post"
          },
          refresh: {
            url: "https://api.klinikdiyetisyen.com/api/users/login",
            method: "post"
          },
          logout: {
            url: "https://api.klinikdiyetisyen.com/api/users/logout",
            method: "post"
          },
          user: {
            url: "https://api.klinikdiyetisyen.com/api/users/profile",
            method: "get",
            autoFetch: true
          }
        },
        autoLogout: true
      },
      dietician: {
        scheme: "refresh",
        token: {
          property: "user.api_token",
          required: true,
          type: "Bearer",
          maxAge: 1800
        },
        refreshToken: {
          property: "user.api_token",
          data: "user.api_token",
          type: "Bearer",
          maxAge: 1800
        },
        endpoints: {
          login: {
            url: "https://api.klinikdiyetisyen.com/api/dietician/login",
            method: "post"
          },
          refresh: {
            url: "https://api.klinikdiyetisyen.com/api/dietician/login",
            method: "post"
          },
          logout: {
            url: "https://api.klinikdiyetisyen.com/api/dietician/logout",
            method: "post"
          },
          user: {
            url: "https://api.klinikdiyetisyen.com/api/dietician/profile",
            method: "get",
            autoFetch: true
          }
        },
        autoLogout: true
      },
      admin: {
        scheme: "refresh",
        token: {
          property: "user.api_token",
          required: true,
          type: "Bearer",
          maxAge: 1800
        },
        refreshToken: {
          property: "user.api_token",
          data: "user",
          type: "Bearer",
          maxAge: 1800
        },
        endpoints: {
          login: {
            url: "https://api.klinikdiyetisyen.com/api/panel/login",
            method: "post"
          },
          refresh: {
            url: "https://api.klinikdiyetisyen.com/api/panel/login",
            method: "post"
          },
          logout: {
            url: "https://api.klinikdiyetisyen.com/api/panel/logout",
            method: "post"
          },
          user: {
            url: "https://api.klinikdiyetisyen.com/api/users/profile",
            method: "get",
            autoFetch: true
          }
        },
        autoLogout: true
      }
    }
  },
  hooks: {
    "vue-renderer:ssr:context"( context ) {
      const routePath = JSON.stringify( context.nuxt.routePath );
      context.nuxt = {
        serverRendered: true,
        routePath
      };
    }
  }
};
