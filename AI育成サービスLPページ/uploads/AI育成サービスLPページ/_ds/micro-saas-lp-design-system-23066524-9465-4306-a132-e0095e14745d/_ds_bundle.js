/* @ds-bundle: {"format":3,"namespace":"MicroSaaSLPDesignSystem_230665","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"}],"sourceHashes":{"components/core/Button.jsx":"63ba8060d72e","components/core/Card.jsx":"016c6eb6aa24","components/core/Input.jsx":"50eedaf09f4a","components/core/Tag.jsx":"c2d0f53eb73d","components/data/Stat.jsx":"3cf49b8542b8","components/feedback/Accordion.jsx":"21365d2450d1","ui_kits/microsaas-lp/Hero.jsx":"b0ecf36a8789","ui_kits/microsaas-lp/Nav.jsx":"6cac539fe48e","ui_kits/microsaas-lp/ProductMockup.jsx":"eebde56f5eb2","ui_kits/microsaas-lp/SectionsA.jsx":"486518c3ec3d","ui_kits/microsaas-lp/SectionsB.jsx":"d7df60c5d942","ui_kits/microsaas-lp/copy.jsx":"0e4ebcc9a084","ui_kits/microsaas-lp/helpers.jsx":"3743587a198e","ui_kits/microsaas-lp/image-slot.js":"9309434cb09c","ui_kits/microsaas-lp/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MicroSaaSLPDesignSystem_230665 = window.MicroSaaSLPDesignSystem_230665 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action primitive.
 * Sharp-cornered, premium, calm. Variants: solid (dark ink),
 * inverse (for dark surfaces), outline, ghost, link.
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.5rem 0.95rem',
      font: 'var(--text-body-s)'
    },
    md: {
      padding: '0.7rem 1.4rem',
      font: 'var(--text-body-m)'
    },
    lg: {
      padding: '0.95rem 1.9rem',
      font: 'var(--text-body-l)'
    }
  };
  const variants = {
    solid: {
      background: 'var(--action-solid)',
      color: 'var(--action-on-solid)',
      border: '1px solid var(--action-solid)'
    },
    inverse: {
      background: 'var(--action-inverse)',
      color: 'var(--action-on-inverse)',
      border: '1px solid var(--action-inverse)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    link: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
      padding: 0,
      textDecoration: 'none',
      borderBottom: '1px solid currentColor',
      borderRadius: 0
    }
  };
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.solid;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.55rem',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: sz.font,
      lineHeight: 1,
      letterSpacing: '0.01em',
      padding: variant === 'link' ? 0 : sz.padding,
      borderRadius: variant === 'link' ? 0 : 'var(--radius-md)',
      width: fullWidth ? '100%' : 'auto',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...vr,
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'solid') e.currentTarget.style.background = 'var(--action-solid-hover)';
      if (variant === 'outline') e.currentTarget.style.background = 'var(--surface-alt)';
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-alt)';
      if (variant === 'inverse') e.currentTarget.style.background = 'var(--stone-200)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = vr.background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — squared surface container with hairline border + soft shadow.
 * variant: 'default' (raised white) | 'flat' (alt fill, no shadow) |
 *          'dark' (ink surface) | 'outline' (border only).
 * hover: lift slightly on hover when interactive.
 */
function Card({
  children,
  variant = 'default',
  interactive = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--text-primary)'
    },
    flat: {
      background: 'var(--surface-alt)',
      border: '1px solid transparent',
      boxShadow: 'none',
      color: 'var(--text-primary)'
    },
    dark: {
      background: 'var(--surface-inverse)',
      border: '1px solid var(--border-on-dark)',
      boxShadow: 'var(--shadow-on-dark)',
      color: 'var(--text-on-dark)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none',
      color: 'var(--text-primary)'
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-md)',
      padding,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = variant === 'dark' ? 'var(--shadow-on-dark)' : 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = v.boxShadow;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label. Squared, hairline border,
 * focus ring uses ink (not blue). on dark surfaces set onDark.
 */
function Input({
  label,
  hint,
  id,
  onDark = false,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const labelColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)';
  const border = onDark ? 'var(--border-on-dark-strong)' : 'var(--border-strong)';
  const bg = onDark ? 'rgba(255,255,255,0.04)' : 'var(--surface-raised)';
  const color = onDark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-m)',
      color,
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      padding: '0.7rem 0.9rem',
      outline: 'none',
      width: '100%',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = onDark ? 'var(--stone-100)' : 'var(--stone-900)';
      e.currentTarget.style.boxShadow = onDark ? '0 0 0 3px rgba(255,255,255,0.08)' : '0 0 0 3px rgba(20,19,18,0.06)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = border;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-s)',
      color: onDark ? 'var(--text-on-dark-faint)' : 'var(--text-tertiary)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small categorical label / chip. Squared by default.
 * tone: 'neutral' | 'accent' | 'dark' | 'outline'.
 */
