const secondsToHms = seconds => {
  return new Date(seconds * 1000).toISOString().substring(11, 19);
};

export default secondsToHms;
