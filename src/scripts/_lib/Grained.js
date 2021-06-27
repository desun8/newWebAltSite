const getCssPropertyVal = (element, property) => getComputedStyle(element).getPropertyValue(property);

const defaultOptions = {
  animate: true,
  patternWidth: 100,
  patternHeight: 100,
  grainOpacity: 0.1,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
  grainChaos: 0.5,
  grainSpeed: 20,
};

export const grainedOptions = {
  'animate': true,
  'patternWidth': 145,
  'patternHeight': 118,
  'grainOpacity': 0.04,
  'grainDensity': 1,
  'grainWidth': 1,
  'grainHeight': 1
};

class Grained {
  constructor(element, options) {
    try {
      this.element = element.tagName ? element : undefined;

      if (!this.element) {
        throw new Error(`Grained: cannot find the element with id ${element}`);
      }

      this.elementSelector = this.getElementName();

      // console.log(this.element, this.elementSelector);

      this.options = options ? { ...defaultOptions, ...options } : defaultOptions;

      this.noise = this.generateNoise();
      this.animation = this.createAnimation();

      this.setStyle();
      this.createStyleAnimation();
      this.createStyleRules();
    } catch (e) {
      console.error(e);
    }
  }

  getElementName() {
    const { element } = this;
    const { id, className } = element;

    if (id) return `#${id}`;
    if (className) return `${element.tagName.toLowerCase()}.${className.split(' ')[0]}`;

    throw new Error('Can\'t get selector from element');
  }

  setStyle() {
    const isPosStatic = getCssPropertyVal(this.element, 'position') === 'static';

    if (isPosStatic) this.element.style.position = 'relative';

    this.element.style.overflow = 'hidden';
  }

  generateNoise() {
    const { options } = this;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = options.patternWidth;
    canvas.height = options.patternHeight;

    for (let w = 0; w < options.patternWidth; w += options.grainDensity) {
      for (let h = 0; h < options.patternHeight; h += options.grainDensity) {
        const rgb = Math.random() * 256 | 0; //Math.floor(Math.random() * 256)
        ctx.fillStyle = `rgba(${[rgb, rgb, rgb, options.grainOpacity].join()})`;
        ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
      }
    }
    return canvas.toDataURL('image/png');
  }

  addCSSRule(sheet, selector, rules, index) {
    let ins = '';
    if (selector.length) {
      ins = `${selector}{${rules}}`;
    } else {
      ins = rules;
    }

    if ('insertRule' in sheet) {
      sheet.insertRule(ins, index);
    } else if ('addRule' in sheet) {
      sheet.addRule(selector, rules, index);
    }
  }

  createAnimation() {
    const keyFrames = [
      {
        step: '0%',
        property: 'transform:translate(-10%,10%)',
      },
      {
        step: '10%',
        property: 'transform:translate(-25%,0%)',
      },
      {
        step: '20%',
        property: 'transform:translate(-30%,10%)',
      },
      {
        step: '30%',
        property: 'transform:translate(-30%,30%)',
      },
      {
        step: '40%',
        property: 'transform:translate(-20%,20%)',
      },
      {
        step: '50%',
        property: 'transform:translate(-15%,10%)',
      },
      {
        step: '60%',
        property: 'transform:translate(-20%,20%)',
      },
      {
        step: '70%',
        property: 'transform:translate(-5%,20%)',
      },
      {
        step: '80%',
        property: 'transform:translate(-25%,5%)',
      },
      {
        step: '90%',
        property: 'transform:translate(-30%,25%)',
      },
      {
        step: '10%',
        property: 'transform:translate(-10%,10%)',
      },
    ];
    let animation = '';

    keyFrames.forEach((key) => {
      animation += `${key.step}{${key.property};}`;
    });

    return `@keyframes grained{${animation}`;
  }

  createStyleAnimation() {
    if (document.getElementById('grained-animation')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'grained-animation';
    style.innerHTML = this.animation;

    document.body.appendChild(style);
  }

  createStyleRules() {
    const { noise, options } = this;
    const rule = `
      content: "";
      position: absolute;
      top: -100%;
      left: -100%;
      width: 300%;
      height: 300%;
      background-image: url(${noise});
      animation-name:grained;
      animation-duration: ${options.grainChaos}s;
      animation-iteration-count: infinite;
      animation-timing-function: steps(${options.grainSpeed}, end);
    `;

    const selectorElement = `${this.elementSelector}::before`;

    const style = document.createElement('style');
    style.id = `grained-animation-${this.elementSelector}`;
    document.body.appendChild(style);

    this.addCSSRule(style.sheet, selectorElement, rule);
  }
}

export default Grained;