function Tag({
  children,
  tone = 'neutral',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-alt)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'transparent',
      color: 'var(--accent-600)',
      border: '1px solid var(--accent-300)'
    },
    dark: {
      background: 'var(--fill-strong)',
      color: 'var(--on-fill-strong)',
      border: '1px solid var(--fill-strong)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-strong)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '0.4rem 0.6rem',
      borderRadius: 'var(--radius-xs)',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
/**
 * Stat — a large display metric with a label. Used in proof bars.
 * value (e.g. "99.9%"), label, and optional onDark styling.
 */
function Stat({
  value,
  label,
  onDark = false,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-m)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1,
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-tertiary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * Accordion — collapsible FAQ list. Hairline rows, sharp corners,
 * mono + sign that rotates. Pass items = [{q, a}]. allowMultiple
 * lets several stay open.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  style = {}
}) {
  const [open, setOpen] = React.useState([]);
  const toggle = i => {
    setOpen(prev => {
      if (prev.includes(i)) return prev.filter(x => x !== i);
      return allowMultiple ? [...prev, i] : [i];
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '1.4rem 0.25rem',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--text-heading-s)',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        textWrap: 'balance'
      }
    }, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.25rem',
        lineHeight: 1,
        color: 'var(--text-tertiary)',
        transition: 'transform var(--dur-base) var(--ease-out)',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        flexShrink: 0
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: isOpen ? '320px' : '0',
        opacity: isOpen ? 1 : 0,
        transition: 'max-height var(--dur-slow) var(--ease-in-out), opacity var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        padding: '0 2.5rem 1.5rem 0.25rem',
        color: 'var(--text-secondary)',
        fontSize: 'var(--text-body-m)',
        lineHeight: 'var(--leading-relaxed)'
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/Hero.jsx
try { (() => {
/* Hero — multiple main-visual layouts, switchable via the `layout` prop (Tweaks).
   Patterns (inspired by bold JP corporate/recruit sites — original compositions):
     'fullbleed'   … image fills behind centered title + scrim (background behind title)
     'overlay'     … image fills, title anchored bottom-left, editorial
     'split-right' … title left on page surface, image panel right (image to the side)
     'split-left'  … image panel left, title right
   In every layout the image lives in ONE #hero-visual slot so a dropped image persists.
   Terminal mode shows NO photographic image — the green phosphor band / CRT mockup
   stands in (.lp-img-only hidden, .lp-term-only shown). */

function HeroText({
  t,
  onDark,
  align = 'center'
}) {
  const {
    Button,
    Icon,
    Reveal
  } = window;
  const items = align === 'center' ? 'center' : 'flex-start';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: items,
      textAlign: align,
      gap: '1.5rem',
      maxWidth: align === 'center' ? 880 : 560,
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-tertiary)'
    }
  }, t.eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-xl)',
      fontWeight: 'var(--weight-light)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      whiteSpace: 'pre-line',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-primary)'
    }
  }, t.title)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-l)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 560
    }
  }, t.sub)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.85rem',
      flexWrap: 'wrap',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      marginTop: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: onDark ? 'inverse' : 'solid',
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, t.ctaPrimary), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 15
    }),
    style: onDark ? {
      color: 'var(--text-on-dark)',
      borderColor: 'var(--border-on-dark-strong)'
    } : {}
  }, t.ctaSecondary))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 280
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: '.06em',
      color: onDark ? 'var(--text-on-dark-faint)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "var(--positive)"
  }), t.note)));
}

