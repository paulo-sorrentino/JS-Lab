'use strict';

// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const wait = time => new Promise((resolve, reject) => setTimeout(
  resolve,
  time
)
);

// Tiny, recursive autocurry
// const curry = (f, arr = []) => 
//   (...args) => 
//     ( a => a.length === f.length ? f(...a) : curry(f, a))([...arr, ...args])

const buildHighlightElement = (elementId) => {
  /** DOM ELEMENTS */
  const mainDiv = document.getElementById(elementId);

  const msgBody = document.createElement('div');
  const msgTitle = document.createElement('h4');
  const msgHr = document.createElement('hr');
  const preData = document.createElement('pre');
  const codeEl = document.createElement('code');
  mainDiv.appendChild(msgBody);
  msgBody.appendChild(msgTitle);
  msgBody.appendChild(preData);
  msgBody.appendChild(msgHr);
  preData.appendChild(codeEl);

  return { mainDiv, msgBody, msgTitle, preData, codeEl};
};

const setJSONView = (elementId) => {
  const jsonObject = {
    nome: 'Paulo',
    sobrenome: 'Sorrentino'
  };
  const view = buildHighlightElement(elementId);

  return function (object, title) {
    view.msgTitle.innerText = title || '';
    view.codeEl.innerHTML = JSON.stringify(object || jsonObject, null, 2);
    hljs.highlightBlock(view.codeEl);
  };
};

const addJSONView = (elementId) => {
  const jsonObject = {
    nome: 'Paulo',
    sobrenome: 'Sorrentino'
  };

  return function (object, title) {
    const view = buildHighlightElement(elementId);
    view.msgTitle.innerText = title || '';
    view.codeEl.innerHTML = JSON.stringify(object || jsonObject, null, 2);
    hljs.highlightBlock(view.codeEl);
  };
};

const setCodeView = (elementId) => {
  return function (codeString, title) {
    const view = buildHighlightElement(elementId);
    view.msgTitle.innerText = title || '';
    view.codeEl.innerHTML = codeString;
    hljs.highlightBlock(view.codeEl);
  };
};
