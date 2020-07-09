// jshint esversion: 6

/* Copyright (c) 2020 The Learning Den */

// jscs: disable requirePaddingNewLinesBeforeLineComments

/*************************** Variables ***************************/
const wordFamilyRoots = ['ap', 'ank', 'at', 'ing', 'an'];
const wordFamilyPrefixPairs = {
  ap: ['fl', 'sl', 't', 'tr', 'cl'],
  ank: ['b', 'r', 't', 'y', 'th'],
  at: ['b', 'c', 'h', 's', 'p'],
  ing: ['bl', 'k', 'fl', 'st', 'r'],
  an: ['f', 'pl', 'th', 'b', 't'],
};
let currentRootIndex = wordFamilyRoots.length - 1;
let currentWordRoot = wordFamilyRoots[currentRootIndex];
let currentPrefixIndex = wordFamilyPrefixPairs[currentWordRoot].length - 1;
let currentPrefix = wordFamilyPrefixPairs[currentWordRoot][currentPrefixIndex];

/********************* Set Initial Page State ********************/
document.querySelector('#root').innerText = currentWordRoot;
document.querySelector('#prefix').innerText = currentPrefix;

// setTimeout(() =>{
//   playSound();
// }, 300);
//
// setTimeout(() => {
//   playSound();
// }, 1850);

/************************ Event Listeners ************************/
// on each click of left arrow, display previous word root
document.querySelector('#leftPrev').addEventListener('click', () => {
  prevWordRoot();
});

// on each click of right arrow, display next word root
document.querySelector('#rightNext').addEventListener('click', () => {
  nextWordRoot();
});

// on each click of up arrow, display previous prefix
document.querySelector('#upPrev').addEventListener('click', () => {
  prevPrefix();
});

// on each click of down arrow, display next prefix
document.querySelector('#downNext').addEventListener('click', () => {
  nextPrefix();
});

// on each click of prefix or root, repeat word audio
// document.querySelector('#prefix').addEventListener('click', () => {
//   playSound();
// });
// document.querySelector('#root').addEventListener('click', () => {
//   playSound();
// });

// various keydown events
document.addEventListener('keydown', (event) => {
  // same as left arrow click
  if (event.key === 'ArrowLeft') {
    prevWordRoot();
  }

  // same as right arrow click
  if (event.key === 'ArrowRight') {
    nextWordRoot();
  }

  // same as up arrow click
  if (event.key === 'ArrowUp') {
    prevPrefix();
  }

  // same as down arrow click
  if (event.key === 'ArrowDown') {
    nextPrefix();
  }

  // same as prefix or root click
  // if (event.key === 'Enter' || event.key === ' ') {
  //   playSound();
  // }

});

// prevents highlighting of sight word if user clicks quickly (double-clicks)
// couldn't get querySelector to work with #prefix, #root so had to repeat
document.querySelector('#prefix').addEventListener('mousedown', (event) => {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);

document.querySelector('#root').addEventListener('mousedown', (event) => {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);

/*************************** Functions ***************************/
// called when right arrow is clicked or right arrow button is pressed
function nextWordRoot() {

  // increment current root index
  currentRootIndex++;

  // if index has gone out of scope, reset to first index
  if (currentRootIndex >= wordFamilyRoots.length) {
    currentRootIndex = 0;
  }

  // update current word root
  currentWordRoot = wordFamilyRoots[currentRootIndex];

  // display new root on screen
  document.querySelector('#root').innerText = currentWordRoot;

  // update prefix to set for new root
  currentPrefixIndex = wordFamilyPrefixPairs[currentWordRoot].length - 1;
  currentPrefix = wordFamilyPrefixPairs[currentWordRoot][currentPrefixIndex];

  // display new prefix on screen
  document.querySelector('#prefix').innerText = currentPrefix;

  // // read full sentence; "I like my...[NEW WORD]"
  // setTimeout(() => {
  //   playSound('iLikeMy');
  // }, 250);

  // setTimeout(() => {
  //   playSound(sightWords[currentWordIndex]);
  // }, 1800);
}

// called when left arrow is clicked or left arrow button is pressed
function prevWordRoot() {

  // increment current root index
  currentRootIndex--;

  // if index has gone out of scope, reset to first index
  if (currentRootIndex < 0) {
    currentRootIndex = currentRootIndex = wordFamilyRoots.length - 1;
  }

  // update current word root
  currentWordRoot = wordFamilyRoots[currentRootIndex];

  // display new root on screen
  document.querySelector('#root').innerText = currentWordRoot;

  // update prefix to set for new root
  currentPrefixIndex = wordFamilyPrefixPairs[currentWordRoot].length - 1;
  currentPrefix = wordFamilyPrefixPairs[currentWordRoot][currentPrefixIndex];

  // display new prefix on screen
  document.querySelector('#prefix').innerText = currentPrefix;

  // // read full sentence; "I like my...[NEW WORD]"
  // setTimeout(() => {
  //   playSound('iLikeMy');
  // }, 250);

  // setTimeout(() => {
  //   playSound(sightWords[currentWordIndex]);
  // }, 1800);
}

// called when up arrow is clicked or up arrow button is pressed
function prevPrefix() {

  // increment current prefix index
  currentPrefixIndex--;

  // if index has gone out of scope, reset to first index
  if (currentPrefixIndex < 0) {
    currentPrefixIndex = wordFamilyPrefixPairs[currentWordRoot].length - 1;
  }

  // update current prefix
  currentPrefix = wordFamilyPrefixPairs[currentWordRoot][currentPrefixIndex];

  // display new prefix on screen
  document.querySelector('#prefix').innerText = currentPrefix;

  // // read full sentence; "I like my...[NEW WORD]"
  // setTimeout(() => {
  //   playSound('iLikeMy');
  // }, 250);

  // setTimeout(() => {
  //   playSound(sightWords[currentWordIndex]);
  // }, 1800);
}

// called when down arrow is clicked or down arrow button is pressed
function nextPrefix() {

  // increment current prefix index
  currentPrefixIndex++;

  // if index has gone out of scope, reset to first index
  if (currentPrefixIndex >= wordFamilyPrefixPairs[currentWordRoot].length) {
    currentPrefixIndex = 0;
  }

  // update current prefix
  currentPrefix = wordFamilyPrefixPairs[currentWordRoot][currentPrefixIndex];

  // display new prefix on screen
  document.querySelector('#prefix').innerText = currentPrefix;

  // // read full sentence; "I like my...[NEW WORD]"
  // setTimeout(() => {
  //   playSound('iLikeMy');
  // }, 250);

  // setTimeout(() => {
  //   playSound(sightWords[currentWordIndex]);
  // }, 1800);
}