/* The reusable image surface (background fill OR side panel). */
function HeroImage({
  mode
}) {
  const {
    ProductMockup
  } = window;
  const isPanel = mode === 'panel';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "lp-img-only",
    style: isPanel ? {
      position: 'relative',
      width: '100%'
    } : {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-visual",
    src: "../../assets/dummy-hero.png",
    shape: isPanel ? 'rounded' : 'rect',
    radius: isPanel ? '4' : '0',
    fit: "cover",
    placeholder: "Drop a hero image",
    style: isPanel ? {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: 'clamp(360px, 60vh, 620px)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-subtle)'
    } : {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }), !isPanel && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(120% 90% at 50% 42%, rgba(8,8,7,0.30) 0%, rgba(8,8,7,0.58) 70%, rgba(8,8,7,0.74) 100%),' + 'linear-gradient(180deg, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.20) 28%, rgba(8,8,7,0.30) 70%, var(--surface-page) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "lp-term-only",
    style: isPanel ? {
      width: '100%'
    } : {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(120% 90% at 50% 40%, rgba(77,255,122,0.05), transparent 60%)'
    }
  }, isPanel && /*#__PURE__*/React.createElement(ProductMockup, null)));
}
function Hero({
  t,
  layout = 'fullbleed'
}) {
  const {
    Container
  } = window;
  const isSplit = layout === 'split-right' || layout === 'split-left';
  const isOverlay = layout === 'overlay';

  /* SPLIT — text on page surface beside an image panel. */
  if (isSplit) {
    const imageFirst = layout === 'split-left';
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      "data-hero": true,
      "data-hero-split": true,
      style: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(4rem, 9vh, 7rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)'
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      className: "lp-hero-split",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(2rem, 5vw, 5rem)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        order: imageFirst ? 2 : 1
      }
    }, /*#__PURE__*/React.createElement(HeroText, {
      t: t,
      onDark: false,
      align: "left"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        order: imageFirst ? 1 : 2
      }
    }, /*#__PURE__*/React.createElement(HeroImage, {
      mode: "panel"
    })))));
  }

  /* FULL-BLEED / OVERLAY — image fills, light text over scrim. */
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    "data-hero": true,
    style: {
      position: 'relative',
      minHeight: 'clamp(560px, 88vh, 940px)',
      display: 'flex',
      alignItems: isOverlay ? 'flex-end' : 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: -72,
      paddingTop: 72,
      paddingBottom: isOverlay ? 'clamp(3rem, 8vh, 6rem)' : 0
    }
  }, /*#__PURE__*/React.createElement(HeroImage, {
    mode: "fill"
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(HeroText, {
    t: t,
    onDark: true,
    align: isOverlay ? 'left' : 'center'
  })));
}
Object.assign(window, {
  Hero,
  HeroText,
  HeroImage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/Nav.jsx
try { (() => {
/* Nav — sticky header. Inline logo, anchor links, JP/EN toggle,
   light/dark/terminal theme toggle, sign-in, CTA.
   Transparent over the cinematic hero (light contents), then gains a
   blurred scrim + hairline once scrolled (theme contents).
   Collapses to a hamburger sheet on tablet / phone. */

function ThemeToggle({
  theme,
  setTheme,
  compact = false,
  onDark = false
}) {
  const {
    Icon
  } = window;
  const opts = [['light', 'sun', 'Light'], ['dark', 'moon', 'Dark'], ['terminal', 'square-terminal', 'Terminal']];
  const borderC = onDark ? 'var(--border-on-dark-strong)' : 'var(--border-strong)';
  const idleC = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-tertiary)';
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Theme",
    style: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${borderC}`,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, opts.map(([key, icon, label]) => {
    const active = theme === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => setTheme(key),
      title: label,
      "aria-label": label,
      "aria-pressed": active,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: compact ? 32 : 34,
        height: compact ? 30 : 32,
        padding: 0,
        border: 'none',
        cursor: 'pointer',
        background: active ? onDark ? 'var(--text-on-dark)' : 'var(--action-solid)' : 'transparent',
        color: active ? onDark ? '#0a0a09' : 'var(--action-on-solid)' : idleC,
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15
    }));
  }));
}
function LangToggle({
  lang,
  setLang,
  onDark = false
}) {
  const borderC = onDark ? 'var(--border-on-dark-strong)' : 'var(--border-strong)';
  const idleC = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-tertiary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${borderC}`,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, ['ja', 'en'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    "aria-pressed": lang === l,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '0.4rem 0.6rem',
      border: 'none',
      cursor: 'pointer',
      lineHeight: 1,
      background: lang === l ? onDark ? 'var(--text-on-dark)' : 'var(--action-solid)' : 'transparent',
      color: lang === l ? onDark ? '#0a0a09' : 'var(--action-on-solid)' : idleC,
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, l === 'ja' ? '日本語' : 'EN')));
}
function Nav({
  t,
  lang,
  setLang,
  theme,
  setTheme,
  heroDark = true
}) {
  const {
    Button,
    Icon,
    Logo
  } = window;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Float light only when over a DARK full-bleed hero (not the split layout,
     whose top is the page surface). */
  const onHero = heroDark && !scrolled && !open;
  const textPrimary = onHero ? 'var(--text-on-dark)' : 'var(--text-primary)';
  const textSecondary = onHero ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)';
  const linkStyle = {
    fontSize: 'var(--text-body-m)',
    color: textSecondary,
    cursor: 'pointer',
    transition: 'color var(--dur-base) var(--ease-out)'
  };
  const links = [['#features', t.features], ['#pricing', t.pricing], ['#faq', t.faq]];
  const hover = e => e.currentTarget.style.color = textPrimary;
  const unhover = e => e.currentTarget.style.color = textSecondary;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled || open ? 'var(--nav-scrim)' : 'transparent',
      backdropFilter: scrolled || open ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled || open ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: scrolled || open ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      marginInline: 'auto',
      paddingInline: 'var(--gutter)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: () => setOpen(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      color: textPrimary,
      transition: 'color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '1.75rem',
      marginLeft: '1rem'
    },
    className: "lp-navlinks"
  }, links.map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: linkStyle,
    onMouseEnter: hover,
    onMouseLeave: unhover
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    className: "lp-desktop-cluster"
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    setTheme: setTheme,
    onDark: onHero
  }), /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    setLang: setLang,
    onDark: onHero
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      ...linkStyle,
      fontWeight: 500
    },
    onMouseEnter: hover,
    onMouseLeave: unhover
  }, t.signin), /*#__PURE__*/React.createElement(Button, {
    variant: onHero ? 'inverse' : 'solid',
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 15
    })
  }, t.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'none',
      alignItems: 'center',
      gap: '0.6rem'
    },
    className: "lp-mobile-cluster"
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    setTheme: setTheme,
    compact: true,
    onDark: onHero
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-label": "Menu",
    "aria-expanded": open,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 34,
      border: `1px solid ${open ? 'var(--border-strong)' : onHero ? 'var(--border-on-dark-strong)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      background: 'transparent',
      color: textPrimary,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lp-mobile-sheet",
    style: {
      display: 'none',
      overflow: 'hidden',
      maxHeight: open ? 420 : 0,
      opacity: open ? 1 : 0,
      transition: 'max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)',
      borderTop: open ? '1px solid var(--border-subtle)' : '1px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--gutter)',
      paddingBlock: '1.4rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem'
    }
  }, links.map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    onClick: () => setOpen(false),
    style: {
      fontSize: 'var(--text-heading-s)',
      color: 'var(--text-primary)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '0.2rem 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Language"), /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    setLang: setLang
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: () => setOpen(false),
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, t.signin), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "md",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 15
    })
  }, t.cta))));
}
Object.assign(window, {
  Nav,
  ThemeToggle,
  LangToggle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/ProductMockup.jsx
try { (() => {
/* ProductMockup — a clean, monochrome faux analytics dashboard for the hero/showcase.
   Pure CSS, no images. Premium, sharp-cornered. */

function ProductMockup({
  style = {}
}) {
  const bars = [38, 52, 44, 67, 58, 80, 72];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.85rem 1rem',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-tertiary)',
      letterSpacing: '.08em'
    }
  }, "app.cadence.io")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '128px 1fr',
      minHeight: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--border-subtle)',
      padding: '1rem 0.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      background: 'var(--surface-page)'
    }
  }, ['Overview', 'Analytics', 'Reports', 'Team', 'Settings'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.45rem 0.55rem',
      borderRadius: 'var(--radius-sm)',
      background: i === 1 ? 'var(--fill-strong)' : 'transparent',
      color: i === 1 ? 'var(--on-fill-strong)' : 'var(--text-secondary)',
      fontSize: 12,
      fontWeight: i === 1 ? 500 : 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 1,
      background: i === 1 ? 'var(--accent-400)' : 'var(--fill-muted)'
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.25rem 1.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      marginBottom: 6
    }
  }, "Monthly active"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 300,
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, "28,470")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--positive)'
    }
  }, "+12.4%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height: 130,
      padding: '0 2px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${h}%`,
      background: i === bars.length - 1 ? 'var(--fill-strong)' : 'var(--fill-muted)',
      borderRadius: '2px 2px 0 0',
      transition: 'height var(--dur-slow) var(--ease-out)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      color: 'var(--text-tertiary)'
    }
  }, d))))));
}
Object.assign(window, {
  ProductMockup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/ProductMockup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/SectionsA.jsx
try { (() => {
/* SectionsA — ProofBar (dark stats), Features grid, Showcase split. */

function ProofBar({
  t
}) {
  const {
    Container,
    Stat,
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      paddingBlock: 'clamp(2.5rem, 4vw, 3.5rem)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--text-on-dark-faint)'
    }
  }, t.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem'
    },
    className: "lp-proofgrid"
  }, t.stats.map(([v, l], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l,
    delay: i * 70,
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: v,
    label: l,
    onDark: true,
    align: "center"
  }))))));
}
function Features({
  t
}) {
  const {
    Container,
    Card,
    Icon,
    Reveal,
    SectionEyebrow
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 620,
      marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    index: "01"
  }, t.eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-m)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-snug)',
      marginBottom: '0.9rem'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, t.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.25rem'
    },
    className: "lp-featgrid"
  }, t.items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.title,
    delay: i % 2 * 90
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "2rem",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      marginBottom: '1.4rem'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-m)',
      fontWeight: 'var(--weight-medium)',
      marginBottom: '0.6rem'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      fontSize: 'var(--text-body-m)'
    }
  }, it.body)))))));
}
function Showcase({
  t
}) {
  const {
    Container,
    Icon,
    Reveal,
    SectionEyebrow,
    ProductMockup
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-alt)',
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 'clamp(2rem, 5vw, 4.5rem)',
      alignItems: 'center'
    },
    className: "lp-showcase"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    index: "02"
  }, t.eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-m)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-snug)',
      marginBottom: '1.1rem'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      marginBottom: '1.8rem'
    }
  }, t.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.9rem'
    }
  }, t.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--accent-500)"
  }), p)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "lp-img-only"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "showcase-visual",
    src: "../../assets/dummy-showcase.png",
    shape: "rounded",
    radius: "4",
    placeholder: "Drop a product image",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      aspectRatio: '11 / 8',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "lp-term-only"
  }, /*#__PURE__*/React.createElement(ProductMockup, null))))));
}
Object.assign(window, {
  ProofBar,
  Features,
  Showcase
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/SectionsA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/SectionsB.jsx
try { (() => {
/* SectionsB — Pricing (billing toggle), Testimonials, FAQ, CTA, Footer. */

function Pricing({
  t
}) {
  const {
    Container,
    Button,
    Tag,
    Icon,
    Reveal,
    SectionEyebrow
  } = window;
  const [annual, setAnnual] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      maxWidth: 600,
      marginInline: 'auto',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    index: "03"
  }, t.eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-m)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-snug)',
      marginBottom: '0.9rem'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-secondary)'
    }
  }, t.sub)), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 4
    }
  }, [['monthly', false], ['annual', true]].map(([key, val]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => setAnnual(val),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 500,
      padding: '0.5rem 0.95rem',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs)',
      background: annual === val ? 'var(--action-solid)' : 'transparent',
      color: annual === val ? 'var(--action-on-solid)' : 'var(--text-secondary)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, key === 'monthly' ? t.monthly : t.annual, key === 'annual' && /*#__PURE__*/React.createElement(Tag, {
    tone: annual ? 'accent' : 'neutral',
    style: {
      padding: '0.2rem 0.4rem',
      background: annual ? 'var(--accent-tint)' : undefined
    }
  }, t.save))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.25rem',
      alignItems: 'stretch'
    },
    className: "lp-pricegrid"
  }, t.plans.map((p, i) => {
    const price = annual ? p.priceA : p.priceM;
    const showUnit = price.startsWith('¥') && price !== '¥0' || price.startsWith('$') && price !== '$0';
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.name,
      delay: i * 90,
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '2rem',
        borderRadius: 'var(--radius-md)',
        background: p.featured ? 'var(--surface-inverse)' : 'var(--surface-card)',
        border: p.featured ? '1px solid var(--surface-inverse)' : '1px solid var(--border-subtle)',
        boxShadow: p.featured ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
        color: p.featured ? 'var(--text-on-dark)' : 'var(--text-primary)',
        transform: p.featured ? 'translateY(-10px)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.4rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-heading-m)',
        fontWeight: 500
      }
    }, p.name), p.featured && /*#__PURE__*/React.createElement(Tag, {
      tone: "accent"
    }, "Popular")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-s)',
        color: p.featured ? 'var(--text-on-dark-muted)' : 'var(--text-tertiary)',
        marginBottom: '1.4rem'
      }
    }, p.tagline), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.4rem',
        marginBottom: '0.3rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-display-m)',
        fontWeight: 300,
        letterSpacing: '-.02em',
        lineHeight: 1
      }
    }, price), showUnit && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-body-s)',
        color: p.featured ? 'var(--text-on-dark-muted)' : 'var(--text-tertiary)'
      }
    }, t.perMonth)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: p.featured ? 'var(--text-on-dark-faint)' : 'var(--text-tertiary)',
        marginBottom: '1.6rem',
        minHeight: 14
      }
    }, showUnit ? t.perUser : '\u00a0'), /*#__PURE__*/React.createElement(Button, {
      variant: p.featured ? 'inverse' : 'outline',
      fullWidth: true,
      style: {
        marginBottom: '1.6rem'
      }
    }, p.cta), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem'
      }
    }, p.features.map(f => /*#__PURE__*/React.createElement("li", {
      key: f,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.6rem',
        fontSize: 'var(--text-body-s)',
        color: p.featured ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15,
      color: p.featured ? 'var(--accent-400)' : 'var(--accent-500)',
      style: {
        marginTop: 1,
        flexShrink: 0
      }
    }), f)))));
  }))));
}
function Testimonials({
  t
}) {
  const {
    Container,
    Icon,
    Reveal,
    SectionEyebrow
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-alt)',
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    index: "04"
  }, t.eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-m)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, t.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.25rem'
    },
    className: "lp-testigrid"
  }, t.items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.name,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '2.25rem'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 26,
    color: "var(--fill-muted)",
    style: {
      marginBottom: '1rem'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-m)',
      fontWeight: 300,
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-primary)',
      marginBottom: '1.6rem',
      textWrap: 'pretty'
    }
  }, it.quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--fill-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, it.name.trim()[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-m)',
      fontWeight: 500
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.04em',
      color: 'var(--text-tertiary)'
    }
  }, it.role)))))))));
}
function FAQ({
  t
}) {
  const {
    Container,
    Accordion,
    Reveal,
    SectionEyebrow
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    index: "05"
  }, t.eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-m)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, t.title)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: t.items
  }))));
}
function CTA({
  t
}) {
  const {
    Button,
    Icon,
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      paddingBlock: 'clamp(4.5rem, 9vw, 8rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      marginInline: 'auto',
      paddingInline: 'var(--gutter)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.3rem'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--accent-400)'
    }
  }, t.eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-l)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-on-dark)'
    }
  }, t.title)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-on-dark-muted)'
    }
  }, t.sub)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220,
    style: {
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, t.button))));
}
function Footer({
  t
}) {
  const {
    Container,
    Icon,
    Logo
  } = window;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      borderTop: '1px solid var(--border-on-dark)',
      paddingBlock: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '2rem'
    },
    className: "lp-footgrid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-on-dark)',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 22
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 'var(--text-body-s)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 240
    }
  }, t.tagline)), t.cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)',
      marginBottom: '1.1rem'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 'var(--text-body-s)',
      transition: 'color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-on-dark)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-on-dark-muted)'
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '3rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid var(--border-on-dark)',
      flexWrap: 'wrap',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-on-dark-faint)'
    }
  }, t.copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.4rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, ['X', 'GitHub', 'LinkedIn'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: 'var(--text-on-dark-muted)',
      transition: 'color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-on-dark)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-on-dark-muted)'
  }, s))))));
}
Object.assign(window, {
  Pricing,
  Testimonials,
  FAQ,
  CTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/SectionsB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/copy.jsx
try { (() => {
/* Bilingual copy for the Cadence LP. COPY[lang] feeds every section. */

const COPY = {
  ja: {
    nav: {
      features: '特長',
      pricing: '料金',
      faq: 'よくある質問',
      signin: 'ログイン',
      cta: '無料で始める'
    },
    hero: {
      eyebrow: 'チームのための業務OS',
      title: 'チームの仕事に、\n静かなリズムを。',
      sub: 'バラバラのツールを一つに。Cadence は、計画・追跡・共有をひとつの静かな画面にまとめます。導入は数分、効果は今日から。',
      ctaPrimary: '14日間無料で試す',
      ctaSecondary: 'プロダクトを見る',
      note: 'クレジットカード不要 · いつでも解約可能'
    },
    proof: {
      label: '世界中のチームに信頼されています',
      stats: [['99.9%', '稼働率'], ['12,000+', '導入企業'], ['3分', '初期設定'], ['4.9 / 5', '評価']]
    },
    features: {
      eyebrow: '特長',
      title: '必要なものだけを、美しく。',
      sub: '過剰な機能はありません。毎日使うものを、丁寧に作りました。',
      items: [{
        icon: 'bar-chart-3',
        title: 'リアルタイム分析',
        body: 'すべての指標をひとつのダッシュボードで。意思決定を速く、確かに。'
      }, {
        icon: 'workflow',
        title: '自動ワークフロー',
        body: '繰り返しの作業を自動化。チームは創造的な仕事に集中できます。'
      }, {
        icon: 'shield-check',
        title: 'エンタープライズ級の安全性',
        body: '国内リージョンでの暗号化保存と SOC 2 準拠の運用体制。'
      }, {
        icon: 'layers',
        title: '柔軟な連携',
        body: '100以上のツールと数クリックで接続。既存の業務を止めません。'
      }]
    },
    showcase: {
      eyebrow: 'プロダクト',
      title: 'ひとつの画面に、すべてを。',
      body: 'プロジェクト、指標、チームの動き。文脈の切り替えをなくし、本当に大切な仕事に時間を取り戻します。',
      points: ['ドラッグ&ドロップで並び替え', 'リアルタイム同期', 'キーボード中心の操作']
    },
    pricing: {
      eyebrow: '料金',
      title: 'シンプルで、正直な料金。',
      sub: 'チームの規模に合わせて。隠れた費用はありません。',
      monthly: '月払い',
      annual: '年払い',
      save: '2ヶ月分お得',
      perMonth: '/ 月',
      perUser: 'ユーザーあたり',
      plans: [{
        name: 'Starter',
        priceM: '¥0',
        priceA: '¥0',
        tagline: '個人・お試しに',
        features: ['3プロジェクトまで', '基本的な分析', 'コミュニティサポート'],
        cta: '無料で始める',
        featured: false
      }, {
        name: 'Team',
        priceM: '¥1,400',
        priceA: '¥1,170',
        tagline: '成長するチームに',
        features: ['無制限のプロジェクト', '高度な分析と自動化', '優先サポート', '100以上の連携'],
        cta: '14日間無料で試す',
        featured: true
      }, {
        name: 'Enterprise',
        priceM: 'お問合せ',
        priceA: 'お問合せ',
        tagline: '大規模な組織に',
        features: ['SSO / SAML', '専任担当者', 'SLA 保証', '監査ログ'],
        cta: '相談する',
        featured: false
      }]
    },
    testimonials: {
      eyebrow: 'お客様の声',
      title: '静けさが、生産性を生む。',
      items: [{
        quote: '導入初週でミーティングが半分になりました。すべてが一箇所にあるからです。',
        name: '田中 美咲',
        role: 'プロダクト責任者 · Nimbus'
      }, {
        quote: 'これまで試したどのツールよりも静かで、速い。チームがすぐに馴染みました。',
        name: 'James Carter',
        role: 'COO · Northwind'
      }]
    },
    faq: {
      eyebrow: 'よくある質問',
      title: '気になることに、お答えします。',
      items: [{
        q: '無料トライアルはありますか？',
        a: 'はい。14日間、すべての機能を無料でお試しいただけます。クレジットカードは不要です。'
      }, {
        q: 'いつでも解約できますか？',
        a: 'はい。契約期間の縛りはなく、設定画面からいつでもワンクリックで解約できます。'
      }, {
        q: 'データはどこに保存されますか？',
        a: '国内リージョンのサーバーに暗号化して保存され、SOC 2 準拠の体制で運用しています。'
      }, {
        q: '他のツールと連携できますか？',
        a: 'Slack、Notion、Google Workspace など100以上のツールと数クリックで接続できます。'
      }]
    },
    cta: {
      eyebrow: 'はじめましょう',
      title: '今日から、静かに強く。',
      sub: '14日間の無料トライアル。クレジットカードは不要です。',
      button: '無料で始める'
    },
    footer: {
      tagline: 'チームの仕事に、静かなリズムを。',
      cols: [['プロダクト', ['特長', '料金', '連携', '変更履歴']], ['会社', ['会社概要', 'ブログ', '採用情報', 'お問い合わせ']], ['リソース', ['ドキュメント', 'ヘルプセンター', 'ステータス', 'API']]],
      copyright: '© 2026 Cadence, Inc. All rights reserved.'
    }
  },
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      signin: 'Sign in',
      cta: 'Get started'
    },
    hero: {
      eyebrow: 'The operating system for teams',
      title: 'A calm rhythm\nfor your team\u2019s work.',
      sub: 'Bring scattered tools into one quiet surface. Cadence unifies planning, tracking and sharing — set up in minutes, value from day one.',
      ctaPrimary: 'Start 14-day trial',
      ctaSecondary: 'See the product',
      note: 'No credit card · Cancel anytime'
    },
    proof: {
      label: 'Trusted by teams around the world',
      stats: [['99.9%', 'Uptime'], ['12,000+', 'Companies'], ['3 min', 'Setup'], ['4.9 / 5', 'Rating']]
    },
    features: {
      eyebrow: 'Features',
      title: 'Only what you need — done beautifully.',
      sub: 'No bloat. We crafted the things you reach for every day.',
      items: [{
        icon: 'bar-chart-3',
        title: 'Real-time analytics',
        body: 'Every metric on one dashboard. Decide faster, with confidence.'
      }, {
        icon: 'workflow',
        title: 'Automated workflows',
        body: 'Automate the repetitive so your team can focus on creative work.'
      }, {
        icon: 'shield-check',
        title: 'Enterprise-grade security',
        body: 'Encrypted at rest in-region, operated to SOC 2 standards.'
      }, {
        icon: 'layers',
        title: 'Flexible integrations',
        body: 'Connect 100+ tools in a few clicks. Your workflow never stops.'
      }]
    },
    showcase: {
      eyebrow: 'Product',
      title: 'Everything, on one screen.',
      body: 'Projects, metrics, and team activity together. Kill context-switching and win back time for the work that matters.',
      points: ['Drag-and-drop ordering', 'Real-time sync', 'Keyboard-first controls']
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Simple, honest pricing.',
      sub: 'Scales with your team. No hidden fees, ever.',
      monthly: 'Monthly',
      annual: 'Annual',
      save: 'Save 2 months',
      perMonth: '/ mo',
      perUser: 'per user',
      plans: [{
        name: 'Starter',
        priceM: '$0',
        priceA: '$0',
        tagline: 'For individuals & trials',
        features: ['Up to 3 projects', 'Basic analytics', 'Community support'],
        cta: 'Get started',
        featured: false
      }, {
        name: 'Team',
        priceM: '$12',
        priceA: '$10',
        tagline: 'For growing teams',
        features: ['Unlimited projects', 'Advanced analytics & automation', 'Priority support', '100+ integrations'],
        cta: 'Start 14-day trial',
        featured: true
      }, {
        name: 'Enterprise',
        priceM: 'Custom',
        priceA: 'Custom',
        tagline: 'For large organizations',
        features: ['SSO / SAML', 'Dedicated manager', 'SLA guarantee', 'Audit logs'],
        cta: 'Contact sales',
        featured: false
      }]
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Quiet is what makes it productive.',
      items: [{
        quote: 'Our meetings halved in the first week — everything lives in one place now.',
        name: 'Misaki Tanaka',
        role: 'Head of Product · Nimbus'
      }, {
        quote: 'Quieter and faster than anything we tried. The team adopted it instantly.',
        name: 'James Carter',
        role: 'COO · Northwind'
      }]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Answers to what you\u2019re wondering.',
      items: [{
        q: 'Is there a free trial?',
        a: 'Yes — 14 days of full access to every feature. No credit card required.'
      }, {
        q: 'Can I cancel anytime?',
        a: 'Yes. There are no contracts; cancel in one click from your billing settings.'
      }, {
        q: 'Where is my data stored?',
        a: 'Encrypted at rest on in-region servers, operated to SOC 2 standards.'
      }, {
        q: 'Does it integrate with my tools?',
        a: 'Connect Slack, Notion, Google Workspace and 100+ others in a few clicks.'
      }]
    },
    cta: {
      eyebrow: 'Get started',
      title: 'Quietly strong, starting today.',
      sub: 'A 14-day free trial. No credit card required.',
      button: 'Get started'
    },
    footer: {
      tagline: 'A calm rhythm for your team\u2019s work.',
      cols: [['Product', ['Features', 'Pricing', 'Integrations', 'Changelog']], ['Company', ['About', 'Blog', 'Careers', 'Contact']], ['Resources', ['Docs', 'Help center', 'Status', 'API']]],
      copyright: '© 2026 Cadence, Inc. All rights reserved.'
    }
  }
};
Object.assign(window, {
  COPY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/copy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/helpers.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared helpers for the Cadence LP kit — Icon (Lucide) + Reveal-on-scroll + layout shells. */

/* Expose the compiled DS components (Button, Card, Tag, Stat, Accordion, Input)
   onto window so sections can destructure them from window like the helpers. */
Object.assign(window, window.MicroSaaSLPDesignSystem_230665 || {});
function Icon({
  name,
  size = 20,
  stroke = 1.5,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons();
    const svg = el.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.style.strokeWidth = stroke;
    }
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      color,
      ...style
    }
  });
}

/* Reveals children with a subtle lift when scrolled into view. Base state is
   VISIBLE (capture/print/no-JS safe); the animation is a pure enhancement. */
function Reveal({
  children,
  delay = 0,
  as = 'div',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  const [played, setPlayed] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // stays visible, no animation
    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 800) * 0.95) {
      setPlayed(true);
      return;
    }
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setPlayed(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: played ? 'lp-reveal-in' : undefined,
    style: {
      animationDelay: `${delay}ms`,
      ...style
    }
  }, rest), children);
}

