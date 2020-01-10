// CachedImage: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './cached-image.core.js';
import {
  CachedImage
} from './cached-image.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    CachedImage
  ], opts);
}