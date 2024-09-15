const getCurrentDateFormatted = (): { date: string; time: string } => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hours = now.getHours();
  const minutes = now.getMinutes();

  let baseTime: string;

  if (minutes < 45) {
    const previousHour = hours === 0 ? 23 : hours - 1;
    baseTime = `${String(previousHour).padStart(2, '0')}30`;
  } else {
    baseTime = `${String(hours).padStart(2, '0')}30`;
  }

  const date =
    hours === 0 && baseTime === '2330'
      ? (() => {
          const yesterday = new Date(now);
          yesterday.setDate(now.getDate() - 1);
          const yesterdayYear = yesterday.getFullYear();
          const yesterdayMonth = String(yesterday.getMonth() + 1).padStart(
            2,
            '0'
          );
          const yesterdayDay = String(yesterday.getDate()).padStart(2, '0');
          return `${yesterdayYear}${yesterdayMonth}${yesterdayDay}`;
        })()
      : `${year}${month}${day}`;

  return { date, time: baseTime };
};

export default getCurrentDateFormatted;
