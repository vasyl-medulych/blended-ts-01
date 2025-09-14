function sendDoneStatus(callback: (message: string) => void) {
  callback("done");
}

sendDoneStatus((message: string) => {
  console.log("Callback received", message);
});
