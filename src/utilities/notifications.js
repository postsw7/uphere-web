let isActive = false;

function getNotificationPermission() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
}

function showMessageNotification(text) {
  if (!isActive) {
    return;
  }

  const notification = new Notification('A new message from Uphere!', {
    icon: "https://maxcdn.icons8.com/Share/icon/Logos//facebook_messenger1600.png",
    body: `Your friend says: ${text}`,
  });
}

window.onfocus = () => {
  isActive = true;
};

window.onblur = () => {
  isActive = false;
};

export {
  getNotificationPermission,
  showMessageNotification
};
