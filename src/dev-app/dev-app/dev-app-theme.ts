/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Injectable} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

const isDarkThemeKey = 'isDarkTheme';

@Injectable({providedIn: 'root'})
export class DevAppTheme {
  readonly darkThemeClass = 'demo-unicorn-dark-theme';
  private _elementToTheme: HTMLElement;
  private _isDark = false;

  constructor(private _overlayContainer: OverlayContainer) {
    const isDark = localStorage.getItem(isDarkThemeKey);
    if (isDark != null) {
      this._isDark = Boolean(isDark);
    }
  }

  get elementToTheme(): HTMLElement {
    return this._elementToTheme;
  }

  set elementToTheme(value: HTMLElement) {
    if (value != null) {
      this._elementToTheme = value;
      this.isDark ? this.applyDarkTheme() : this.applyLightTheme();
    }
  }

  get isDark(): boolean {
    return this._isDark;
  }

  set isDark(value: boolean) {
    if (value != null) {
      this._isDark = value;
      localStorage.setItem(isDarkThemeKey, String(value));
    }
  }

  toggleTheme() {
    this.isDark = !this._isDark;

    if (this._isDark) {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme();
    }
  }

  applyDarkTheme() {
    this.elementToTheme.classList.add(this.darkThemeClass);
    this._overlayContainer.getContainerElement().classList.add(this.darkThemeClass);
  }

  applyLightTheme() {
    this.elementToTheme.classList.remove(this.darkThemeClass);
    this._overlayContainer.getContainerElement().classList.remove(this.darkThemeClass);
  }
}
