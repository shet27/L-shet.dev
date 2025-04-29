import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Links",
    sites: [
      // {
      //   id: "my-blog",
      //   title: "Website",
      //   img: "https://zxh.me/img/avatar.jpg",
      //   link: "https://zxh.me/",
      //   inner: true
      // },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/shet27n"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/likith-shet/"
      },
      {
        id: "insta",
        title: "Instagram",
        img: "img/sites/instagram.svg",
        link: "https://www.instagram.com/mr._shet7/"
      },
      {
        id: "my-twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://twitter.com/ShetLikith"
      },
      {
        id: "my-email",
        title: "Gmail",
        img: "img/sites/gmail.svg",
        link: "mailto:shet.likith57@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },
      {
        id: "gmail",
        title: "Gmail",
        img: "img/sites/gmail.svg",
        link: "https://gmail.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "chatgpt",
        title: "ChatGPT",
        img: "img/sites/chatgpt.svg",
        link: "https://chat.openai.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "v2ex",
        title: "V2EX",
        img: "https://www.v2ex.com/apple-touch-icon.png",
        link: "https://www.v2ex.com/"
      },
      {
        id: "aideadline",
        title: "AI Deadlines",
        img: "https://aideadlin.es/static/img/favicon.png",
        link: "https://aideadlin.es/",
        inner: true
      },
      {
        id: "oh-my-cv",
        title: "OhMyCV",
        img: "https://ohmycv.app/apple-touch-icon.png",
        link: "https://ohmycv.app/"
      },
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      },
      {
        id: "svgomg",
        title: "SVGOMG",
        img: "https://jakearchibald.github.io/svgomg/imgs/icon.png",
        link: "https://jakearchibald.github.io/svgomg/"
      },
      {
        id: "tiny-png",
        title: "Tiny PNG",
        img: "https://tinypng.com/images/panda-chewing-2x.png",
        link: "https://tinypng.com/"
      }
    ]
  }
};

export default websites;
