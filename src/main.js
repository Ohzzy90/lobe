const track = document.querySelector('.left-slide');
let pos = 0; 
const speed = 2; // higher = faster

function animate() {
  pos -= speed;
  if (Math.abs(pos) >= track.scrollWidth / 2) {
    pos = 0; // reset when half has scrolled (because you duplicated)
  }
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();

// function startRightScroll(selector, speed = 1) {
//   const track = document.querySelector(selector);
//   let pos = 0;

//   function animate() {
//     pos += speed;

//     if (pos >= track.scrollWidth / 2) {
//       pos = 0;
//     }

//     track.style.transform = `translateX(${pos}px)`;
//     requestAnimationFrame(animate);
//   }

//   animate();
// }

// // run it
// startRightScroll('.right-slide', 1); // increase number for faster scroll

const rightSlide = document.querySelector(".right-slide");
let x = 0;
const slide = 1.5; // pixels per frame

function animateRight() {
  x -= slide; // move content left to simulate sliding right

  // reset at half width to loop cleanly
  if (Math.abs(x) >= rightSlide.scrollWidth / 2) {
    x = 0;
  }

  rightSlide.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animateRight);
}

animateRight();;

  const clips = document.querySelectorAll(".vid .clips");
  let index = 0;

  function popVideo() {
    // hide all clips
    clips.forEach(c => {
      c.style.display = "none";        // pop off
      c.querySelector("video").pause(); // stop playback
    });

    // show current clip
    const current = clips[index];
    current.style.display = "block";      // pop in
    const videoEl = current.querySelector("video");
    videoEl.currentTime = 0;
    videoEl.play();

    // update index for next cycle
    index = (index + 1) % clips.length;
  }

  // show first video immediately
  popVideo();

  // switch every 10s
  setInterval(popVideo, 10000);

  const texts = [
    "see gestures",
    "recognize faces",
    "detect emotions",
    "track movements",
    "understand speech"
  ];

  const span = document.getElementById("dynamic-text");
  let textIndex = 0;
  let charIndex = 0;
  let typingSpeed = 100; // ms per character
  let pauseTime = 3000;  // pause after full text
  let erasingSpeed = 50;

  function typeText() {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      span.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(eraseText, pauseTime);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      span.textContent = span.textContent.slice(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
    } else {
      // move to next text
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, typingSpeed);
    }
  }

  // start
  typeText();


  // Save scroll position before unload
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPos", window.scrollY);
  });

  // Restore scroll position on load
  window.addEventListener("load", function () {
    const scrollPos = localStorage.getItem("scrollPos");
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos, 10));
    }
  });

