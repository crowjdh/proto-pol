const isObject = obj => obj && obj.constructor && obj.constructor === Object;

function merge(a,b){
  for (var attr in b){
    if(isObject(a[attr]) && isObject(b[attr])){
       merge(a[attr], b[attr]);
    }
    else{
      a[attr] = b[attr];
    }
  }
  return a;
}

function clone(a){
  return merge({},a);
}

function norm() {
  const original = {'qwer': 'asdf'};

  const copied = clone(original);
  console.info(`original: ${JSON.stringify(original, null, 2)}`);
  console.info(`copied: ${JSON.stringify(copied, null, 2)}`);

  console.info();

  original.qwer = 'zxcv';
  console.info(`original: ${JSON.stringify(original, null, 2)}`);
  console.info(`copied: ${JSON.stringify(copied, null, 2)}`);

  console.info(original.__proto__ === copied.__proto__);
}

function exploit() {
  const original = {'__proto__': {'admin': true}};
  const copied = clone(original);

  console.info(`original: ${JSON.stringify(original, null, 2)}`);
  console.info(`copied: ${JSON.stringify(copied, null, 2)}`);

  console.info();

  // console.info(original);
  // console.info(copied);
  // console.info(Object.prototype.admin);
  // console.info(`original.__proto__: ${JSON.stringify(original.__proto__, null, 2)}`);
  // console.info(`copied.__proto__: ${JSON.stringify(copied.__proto__, null, 2)}`);
  console.info(`original.__proto__: ${JSON.stringify(Object.getOwnPropertyDescriptors(original.__proto__), null, 2)}`);
  console.info(`copied.__proto__: ${JSON.stringify(Object.getOwnPropertyDescriptors(copied.__proto__), null, 2)}`);

  // console.info(original.__proto__ === copied.__proto__);
}

exploit();
// norm();
// console.info(Object.prototype === {}.__proto__);
// console.info(typeof(new Object().__proto__) === typeof({}.__proto__));

// console.info(Object.getOwnPropertyDescriptors({}.__proto__));
