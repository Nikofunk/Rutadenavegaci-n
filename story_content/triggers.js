function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65a0Ufwg2uP":
        Script1();
        break;
      case "6HNNhbVab1H":
        Script2();
        break;
      case "6ioVGoAcmkh":
        Script3();
        break;
      case "6lHvkewuOyu":
        Script4();
        break;
      case "5bkS9maD3KN":
        Script5();
        break;
      case "6R1ct88HzEI":
        Script6();
        break;
      case "5iiCs3l3Euz":
        Script7();
        break;
      case "5ZW4CHuqC2L":
        Script8();
        break;
      case "6Oi7AaqbRwZ":
        Script9();
        break;
      case "6dtKU62KepX":
        Script10();
        break;
      case "6f6KlV7C4Wz":
        Script11();
        break;
      case "66F0PCHgyhG":
        Script12();
        break;
      case "6L3YJdemgMd":
        Script13();
        break;
      case "62kAGfpyvVW":
        Script14();
        break;
      case "6LEeZDHg23q":
        Script15();
        break;
      case "5W8SFPssgh7":
        Script16();
        break;
      case "6Ipg96xmDT7":
        Script17();
        break;
      case "6Li1QtvVP9w":
        Script18();
        break;
      case "6I68Ff9MOTI":
        Script19();
        break;
      case "6jJ3vyMSsJO":
        Script20();
        break;
      case "5pzPdzy4KhV":
        Script21();
        break;
      case "5jy21PzU1Xe":
        Script22();
        break;
      case "6gcu8uipuyF":
        Script23();
        break;
      case "6JefQ5QkIC6":
        Script24();
        break;
      case "5xVMRPvdbjN":
        Script25();
        break;
      case "6nencVAkC62":
        Script26();
        break;
      case "61rpfN26ZT4":
        Script27();
        break;
      case "6MqSg6bLczb":
        Script28();
        break;
      case "6TDS9p4tbtk":
        Script29();
        break;
      case "6AXz86JjB8z":
        Script30();
        break;
      case "6NrVIzIgqvD":
        Script31();
        break;
      case "6YWLLeGliGl":
        Script32();
        break;
      case "6iCG06D3pld":
        Script33();
        break;
      case "6et1QInKjug":
        Script34();
        break;
      case "6V08Y5hUlzS":
        Script35();
        break;
      case "5emjfzWA7DU":
        Script36();
        break;
      case "5oEWv6fHOZY":
        Script37();
        break;
      case "61Wc4I39eyq":
        Script38();
        break;
      case "5jNI8VhiNIV":
        Script39();
        break;
      case "5x9mjgXSw4s":
        Script40();
        break;
      case "68BnLVNXbPY":
        Script41();
        break;
      case "60eG1NoHF4W":
        Script42();
        break;
      case "5ZNMHTI7iMp":
        Script43();
        break;
      case "6A455nQf2eH":
        Script44();
        break;
      case "6FWxvcn3pfV":
        Script45();
        break;
      case "6MSl9i58Ob6":
        Script46();
        break;
      case "5upRHqGxGyk":
        Script47();
        break;
      case "6jwbaLLE502":
        Script48();
        break;
      case "5qnCNJKeGpb":
        Script49();
        break;
      case "5ulUuVK9aNv":
        Script50();
        break;
      case "6NVCnsDUt27":
        Script51();
        break;
      case "6o2vwXVaw3x":
        Script52();
        break;
      case "5qkCGo84Il4":
        Script53();
        break;
      case "6SrM9l2ZoUo":
        Script54();
        break;
      case "5wZloEp2hP7":
        Script55();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('5WNr1Ddtt6i');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5WNr1Ddtt6i');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6CNFuLjGtgo');
