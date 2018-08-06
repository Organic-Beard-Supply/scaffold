(function(d,a){function c(){var b=d.createElement("script");b.async=!0;b.type="text/javascript";b.src=a._settings.messengerUrl;b.crossOrigin="anonymous";var c=d.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}window.kayako=a;a.readyQueue=[];a.newEmbedCode=!0;a.ready=function(b){a.readyQueue.push(b)};a._settings={apiUrl:"https://organic-man.kayako.com/api/v1",messengerUrl:"https://organic-man.kayakocdn.com/messenger",realtimeUrl:"wss://kre.kayako.net/socket"};window.attachEvent?window.attachEvent("onload",c):window.addEventListener("load",c,!1)})(document,window.kayako||{});

  //IMPORTANT: These colors can be found in /scss/om/_theme-deep-blue.scss
const styles = { primaryColor: '#e4a36d', homeBackground: '#159097', homeTextColor: '#ffffff' }
kayako.config = { styles }

const toggleMessenger = e => {
  if (kayako) {
    kayako.visibility() === 'minimized' ? kayako.maximize() : kayako.minimize();
  } else {
    window.location.href = "mailto:hello@organicman.eco";
  }
  e.preventDefault()
}

kayako.ready(() => $('.is-kayako-click-trigger').on('click', e => toggleMessenger(e)))