import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { a1 as addAttribute, aZ as renderHead, aY as renderSlot, L as renderTemplate } from './sequence_CLdZWHrr.mjs';
import 'clsx';
import { css, LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

if (typeof document < "u" && !document.getElementById("tx-defaults")) {
  const r = document.createElement("style");
  r.id = "tx-defaults", r.textContent = `
    :root {
      /* ── Surface ── */
      --tx-bg: #F5F6FA;
      --tx-surface: #FFFFFF;
      --tx-surface-alt: #F8F9FC;

      /* ── Palette ── */
      --tx-accent: #F3B23A;
      --tx-accent-soft: rgba(243, 178, 58, 0.10);
      --tx-primary: #4A7CFF;
      --tx-primary-soft: rgba(74, 124, 255, 0.08);
      --tx-success: #22C55E;
      --tx-success-soft: rgba(34, 197, 94, 0.08);
      --tx-danger: #EF4444;
      --tx-danger-soft: rgba(239, 68, 68, 0.08);

      /* ── Text ── */
      --tx-text: #111827;
      --tx-text-secondary: #4B5563;
      --tx-text-muted: #9CA3AF;

      /* ── Border ── */
      --tx-border: #E5E7EB;
      --tx-border-focus: var(--tx-primary);

      /* ── Shadows ── */
      --tx-shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
      --tx-shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
      --tx-shadow-md: 0 4px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04);
      --tx-shadow-lg: 0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.03);
      --tx-shadow-xl: 0 20px 25px rgba(0,0,0,0.07), 0 8px 10px rgba(0,0,0,0.03);
      --tx-ring-focus: 0 0 0 3px var(--tx-primary-soft);

      /* ── Radius ── */
      --tx-radius-sm: 6px;
      --tx-radius: 8px;
      --tx-radius-lg: 12px;
      --tx-radius-xl: 16px;
      --tx-radius-pill: 999px;

      /* ── Spacing ── */
      --tx-space-1: 4px;
      --tx-space-2: 8px;
      --tx-space-3: 12px;
      --tx-space-4: 16px;
      --tx-space-5: 20px;
      --tx-space-6: 24px;
      --tx-space-8: 32px;
      --tx-space-10: 40px;
      --tx-space-12: 48px;
      --tx-space-16: 64px;

      /* ── Typography ── */
      --tx-text-xs: 0.75rem;
      --tx-text-sm: 0.875rem;
      --tx-text-base: 1rem;
      --tx-text-lg: 1.125rem;
      --tx-text-xl: 1.25rem;
      --tx-text-2xl: 1.5rem;
      --tx-text-3xl: 1.875rem;
      --tx-text-4xl: 2.25rem;

      /* ── Motion ── */
      --tx-transition: all 0.15s ease;
      --tx-transition-slow: all 0.25s ease;

      /* ── Font ── */
      --tx-font: 'Red Hat Text', system-ui, -apple-system, sans-serif;
      --tx-font-mono: 'Red Hat Mono', 'JetBrains Mono', monospace;
    }
  `, document.head.prepend(r);
}
const d = css`
  :host {
    font-family: var(--tx-font);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
var T = Object.defineProperty, M = Object.getOwnPropertyDescriptor, F = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? M(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && T(e, s, t), t;
};
let b = class extends LitElement {
  constructor() {
    super(...arguments), this.disabled = false, this.variant = "default", this.size = "md", this.pill = false, this.iconOnly = false;
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} part="button">
        <slot></slot>
      </button>
    `;
  }
};
b.styles = [
  d,
  css`
      :host {
        display: inline-block;
      }

      button {
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 8px 16px;
        background: var(--tx-surface);
        color: var(--tx-text);
        font-family: var(--tx-font);
        font-size: var(--tx-text-sm);
        font-weight: 500;
        border-radius: var(--tx-radius);
        border: 1px solid var(--tx-border);
        cursor: pointer;
        transition: var(--tx-transition);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        white-space: nowrap;
      }

      button:hover {
        background: var(--tx-surface-alt);
        border-color: #D1D5DB;
      }

      button:active {
        background: var(--tx-surface-alt);
      }

      button:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      button[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }

      :host([variant='primary']) button {
        background: var(--tx-primary);
        color: #fff;
        border-color: transparent;
        box-shadow: var(--tx-shadow-xs);
      }

      :host([variant='primary']) button:hover {
        filter: brightness(1.08);
        box-shadow: var(--tx-shadow-sm);
      }

      :host([variant='primary']) button:active {
        filter: brightness(0.95);
        box-shadow: none;
      }

      :host([variant='accent']) button {
        background: var(--tx-accent);
        color: #fff;
        border-color: transparent;
        box-shadow: var(--tx-shadow-xs);
      }

      :host([variant='accent']) button:hover {
        filter: brightness(1.08);
        box-shadow: var(--tx-shadow-sm);
      }

      :host([variant='accent']) button:active {
        filter: brightness(0.95);
        box-shadow: none;
      }

      :host([variant='ghost']) button {
        background: transparent;
        border-color: transparent;
        color: var(--tx-text-secondary);
      }

      :host([variant='ghost']) button:hover {
        background: var(--tx-surface-alt);
        color: var(--tx-text);
      }

      :host([size='sm']) button {
        padding: 5px 10px;
        font-size: var(--tx-text-xs);
        border-radius: var(--tx-radius-sm);
      }

      :host([size='lg']) button {
        padding: 12px 24px;
        font-size: var(--tx-text-base);
        border-radius: var(--tx-radius);
      }

      :host([pill]) button {
        border-radius: var(--tx-radius-pill);
      }

      :host([icon-only]) button {
        padding: 8px;
        border-radius: 50%;
        aspect-ratio: 1;
      }

      :host([icon-only][size='sm']) button {
        padding: 5px;
      }
    `
];
F([
  property({ type: Boolean, reflect: true })
], b.prototype, "disabled", 2);
F([
  property({ type: String, reflect: true })
], b.prototype, "variant", 2);
F([
  property({ type: String, reflect: true })
], b.prototype, "size", 2);
F([
  property({ type: Boolean, reflect: true })
], b.prototype, "pill", 2);
F([
  property({ type: Boolean, reflect: true, attribute: "icon-only" })
], b.prototype, "iconOnly", 2);
b = F([
  customElement("tx-button")
], b);
var H = Object.defineProperty, V = Object.getOwnPropertyDescriptor, m = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? V(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && H(e, s, t), t;
};
let h = class extends LitElement {
  constructor() {
    super(...arguments), this.label = "", this.name = "", this.placeholder = "", this.value = "", this.type = "text", this.search = false;
  }
  _handleInput(r) {
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("tx-input", { detail: { value: this.value }, bubbles: true, composed: true }));
  }
  render() {
    var r;
    return html`
      <div class="wrapper">
        ${this.label ? html`<label>${this.label}</label>` : ""}
        <div class="field">
          <input
            part="input"
            type=${this.search ? "search" : this.type}
            name=${this.name || ((r = this.label) == null ? void 0 : r.toLowerCase().replaceAll(/\s+/g, "-")) || "input"}
            .value=${this.value}
            placeholder=${this.placeholder}
            @input=${this._handleInput}
          />
        </div>
      </div>
    `;
  }
};
h.styles = [
  d,
  css`
      :host {
        display: block;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
        letter-spacing: 0.01em;
      }

      .field {
        position: relative;
        display: flex;
        align-items: center;
      }

      input {
        all: unset;
        width: 100%;
        padding: 8px 12px;
        background: var(--tx-surface);
        color: var(--tx-text);
        font-family: var(--tx-font);
        font-size: var(--tx-text-sm);
        border-radius: var(--tx-radius);
        border: 1px solid var(--tx-border);
        transition: var(--tx-transition);
      }

      input::placeholder {
        color: var(--tx-text-muted);
      }

      input:hover {
        border-color: #D1D5DB;
      }

      input:focus {
        border-color: var(--tx-border-focus);
        box-shadow: var(--tx-ring-focus);
      }

      :host([search]) .field::before {
        content: '';
        position: absolute;
        left: 12px;
        width: 13px;
        height: 13px;
        border: 2px solid var(--tx-text-muted);
        border-radius: 50%;
        pointer-events: none;
      }

      :host([search]) .field::after {
        content: '';
        position: absolute;
        left: 23px;
        top: calc(50% + 4px);
        width: 2px;
        height: 5px;
        background: var(--tx-text-muted);
        transform: rotate(-45deg);
        pointer-events: none;
      }

      :host([search]) input {
        padding-left: 36px;
      }
    `
];
m([
  property({ type: String })
], h.prototype, "label", 2);
m([
  property({ type: String })
], h.prototype, "name", 2);
m([
  property({ type: String })
], h.prototype, "placeholder", 2);
m([
  property({ type: String })
], h.prototype, "value", 2);
m([
  property({ type: String })
], h.prototype, "type", 2);
m([
  property({ type: Boolean, reflect: true })
], h.prototype, "search", 2);
h = m([
  customElement("tx-input")
], h);
var I = Object.defineProperty, N = Object.getOwnPropertyDescriptor, j = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? N(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && I(e, s, t), t;
};
let z = class extends LitElement {
  constructor() {
    super(...arguments), this.checked = false, this.label = "";
  }
  _toggle() {
    this.checked = !this.checked, this.dispatchEvent(new CustomEvent("tx-change", { detail: { checked: this.checked }, bubbles: true, composed: true }));
  }
  render() {
    return html`
      <div
        class="track"
        role="switch"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${(r) => {
      (r.key === " " || r.key === "Enter") && (r.preventDefault(), this._toggle());
    }}
      >
        <div class="thumb"></div>
      </div>
      ${this.label ? html`<span class="label" @click=${this._toggle}>${this.label}</span>` : ""}
    `;
  }
};
z.styles = [
  d,
  css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .track {
        position: relative;
        width: 40px;
        height: 22px;
        background: #D1D5DB;
        border-radius: var(--tx-radius-pill);
        cursor: pointer;
        transition: var(--tx-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .track {
        background: var(--tx-primary);
      }

      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #fff;
        box-shadow: var(--tx-shadow-xs);
        transition: var(--tx-transition);
      }

      :host([checked]) .thumb {
        left: 20px;
      }

      .track:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      .label {
        font-size: var(--tx-text-sm);
        font-weight: 500;
        color: var(--tx-text);
        user-select: none;
        cursor: pointer;
      }
    `
];
j([
  property({ type: Boolean, reflect: true })
], z.prototype, "checked", 2);
j([
  property({ type: String })
], z.prototype, "label", 2);
z = j([
  customElement("tx-toggle")
], z);
var R = Object.defineProperty, L = Object.getOwnPropertyDescriptor, E = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? L(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && R(e, s, t), t;
};
let D = class extends LitElement {
  constructor() {
    super(...arguments), this.checked = false, this.label = "";
  }
  _toggle() {
    this.checked = !this.checked, this.dispatchEvent(new CustomEvent("tx-change", { detail: { checked: this.checked }, bubbles: true, composed: true }));
  }
  render() {
    return html`
      <div
        class="box"
        role="checkbox"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${(r) => {
      (r.key === " " || r.key === "Enter") && (r.preventDefault(), this._toggle());
    }}
      >
        <span class="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 12 10 18 20 6"></polyline>
          </svg>
        </span>
      </div>
      ${this.label ? html`<span class="label" @click=${this._toggle}>${this.label}</span>` : ""}
    `;
  }
};
D.styles = [
  d,
  css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .box {
        position: relative;
        width: 18px;
        height: 18px;
        background: var(--tx-surface);
        border-radius: 4px;
        border: 1.5px solid #D1D5DB;
        cursor: pointer;
        transition: var(--tx-transition);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .box {
        background: var(--tx-primary);
        border-color: var(--tx-primary);
      }

      .checkmark {
        width: 12px;
        height: 12px;
        opacity: 0;
        transform: scale(0.5);
        transition: var(--tx-transition);
      }

      .checkmark svg {
        width: 100%;
        height: 100%;
      }

      :host([checked]) .checkmark {
        opacity: 1;
        transform: scale(1);
      }

      .box:hover {
        border-color: var(--tx-primary);
      }

      .box:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      .label {
        font-size: var(--tx-text-sm);
        font-weight: 500;
        color: var(--tx-text);
        user-select: none;
        cursor: pointer;
      }
    `
];
E([
  property({ type: Boolean, reflect: true })
], D.prototype, "checked", 2);
E([
  property({ type: String })
], D.prototype, "label", 2);
D = E([
  customElement("tx-checkbox")
], D);
var Y = Object.defineProperty, q = Object.getOwnPropertyDescriptor, y = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? q(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && Y(e, s, t), t;
};
let u = class extends LitElement {
  constructor() {
    super(...arguments), this.value = 50, this.min = 0, this.max = 100, this.step = 1, this.label = "", this.showValue = false;
  }
  _renderHeader() {
    if (!this.label && !this.showValue) return "";
    const r = this.label ? html`<label>${this.label}</label>` : html`<span></span>`, e = this.showValue ? html`<span class="value-display">${this.value}</span>` : "";
    return html`<div class="header">${r}${e}</div>`;
  }
  _handleInput(r) {
    this.value = Number(r.target.value), this.dispatchEvent(new CustomEvent("tx-input", { detail: { value: this.value }, bubbles: true, composed: true }));
  }
  render() {
    return html`
      <div class="wrapper">
        ${this._renderHeader()}
        <div class="track-container">
          <input
            part="input"
            type="range"
            .value=${String(this.value)}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            @input=${this._handleInput}
          />
        </div>
      </div>
    `;
  }
};
u.styles = [
  d,
  css`
      :host {
        display: block;
        width: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
      }

      .value-display {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text);
        font-variant-numeric: tabular-nums;
      }

      .track-container {
        position: relative;
        height: 32px;
        display: flex;
        align-items: center;
      }

      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        background: var(--tx-border);
        border-radius: var(--tx-radius-pill);
        outline: none;
        cursor: pointer;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--tx-surface);
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary);
        cursor: grab;
        transition: var(--tx-transition);
      }

      input[type='range']::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--tx-surface);
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary);
        border: none;
        cursor: grab;
        transition: var(--tx-transition);
      }

      input[type='range']:active::-webkit-slider-thumb {
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary), var(--tx-ring-focus);
        cursor: grabbing;
      }

      input[type='range']:active::-moz-range-thumb {
        box-shadow: var(--tx-shadow-sm), 0 0 0 2px var(--tx-primary), var(--tx-ring-focus);
        cursor: grabbing;
      }

      input[type='range']:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 4px;
        border-radius: var(--tx-radius-pill);
      }
    `
];
y([
  property({ type: Number })
], u.prototype, "value", 2);
y([
  property({ type: Number })
], u.prototype, "min", 2);
y([
  property({ type: Number })
], u.prototype, "max", 2);
y([
  property({ type: Number })
], u.prototype, "step", 2);
y([
  property({ type: String })
], u.prototype, "label", 2);
y([
  property({ type: Boolean, attribute: "show-value" })
], u.prototype, "showValue", 2);
u = y([
  customElement("tx-slider")
], u);
var J = Object.defineProperty, U = Object.getOwnPropertyDescriptor, P = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? U(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && J(e, s, t), t;
};
let f = class extends LitElement {
  constructor() {
    super(...arguments), this.interactive = false, this.flat = false, this.compact = false, this.accent = "", this._hasHeader = false, this._hasFooter = false;
  }
  _checkSlot(r) {
    const e = r.target, s = e.name, a = e.assignedNodes({ flatten: true }).length > 0;
    s === "header" && (this._hasHeader = a), s === "footer" && (this._hasFooter = a), this.requestUpdate();
  }
  render() {
    return html`
      <div class="card" part="card">
        <div class="card-header" ?hidden=${!this._hasHeader}>
          <slot name="header" @slotchange=${this._checkSlot}></slot>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer" ?hidden=${!this._hasFooter}>
          <slot name="footer" @slotchange=${this._checkSlot}></slot>
        </div>
      </div>
    `;
  }
};
f.styles = [
  d,
  css`
      :host {
        display: block;
      }

      .card {
        position: relative;
        background: var(--tx-surface);
        border-radius: var(--tx-radius-lg);
        border: 1px solid var(--tx-border);
        box-shadow: var(--tx-shadow-sm);
        padding: 20px;
        transition: var(--tx-transition);
        overflow: hidden;
      }

      :host([accent]) .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--_accent-color, var(--tx-accent));
      }

      :host([accent='primary']) .card::before { --_accent-color: var(--tx-primary); }
      :host([accent='success']) .card::before { --_accent-color: var(--tx-success); }
      :host([accent='danger']) .card::before  { --_accent-color: var(--tx-danger); }
      :host([accent='accent']) .card::before  { --_accent-color: var(--tx-accent); }

      :host([interactive]) .card {
        cursor: pointer;
      }

      :host([interactive]) .card:hover {
        box-shadow: var(--tx-shadow-md);
        transform: translateY(-1px);
      }

      :host([interactive]) .card:active {
        box-shadow: var(--tx-shadow-xs);
        transform: translateY(0);
      }

      .card-header {
        margin-bottom: 12px;
      }

      .card-header ::slotted(*) {
        margin: 0;
        font-weight: 600;
        font-size: var(--tx-text-sm);
        color: var(--tx-text);
      }

      .card-body {
        color: var(--tx-text-secondary);
        font-size: var(--tx-text-sm);
        line-height: 1.6;
      }

      .card-footer {
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid var(--tx-border);
        display: flex;
        gap: 8px;
        align-items: center;
      }

      :host([flat]) .card {
        background: var(--tx-surface-alt);
        box-shadow: none;
        border-color: transparent;
      }

      :host([compact]) .card {
        padding: 14px;
      }
    `
];
P([
  property({ type: Boolean, reflect: true })
], f.prototype, "interactive", 2);
P([
  property({ type: Boolean, reflect: true })
], f.prototype, "flat", 2);
P([
  property({ type: Boolean, reflect: true })
], f.prototype, "compact", 2);
P([
  property({ type: String, reflect: true })
], f.prototype, "accent", 2);
f = P([
  customElement("tx-card")
], f);
var G = Object.defineProperty, K = Object.getOwnPropertyDescriptor, B = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? K(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && G(e, s, t), t;
};
let _ = class extends LitElement {
  constructor() {
    super(...arguments), this.color = "default", this.dot = false, this.size = "md";
  }
  render() {
    return html`
      <span class="badge" part="badge">
        ${this.dot ? html`<span class="dot"></span>` : ""}
        <slot></slot>
      </span>
    `;
  }
};
_.styles = [
  d,
  css`
      :host {
        display: inline-flex;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 2px 8px;
        font-family: var(--tx-font);
        font-size: var(--tx-text-xs);
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        border-radius: var(--tx-radius-pill);
        white-space: nowrap;
        line-height: 1.6;
        background: var(--tx-surface-alt);
        color: var(--tx-text-secondary);
        border: 1px solid var(--tx-border);
      }

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
        flex-shrink: 0;
      }

      :host([color='primary']) .badge { background: var(--tx-primary-soft); color: #3B63CC; border-color: transparent; }
      :host([color='accent']) .badge  { background: var(--tx-accent-soft); color: #B8891E; border-color: transparent; }
      :host([color='success']) .badge { background: var(--tx-success-soft); color: #16803C; border-color: transparent; }
      :host([color='danger']) .badge  { background: var(--tx-danger-soft); color: #DC2626; border-color: transparent; }

      :host([size='lg']) .badge {
        padding: 3px 12px;
        font-size: 0.78rem;
      }
    `
];
B([
  property({ type: String, reflect: true })
], _.prototype, "color", 2);
B([
  property({ type: Boolean })
], _.prototype, "dot", 2);
B([
  property({ type: String, reflect: true })
], _.prototype, "size", 2);
_ = B([
  customElement("tx-badge")
], _);
var Q = Object.defineProperty, W = Object.getOwnPropertyDescriptor, O = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? W(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && Q(e, s, t), t;
};
let g = class extends LitElement {
  constructor() {
    super(...arguments), this.src = "", this.initials = "", this.status = "", this.size = "md";
  }
  render() {
    return html`
      <div class="avatar" part="avatar">
        ${this.src ? html`<img src=${this.src} alt=${this.initials || "avatar"} />` : html`${this.initials || ""}`}
      </div>
      ${this.status ? html`<span class="status"></span>` : ""}
    `;
  }
};
g.styles = [
  d,
  css`
      :host {
        display: inline-flex;
        position: relative;
      }

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--tx-primary-soft);
        color: var(--tx-primary);
        font-family: var(--tx-font);
        font-size: var(--tx-text-xs);
        font-weight: 700;
        overflow: hidden;
        border: 2px solid var(--tx-surface);
        box-shadow: var(--tx-shadow-xs);
        user-select: none;
      }

      .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      :host([size='sm']) .avatar { width: 28px; height: 28px; font-size: 0.65rem; }
      :host([size='lg']) .avatar { width: 44px; height: 44px; font-size: var(--tx-text-sm); }
      :host([size='xl']) .avatar { width: 56px; height: 56px; font-size: var(--tx-text-base); }

      .status {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid var(--tx-surface);
        background: #D1D5DB;
      }

      :host([size='sm']) .status { width: 8px; height: 8px; }
      :host([size='lg']) .status, :host([size='xl']) .status { width: 12px; height: 12px; }

      :host([status='online']) .status  { background: var(--tx-success); }
      :host([status='busy']) .status    { background: var(--tx-danger); }
      :host([status='away']) .status    { background: var(--tx-accent); }
      :host([status='offline']) .status { background: #D1D5DB; }
    `
];
O([
  property({ type: String })
], g.prototype, "src", 2);
O([
  property({ type: String })
], g.prototype, "initials", 2);
O([
  property({ type: String, reflect: true })
], g.prototype, "status", 2);
O([
  property({ type: String, reflect: true })
], g.prototype, "size", 2);
g = O([
  customElement("tx-avatar")
], g);
var X = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, w = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? Z(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && X(e, s, t), t;
};
let v = class extends LitElement {
  constructor() {
    super(...arguments), this.value = 0, this.max = 100, this.label = "", this.showValue = false, this.color = "primary", this.size = "md";
  }
  get _percent() {
    return Math.min(100, Math.max(0, this.value / this.max * 100));
  }
  render() {
    const r = this.label || this.showValue;
    return html`
      <div class="wrapper">
        ${r ? html`
          <div class="header">
            <span class="label">${this.label}</span>
            ${this.showValue ? html`<span class="value">${Math.round(this._percent)}%</span>` : ""}
          </div>
        ` : ""}
        <div class="track" role="progressbar" aria-valuenow=${this.value} aria-valuemin="0" aria-valuemax=${this.max}>
          <div class="fill" style="width: ${this._percent}%"></div>
        </div>
      </div>
    `;
  }
};
v.styles = [
  d,
  css`
      :host {
        display: block;
        width: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
      }

      .value {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text);
        font-variant-numeric: tabular-nums;
      }

      .track {
        width: 100%;
        height: 6px;
        background: var(--tx-surface-alt);
        border-radius: var(--tx-radius-pill);
        overflow: hidden;
        border: 1px solid var(--tx-border);
      }

      .fill {
        height: 100%;
        border-radius: var(--tx-radius-pill);
        background: var(--tx-primary);
        transition: width 0.4s ease;
        min-width: 0;
      }

      :host([color='accent']) .fill  { background: var(--tx-accent); }
      :host([color='success']) .fill { background: var(--tx-success); }
      :host([color='danger']) .fill  { background: var(--tx-danger); }

      :host([size='sm']) .track { height: 4px; }
      :host([size='lg']) .track { height: 8px; }
    `
];
w([
  property({ type: Number })
], v.prototype, "value", 2);
w([
  property({ type: Number })
], v.prototype, "max", 2);
w([
  property({ type: String })
], v.prototype, "label", 2);
w([
  property({ type: Boolean, attribute: "show-value" })
], v.prototype, "showValue", 2);
w([
  property({ type: String, reflect: true })
], v.prototype, "color", 2);
w([
  property({ type: String, reflect: true })
], v.prototype, "size", 2);
v = w([
  customElement("tx-progress")
], v);
var tt = Object.defineProperty, et = Object.getOwnPropertyDescriptor, C = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? et(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && tt(e, s, t), t;
};
let $ = class extends LitElement {
  constructor() {
    super(...arguments), this.color = "default", this.removable = false, this.size = "md";
  }
  _remove() {
    this.dispatchEvent(new CustomEvent("tx-remove", { bubbles: true, composed: true }));
  }
  render() {
    return html`
      <span class="tag" part="tag">
        <slot></slot>
        ${this.removable ? html`
          <button class="close" @click=${this._remove} aria-label="Remove">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        ` : ""}
      </span>
    `;
  }
};
$.styles = [
  d,
  css`
      :host {
        display: inline-flex;
      }

      .tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        font-family: var(--tx-font);
        font-size: var(--tx-text-xs);
        font-weight: 500;
        border-radius: var(--tx-radius-sm);
        background: var(--tx-surface);
        color: var(--tx-text);
        border: 1px solid var(--tx-border);
        transition: var(--tx-transition);
        white-space: nowrap;
      }

      :host([color='primary']) .tag { background: var(--tx-primary-soft); color: #3B63CC; border-color: transparent; }
      :host([color='accent']) .tag  { background: var(--tx-accent-soft); color: #B8891E; border-color: transparent; }
      :host([color='success']) .tag { background: var(--tx-success-soft); color: #16803C; border-color: transparent; }
      :host([color='danger']) .tag  { background: var(--tx-danger-soft); color: #DC2626; border-color: transparent; }

      .close {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        font-size: 0.65rem;
        line-height: 1;
        color: currentColor;
        opacity: 0.5;
        transition: var(--tx-transition);
      }

      .close:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.06);
      }

      .close svg {
        width: 10px;
        height: 10px;
      }

      :host([size='sm']) .tag {
        padding: 2px 6px;
        font-size: 0.7rem;
      }
    `
];
C([
  property({ type: String, reflect: true })
], $.prototype, "color", 2);
C([
  property({ type: Boolean })
], $.prototype, "removable", 2);
C([
  property({ type: String, reflect: true })
], $.prototype, "size", 2);
$ = C([
  customElement("tx-tag")
], $);
var rt = Object.defineProperty, at = Object.getOwnPropertyDescriptor, S = (r, e, s, a) => {
  for (var t = a > 1 ? void 0 : a ? at(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (a ? n(e, s, t) : n(t)) || t);
  return a && t && rt(e, s, t), t;
};
let k = class extends LitElement {
  constructor() {
    super(...arguments), this.label = "", this.vertical = false, this.spacing = "none";
  }
  render() {
    return html`
      <div class="divider" role="separator" part="divider">
        <div class="line"></div>
        ${this.label ? html`<span class="label">${this.label}</span><div class="line"></div>` : ""}
      </div>
    `;
  }
};
k.styles = [
  d,
  css`
      :host {
        display: block;
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .line {
        flex: 1;
        height: 1px;
        background: var(--tx-border);
      }

      .label {
        font-size: var(--tx-text-xs);
        font-weight: 500;
        color: var(--tx-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        white-space: nowrap;
      }

      :host([vertical]) {
        display: inline-flex;
        height: 100%;
        align-self: stretch;
      }

      :host([vertical]) .divider {
        flex-direction: column;
        height: 100%;
        min-height: 20px;
      }

      :host([vertical]) .line {
        width: 1px;
        height: auto;
        flex: 1;
      }

      :host([spacing='sm']) { margin: 8px 0; }
      :host([spacing='md']) { margin: 16px 0; }
      :host([spacing='lg']) { margin: 28px 0; }
    `
];
S([
  property({ type: String })
], k.prototype, "label", 2);
S([
  property({ type: Boolean, reflect: true })
], k.prototype, "vertical", 2);
S([
  property({ type: String, reflect: true })
], k.prototype, "spacing", 2);
k = S([
  customElement("tx-divider")
], k);

const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const { title = "Blog" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/denair/testing/blog/src/layouts/Base.astro", void 0);

export { $$Base as $ };
