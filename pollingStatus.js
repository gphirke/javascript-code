const pollReportStatus = async function(pollingFn, response, interval=2000, waitMaxTime=(4*60*1000)/* default wait time 4 min*/) {
  let time = Date.now();
  const executePoll = async function(resolve, reject) {
    const result = await pollingFn(response);

    if (result.status.toLowerCase() == "done") {
      doYourAction(result);
      return resolve(result);
    } else if (result.status.toLowerCase() == "rejected" || result.status.toLowerCase() == "failed") {
      return reject("Failed to create file");
    } else if ((Date.now() - time) > waitMaxTime) {
      return reject("rejection Message");
    } else {
      setTimeout(executePoll, interval, resolve, reject);
    }
  };

  return new Promise(executePoll);
};
