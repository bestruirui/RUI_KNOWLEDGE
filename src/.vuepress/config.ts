import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "RUI",
      description: " ",
      head:[
        ['script', {type: "text/javascript", src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "231c610ae53045b8bd4774aaac7eeb96"}' }]
      ] 
      
    },
  },

  theme,

  shouldPrefetch: false,
  


  plugins: [
    searchProPlugin({
      indexContent:true,
    }),
    
    copyCodePlugin({
      showInMobile:true,
      selector:'.theme-hope-content div[class*="language-"] pre'
    }),
  ],
});