const duration = 750;
const easing = 'ease-out';
const id = '6bcjuOp8e3B';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6CNFuLjGtgo');
const duration = 750;
const easing = 'ease-out';
const id = '6bcjuOp8e3B';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('6CNFuLjGtgo');
const duration = 750;
const easing = 'ease-out';
const id = '6bcjuOp8e3B';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6RcZVCb3pLG');
const duration = 750;
const easing = 'ease-out';
const id = '6ex3kcAHaQ3';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5vfWJ0J3yqd');
const duration = 750;
const easing = 'ease-out';
const id = '66eAK8YkHcT';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5YoaX7U0TmC');
const duration = 750;
const easing = 'ease-out';
const id = '6JKzLkzxVuH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  const target = object('5YoaX7U0TmC');
const duration = 750;
const easing = 'ease-out';
const id = '6JKzLkzxVuH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('67yMRLnSiGH');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('67yMRLnSiGH');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6FVmMM3fyjP');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('6FVmMM3fyjP');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6abtKJakMq0');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  const target = object('6abtKJakMq0');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  player.once(() => {
const target = object('65CtMLfHXKK');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('64vNN1uPJvU');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('5Vsdp9PTx8e');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('6YzBJjNyBb0');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('5mz4bcAPtqS');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  player.once(() => {
const target = object('6lCc67Qunec');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  const target = object('5udvBpUKq68');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  player.once(() => {
const target = object('5tXTPSEx7KX');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  player.once(() => {
const target = object('5udvBpUKq68');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script25 = function()
{
  player.once(() => {
const target = object('5ylb4tKc1qS');
const duration = 750;
const easing = 'ease-out';
const id = '6EMETyvXQ18';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  const target = object('5ylb4tKc1qS');
const duration = 750;
const easing = 'ease-out';
const id = '6EMETyvXQ18';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  player.once(() => {
const target = object('5ylb4tKc1qS');
const duration = 750;
const easing = 'ease-out';
const id = '6EMETyvXQ18';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6peYp7THd15');
const duration = 750;
const easing = 'ease-out';
const id = '6fAOqenaORa';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  const target = object('6peYp7THd15');
const duration = 750;
const easing = 'ease-out';
const id = '6fAOqenaORa';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  player.once(() => {
const target = object('6k90dTrSIjg');
const duration = 750;
const easing = 'ease-out';
const id = '6CUFULTtzVb';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script31 = function()
{
  const target = object('6k90dTrSIjg');
const duration = 750;
const easing = 'ease-out';
const id = '6CUFULTtzVb';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  player.once(() => {
const target = object('68fw9atA7EW');
const duration = 750;
const easing = 'ease-out';
const id = '68QwIHllARw';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script33 = function()
{
  const target = object('68fw9atA7EW');
const duration = 750;
const easing = 'ease-out';
const id = '68QwIHllARw';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('65p3qAg068Z');
const duration = 750;
const easing = 'ease-out';
const id = '6oPShu7qS4o';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6AfqzYmINix');
const duration = 750;
const easing = 'ease-out';
const id = '5n3PAaPi3Wr';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  player.once(() => {
const target = object('5n48ATWcskL');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script37 = function()
{
  const target = object('5n48ATWcskL');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  player.once(() => {
const target = object('6MUSooW6Zog');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script39 = function()
{
  player.once(() => {
const target = object('6TRBte6B33e');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script40 = function()
{
  player.once(() => {
const target = object('6f5CR68QgEx');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script41 = function()
{
  player.once(() => {
const target = object('66ddBBOUeuZ');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  player.once(() => {
const target = object('5lZlEH1FPj1');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script43 = function()
{
  player.once(() => {
const target = object('6ifLmPYRQqu');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script44 = function()
{
  player.once(() => {
const target = object('6gn1iePO5vS');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script45 = function()
{
  player.once(() => {
const target = object('5zQImOxG9V7');
const duration = 750;
const easing = 'ease-in-out';
const id = '6fXDXx4qEgg';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script46 = function()
{
  const target = object('5mZ3GG3qFW2');
const duration = 750;
const easing = 'ease-out';
const id = '5zsxoKg8V87';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  player.once(() => {
const target = object('6dbUeDaJslD');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script48 = function()
{
  const target = object('6dbUeDaJslD');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('6WdDtWDHL2S');
const duration = 750;
const easing = 'ease-out';
const id = '6cFhjoDP9Iz';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('5msX5HNJZJc');
const duration = 750;
const easing = 'ease-out';
const id = '5n3PAaPi3Wr';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  player.once(() => {
const target = object('5yGmFTMuOY4');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script52 = function()
{
  const target = object('5yGmFTMuOY4');
const duration = 750;
const easing = 'ease-out';
const id = '6PNOytoyiwH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6RYDVi9W2la');
const duration = 500;
const easing = 'ease-out';
const id = '6imG4RSJMS7';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  player.once(() => {
const target = object('6WjbQrdp2Gz');
const duration = 1000;
const easing = 'ease-in-out';
const id = '6P7lvwr0Ryj';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script55 = function()
{
  player.once(() => {
const target = object('6RYDVi9W2la');
const duration = 500;
const easing = 'ease-out';
const id = '6imG4RSJMS7';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
