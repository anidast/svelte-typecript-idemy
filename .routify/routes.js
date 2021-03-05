
/**
 * @roxi/routify 2.10.7
 * File generated Fri Mar 05 2021 12:56:21 GMT+0700 (Indochina Time)
 */

export const __version = "2.10.7"
export const __timestamp = "2021-03-05T05:56:21.080Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/:apiID/index",
          "id": "__apiID_index",
          "component": () => import('../src/pages/[apiID]/index.svelte').then(m => m.default)
        }
      ],
      "path": "/:apiID"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isPage": true,
          "path": "/course/:id",
          "id": "_course__id",
          "component": () => import('../src/pages/course/[id].svelte').then(m => m.default)
        }
      ],
      "path": "/course"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/landing/index",
          "id": "_landing_index",
          "component": () => import('../src/pages/landing/index.svelte').then(m => m.default)
        }
      ],
      "path": "/landing"
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