/* Centered max-width container. */
function Container({
  children,
  narrow = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
      marginInline: 'auto',
      paddingInline: 'var(--gutter)',
      ...style
    }
  }, children);
}

/* Mono section eyebrow with index, e.g. "01 — Features". */
function SectionEyebrow({
  index,
  children,
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      color: onDark ? 'var(--accent-400)' : 'var(--text-accent)',
      letterSpacing: '0.1em'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-tertiary)'
    }
  }, children));
}

/* Inline brand logo — renders as SVG so it inherits currentColor and
   themes automatically (ink on light, paper on dark, phosphor on terminal). */
function Logo({
  height = 24,
  markOnly = false,
  style = {}
}) {
  const w = markOnly ? 24 : 160;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} 32`,
    height: height,
    fill: "none",
    role: "img",
    "aria-label": "Cadence",
    style: {
      display: 'block',
      color: 'currentColor',
      ...style
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "6",
    width: "5",
    height: "20",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "0",
    width: "5",
    height: "32",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "10",
    width: "5",
    height: "12",
    fill: "currentColor"
  }), !markOnly && /*#__PURE__*/React.createElement("text", {
    x: "32",
    y: "23",
    fontFamily: "var(--font-display)",
    fontSize: "20",
    fontWeight: "600",
    letterSpacing: "-0.01em",
    fill: "currentColor"
  }, "Cadence"));
}

/* Theme controller — light / dark / terminal, persisted to localStorage.
   The active theme is an attribute on <html>; tokens do the rest. */
const THEMES = ['light', 'dark', 'terminal'];
function getTheme() {
  return document.documentElement.dataset.theme || 'light';
}
function setTheme(name) {
  const t = THEMES.includes(name) ? name : 'light';
  document.documentElement.dataset.theme = t;
  try {
    localStorage.setItem('cadence-theme', t);
  } catch (e) {}
  return t;
}
function useTheme() {
  const [theme, set] = React.useState(getTheme);
  const apply = React.useCallback(name => set(setTheme(name)), []);
  return [theme, apply];
}
Object.assign(window, {
  Icon,
  Reveal,
  Container,
  SectionEyebrow,
  Logo,
  THEMES,
  getTheme,
  setTheme,
  useTheme
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/helpers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/microsaas-lp/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/microsaas-lp/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Accordion = __ds_scope.Accordion;

})();
