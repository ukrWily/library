import $ from "../core";

/**
 *
 * @param {duration} dur
 * @param {callback} cb
 * @param {finalFn} fin
 */
$.prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);

    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }

  return _animateOverTime;
};

$.prototype.fadeIn = function (dur, display = "block", fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;

    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

$.prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = "none";
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

$.prototype.fadeToggle = function (dur, display = "block", fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this[i].style.display = display;

      const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
          this[i].style.display = "none";
        }
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
};
// <{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>
// $.prototype.animateElement = function (dur, type, display = "block", fin) {
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     element.style.display = display;

//     const animate = (complection) => {
//       if (type === "fadeIn") {
//         element.style.opacity = complection;
//       } else if (type === "fadeOut") {
//         element.style.opacity = 1 - complection;
//       }

//       if (complection === 1 && type === "fadeOut") {
//         element.style.display = "none";
//       }
//     };

//     const ani = this.animateOverTime(dur, animate, fin);
//     requestAnimationFrame(ani);
//   }

//   return this;
// };
