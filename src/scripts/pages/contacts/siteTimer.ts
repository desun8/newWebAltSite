export const siteTimer = () => {
  const createServerDate = (date: string) => {
    const t = date.split(/[- :]/).map((elm) => parseInt(elm));

    return new Date(...(t as [number, number, number, number, number]));
  };

  const timeElm = document.querySelector<HTMLTimeElement>(
    ".contacts:not(.contacts--info) .time time"
  )!;
  const timeValue = document.querySelector(".js-time")!;

  const serverDateString = timeElm.getAttribute("datetime")!;
  const serverDate = createServerDate(serverDateString);

  let fetched = new Date();

  const getDate = () => {
    const now = new Date();
    const offset = now.getTime() - fetched.getTime();

    serverDate.setTime(serverDate.getTime() + offset);
    fetched = now;

    return serverDate;
  };

  const updateElmsTime = (date: Date) => {
    const time = `${date.getHours()}:${date.getMinutes()}`;
    timeValue.textContent = time;
  };

  setInterval(() => {
    updateElmsTime(getDate());
  }, 1000);
};
