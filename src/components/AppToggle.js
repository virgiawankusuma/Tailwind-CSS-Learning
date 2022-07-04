import React from 'react';

class AppToggle extends React.Component {

  handleToggle = () => {
    const toggle = document.querySelector('#toggle');
    const html = document.querySelector('html');

    if (toggle.checked) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }


  // toggle.addEventListener('click',function () {
  //   toggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
  // });

  render() {
    return (
      <div className="flex justify-center my-5">
        <span className="text-sm text-slate-500 mr-2">Light</span>
        <input type={'checkbox'} id="toggle" className="hidden" onClick={this.handleToggle}/>
        <label for="toggle">
          <div className="w-9 h-5 bg-slate-500 rounded-full flex items-center px-1 py-2 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full toggle-circle"></div>
          </div>
        </label>
        <span className="text-sm text-slate-500 ml-2">Dark</span>
      </div>
    );
  }
}

export default AppToggle;