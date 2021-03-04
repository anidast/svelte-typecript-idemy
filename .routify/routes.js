
/**
 * @roxi/routify 2.10.7
 * File generated Mon Mar 01 2021 09:39:02 GMT+0700 (Indochina Time)
 */

export const __version = "2.10.7"
export const __timestamp = "2021-03-01T02:39:02.768Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": false,
      "isDir": true,
      "file": "[apiID]",
      "filepath": "/[apiID]",
      "name": "[apiID]",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/ASUS/Documents/aegis/idemy/svelte-typescript-idemy/src/pages/[apiID]",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/[apiID]/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ASUS/Documents/aegis/idemy/svelte-typescript-idemy/src/pages/[apiID]/index.svelte",
          "importPath": "../src/pages/[apiID]/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/:apiID/index",
          "id": "__apiID_index",
          "component": () => import('../src/pages/[apiID]/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/:apiID"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "course",
      "filepath": "/course",
      "name": "course",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/ASUS/Documents/aegis/idemy/svelte-typescript-idemy/src/pages/course",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[id].svelte",
          "filepath": "/course/[id].svelte",
          "name": "[id]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ASUS/Documents/aegis/idemy/svelte-typescript-idemy/src/pages/course/[id].svelte",
          "importPath": "../src/pages/course/[id].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/course/:id",
          "id": "_course__id",
          "component": () => import('../src/pages/course/[id].svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/course"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "landing",
      "filepath": "/landing",
      "name": "landing",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/ASUS/Documents/aegis/idemy/svelte-typescript-idemy/src/pages/landing",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/landing/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ASUS/Documents/aegis/idemy/svelte-typescript-idemy/src/pages/landing/index.svelte",
          "importPath": "../src/pages/landing/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/landing/index",
          "id": "_landing_index",
          "component": () => import('../src/pages/landing/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/landing"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)
