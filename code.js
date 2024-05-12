  // Get reference to the button and counter span
  const button = document.getElementById('clickButton');
  const stopButton = document.getElementById('stopButton')
  const resetButton = document.getElementById('resetButton')
  const counter = document.getElementById('counter');
  const menubutton = document.getElementById('menubutton')
  const menu = document.getElementById('menu')
  const menusmallbutton1 = document.getElementById('menusmallbutton1')
  const menusmallbutton2 = document.getElementById('menusmallbutton2')
  const menusmallbutton3 = document.getElementById('menusmallbutton3')
  const menutext = document.getElementById('menutext')


  // Initialize the counter value
  let count = 0;
  let timerId;
  let itsRunning = false;
  let ismenuOpen = true;

  function slowCounter(){

      if (!itsRunning && count > -1) {
          itsRunning = true;
          count++;
          counter.textContent = count;
          timerId = setTimeout(() => {
              itsRunning = false;
              slowCounter();
          }, 1000);
      }
  };

  function stopCounter(){
      clearTimeout(timerId);
      itsRunning = false;
  }

  function resetCounter(){
      count = 0;
      counter.textContent = count;
      clearTimeout(timerId);
      itsRunning = false;
  }

  function togglemenu(){
      ismenuOpen = !ismenuOpen;
      if (ismenuOpen) {
          menu.classList.add('menu-hidden');
          menubutton.classList.add('menubutton-rotate');
          menusmallbutton1.classList.add('menusmallbuttons-color');
          menusmallbutton2.classList.add('menusmallbuttons-color');
          menusmallbutton3.classList.add('menusmallbuttons-color');
          menutext.classList.add('menutext-color');

      } else {
          menu.classList.remove('menu-hidden');
          menubutton.classList.remove('menubutton-rotate');
          menusmallbutton1.classList.remove('menusmallbuttons-color');
          menusmallbutton2.classList.remove('menusmallbuttons-color');
          menusmallbutton3.classList.remove('menusmallbuttons-color');
          menutext.classList.remove('menutext-color');
  
      }
  }

  button.addEventListener('click', slowCounter);
  stopButton.addEventListener('click', stopCounter);
  resetButton.addEventListener('click',resetCounter);
  menubutton.addEventListener('click',togglemenu);