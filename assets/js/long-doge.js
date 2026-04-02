console.log('WORKING');

const wrapper = document.querySelector('.doge-wrapper');
const neck = document.querySelector('.neck');
const wowEl = document.querySelector('#wows');

const largeWowContainer= document.querySelector('#largewowcontainer');
const rainbowWowContainer = document.querySelector('#rainbowwowcontainer')
const dogePrimeContainer = document.querySelector('#dogeprimecontainer');
const secretWowContainer = document.querySelector('#secretwowcontainer');
const fiboWowContainer = document.querySelector('#fibowowcontainer');

const largeWowEl = document.querySelector('#largeWows');
const lengthEl = document.querySelector('#length');
const rainbowsEl = document.querySelector("#rainbow")
const dogePrimeEl = document.querySelector("#dogeprime")
const secretWowEl = document.querySelector("#secretwow")
const fiboWowEl = document.querySelector("#fibo")

let wows = 0;
let largewows = 0;
let rainbowwows = 0;
let secretwows = 0;
let minidoges = 0;

const primeWows = [];
const largeWowsRequired = 10;

let fibonacciChallengeStarted = false;
let fibonacciChallengeComplete = false;
const fibonacciWows = [];
const fibonacciSecretWows = [];
let dogePrime = false;

// print stuff will go here 

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API 
// Intersection Observer API allows you to configure a callback that is called when either of 
// these circumstances occur: 
// a TARGET element intersects either the devices viewport or a specified element (this is called the root element or root)
// OR the first time the observer is initially asked to watch a target element 
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                injectNeck(entry)
            }
        })
    },
    {rootMargin: "0px 0px 200% 0px"}
);
