/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import type { CreateFileRoute, FileRoutesByPath } from '@tanstack/react-router'

import { Route as rootRouteImport } from './routes/__root'
import { Route as MainRouteImport } from './routes/main'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'

const MainRoute = MainRouteImport.update({
  id: '/main',
  path: '/main',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/main': typeof MainRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/main': typeof MainRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/main': typeof MainRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/main'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/main'
  id: '__root__' | '/' | '/about' | '/main'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  MainRoute: typeof MainRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/main': {
      id: '/main'
      path: '/main'
      fullPath: '/main'
      preLoaderRoute: typeof MainRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

declare module './routes/index' {
  const createFileRoute: CreateFileRoute<
    '/',
    FileRoutesByPath['/']['parentRoute'],
    FileRoutesByPath['/']['id'],
    FileRoutesByPath['/']['path'],
    FileRoutesByPath['/']['fullPath']
  >
}
declare module './routes/about' {
  const createFileRoute: CreateFileRoute<
    '/about',
    FileRoutesByPath['/about']['parentRoute'],
    FileRoutesByPath['/about']['id'],
    FileRoutesByPath['/about']['path'],
    FileRoutesByPath['/about']['fullPath']
  >
}
declare module './routes/main' {
  const createFileRoute: CreateFileRoute<
    '/main',
    FileRoutesByPath['/main']['parentRoute'],
    FileRoutesByPath['/main']['id'],
    FileRoutesByPath['/main']['path'],
    FileRoutesByPath['/main']['fullPath']
  >
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  MainRoute: MainRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
